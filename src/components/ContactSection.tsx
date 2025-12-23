import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, GraduationCap, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary font-body font-medium mb-4 tracking-widest uppercase text-xs">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl md:text-4xl mb-6">
            Let's <span className="text-gradient italic">Collaborate</span>
          </h2>
          <p className="text-muted-foreground mb-14">
            Interested in my research or potential collaborations? 
            I'm always open to discussing new ideas and opportunities.
          </p>

          <div className="grid sm:grid-cols-3 gap-5 mb-14">
            <div className="p-6 rounded-lg bg-card border border-border text-center">
              <div className="w-10 h-10 mx-auto rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="text-primary" size={18} />
              </div>
              <h3 className="font-display text-sm mb-1">Email</h3>
              <p className="text-muted-foreground text-xs">ajw2g20@soton.ac.uk</p>
            </div>

            <a href="https://scholar.google.com/citations?user=0Jq6nvIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="p-6 rounded-lg bg-card border border-border text-center hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 mx-auto rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <GraduationCap className="text-primary" size={18} />
              </div>
              <h3 className="font-display text-sm mb-1">Google Scholar</h3>
              <p className="text-muted-foreground text-xs">View Publications</p>
            </a>

            <a href="https://www.linkedin.com/in/aleks-wolski/" target="_blank" rel="noopener noreferrer" className="p-6 rounded-lg bg-card border border-border text-center hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 mx-auto rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <Linkedin className="text-primary" size={18} />
              </div>
              <h3 className="font-display text-sm mb-1">LinkedIn</h3>
              <p className="text-muted-foreground text-xs">Connect with Me</p>
            </a>
          </div>

          <Button variant="hero" size="lg" className="gap-2">
            <Mail size={18} />
            Send a Message
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
