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
  const frequency = 6; // Number of wave cycles visible
  const initialAmplitude = 80; // Starting amplitude in pixels
  const dampingFactor = 4; // How quickly it converges
  const timeOffset = scrollProgress * 6 * Math.PI; // Creates the "moving in time" effect

  const { width, height } = dimensions;
  const centerX = width / 2;

  // Generate the damped sinusoidal path
  const generateSinePath = () => {
    const points: string[] = [];
    const steps = 200;
    
    for (let i = 0; i <= steps; i++) {
      const t = i / steps; // 0 to 1 along the height
      const y = t * height;
      
      // Damping: amplitude decreases as scroll progresses
      // The wave "settles" over time as you scroll
      const damping = Math.exp(-dampingFactor * scrollProgress);
      const amplitude = initialAmplitude * damping;
      
      // Phase includes scroll-based time offset for "moving wave" effect
      const phase = frequency * 2 * Math.PI * t + timeOffset;
      const x = centerX + amplitude * Math.sin(phase);
      
      if (i === 0) {
        points.push(`M ${x} ${y}`);
      } else {
        points.push(`L ${x} ${y}`);
      }
    }
    
    return points.join(' ');
  };

  // Generate a slightly offset trail
  const generateTrailPath = (phaseShift: number) => {
    const points: string[] = [];
    const steps = 200;
    
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const y = t * height;
      
      const damping = Math.exp(-dampingFactor * scrollProgress);
      const amplitude = initialAmplitude * damping;
      const phase = frequency * 2 * Math.PI * t + timeOffset + phaseShift;
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
      {/* Reference line (setpoint) - static center line */}
      <div 
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, hsl(210 60% 55% / 0.3) 10%, hsl(210 60% 55% / 0.3) 90%, transparent 100%)',
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
            <stop offset="0%" stopColor="hsl(210 60% 55%)" stopOpacity="0" />
            <stop offset="10%" stopColor="hsl(210 60% 55%)" stopOpacity="0.8" />
            <stop offset="50%" stopColor="hsl(210 60% 55%)" stopOpacity="1" />
            <stop offset="90%" stopColor="hsl(210 60% 55%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(210 60% 55%)" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Faint trail showing motion */}
        <path
          d={generateTrailPath(-0.5)}
          fill="none"
          stroke="hsl(210 60% 55%)"
          strokeWidth="1"
          opacity="0.1"
        />
        
        <path
          d={generateTrailPath(-0.25)}
          fill="none"
          stroke="hsl(210 60% 55%)"
          strokeWidth="1"
          opacity="0.2"
        />
        
        {/* Main sinusoidal wave */}
        <path
          d={generateSinePath()}
          fill="none"
          stroke="url(#sineGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          filter="url(#glow)"
        />
      </svg>
      
      {/* Convergence glow effect when wave has nearly settled */}
      {scrollProgress > 0.8 && (
        <div 
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 rounded-full"
          style={{
            background: 'linear-gradient(to bottom, transparent 5%, hsl(210 60% 55% / 0.5) 50%, transparent 95%)',
            boxShadow: '0 0 30px hsl(210 60% 55% / 0.4)',
            opacity: (scrollProgress - 0.8) * 5,
          }}
        />
      )}

      {/* Labels */}
      <div 
        className="absolute top-28 left-1/2 -translate-x-1/2 text-xs text-primary/50 font-display tracking-wider uppercase whitespace-nowrap"
        style={{ opacity: scrollProgress < 0.1 ? 1 : Math.max(0, 1 - (scrollProgress - 0.1) * 5) }}
      >
        Reference Signal
      </div>
      
      <div 
        className="absolute bottom-28 left-1/2 -translate-x-1/2 text-xs text-primary font-display tracking-wider uppercase whitespace-nowrap"
        style={{ opacity: scrollProgress > 0.85 ? (scrollProgress - 0.85) * 6.67 : 0 }}
      >
        Tracking Achieved
      </div>
    </div>
  );
};

export default TrackingAnimation;
