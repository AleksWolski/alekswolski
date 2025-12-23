import React from 'react';
import { ArrowDown } from 'lucide-react';

const flowchartSteps = [
  'Persistently Exciting Input',
  'LTI CT System',
  'Sufficiently Informative Input-Output Trajectory',
  'Data Matrix',
  'Characterisation of all Input-Output Trajectories of the System',
];

const AnimatedSinusoid = () => {
  return (
    <div className="py-4 flex flex-col items-center">
      <svg width="120" height="100" viewBox="0 0 120 100" className="overflow-visible">
        <defs>
          <linearGradient id="movingGradient" x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f97316">
              <animate attributeName="offset" values="-1;1" dur="2s" repeatCount="indefinite" />
            </stop>
            <stop offset="25%" stopColor="#fed7aa">
              <animate attributeName="offset" values="-0.75;1.25" dur="2s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#f97316">
              <animate attributeName="offset" values="-0.5;1.5" dur="2s" repeatCount="indefinite" />
            </stop>
            <stop offset="75%" stopColor="#fed7aa">
              <animate attributeName="offset" values="-0.25;1.75" dur="2s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#f97316">
              <animate attributeName="offset" values="0;2" dur="2s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        {/* Static sinusoidal path with straight line at end */}
        <path
          d="M60 0 C60 5, 60 8, 60 10 C35 15, 35 25, 60 30 C85 35, 85 45, 60 50 C35 55, 35 65, 60 70 C60 72, 60 75, 60 80 L60 100"
          stroke="url(#movingGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        {/* Arrow head */}
        <polygon points="60,100 54,90 66,90" fill="#f97316" />
      </svg>
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
                      <AnimatedSinusoid />
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
