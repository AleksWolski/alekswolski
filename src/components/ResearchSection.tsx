import React from 'react';
import { ArrowDown } from 'lucide-react';

const flowchartSteps = [
  'Persistently Exciting Input',
  'LTI CT System',
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
            <stop offset="5%" stopColor="#f59e0b">
              <animate attributeName="offset" values="-0.30;1.05" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="30%" stopColor="#f59e0b">
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
            <stop offset="5%" stopColor="#b45309">
              <animate attributeName="offset" values="-0.30;1.05" dur="3s" repeatCount="indefinite" calcMode="linear" begin="0s" />
            </stop>
            <stop offset="30%" stopColor="#b45309">
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

const DualSinusoid = () => {
  return (
    <div className="py-4 flex justify-center gap-0">
      <AnimatedSinusoid id="movingGradient2a" label="Inputs" />
      <AnimatedSinusoid id="movingGradient2b" color="#4ade80" flipped label="Outputs" labelPosition="right" />
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
