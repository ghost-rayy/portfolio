import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left md:flex-1"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
              </span>
              Available for Remote Work
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hello, I'm <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent-cyan">
                Raymond Appiasi
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-medium text-foreground/80 mb-4">
              Senior Laravel Backend Developer
            </p>
            <p className="text-lg text-foreground/60 mb-8 max-w-2xl">
              FinTech & Enterprise Systems Specialist | Built Solutions for 
              <span className="text-primary mx-1">GCB Bank</span> & 
              <span className="text-primary mx-1">Ghana COCOBOD</span>.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#projects"
                className="group flex items-center bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/25"
              >
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a 
                href="/resume.pdf" 
                className="flex items-center glass hover:bg-white/5 text-foreground px-8 py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1"
              >
                Download CV
                <Download className="ml-2" size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative md:flex-1 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-primary to-secondary overflow-hidden shadow-2xl shadow-primary/40">
              <img 
                src="/assets/headshot.png" 
                alt="Raymond Appiasi" 
                className="w-full h-full object-cover rounded-full bg-card"
              />
            </div>
            
            {/* Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-4 bottom-10 glass-dark p-4 rounded-2xl shadow-xl shadow-black/50 border border-white/10"
            >
              <div className="text-3xl font-bold text-primary">4+</div>
              <div className="text-xs text-foreground/60 font-semibold uppercase tracking-wider">Years Exp.</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
