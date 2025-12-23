import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Linkedin, GraduationCap } from "lucide-react";
import ControlTheoryBackground from "./ControlTheoryBackground";
import portrait from "@/assets/portrait.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ControlTheoryBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="opacity-0 animate-fade-in-up">
              <p className="text-primary font-display font-medium mb-4 tracking-widest uppercase text-xs">
                Engineering PhD Candidate
              </p>
            </div>


            <p className="opacity-0 animate-fade-in-up animation-delay-400 text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              PhD candidate under the supervision of Prof. Paolo Rapisarda and Prof. Bing Chu, specializing in data-driven simulation, control, and identification of continuous-time systems.
            </p>

            <div className="opacity-0 animate-fade-in-up animation-delay-600 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">
                  <Mail size={18} />
                  Get in Touch
                </a>
              </Button>
              <Button variant="heroOutline" size="lg">
                View Publications
              </Button>
            </div>

            {/* Social Links */}
            <div className="opacity-0 animate-fade-in-up animation-delay-800 flex gap-4 mt-10 mb-20 justify-center lg:justify-start">
              <a
                href="https://scholar.google.com/citations?user=0Jq6nvIAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="Google Scholar"
              >
                <GraduationCap size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/aleks-wolski/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="order-1 lg:order-2 flex justify-center pt-20 lg:pt-0">
            <div className="opacity-0 animate-fade-in-up animation-delay-400 relative">
              {/* Portrait container */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border border-border shadow-lg">
                <img src={portrait} alt="Portrait" className="w-full h-full object-cover" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/20 rounded-full" />
              <div className="absolute -top-2 -left-2 w-12 h-12 border border-primary/10 rounded-full" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
