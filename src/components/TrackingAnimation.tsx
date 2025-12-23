import React, { useEffect, useState } from "react";

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

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // Animation parameters
  const frequency = 12; // Number of wave cycles in full signal
  const initialAmplitude = 80; // Starting amplitude in pixels
  const dampingFactor = 10; // Higher = converges faster
  const initialReveal = 0.15; // Start with 15% already revealed

  const { width, height } = dimensions;
  const centerX = width / 2;

  // The sinusoid is only drawn in the top 3/4 of the viewport
  const visibleHeight = height * 0.75;

  // How much of the total damped sinusoid has been "revealed" by scrolling
  // Start with initial reveal so animation is visible at top
  const revealProgress = initialReveal + scrollProgress * (1 - initialReveal);

  // Generate the damped sinusoidal path
  const generateSinePath = () => {
    if (revealProgress < 0.001) return "";

    const points: string[] = [];
    const steps = 250;

    for (let i = 0; i <= steps; i++) {
      const t = i / steps; // 0 to 1 along the revealed portion

      // Map t to actual "signal time" based on how much is revealed
      const signalTime = t * revealProgress;

      // Y position on screen
      const y = t * visibleHeight;

      // Amplitude decays exponentially - reaches near-zero around 50-60% scroll
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

    return points.join(" ");
  };

  // Calculate current amplitude for the dot position
  const currentAmplitude = initialAmplitude * Math.exp(-dampingFactor * revealProgress);
  const currentX = centerX + currentAmplitude * Math.sin(frequency * 2 * Math.PI * revealProgress);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Reference line (setpoint) - static center line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px"
        style={{
          height: visibleHeight,
          background:
            "linear-gradient(to bottom, transparent 0%, hsl(210 60% 55% / 0.12) 5%, hsl(210 60% 55% / 0.12) 95%, transparent 100%)",
        }}
      />

      {/* Sinusoidal tracking line */}
      <svg className="absolute inset-0" width={width} height={height} style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id="sineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(210 60% 55%)" stopOpacity="0.35" />
            <stop offset="90%" stopColor="hsl(210 60% 55%)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="hsl(210 60% 55%)" stopOpacity="0.15" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main sinusoidal wave - damped along its length */}
        <path
          d={generateSinePath()}
          fill="none"
          stroke="url(#sineGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        {/* Small dot at the "current" position */}
        {revealProgress > 0.01 && (
          <circle cx={currentX} cy={visibleHeight} r="3" fill="hsl(210 60% 55%)" opacity="0.4" />
        )}
      </svg>
    </div>
  );
};

export default TrackingAnimation;
