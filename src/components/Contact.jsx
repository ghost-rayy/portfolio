import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const formData = new FormData(e.target);

    try {
      // Replace with your Formspree endpoint after signing up at formspree.io
      const response = await fetch('https://formspree.io/f/your_id_here', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-8 italic">Let's build <br />something <span className="text-primary italic">great</span> and <span className="text-secondary italic">secure</span>.</h2>
            <p className="text-foreground/60 text-lg mb-12 max-w-lg">
              Open to discussions about FinTech architecture, enterprise Laravel scaling, or high-security banking integrations.
            </p>

            <div className="space-y-6">
              <a href="mailto:appiasiraymond@gmail.com" className="flex items-center gap-6 group">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-primary/10 transition-colors">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <div className="text-sm text-foreground/40 font-bold uppercase tracking-widest">Email me</div>
                  <div className="text-xl font-medium">appiasiraymond@gmail.com</div>
                </div>
              </a>
              
              <a href="https://github.com/ghost-rayy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-secondary/10 transition-colors">
                  <Github className="text-secondary" size={24} />
                </div>
                <div>
                  <div className="text-sm text-foreground/40 font-bold uppercase tracking-widest">GitHub</div>
                  <div className="text-xl font-medium">@ghost-rayy</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/raymond-appiasi-20a6a52b1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-primary/10 transition-colors">
                  <Linkedin className="text-primary" size={24} />
                </div>
                <div>
                  <div className="text-sm text-foreground/40 font-bold uppercase tracking-widest">LinkedIn</div>
                  <div className="text-xl font-medium">Raymond Appiasi</div>
                </div>
              </a>

              <a href="https://wa.me/233537212755" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-accent-green/10 transition-colors">
                  <MessageSquare className="text-accent-green" size={24} />
                </div>
                <div>
                  <div className="text-sm text-foreground/40 font-bold uppercase tracking-widest">WhatsApp</div>
                  <div className="text-xl font-medium">+233 53 721 2755</div>
                </div>
              </a>

              <div className="flex items-center gap-6">
                <div className="p-4 bg-white/5 rounded-2xl">
                  <MapPin className="text-accent-cyan" size={24} />
                </div>
                <div>
                  <div className="text-sm text-foreground/40 font-bold uppercase tracking-widest">Location</div>
                  <div className="text-xl font-medium">Accra, Ghana (GMT)</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[40px] border border-white/5"
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="text-accent-green mx-auto mb-6" size={64} />
                <h3 className="text-3xl font-bold mb-4 italic">Message Sent!</h3>
                <p className="text-foreground/60 mb-8 italic">I've received your inquiry and will get back to you shortly.</p>
                <button 
                  onClick={() => setStatus(null)}
                  className="px-8 py-3 bg-white/5 hover:bg-white/10 rounded-2xl font-bold transition-all"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/60 ml-2">Your Name</label>
                    <input 
                      name="name"
                      type="text" 
                      required
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground/60 ml-2">Email Address</label>
                    <input 
                      name="email"
                      type="email" 
                      required
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/60 ml-2">Project Type</label>
                  <select name="project_type" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none">
                    <option className="bg-background">Web App Development</option>
                    <option className="bg-background">API Development</option>
                    <option className="bg-background">FinTech Solution</option>
                    <option className="bg-background">SaaS Development</option>
                    <option className="bg-background">Security Audit</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground/60 ml-2">Message</label>
                  <textarea 
                    name="message"
                    rows="4"
                    required
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  disabled={status === 'sending'}
                  className="w-full bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-white font-bold py-5 rounded-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm font-bold justify-center mt-4">
                    <AlertCircle size={16} />
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
