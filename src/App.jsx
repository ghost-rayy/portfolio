import React, { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { color } from 'framer-motion';

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });

    // Basic Intersection Observer for reveal animations if not using framer components
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        
        {/* About Section */}
        <section id="about" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <h2 className="text-4xl font-bold mb-8 italic">Pioneering Secure Backend Solutions</h2>
                <div className="space-y-6 text-foreground/70 text-lg leading-relaxed">
                  <p>
                    With over 4 years of dedicated experience in <strong>Laravel development</strong>, I specialize in architectural design for high-concurrency enterprise systems and secure FinTech integrations.
                  </p>
                  <p>
                    My journey has seen me lead critical vendor projects for <strong>GCB Bank</strong>, where I bridged complex legacy banking systems with modern, responsive loan portals, and at COCOBOD, where I scaled government infrastructure for thousands of users.
                  </p>
                  <p>
                    I am driven by the challenge of optimizing performance and ensuring unbreakable security across every API endpoint and database transaction I craft.
                  </p>
                </div>
                
                <div className="mt-12 flex items-center gap-6">
                   <div className="px-6 py-3 bg-white/5 rounded-2xl border border-white/10 uppercase tracking-widest text-xs font-bold text-foreground/40 italic">
                      Based in Accra, Ghana (GMT)
                   </div>
                </div>
              </div>
              
              <div className="reveal relative flex justify-center lg:justify-end">
                <div className="w-full max-w-md aspect-square glass rounded-[60px] p-8 flex items-center justify-center relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 group-hover:opacity-100 transition-opacity"></div>
                   <div className="relative text-center">
                      <div className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4 italic">4+</div>
                      <div className="text-sm font-bold uppercase tracking-widest text-foreground/60 italic">Years of specialized experience</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />

      {/* Back to Top */}
      {showTopBtn && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-4 bg-primary text-white rounded-2xl shadow-2xl shadow-primary/40 z-50 hover:scale-110 active:scale-95 transition-all"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;
