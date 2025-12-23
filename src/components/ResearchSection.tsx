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
              <h3 className="font-display font-medium text-lg mb-3">
                {area.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
