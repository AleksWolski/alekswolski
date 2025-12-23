import React from 'react';
import { ArrowDown } from 'lucide-react';

const flowchartSteps = [
  'Persistently Exciting Input',
  'Linear Time-Invariant Continuous-Time System',
  'Sufficiently Informative Input-Output Trajectory',
  'Data Matrix',
  'Characterisation of all Input-Output Trajectories of the System',
];

const AnimatedSinusoid = ({ 
  id = "movingGradient", 
  color = "#fcd34d",
  flipped = false,
  label,
  labelPosition = "left"
}: { 
  id?: string; 
  color?: string;
  flipped?: boolean;
  label?: string;
  labelPosition?: "left" | "right";
}) => {
  return (
    <div className="py-4 flex flex-col items-center">
      <svg 
        width={label ? "180" : "120"} 
        height="80" 
        viewBox={label ? "0 0 180 80" : "0 0 120 80"} 
        className="overflow-visible"
      >
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent">
              <animate attributeName="offset" values="-0.35;1" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="5%" stopColor={color}>
              <animate attributeName="offset" values="-0.30;1.05" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="30%" stopColor={color}>
              <animate attributeName="offset" values="-0.05;1.30" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="35%" stopColor="transparent">
              <animate attributeName="offset" values="0;1.35" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
          </linearGradient>
        </defs>
        
        {/* Label text with clip animation */}
        {label && (
          <g>
            <defs>
              <clipPath id={`${id}-clip`}>
                <rect x="-50" y="0" width="250" height="0">
                  <animate 
                    attributeName="y" 
                    values="-35;80" 
                    dur="3s" 
                    repeatCount="indefinite" 
                    calcMode="linear"
                    begin="0s"
                  />
                  <animate 
                    attributeName="height" 
                    values="35;35" 
                    dur="3s" 
                    repeatCount="indefinite" 
                    calcMode="linear"
                    begin="0s"
                  />
                </rect>
              </clipPath>
            </defs>
            <text 
              x={labelPosition === "left" ? "35" : "145"} 
              y="45" 
              fill={color}
              fontSize="14"
              fontWeight="500"
              textAnchor={labelPosition === "left" ? "end" : "start"}
              clipPath={`url(#${id}-clip)`}
            >
              {label}
            </text>
          </g>
        )}
        
        {/* Static sinusoidal path */}
        <g style={flipped ? { transform: 'scaleX(-1)', transformOrigin: 'center' } : undefined}>
          <path
            d={label 
              ? "M90 0 C90 5, 90 8, 90 10 C65 15, 65 25, 90 30 C115 35, 115 45, 90 50 C65 55, 65 65, 90 70 C90 72, 90 75, 90 80"
              : "M60 0 C60 5, 60 8, 60 10 C35 15, 35 25, 60 30 C85 35, 85 45, 60 50 C35 55, 35 65, 60 70 C60 72, 60 75, 60 80"
            }
            stroke={`url(#${id})`}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};

const TripleSinusoid = () => {
  return (
    <div className="py-4 flex flex-col items-center">
      <svg width="180" height="80" viewBox="0 0 180 80" className="overflow-visible">
        <defs>
          <linearGradient id="movingGradient0a" x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent">
              <animate attributeName="offset" values="-0.35;1" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="5%" stopColor="#fcd34d">
              <animate attributeName="offset" values="-0.30;1.05" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="30%" stopColor="#fcd34d">
              <animate attributeName="offset" values="-0.05;1.30" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="35%" stopColor="transparent">
              <animate attributeName="offset" values="0;1.35" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
          </linearGradient>
          <linearGradient id="movingGradient0b" x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent">
              <animate attributeName="offset" values="-0.35;1" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="5%" stopColor="#e0b82e">
              <animate attributeName="offset" values="-0.30;1.05" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="30%" stopColor="#e0b82e">
              <animate attributeName="offset" values="-0.05;1.30" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="35%" stopColor="transparent">
              <animate attributeName="offset" values="0;1.35" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
          </linearGradient>
          <linearGradient id="movingGradient0c" x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent">
              <animate attributeName="offset" values="-0.35;1" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="5%" stopColor="#c49e1a">
              <animate attributeName="offset" values="-0.30;1.05" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="30%" stopColor="#c49e1a">
              <animate attributeName="offset" values="-0.05;1.30" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="35%" stopColor="transparent">
              <animate attributeName="offset" values="0;1.35" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
          </linearGradient>
          <clipPath id="tripleClip">
            <rect x="-50" y="0" width="250" height="0">
              <animate 
                attributeName="y" 
                values="-35;80" 
                dur="3s" 
                repeatCount="indefinite" 
                calcMode="linear"
                begin="0s"
              />
              <animate 
                attributeName="height" 
                values="35;35" 
                dur="3s" 
                repeatCount="indefinite" 
                calcMode="linear"
                begin="0s"
              />
            </rect>
          </clipPath>
        </defs>
        
        {/* Label */}
        <text 
          x="35" 
          y="45" 
          fill="#fcd34d"
          fontSize="14"
          fontWeight="500"
          textAnchor="end"
          clipPath="url(#tripleClip)"
        >
          Inputs
        </text>
        
        {/* Three bundled sinusoidal paths */}
        <path
          d="M85 0 C85 5, 85 8, 85 10 C60 15, 60 25, 85 30 C110 35, 110 45, 85 50 C60 55, 60 65, 85 70 C85 72, 85 75, 85 80"
          stroke="url(#movingGradient0a)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M90 0 C90 5, 90 8, 90 10 C65 15, 65 25, 90 30 C115 35, 115 45, 90 50 C65 55, 65 65, 90 70 C90 72, 90 75, 90 80"
          stroke="url(#movingGradient0b)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M95 0 C95 5, 95 8, 95 10 C70 15, 70 25, 95 30 C120 35, 120 45, 95 50 C70 55, 70 65, 95 70 C95 72, 95 75, 95 80"
          stroke="url(#movingGradient0c)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

const DualSinusoid = ({ showLabels = true }: { showLabels?: boolean }) => {
  return (
    <div className="py-4 flex justify-center">
      <svg width="200" height="80" viewBox="0 0 200 80" className="overflow-visible max-w-full">
        <defs>
          {/* Yellow input gradients */}
          <linearGradient id="movingGradient2a1" x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent">
              <animate attributeName="offset" values="-0.35;1" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="5%" stopColor="#fcd34d">
              <animate attributeName="offset" values="-0.30;1.05" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="30%" stopColor="#fcd34d">
              <animate attributeName="offset" values="-0.05;1.30" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="35%" stopColor="transparent">
              <animate attributeName="offset" values="0;1.35" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
          </linearGradient>
          <linearGradient id="movingGradient2a2" x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent">
              <animate attributeName="offset" values="-0.35;1" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="5%" stopColor="#e0b82e">
              <animate attributeName="offset" values="-0.30;1.05" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="30%" stopColor="#e0b82e">
              <animate attributeName="offset" values="-0.05;1.30" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="35%" stopColor="transparent">
              <animate attributeName="offset" values="0;1.35" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
          </linearGradient>
          <linearGradient id="movingGradient2a3" x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent">
              <animate attributeName="offset" values="-0.35;1" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="5%" stopColor="#c49e1a">
              <animate attributeName="offset" values="-0.30;1.05" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="30%" stopColor="#c49e1a">
              <animate attributeName="offset" values="-0.05;1.30" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="35%" stopColor="transparent">
              <animate attributeName="offset" values="0;1.35" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
          </linearGradient>
          
          {/* Green output gradients */}
          <linearGradient id="movingGradient2b1" x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent">
              <animate attributeName="offset" values="-0.35;1" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="5%" stopColor="#4ade80">
              <animate attributeName="offset" values="-0.30;1.05" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="30%" stopColor="#4ade80">
              <animate attributeName="offset" values="-0.05;1.30" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="35%" stopColor="transparent">
              <animate attributeName="offset" values="0;1.35" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
          </linearGradient>
          <linearGradient id="movingGradient2b2" x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent">
              <animate attributeName="offset" values="-0.35;1" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="5%" stopColor="#3bcc70">
              <animate attributeName="offset" values="-0.30;1.05" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="30%" stopColor="#3bcc70">
              <animate attributeName="offset" values="-0.05;1.30" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="35%" stopColor="transparent">
              <animate attributeName="offset" values="0;1.35" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
          </linearGradient>
          <linearGradient id="movingGradient2b3" x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent">
              <animate attributeName="offset" values="-0.35;1" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="5%" stopColor="#2eb865">
              <animate attributeName="offset" values="-0.30;1.05" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="30%" stopColor="#2eb865">
              <animate attributeName="offset" values="-0.05;1.30" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="35%" stopColor="transparent">
              <animate attributeName="offset" values="0;1.35" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
          </linearGradient>
          <linearGradient id="movingGradient2b4" x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent">
              <animate attributeName="offset" values="-0.35;1" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="5%" stopColor="#22a555">
              <animate attributeName="offset" values="-0.30;1.05" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="30%" stopColor="#22a555">
              <animate attributeName="offset" values="-0.05;1.30" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="35%" stopColor="transparent">
              <animate attributeName="offset" values="0;1.35" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
          </linearGradient>
          <linearGradient id="movingGradient2b5" x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent">
              <animate attributeName="offset" values="-0.35;1" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="5%" stopColor="#1a9245">
              <animate attributeName="offset" values="-0.30;1.05" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="30%" stopColor="#1a9245">
              <animate attributeName="offset" values="-0.05;1.30" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="35%" stopColor="transparent">
              <animate attributeName="offset" values="0;1.35" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
          </linearGradient>
          
          {/* Clip paths for labels */}
          <clipPath id="dualClipLabels">
            <rect x="-50" y="0" width="300" height="0">
              <animate attributeName="y" values="-35;80" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
              <animate attributeName="height" values="35;35" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </rect>
          </clipPath>
        </defs>
        
        {/* Labels */}
        {showLabels && (
          <>
            <text x="25" y="45" fill="#fcd34d" fontSize="14" fontWeight="500" textAnchor="end" clipPath="url(#dualClipLabels)">
              Inputs
            </text>
            <text x="175" y="45" fill="#4ade80" fontSize="14" fontWeight="500" textAnchor="start" clipPath="url(#dualClipLabels)">
              Outputs
            </text>
          </>
        )}
        
        {/* Yellow input cables (left side) */}
        <path d="M45 0 C45 5, 45 8, 45 10 C20 15, 20 25, 45 30 C70 35, 70 45, 45 50 C20 55, 20 65, 45 70 C45 72, 45 75, 45 80" stroke="url(#movingGradient2a1)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M50 0 C50 5, 50 8, 50 10 C25 15, 25 25, 50 30 C75 35, 75 45, 50 50 C25 55, 25 65, 50 70 C50 72, 50 75, 50 80" stroke="url(#movingGradient2a2)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M55 0 C55 5, 55 8, 55 10 C30 15, 30 25, 55 30 C80 35, 80 45, 55 50 C30 55, 30 65, 55 70 C55 72, 55 75, 55 80" stroke="url(#movingGradient2a3)" strokeWidth="3" fill="none" strokeLinecap="round" />
        
        {/* Green output cables (right side, flipped) */}
        <g style={{ transform: 'scaleX(-1)', transformOrigin: '100px 40px' }}>
          <path d="M53 0 C53 5, 53 8, 53 10 C28 15, 28 25, 53 30 C78 35, 78 45, 53 50 C28 55, 28 65, 53 70 C53 72, 53 75, 53 80" stroke="url(#movingGradient2b1)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M57 0 C57 5, 57 8, 57 10 C32 15, 32 25, 57 30 C82 35, 82 45, 57 50 C32 55, 32 65, 57 70 C57 72, 57 75, 57 80" stroke="url(#movingGradient2b2)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M61 0 C61 5, 61 8, 61 10 C36 15, 36 25, 61 30 C86 35, 86 45, 61 50 C36 55, 36 65, 61 70 C61 72, 61 75, 61 80" stroke="url(#movingGradient2b3)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M65 0 C65 5, 65 8, 65 10 C40 15, 40 25, 65 30 C90 35, 90 45, 65 50 C40 55, 40 65, 65 70 C65 72, 65 75, 65 80" stroke="url(#movingGradient2b4)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M69 0 C69 5, 69 8, 69 10 C44 15, 44 25, 69 30 C94 35, 94 45, 69 50 C44 55, 44 65, 69 70 C69 72, 69 75, 69 80" stroke="url(#movingGradient2b5)" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};

const MatrixDisplay = () => {
  return (
    <div className="py-4 flex flex-col items-center">
      {/* Cable bundles above matrix - cropped to half height */}
      <div className="h-[50px] overflow-hidden -mt-4">
        <DualSinusoid showLabels={false} />
      </div>
      
      {/* 3x3 Matrix with full-height brackets */}
      <div className="flex justify-center items-center">
        <svg width="10" height="54" viewBox="0 0 10 54" className="text-primary flex-shrink-0">
          <path d="M8 2 L3 2 L3 52 L8 52" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="grid grid-cols-3 gap-x-3 gap-y-1 px-1">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="text-primary text-center text-base leading-4 w-4 h-4 flex items-center justify-center">•</span>
          ))}
        </div>
        <svg width="10" height="54" viewBox="0 0 10 54" className="text-primary flex-shrink-0">
          <path d="M2 2 L7 2 L7 52 L2 52" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      
      {/* Cable bundles below matrix - cropped to half height */}
      <div className="h-[50px] overflow-hidden -mb-4">
        <DualSinusoid showLabels={false} />
      </div>
    </div>
  );
};

const ResearchSection = () => {
  return (
    <section id="research" className="py-28 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-primary font-display font-medium mb-4 tracking-widest uppercase text-xs">
            Research Focus
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl mb-6">
            Data-Driven Methods for <span className="text-gradient">Continuous-Time Systems</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My research bridges the gap between classical control theory and modern 
            data-driven approaches, enabling direct analysis and design from experimental data.
          </p>
        </div>

        {/* Research block */}
        <div className="mb-20">
          <div className="group p-10 md:p-14 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300">
            <h3 className="font-display font-medium text-2xl md:text-3xl mb-5">
              Data-Driven Simulation
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-12">
              Developing methods to simulate system behavior directly from measured data without explicit model identification.
            </p>

            {/* Flowchart */}
            <div className="flex flex-col items-center">
              {flowchartSteps.map((step, index) => (
                <React.Fragment key={step}>
                  <div className="w-full max-w-md px-6 py-4 bg-primary/10 border border-primary/20 rounded-lg text-center">
                    <span className="text-foreground font-medium text-sm md:text-base">
                      {step}
                    </span>
                  </div>
                  {index < flowchartSteps.length - 1 && (
                    index === 0 ? (
                      <TripleSinusoid />
                    ) : index === 1 ? (
                      <DualSinusoid />
                    ) : index === 2 ? (
                      <MatrixDisplay />
                    ) : (
                      <div className="py-6">
                        <ArrowDown className="text-primary" size={28} />
                      </div>
                    )
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
