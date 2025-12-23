import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-28 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Content */}
          <div>
            <p className="text-primary font-display font-medium mb-4 tracking-widest uppercase text-xs">
              About Me
            </p>
            <h2 className="font-display font-semibold text-3xl md:text-4xl mb-8">
              Advancing the Frontiers of{' '}
              <span className="text-gradient">Data-Driven Control</span>
            </h2>
            
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I am a PhD candidate in Engineering, focusing on the development of 
                data-driven techniques for the analysis, control, and simulation of 
                dynamical systems. My research sits at the intersection of applied 
                mathematics, systems theory, and machine learning.
              </p>
              <p>
                My work addresses fundamental questions: How can we design controllers 
                without building explicit models? How can we guarantee stability using 
                only measured data? These questions drive my research into novel 
                theoretical frameworks with practical engineering applications.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-display font-semibold text-primary mb-1">8+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Publications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-semibold text-primary mb-1">4</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-semibold text-primary mb-1">3</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Conferences</div>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-5">
            <div className="flex gap-5 p-6 rounded-lg bg-background border border-border">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-primary" size={18} />
              </div>
              <div>
                <div className="text-xs text-primary font-medium mb-1 tracking-wider">2021 – Present</div>
                <h3 className="font-display font-medium text-lg mb-1">PhD in Engineering</h3>
                <p className="text-muted-foreground text-sm">
                  Research focus on data-driven methods for continuous-time LTI systems.
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-6 rounded-lg bg-background border border-border">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                <BookOpen className="text-primary" size={18} />
              </div>
              <div>
                <div className="text-xs text-primary font-medium mb-1 tracking-wider">2019 – 2021</div>
                <h3 className="font-display font-medium text-lg mb-1">MSc Applied Mathematics</h3>
                <p className="text-muted-foreground text-sm">
                  Thesis on system identification techniques for nonlinear systems.
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-6 rounded-lg bg-background border border-border">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Award className="text-primary" size={18} />
              </div>
              <div>
                <div className="text-xs text-primary font-medium mb-1 tracking-wider">2015 – 2019</div>
                <h3 className="font-display font-medium text-lg mb-1">BSc Mechanical Engineering</h3>
                <p className="text-muted-foreground text-sm">
                  Foundation in dynamics, control systems, and numerical methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
