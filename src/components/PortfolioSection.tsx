import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, Calendar } from 'lucide-react';

const publications = [
  {
    title: 'Data-Driven Control of Continuous-Time LTI Systems',
    journal: 'IEEE Transactions on Automatic Control',
    year: '2024',
    abstract: 'A novel framework for synthesizing stabilizing controllers directly from input-output trajectories without prior system identification.',
    tags: ['Control Theory', 'Data-Driven', 'LTI Systems'],
    link: '#',
  },
  {
    title: 'Robust Identification from Noisy Data',
    journal: 'Automatica',
    year: '2023',
    abstract: 'Developing noise-resilient algorithms for continuous-time system identification with guaranteed error bounds.',
    tags: ['System Identification', 'Robust Methods', 'Continuous-Time'],
    link: '#',
  },
  {
    title: 'Simulation Without Models: A Data-Centric Approach',
    journal: 'IFAC World Congress',
    year: '2023',
    abstract: 'Enabling accurate system simulation using only measured data, bypassing traditional model-building steps.',
    tags: ['Simulation', 'Data-Driven', 'Model-Free'],
    link: '#',
  },
  {
    title: 'Behavioral Framework for LTI System Analysis',
    journal: 'Systems & Control Letters',
    year: '2022',
    abstract: 'Extending behavioral systems theory to accommodate data-driven representations of dynamical systems.',
    tags: ['Behavioral Theory', 'LTI Systems', 'Analysis'],
    link: '#',
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-28 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-display font-medium mb-4 tracking-widest uppercase text-xs">
            Publications
          </p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl mb-6">
            Selected <span className="text-gradient">Research Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my published papers in top-tier journals and conferences 
            in control theory and applied mathematics.
          </p>
        </div>

        {/* Publications list */}
        <div className="grid gap-5 max-w-4xl mx-auto">
          {publications.map((pub) => (
            <article
              key={pub.title}
              className="group p-6 md:p-8 rounded-lg bg-background border border-border hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar size={12} />
                      {pub.year}
                    </span>
                    <span className="text-border">·</span>
                    <span className="text-xs text-primary">{pub.journal}</span>
                  </div>
                  
                  <h3 className="font-display font-medium text-lg md:text-xl mb-3 group-hover:text-primary transition-colors duration-200">
                    {pub.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {pub.abstract}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex md:flex-col gap-3">
                  <Button variant="heroOutline" size="sm" className="gap-2">
                    <FileText size={14} />
                    PDF
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <ExternalLink size={14} />
                    DOI
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Publications
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
