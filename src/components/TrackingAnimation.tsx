import React, { useEffect, useState } from 'react';

const TrackingAnimation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 1400, height: 900 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollHeight > 0 ? window.scrollY / scrollHeight : 0, 1);
      setScrollProgress(progress);
    };

    updateDimensions();
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Animation parameters
  const frequency = 8; // Number of wave cycles in full signal
  const initialAmplitude = 100; // Starting amplitude in pixels
  const dampingFactor = 3; // How quickly amplitude decays along the signal
  
  const { width, height } = dimensions;
  const centerX = width / 2;
  
  // The sinusoid is only drawn in the top 3/4 of the viewport
  const visibleHeight = height * 0.75;
  
  // How much of the total damped sinusoid has been "revealed" by scrolling
  // At scroll 0, we see the start (high amplitude)
  // At scroll 1, we've revealed the full signal (converged to zero amplitude)
  const revealProgress = scrollProgress;

  // Generate the damped sinusoidal path
  // This draws a sinusoid where amplitude decays based on vertical position
  // As you scroll, more of the damped signal is revealed
  const generateSinePath = () => {
    if (revealProgress < 0.01) return '';
    
    const points: string[] = [];
    const steps = 200;
    
    for (let i = 0; i <= steps; i++) {
      const t = i / steps; // 0 to 1 along the revealed portion
      
      // Map t to actual "signal time" based on how much is revealed
      const signalTime = t * revealProgress;
      
      // Y position on screen (0 at top, visibleHeight at bottom of visible area)
      const y = t * visibleHeight;
      
      // Amplitude decays exponentially with signal time
      // This creates the "baked in" damping effect
      const amplitude = initialAmplitude * Math.exp(-dampingFactor * signalTime);
      
      // Sinusoidal oscillation
      const phase = frequency * 2 * Math.PI * signalTime;
      const x = centerX + amplitude * Math.sin(phase);
      
      if (i === 0) {
        points.push(`M ${x} ${y}`);
      } else {
        points.push(`L ${x} ${y}`);
      }
    }
    
    return points.join(' ');
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {/* Reference line (setpoint) - static center line, only in visible area */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px"
        style={{
          height: visibleHeight,
          background: 'linear-gradient(to bottom, transparent 0%, hsl(210 60% 55% / 0.25) 5%, hsl(210 60% 55% / 0.25) 95%, transparent 100%)',
        }}
      />

      {/* Sinusoidal tracking line */}
      <svg 
        className="absolute inset-0"
        width={width}
        height={height}
        style={{ overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="sineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(210 60% 55%)" stopOpacity="0.9" />
            <stop offset="90%" stopColor="hsl(210 60% 55%)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(210 60% 55%)" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Mask to fade out at the bottom of the visible area */}
          <mask id="fadeMask">
            <rect x="0" y="0" width={width} height={visibleHeight * 0.9} fill="white" />
            <rect x="0" y={visibleHeight * 0.9} width={width} height={visibleHeight * 0.1} fill="url(#fadeGradient)" />
          </mask>
          <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </linearGradient>
        </defs>
        
        {/* Main sinusoidal wave - damped along its length */}
        <path
          d={generateSinePath()}
          fill="none"
          stroke="url(#sineGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          filter="url(#glow)"
        />
        
        {/* Small dot at the "current" position (end of revealed signal) */}
        {revealProgress > 0.01 && (
          <circle
            cx={centerX + initialAmplitude * Math.exp(-dampingFactor * revealProgress) * Math.sin(frequency * 2 * Math.PI * revealProgress)}
            cy={visibleHeight}
            r="4"
            fill="hsl(210 60% 55%)"
            filter="url(#glow)"
          />
        )}
      </svg>
      
      {/* Convergence indicator when signal has nearly settled */}
      {scrollProgress > 0.85 && (
        <div 
          className="absolute left-1/2 -translate-x-1/2 w-1 rounded-full"
          style={{
            top: visibleHeight * 0.7,
            height: visibleHeight * 0.25,
            background: 'linear-gradient(to bottom, transparent, hsl(210 60% 55% / 0.5), transparent)',
            boxShadow: '0 0 20px hsl(210 60% 55% / 0.4)',
            opacity: (scrollProgress - 0.85) * 6.67,
          }}
        />
      )}

      {/* Labels */}
      <div 
        className="absolute top-20 left-1/2 -translate-x-1/2 text-xs text-primary/50 font-display tracking-wider uppercase whitespace-nowrap"
        style={{ opacity: scrollProgress < 0.15 ? 1 : Math.max(0, 1 - (scrollProgress - 0.15) * 10) }}
      >
        Reference
      </div>
      
      <div 
        className="absolute left-1/2 -translate-x-1/2 text-xs text-primary font-display tracking-wider uppercase whitespace-nowrap"
        style={{ 
          top: visibleHeight + 20,
          opacity: scrollProgress > 0.8 ? (scrollProgress - 0.8) * 5 : 0 
        }}
      >
        Converged
      </div>

      {/* Time indicator */}
      <div 
        className="absolute right-8 text-xs text-muted-foreground font-mono"
        style={{ top: visibleHeight - 10 }}
      >
        t = {(revealProgress * 10).toFixed(1)}s
      </div>
    </div>
  );
};

export default TrackingAnimation;
