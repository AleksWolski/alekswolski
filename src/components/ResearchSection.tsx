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
      <svg width="120" height="60" viewBox="0 0 120 60" className="overflow-visible">
        <defs>
          <linearGradient id="sinusoidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
        </defs>
        <path
          d="M60 0 Q60 10, 60 10 C30 15, 30 25, 60 30 C90 35, 90 45, 60 50 Q60 50, 60 60"
          stroke="url(#sinusoidGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          className="animate-sinusoid"
        />
        {/* Arrow head */}
        <polygon points="60,60 54,50 66,50" fill="#f97316" />
      </svg>
    </div>
  );
};

const ResearchSection = () => {
  return (
    <section id="research" className="py-28 relative">
      <style>{`
        @keyframes sinusoidPhase {
          0% {
            d: path("M60 0 Q60 10, 60 10 C30 15, 30 25, 60 30 C90 35, 90 45, 60 50 Q60 50, 60 60");
          }
          25% {
            d: path("M60 0 Q60 10, 60 10 C90 15, 90 25, 60 30 C30 35, 30 45, 60 50 Q60 50, 60 60");
          }
          50% {
            d: path("M60 0 Q60 10, 60 10 C30 15, 30 25, 60 30 C90 35, 90 45, 60 50 Q60 50, 60 60");
          }
          75% {
            d: path("M60 0 Q60 10, 60 10 C90 15, 90 25, 60 30 C30 35, 30 45, 60 50 Q60 50, 60 60");
          }
          100% {
            d: path("M60 0 Q60 10, 60 10 C30 15, 30 25, 60 30 C90 35, 90 45, 60 50 Q60 50, 60 60");
          }
        }
        .animate-sinusoid {
          animation: sinusoidPhase 1s ease-in-out infinite;
        }
      `}</style>
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
