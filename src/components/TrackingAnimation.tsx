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

  // Damped oscillation parameters
  const frequency = 12; // Number of oscillations
  const initialAmplitude = 80; // Starting amplitude in pixels
  const dampingFactor = 4; // How quickly it converges
  
  // Calculate current oscillation: damped sinusoid
  // x(t) = A * e^(-ζt) * sin(ωt)
  const amplitude = initialAmplitude * Math.exp(-dampingFactor * scrollProgress);
  const oscillation = amplitude * Math.sin(frequency * Math.PI * scrollProgress);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {/* Reference line (setpoint) - static center line */}
      <div 
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, hsl(210 60% 55% / 0.3) 10%, hsl(210 60% 55% / 0.3) 90%, transparent 100%)',
        }}
      />
      
      {/* Tracking line (system response) - oscillating */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 transition-none"
        style={{
          left: `calc(50% + ${oscillation}px)`,
          background: `linear-gradient(to bottom, 
            transparent 0%, 
            hsl(210 60% 55% / ${0.2 + scrollProgress * 0.6}) 10%, 
            hsl(210 60% 55% / ${0.3 + scrollProgress * 0.5}) 50%,
            hsl(210 60% 55% / ${0.2 + scrollProgress * 0.6}) 90%, 
            transparent 100%
          )`,
          boxShadow: scrollProgress > 0.8 
            ? `0 0 ${20 - (scrollProgress - 0.8) * 50}px hsl(210 60% 55% / 0.5)` 
            : 'none',
        }}
      />
      
      {/* Convergence glow effect when lines meet */}
      {scrollProgress > 0.9 && (
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 rounded-full transition-all duration-300"
          style={{
            height: `${(scrollProgress - 0.9) * 1000}%`,
            maxHeight: '80%',
            background: 'linear-gradient(to bottom, transparent, hsl(210 60% 55% / 0.6), transparent)',
            boxShadow: '0 0 30px hsl(210 60% 55% / 0.4)',
            opacity: (scrollProgress - 0.9) * 10,
          }}
        />
      )}

      {/* Trail effect showing past oscillations */}
      <svg 
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient id="trailGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(210 60% 55%)" stopOpacity="0" />
            <stop offset="10%" stopColor="hsl(210 60% 55%)" stopOpacity="0.15" />
            <stop offset="90%" stopColor="hsl(210 60% 55%)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(210 60% 55%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Generate path showing the damped oscillation trajectory */}
        <path
          d={generateOscillationPath(scrollProgress, frequency, initialAmplitude, dampingFactor)}
          fill="none"
          stroke="url(#trailGradient)"
          strokeWidth="0.15"
          opacity={0.6}
        />
      </svg>

      {/* Labels */}
      <div 
        className="absolute top-24 left-1/2 -translate-x-1/2 text-xs text-primary/50 font-display tracking-wider uppercase whitespace-nowrap transition-opacity duration-500"
        style={{ opacity: scrollProgress < 0.1 ? 1 - scrollProgress * 10 : 0 }}
      >
        Reference
      </div>
      
      <div 
        className="absolute bottom-24 left-1/2 -translate-x-1/2 text-xs text-primary font-display tracking-wider uppercase whitespace-nowrap transition-opacity duration-500"
        style={{ opacity: scrollProgress > 0.9 ? (scrollProgress - 0.9) * 10 : 0 }}
      >
        Converged
      </div>
    </div>
  );
};

// Generate SVG path for the oscillation trail
function generateOscillationPath(
  currentProgress: number,
  frequency: number,
  initialAmplitude: number,
  dampingFactor: number
): string {
  const points: string[] = [];
  const steps = 200;
  
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * currentProgress;
    const amp = initialAmplitude * Math.exp(-dampingFactor * t);
    const x = 50 + (amp * Math.sin(frequency * Math.PI * t)) / 2; // Normalize to viewBox
    const y = 5 + (t / currentProgress) * 90; // 5% to 95% of height
    
    if (i === 0) {
      points.push(`M ${x} ${y}`);
    } else {
      points.push(`L ${x} ${y}`);
    }
  }
  
  return points.join(' ');
}

export default TrackingAnimation;
