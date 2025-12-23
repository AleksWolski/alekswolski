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
  flipped = false 
}: { 
  id?: string; 
  color?: string;
  flipped?: boolean;
}) => {
  return (
    <div className="py-4 flex flex-col items-center">
      <svg 
        width="120" 
        height="80" 
        viewBox="0 0 120 80" 
        className="overflow-visible"
        style={flipped ? { transform: 'scaleX(-1)' } : undefined}
      >
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent">
              <animate attributeName="offset" values="-0.35;1" dur="2.1s" repeatCount="indefinite" calcMode="linear" />
            </stop>
            <stop offset="5%" stopColor={color}>
              <animate attributeName="offset" values="-0.30;1.05" dur="2.1s" repeatCount="indefinite" calcMode="linear" />
            </stop>
            <stop offset="30%" stopColor={color}>
              <animate attributeName="offset" values="-0.05;1.30" dur="2.1s" repeatCount="indefinite" calcMode="linear" />
            </stop>
            <stop offset="35%" stopColor="transparent">
              <animate attributeName="offset" values="0;1.35" dur="2.1s" repeatCount="indefinite" calcMode="linear" />
            </stop>
          </linearGradient>
        </defs>
        {/* Static sinusoidal path */}
        <path
          d="M60 0 C60 5, 60 8, 60 10 C35 15, 35 25, 60 30 C85 35, 85 45, 60 50 C35 55, 35 65, 60 70 C60 72, 60 75, 60 80"
          stroke={`url(#${id})`}
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
    <div className="py-4 flex justify-center gap-8">
      <AnimatedSinusoid id="movingGradient2a" />
      <AnimatedSinusoid id="movingGradient2b" color="#4ade80" flipped />
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
                      <AnimatedSinusoid id="movingGradient1" />
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
