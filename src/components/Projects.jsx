import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'GCB Bank Loan Portal',
      description: "Enterprise loan management system for Ghana's largest commercial bank. Built secure loan origination, processing workflows, and banking system integrations serving 2M+ customers.",
      tech: ['Laravel 10', 'MySQL', 'Redis', 'Queue Jobs'],
      impact: 'Reduced processing time by 60%',
      image: '/assets/gcb-project.png',
      tags: ['FinTech', 'Banking', 'Enterprise'],
      category: 'FinTech'
    },
    {
      title: 'COCOBOD NSS System',
      description: "National Service Scheme management platform for Ghana Cocoa Board. Handles 10,000+ concurrent users with complex role management and government database integrations.",
      tech: ['Laravel 9', 'MySQL', 'Livewire', 'Government APIs'],
      impact: 'Serves 10,000+ users nationwide',
      image: '/assets/cocobod-project.png',
      url: 'https://nss.cocobod.net',
      tags: ['Government', 'Large-Scale', 'API Integration'],
      category: 'Enterprise'
    },
    {
      title: 'E-Commerce Website (GIGGS)',
      description: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
      tech: ['Laravel', 'Node.js', 'PHP', 'MySQL'],
      impact: 'Modern retail experience',
      image: '/assets/giggs-project.png',
      tags: ['E-commerce', 'Payment Integration', 'SaaS'],
      category: 'SaaS'
    },
    {
      title: 'Bus Booking Management',
      description: "A responsive bus booking system management application with user authentication, payment processing, user dashboard, driver dashboard and admin dashboard.",
      tech: ['Laravel', 'Node.js', 'PHP', 'MySQL'],
      impact: 'Multi-role dashbaords',
      image: '/assets/bus-booking-project.png',
      tags: ['Logistics', 'Reservation', 'Dashboard'],
      category: 'Enterprise'
    },
    {
      title: 'COCOASPACE Meeting Rooms',
      description: "A responsive meeting rooms management system with user authentication, user dashboard, admin dashboard and user verification display.",
      tech: ['Laravel', 'Node.js', 'PHP', 'MySQL'],
      impact: 'Enterprise room management',
      image: '/assets/cocoaspace-project.png',
      tags: ['Resource Mgmt', 'Enterprise', 'Scheduling'],
      category: 'Enterprise'
    }
  ];

  const categories = ['All', 'FinTech', 'Enterprise', 'SaaS'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6"
        >
          <div>
            <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-foreground/60 max-w-xl">
              Specialized in high-stakes enterprise systems and FinTech solutions that drive real impact.
            </p>
          </div>
          <div className="h-1 w-24 bg-primary rounded-full hidden md:block mb-4"></div>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === cat ? 'bg-primary text-white scale-105 shadow-lg shadow-primary/20' : 'bg-white/5 text-foreground/60 hover:bg-white/10'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col glass rounded-3xl border border-white/5 overflow-hidden hover:border-primary/20 transition-all duration-500"
              >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60"></div>
                
                {/* Overlay Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-black/50 backdrop-blur-md rounded-md border border-white/10 text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="flex gap-3">
                    {project.url && (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-white transition-colors">
                            <ExternalLink size={20} />
                        </a>
                    )}
                    <Github size={20} className="text-foreground/60 hover:text-white cursor-pointer transition-colors" />
                  </div>
                </div>

                <p className="text-foreground/60 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-[11px] font-medium px-2 py-1 bg-white/5 rounded-md text-foreground/70">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Impact Metric */}
                <div className="pt-6 border-t border-white/5 flex items-center text-accent-green font-bold text-sm">
                  <TrendingUp size={16} className="mr-2" />
                  {project.impact}
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
