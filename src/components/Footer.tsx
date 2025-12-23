import React from 'react';
import { GraduationCap, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} PhD Research Portfolio
          </p>
          
          <div className="flex items-center gap-5">
            <a 
              href="https://scholar.google.com/citations?user=0Jq6nvIAAAAJ&hl=en" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Google Scholar"
            >
              <GraduationCap size={16} />
            </a>
            <a 
              href="https://www.linkedin.com/in/aleks-wolski/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a 
              href="mailto:ajw2g20@soton.ac.uk" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
