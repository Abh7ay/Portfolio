import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  const yInnerImage = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
      className="group relative overflow-hidden rounded-[2rem] md:rounded-[3rem] w-full aspect-[4/5] sm:aspect-square md:aspect-[16/9] lg:aspect-[21/9] bg-gray-200 dark:bg-gray-800 flex items-center justify-center cursor-none"
    >
      {/* Project Image Placeholder */}
      <motion.img 
        style={{ y: yInnerImage, scale: 1.25 }}
        src={project.image} 
        alt={project.title} 
        className="absolute inset-0 w-full h-full object-cover origin-center z-10 transition-transform duration-1000 group-hover:scale-[1.35]" 
      />

      {/* Always-on Shadow Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20 pointer-events-none" />

      {/* Hover Darkening Overlay */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />

      {/* Content Overlay */}
      <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between z-30 opacity-100 pointer-events-none">
        
        {/* Category Pill */}
        <div className="self-end">
          <span className="bg-[#5E6EF2] text-white text-xs md:text-sm font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
            {project.category}
          </span>
        </div>
        
        {/* Title & Arrow */}
        <div className="flex items-end justify-between w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <div className="text-white flex flex-col">
            <span className="text-3xl md:text-5xl lg:text-7xl font-antonio leading-none tracking-tight uppercase">{project.title}</span>
            <span className="text-lg md:text-xl lg:text-2xl font-inter font-medium opacity-80 mt-2 tracking-wide uppercase">{project.subtitle}</span>
          </div>
          
          {/* Blue Hover Arrow */}
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out shadow-lg opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100">
            <ArrowUpRight size={28} />
          </div>
        </div>

      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "SUMMER VIBES",
      subtitle: "FESTIVAL CAMPAIGN",
      category: "Event Branding",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&q=80",
      size: "large" // takes full width
    },
    {
      title: "URBAN STYLE",
      subtitle: "E-COMMERCE",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      size: "half" 
    },
    {
      title: "NEO FINANCIAL",
      subtitle: "APP DESIGN",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      size: "half"
    },
    {
      title: "ECHO PODCAST",
      subtitle: "PLATFORM REDESIGN",
      category: "Product Design",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&q=80",
      size: "large"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-[var(--border-color)]">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-antonio mb-4">FEATURED PROJECTS</h2>
          <p className="text-[var(--muted-text)] max-w-md">
            A selection of my recent works across digital design, web development, and branding.
          </p>
        </div>
        <button className="hidden md:flex items-center gap-2 border border-[var(--border-color)] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-colors">
          View All Work <ArrowUpRight size={16} />
        </button>
      </motion.div>

      <div className="flex flex-col gap-12 sm:gap-16 lg:gap-24 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      {/* Mobile View All Button */}
      <button className="md:hidden w-full mt-10 flex items-center justify-center gap-2 border border-[var(--border-color)] px-6 py-4 rounded-xl text-sm font-bold hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-colors">
        VIEW ALL WORK <ArrowUpRight size={18} />
      </button>

    </section>
  );
};

export default ProjectsSection;
