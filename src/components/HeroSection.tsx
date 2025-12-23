import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';
import DynamicSystemsBackground from './DynamicSystemsBackground';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <DynamicSystemsBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="opacity-0 animate-fade-in-up">
              <p className="text-primary font-body font-medium mb-4 tracking-widest uppercase text-xs">
                Engineering PhD Candidate
              </p>
            </div>
            
            <h1 className="opacity-0 animate-fade-in-up animation-delay-200 font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Data-Driven Techniques in{' '}
              <span className="text-gradient italic">Applied Mathematics</span>
            </h1>
            
            <p className="opacity-0 animate-fade-in-up animation-delay-400 text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Specializing in data-driven simulation, control, and identification of 
              continuous-time linear time-invariant systems. Bridging theoretical 
              foundations with practical applications.
            </p>
            
            <div className="opacity-0 animate-fade-in-up animation-delay-600 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg">
                <Mail size={18} />
                Get in Touch
              </Button>
              <Button variant="heroOutline" size="lg">
                View Publications
              </Button>
            </div>

            {/* Social Links */}
            <div className="opacity-0 animate-fade-in-up animation-delay-800 flex gap-4 mt-10 justify-center lg:justify-start">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="opacity-0 animate-fade-in-up animation-delay-400 relative">
              {/* Portrait container */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border border-border shadow-lg">
                {/* Placeholder for portrait */}
                <div className="w-full h-full bg-gradient-to-br from-secondary via-card to-background flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary text-2xl font-display">?</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Your Portrait</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/20 rounded-full" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up animation-delay-800">
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors duration-200">
            <span className="text-xs tracking-wider uppercase mb-2">Explore</span>
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
