import React, { useEffect, useState } from 'react';

const TrackingAnimation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollHeight > 0 ? window.scrollY / scrollHeight : 0, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation parameters
  const frequency = 8; // Number of wave cycles visible
  const initialAmplitude = 60; // Starting amplitude in pixels
  const dampingFactor = 3.5; // How quickly it converges
  const timeOffset = scrollProgress * 4 * Math.PI; // Creates the "moving in time" effect

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {/* Reference line (setpoint) - static center line */}
      <div 
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, hsl(210 60% 55% / 0.25) 10%, hsl(210 60% 55% / 0.25) 90%, transparent 100%)',
        }}
      />

      {/* Sinusoidal tracking line */}
      <svg 
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="sineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(210 60% 55%)" stopOpacity="0" />
            <stop offset="15%" stopColor="hsl(210 60% 55%)" stopOpacity="0.7" />
            <stop offset="50%" stopColor="hsl(210 60% 55%)" stopOpacity="0.9" />
            <stop offset="85%" stopColor="hsl(210 60% 55%)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="hsl(210 60% 55%)" stopOpacity="0" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Main sinusoidal wave that dampens as you scroll */}
        <path
          d={generateDampedSinePath(scrollProgress, frequency, initialAmplitude, dampingFactor, timeOffset)}
          fill="none"
          stroke="url(#sineGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#glow)"
        />
        
        {/* Fainter trail showing recent history */}
        <path
          d={generateDampedSinePath(scrollProgress, frequency, initialAmplitude, dampingFactor, timeOffset - 0.3)}
          fill="none"
          stroke="hsl(210 60% 55%)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.15"
        />
      </svg>
      
      {/* Convergence glow effect when lines nearly meet */}
      {scrollProgress > 0.85 && (
        <div 
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 transition-all duration-500"
          style={{
            background: 'linear-gradient(to bottom, transparent 10%, hsl(210 60% 55% / 0.4) 50%, transparent 90%)',
            boxShadow: '0 0 20px hsl(210 60% 55% / 0.3)',
            opacity: (scrollProgress - 0.85) * 6.67,
          }}
        />
      )}

      {/* Labels */}
      <div 
        className="absolute top-28 left-1/2 -translate-x-1/2 text-xs text-primary/40 font-display tracking-wider uppercase whitespace-nowrap transition-opacity duration-500"
        style={{ opacity: scrollProgress < 0.15 ? 1 - scrollProgress * 6.67 : 0 }}
      >
        Reference
      </div>
      
      <div 
        className="absolute bottom-28 left-1/2 -translate-x-1/2 text-xs text-primary font-display tracking-wider uppercase whitespace-nowrap transition-opacity duration-500"
        style={{ opacity: scrollProgress > 0.85 ? (scrollProgress - 0.85) * 6.67 : 0 }}
      >
        Tracking Achieved
      </div>
    </div>
  );
};

// Generate SVG path for a damped sinusoidal wave
function generateDampedSinePath(
  scrollProgress: number,
  frequency: number,
  initialAmplitude: number,
  dampingFactor: number,
  timeOffset: number
): string {
  const points: [number, number][] = [];
  const steps = 150;
  const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1400;
  const centerX = viewportWidth / 2;
  
  for (let i = 0; i <= steps; i++) {
    const t = i / steps; // 0 to 1 along the height
    
    // Damping increases as we go down the page AND as scroll progresses
    // This creates the effect of the wave "settling" over time
    const damping = Math.exp(-dampingFactor * scrollProgress * (0.5 + t * 0.5));
    const amplitude = initialAmplitude * damping;
    
    // Phase includes scroll-based time offset for "moving wave" effect
    const phase = frequency * Math.PI * t + timeOffset;
    
    const x = centerX + amplitude * Math.sin(phase);
    const y = t * 100; // Percentage for viewBox
    
    points.push([x, y]);
  }
  
  // Create smooth curve using the points
  if (points.length < 2) return '';
  
  let path = `M ${points[0][0]} ${points[0][1]}%`;
  
  for (let i = 1; i < points.length; i++) {
    path += ` L ${points[i][0]} ${points[i][1]}%`;
  }
  
  return path;
}

export default TrackingAnimation;
