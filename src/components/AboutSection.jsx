import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const AboutSection = ({ slotRef, dockedCard }) => {
  const sectionRef = useRef(null);

  const stats = [
    { value: "11", label: "Years of Experience" },
    { value: "249", label: "Completed Projects" },
    { value: "46+", label: "Clients Worldwide" }
  ];

  const experiences = [
    {
      role: "Lead Designer",
      company: "Google",
      period: "2020 - Present",
      description: "Leading a team of designers to create intuitive and engaging experiences for millions of users."
    },
    {
      role: "Senior UI/UX Designer",
      company: "Apple",
      period: "2018 - 2020",
      description: "Designed core experiences for iOS native applications, focusing on minimal and fluid interactions."
    },
    {
      role: "Product Designer",
      company: "Spotify",
      period: "2015 - 2018",
      description: "Contributed to the web player redesign and established new design system components."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[var(--border-color)]">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* Left Side: Slot where the traveling card docks */}
        <div
          ref={slotRef}
          className="relative lg:sticky lg:top-32 w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-transparent order-2 lg:order-1"
        >
          {dockedCard ? (
            <div className="absolute inset-0 flex items-center justify-center">{dockedCard}</div>
          ) : null}
        </div>

        {/* Right Side: About Content */}
        <div className="flex flex-col gap-10 order-1 lg:order-2">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-antonio mb-6">ABOUT ME</h2>
            <p className="text-[var(--muted-text)] text-base md:text-lg leading-relaxed mb-10">
              Hi, I'm Duncan — a digital designer and Framer developer passionate about crafting meaningful and impactful digital experiences. I believe that great design is not just about aesthetics, but about solving problems and creating human connections.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <span className="text-4xl md:text-5xl font-antonio text-[var(--color-primary)]">{stat.value}</span>
                  <span className="text-xs md:text-sm font-medium text-[var(--muted-text)] uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4 border-b border-[var(--border-color)] pb-12">
              <button className="flex items-center gap-2 bg-[var(--text-color)] text-[var(--bg-color)] px-8 py-3 rounded-full font-medium transition-transform hover:scale-105">
                My Story
              </button>
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8 pt-6"
          >
            <h3 className="text-3xl font-antonio mb-2">EXPERIENCE & JOURNEY</h3>
            
            <div className="flex flex-col gap-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-6 sm:pl-8 group">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[var(--border-color)] group-hover:bg-[var(--color-primary)] transition-colors z-10" />
                  {/* Timeline line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-[5px] top-4 w-[2px] h-full bg-[var(--border-color)]" />
                  )}
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 mb-2">
                    <h4 className="text-xl font-bold flex items-center gap-2 group-hover:text-[var(--color-primary)] transition-colors">
                      {exp.role}
                      <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={18} />
                    </h4>
                    <span className="text-sm font-medium text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-3 py-1 rounded-full whitespace-nowrap w-fit">
                      {exp.period}
                    </span>
                  </div>
                  
                  <h5 className="font-antonio tracking-wide text-lg text-[var(--muted-text)] mb-3">{exp.company}</h5>
                  <p className="text-[var(--muted-text)] text-sm leading-relaxed max-w-md">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
