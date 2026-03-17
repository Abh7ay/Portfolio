import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const ServicesSection = ({ slotRef }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const services = [
    {
      title: "UI/UX DESIGN",
      description: "Crafting intuitive user interfaces and logical workflows that solve user problems while fulfilling business objectives.",
      items: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
    },
    {
      title: "GRAPHIC DESIGN",
      description: "Creating visually compelling assets, from marketing materials to social media graphics, tailored to brand guidelines.",
      items: ["Illustration", "Print Design", "Digital Assets"]
    },
    {
      title: "WEB DESIGN",
      description: "Designing responsive, accessible, and high-converting websites optimized for all devices.",
      items: ["Responsive Layouts", "Landing Pages", "E-commerce Design"]
    },
    {
      title: "BRANDING",
      description: "Developing cohesive brand identities that resonate with your target audience and stand out in the market.",
      items: ["Logo Design", "Brand Guidelines", "Visual Identity"]
    }
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* Left Side: Text and Accordion */}
        <div className="flex flex-col gap-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Available for work Pill */}
            <div className="inline-flex items-center gap-2 bg-white/50 dark:bg-black/50 px-4 py-2 rounded-full border border-[var(--border-color)] mb-8 nav-pill">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-semibold tracking-wide">AVAILABLE FOR WORK</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-antonio mb-6 uppercase tracking-tight">What I can do for you</h2>
            <p className="text-[var(--text-color)] opacity-80 text-base md:text-lg leading-relaxed max-w-lg">
              I specialize in creating engaging digital products that blend aesthetics with functionality, helping brands establish their online presence and reach their target audience effectively.
            </p>
          </motion.div>

          <div className="flex flex-col border-t border-[var(--glass-border)]">
            {services.map((service, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  key={index} 
                  className="border-b border-[var(--border-color)] overflow-hidden"
                >
                  <button 
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between py-6 text-left group transition-colors hover:text-[var(--text-color)]"
                  >
                    <div className="flex items-center gap-6">
                      <h3 className={`font-antonio text-3xl md:text-4xl transition-colors tracking-tight ${isOpen ? 'text-[#5E6EF2]' : 'text-[var(--text-color)]'}`}>
                        {service.title}
                      </h3>
                    </div>
                    
                    <motion.div 
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${isOpen ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white' : 'border-[var(--border-color)] group-hover:bg-[var(--text-color)] group-hover:text-[var(--bg-color)]'}`}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>
                  
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: isOpen ? "auto" : 0, 
                      opacity: isOpen ? 1 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                    className="px-12 pb-6"
                  >
                    <p className="text-[var(--muted-text)] mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-[var(--text-color)]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] opacity-60" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Slot where the traveling card docks */}
        <div
          ref={slotRef}
          className="relative lg:sticky lg:top-32 w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-transparent"
        />

      </div>
    </section>
  );
};

export default ServicesSection;
