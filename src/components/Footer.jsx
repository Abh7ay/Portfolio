import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Footer = ({ isDark }) => {
  return (
    <footer id="contact" className="relative w-full bg-[var(--color-primary)] text-white pt-32 pb-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 flex flex-col items-center">
        
        {/* Massive Footer Heading */}
        <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[10vw] md:text-[8vw] font-antonio leading-none text-center mb-16"
        >
          LET'S WORK<br/><span className="opacity-70">TOGETHER</span>
        </motion.h2>

        {/* Contact Form & Info Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-start">
          
          {/* Quick Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h4 className="text-xl font-antonio mb-2 opacity-80">EMAIL</h4>
              <a href="mailto:hello@portavia.com" className="text-2xl md:text-3xl font-medium hover:underline transition-all">
                hello@portavia.com
              </a>
            </div>
            <div>
              <h4 className="text-xl font-antonio mb-2 opacity-80">PHONE</h4>
              <a href="tel:+1234567890" className="text-2xl md:text-3xl font-medium hover:underline transition-all">
                +1 (234) 567-890
              </a>
            </div>
            
            <div className="mt-8 flex gap-4">
              {['Twitter', 'LinkedIn', 'Dribbble', 'Behance'].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-full border border-white/20 hover:border-white transition-colors flex items-center justify-center font-medium"
                >
                  <ArrowUpRight size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 p-8 md:p-12 rounded-[2rem] backdrop-blur-md border border-white/20"
          >
            <form className="flex flex-col gap-6 w-full">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium tracking-wide uppercase opacity-80 pl-2">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="bg-transparent border-b-2 border-white/20 px-2 py-3 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium tracking-wide uppercase opacity-80 pl-2">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="bg-transparent border-b-2 border-white/20 px-2 py-3 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium tracking-wide uppercase opacity-80 pl-2">Project Details</label>
                <textarea 
                  rows="3"
                  placeholder="Tell me about your project..."
                  className="bg-transparent border-b-2 border-white/20 px-2 py-3 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>
              <button 
                type="button" 
                className="mt-6 w-full bg-white text-[var(--color-primary)] py-4 rounded-xl font-bold text-lg hover:bg-black hover:text-white hover:border-transparent transition-colors flex items-center justify-center gap-3 group"
              >
                SUBMIT REQUEST
                <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
              </button>
            </form>
          </motion.div>
          
        </div>

        {/* Bottom Banner */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between border-t border-white/20 pt-8 mt-10 opacity-70 text-sm font-medium gap-4">
          <p>© {new Date().getFullYear()} Portavia Template. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
