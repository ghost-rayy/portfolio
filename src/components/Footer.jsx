import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-black/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              RA
            </span>
            <p className="text-foreground/40 text-sm mt-2">© 2026 Raymond Appiasi. All rights reserved.</p>
          </div>
          
          {/* <div className="flex gap-8 text-sm font-medium text-foreground/60">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div> */}

          {/* <p className="text-foreground/30 text-[10px] uppercase tracking-widest font-bold">
            Built with React, Tailwind & Framer Motion
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
