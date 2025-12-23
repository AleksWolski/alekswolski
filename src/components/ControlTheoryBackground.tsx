import React from 'react';

const ControlTheoryBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />
      
      {/* Control Theory SVG Animations */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1400 900" 
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(210 60% 55%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(210 60% 55%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(210 60% 55%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="vertGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(210 60% 55%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(210 60% 55%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(210 60% 55%)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Step Response - Top Left */}
        <g transform="translate(50, 120)" opacity="0.15">
          {/* Axes */}
          <line x1="0" y1="100" x2="180" y2="100" stroke="hsl(210 60% 55%)" strokeWidth="1" />
          <line x1="0" y1="0" x2="0" y2="100" stroke="hsl(210 60% 55%)" strokeWidth="1" />
          {/* Step response curve with overshoot */}
          <path
            d="M0,100 L20,100 L20,30 Q40,0 60,20 Q80,40 100,25 Q120,15 140,22 L180,22"
            fill="none"
            stroke="hsl(210 60% 55%)"
            strokeWidth="1.5"
            className="animate-trace-path"
          />
          {/* Setpoint line */}
          <line x1="20" y1="22" x2="180" y2="22" stroke="hsl(210 60% 55%)" strokeWidth="0.5" strokeDasharray="4,4" opacity="0.5" />
        </g>

        {/* Bode Plot - Top Right */}
        <g transform="translate(1100, 80)" opacity="0.12">
          {/* Magnitude plot */}
          <line x1="0" y1="60" x2="200" y2="60" stroke="hsl(210 60% 55%)" strokeWidth="1" />
          <line x1="0" y1="0" x2="0" y2="120" stroke="hsl(210 60% 55%)" strokeWidth="1" />
          <path
            d="M0,20 L40,20 L80,25 L120,50 L160,90 L200,110"
            fill="none"
            stroke="hsl(210 60% 55%)"
            strokeWidth="1.5"
            className="animate-trace-path animation-delay-400"
          />
          {/* Phase plot below */}
          <path
            d="M0,70 L40,70 L80,75 L120,90 L160,105 L200,115"
            fill="none"
            stroke="hsl(210 50% 50%)"
            strokeWidth="1"
            strokeDasharray="3,3"
            className="animate-trace-path animation-delay-600"
          />
        </g>

        {/* State Space Trajectory - Center Left */}
        <g transform="translate(80, 450)" opacity="0.1">
          {/* Phase plane axes */}
          <line x1="0" y1="75" x2="150" y2="75" stroke="hsl(210 60% 55%)" strokeWidth="1" />
          <line x1="75" y1="0" x2="75" y2="150" stroke="hsl(210 60% 55%)" strokeWidth="1" />
          {/* Spiral trajectory toward origin (stable focus) */}
          <path
            d="M130,30 Q140,60 120,80 Q100,100 80,90 Q60,80 70,70 Q80,60 75,75"
            fill="none"
            stroke="hsl(210 60% 55%)"
            strokeWidth="1.5"
            className="animate-trace-path animation-delay-800"
          />
          {/* Equilibrium point */}
          <circle cx="75" cy="75" r="3" fill="hsl(210 60% 55%)" className="animate-blink-dot" />
        </g>

        {/* Pole-Zero Map - Right Side */}
        <g transform="translate(1150, 500)" opacity="0.12">
          {/* Complex plane */}
          <line x1="0" y1="75" x2="150" y2="75" stroke="hsl(210 60% 55%)" strokeWidth="1" />
          <line x1="75" y1="0" x2="75" y2="150" stroke="hsl(210 60% 55%)" strokeWidth="1" />
          {/* Poles (X marks) */}
          <g transform="translate(50, 50)">
            <line x1="-5" y1="-5" x2="5" y2="5" stroke="hsl(210 60% 55%)" strokeWidth="2" />
            <line x1="5" y1="-5" x2="-5" y2="5" stroke="hsl(210 60% 55%)" strokeWidth="2" />
          </g>
          <g transform="translate(50, 100)">
            <line x1="-5" y1="-5" x2="5" y2="5" stroke="hsl(210 60% 55%)" strokeWidth="2" />
            <line x1="5" y1="-5" x2="-5" y2="5" stroke="hsl(210 60% 55%)" strokeWidth="2" />
          </g>
          {/* Zero (circle) */}
          <circle cx="100" cy="75" r="6" fill="none" stroke="hsl(210 60% 55%)" strokeWidth="2" />
          {/* Imaginary axis label */}
          <text x="80" y="10" fill="hsl(210 60% 55%)" fontSize="10" fontFamily="monospace">jω</text>
          <text x="140" y="80" fill="hsl(210 60% 55%)" fontSize="10" fontFamily="monospace">σ</text>
        </g>

        {/* Sinusoidal Signals - Bottom */}
        <g transform="translate(300, 750)" opacity="0.08">
          {/* Input sine wave */}
          <path
            d="M0,0 Q50,-40 100,0 T200,0 T300,0 T400,0 T500,0 T600,0 T700,0 T800,0"
            fill="none"
            stroke="hsl(210 60% 55%)"
            strokeWidth="2"
            className="animate-pulse-soft"
          />
          {/* Output sine wave (phase shifted, attenuated) */}
          <path
            d="M30,30 Q80,5 130,30 T230,30 T330,30 T430,30 T530,30 T630,30 T730,30"
            fill="none"
            stroke="hsl(210 50% 50%)"
            strokeWidth="1.5"
            className="animate-pulse-soft animation-delay-400"
          />
        </g>

        {/* Nyquist-style curve - Center */}
        <g transform="translate(650, 400)" opacity="0.06">
          <circle cx="0" cy="0" r="80" fill="none" stroke="hsl(210 60% 55%)" strokeWidth="1" strokeDasharray="4,4" />
          <path
            d="M100,0 Q90,-60 40,-80 Q-20,-90 -60,-40 Q-80,20 -40,60 Q20,90 80,40"
            fill="none"
            stroke="hsl(210 60% 55%)"
            strokeWidth="1.5"
            className="animate-trace-path animation-delay-1000"
          />
          {/* Critical point */}
          <circle cx="-80" cy="0" r="4" fill="hsl(210 60% 55%)" className="animate-blink-dot animation-delay-600" />
        </g>

        {/* Block diagram connections - scattered */}
        <g opacity="0.05">
          {/* Horizontal flow lines */}
          <line x1="200" y1="300" x2="400" y2="300" stroke="url(#lineGradient)" strokeWidth="1" />
          <line x1="500" y1="300" x2="700" y2="300" stroke="url(#lineGradient)" strokeWidth="1" />
          <line x1="800" y1="600" x2="1000" y2="600" stroke="url(#lineGradient)" strokeWidth="1" />
          
          {/* Summing junction */}
          <circle cx="450" cy="300" r="15" fill="none" stroke="hsl(210 60% 55%)" strokeWidth="1" />
          <line x1="445" y1="300" x2="455" y2="300" stroke="hsl(210 60% 55%)" strokeWidth="1" />
          <line x1="450" y1="295" x2="450" y2="305" stroke="hsl(210 60% 55%)" strokeWidth="1" />
        </g>

        {/* Floating data points */}
        <circle cx="300" cy="200" r="2" fill="hsl(210 60% 55%)" className="animate-blink-dot" opacity="0.3" />
        <circle cx="900" cy="350" r="2" fill="hsl(210 60% 55%)" className="animate-blink-dot animation-delay-400" opacity="0.3" />
        <circle cx="600" cy="650" r="2" fill="hsl(210 60% 55%)" className="animate-blink-dot animation-delay-800" opacity="0.3" />
        <circle cx="1100" cy="250" r="2" fill="hsl(210 60% 55%)" className="animate-blink-dot animation-delay-1000" opacity="0.3" />
      </svg>

      {/* Subtle geometric accents */}
      <div className="absolute top-1/4 right-0 w-px h-64 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      <div className="absolute top-1/2 left-0 w-px h-48 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
    </div>
  );
};

export default ControlTheoryBackground;
