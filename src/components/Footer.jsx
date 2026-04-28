import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-lighter py-8 border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-400 text-sm">
          &copy; {currentYear} Girdhar Aparajith J. All rights reserved.
        </div>
        
        <div className="flex gap-4">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <GithubIcon size={20} />
          </a>
          <a href="https://www.linkedin.com/in/giridhar-aparajith-j-246077293/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
            <LinkedinIcon size={20} />
          </a>
          <a href="mailto:giridhar05072004@gmail.com" className="text-slate-400 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
