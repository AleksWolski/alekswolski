import React from 'react';
import { Database, GitBranch, LineChart, Cpu } from 'lucide-react';

const researchAreas = [
  {
    icon: Database,
    title: 'Data-Driven Simulation',
    description: 'Developing methods to simulate system behavior directly from measured data without explicit model identification.',
  },
  {
    icon: GitBranch,
    title: 'System Identification',
    description: 'Creating robust algorithms for identifying continuous-time LTI systems from noisy, sampled observations.',
  },
  {
    icon: LineChart,
    title: 'Control Synthesis',
    description: 'Designing controllers based on data-driven representations that guarantee stability and performance.',
  },
  {
    icon: Cpu,
    title: 'LTI Systems',
    description: 'Theoretical foundations of linear time-invariant systems and their data-driven characterizations.',
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-28 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-primary font-body font-medium mb-4 tracking-widest uppercase text-xs">
            Research Focus
          </p>
          <h2 className="font-display text-3xl md:text-4xl mb-6">
            Exploring the Intersection of <br className="hidden md:block" />
            <span className="text-gradient italic">Data & Dynamics</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My research bridges the gap between classical control theory and modern 
            data-driven approaches, enabling direct analysis and design from experimental data.
          </p>
        </div>

        {/* Research areas grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {researchAreas.map((area) => (
            <div
              key={area.title}
              className="group p-6 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-5">
                <area.icon className="text-primary" size={20} />
              </div>
              <h3 className="font-display text-lg mb-3">
                {area.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* LTI System representation */}
        <div className="max-w-4xl mx-auto p-8 md:p-10 rounded-lg bg-card border border-border">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <h3 className="font-display text-2xl mb-4">
                Continuous-Time LTI Systems
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                The fundamental behavior of linear time-invariant systems is described by 
                state-space equations:
              </p>
              <div className="bg-secondary/50 rounded-md p-5 font-mono text-sm border border-border">
                <div className="mb-2">
                  <span className="text-primary">ẋ</span>(t) = <span className="text-foreground/80">A</span>x(t) + <span className="text-foreground/80">B</span>u(t)
                </div>
                <div>
                  <span className="text-primary">y</span>(t) = <span className="text-foreground/80">C</span>x(t) + <span className="text-foreground/80">D</span>u(t)
                </div>
              </div>
              <p className="text-muted-foreground text-sm mt-5">
                My work focuses on reconstructing these relationships directly from measured input-output data.
              </p>
            </div>
            
            {/* System diagram */}
            <div className="flex-1 flex justify-center">
              <svg viewBox="0 0 280 130" className="w-full max-w-xs">
                <defs>
                  <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="hsl(38 65% 50%)" />
                  </marker>
                </defs>
                
                {/* Input arrow */}
                <line x1="10" y1="65" x2="55" y2="65" stroke="hsl(38 65% 50%)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <text x="32" y="55" fill="hsl(38 65% 50%)" fontSize="11" textAnchor="middle" fontFamily="monospace">u(t)</text>
                
                {/* System block */}
                <rect x="65" y="40" width="150" height="50" rx="4" fill="hsl(220 20% 14%)" stroke="hsl(220 20% 18%)" strokeWidth="1.5" />
                <text x="140" y="70" fill="hsl(40 15% 95%)" fontSize="13" textAnchor="middle" fontFamily="var(--font-display)">LTI System</text>
                
                {/* Output arrow */}
                <line x1="225" y1="65" x2="270" y2="65" stroke="hsl(38 65% 50%)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <text x="248" y="55" fill="hsl(38 65% 50%)" fontSize="11" textAnchor="middle" fontFamily="monospace">y(t)</text>
                
                {/* Feedback path */}
                <path d="M235,65 L235,110 L45,110 L45,65" fill="none" stroke="hsl(220 20% 30%)" strokeWidth="1" strokeDasharray="4,4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
