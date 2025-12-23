import React from 'react';

const DynamicSystemsBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />
      
      {/* Elegant geometric accents */}
      <div className="absolute top-1/4 right-0 w-px h-48 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-1/3 left-0 w-px h-32 bg-gradient-to-b from-transparent via-primary/15 to-transparent" />
      
      {/* Subtle floating shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-primary/5 animate-subtle-float opacity-60" />
      <div className="absolute bottom-32 left-16 w-32 h-32 rounded-full border border-border/30 animate-subtle-float animation-delay-400" />
      
      {/* Refined curve representing continuous systems */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.08]" 
        viewBox="0 0 1200 800" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(38 65% 50%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(38 65% 50%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(38 65% 50%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Elegant sine wave */}
        <path
          d="M0,400 Q150,320 300,400 T600,400 T900,400 T1200,400"
          fill="none"
          stroke="url(#curveGradient)"
          strokeWidth="1.5"
        />
        <path
          d="M0,420 Q200,340 400,420 T800,420 T1200,420"
          fill="none"
          stroke="url(#curveGradient)"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>
    </div>
  );
};

export default DynamicSystemsBackground;
