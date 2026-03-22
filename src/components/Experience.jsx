import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Aykon Information Systems Consulting Limited',
      role: 'Senior Laravel Backend Developer',
      period: '2025 - Till date',
      location: 'Accra, Ghana (Vendor for GCB Bank)',
      description: 'Developer for GCB Bank\'s Loan Application Portal. Responsible for architecture, integration with core banking systems, and ensuring high-availability performance.',
      isCurrent: true
    },
    {
      company: 'COCOBOD (Ghana Cocoa Board)',
      role: 'Backend Developer',
      period: '2024 - 2025',
      location: 'Accra, Ghana',
      description: 'Developed and maintained the National Service Scheme (NSS) Management System. Implemented complex role-based access control and high-concurrency API endpoints.'
    },
    {
      company: 'Integrity Information Systems Limited',
      role: 'Graphic Designer, Programmer & Security Analyst',
      period: '2022 - 2024',
      location: 'Accra, Ghana',
      description: 'A multi-disciplinary role focused on software development, digital branding, and security infrastructure (CCTV & Network security).'
    },
    {
      company: 'Freelance Software Developer',
      role: 'Full-Stack Developer',
      period: '2022 - Till date',
      location: 'Remote',
      description: 'Delivered customized web applications and FinTech specialized modules for diverse local clients.'
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tighter uppercase italic">Career Journey</h2>
          <p className="text-foreground/60 italic">Building systems that scale and secure the future of banking.</p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l border-primary/20 group pb-8 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full border-2 border-primary transition-all duration-300 ${exp.isCurrent ? 'bg-primary shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-background group-hover:bg-primary/50'}`}></div>

              <div className="glass p-8 rounded-3xl border border-white/5 group-hover:border-primary/20 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                    <div className="flex items-center text-primary font-semibold mt-1">
                      <Briefcase size={16} className="mr-2" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <span className="flex items-center text-foreground/40 text-sm">
                      <Calendar size={14} className="mr-2" />
                      {exp.period}
                    </span>
                    <span className="flex items-center text-foreground/40 text-sm">
                      <MapPin size={14} className="mr-2" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
