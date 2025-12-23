import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary font-body font-medium mb-4 tracking-widest uppercase text-xs">
            Get in Touch
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mb-14">
            <div className="p-6 rounded-lg bg-card border border-border text-center">
              <div className="w-10 h-10 mx-auto rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="text-primary" size={18} />
              </div>
              <h3 className="font-display text-sm mb-1">Email</h3>
              <p className="text-muted-foreground text-xs">ajw2g20@soton.ac.uk</p>
            </div>

            <a href="https://www.linkedin.com/in/aleks-wolski/" target="_blank" rel="noopener noreferrer" className="p-6 rounded-lg bg-card border border-border text-center hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 mx-auto rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <Linkedin className="text-primary" size={18} />
              </div>
              <h3 className="font-display text-sm mb-1">LinkedIn</h3>
              <p className="text-muted-foreground text-xs">Connect with Me</p>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
