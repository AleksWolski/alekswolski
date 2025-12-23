import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Building } from 'lucide-react';

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
              <p className="text-muted-foreground text-xs">researcher@university.edu</p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border text-center">
              <div className="w-10 h-10 mx-auto rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <Building className="text-primary" size={18} />
              </div>
              <h3 className="font-display text-sm mb-1">Department</h3>
              <p className="text-muted-foreground text-xs">Applied Mathematics</p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border text-center">
              <div className="w-10 h-10 mx-auto rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="text-primary" size={18} />
              </div>
              <h3 className="font-display text-sm mb-1">Location</h3>
              <p className="text-muted-foreground text-xs">University Campus</p>
            </div>
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
