import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, ShieldCheck, CreditCard, Cpu, Code2, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Core Web',
      icon: <Globe className="text-secondary" size={24} />,
      skills: ['HTML5 (Semantic)', 'CSS3 (Modern Features)', 'JavaScript (ES6+)']
    },
    {
      title: 'Backend',
      icon: <Database className="text-primary" size={24} />,
      skills: ['Laravel 8-11', 'PHP 8.x', 'Node.js', 'REST & GraphQL']
    },
    {
      title: 'Frontend',
      icon: <Layout className="text-secondary" size={24} />,
      skills: ['React', 'Livewire', 'Alpine.js', 'Tailwind CSS']
    },
    {
      title: 'Database',
      icon: <Cpu className="text-accent-cyan" size={24} />,
      skills: ['MySQL', 'PostgreSQL', 'Redis', 'NoSQL']
    },
    {
      title: 'FinTech & DevOps',
      icon: <CreditCard className="text-accent-green" size={24} />,
      skills: ['Payment Gateways', 'Docker', 'CI/CD', 'Security']
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 italic">Core Expertise</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group"
            >
              <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit group-hover:bg-primary/10 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-foreground/60 text-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
