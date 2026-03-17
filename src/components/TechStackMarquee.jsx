import { motion } from 'framer-motion';

const TechStackMarquee = () => {
  // Using some standard tool/tech names as placeholders for icons
  const techStack = [
    "Figma", "Framer", "Webflow", "React", "Tailwind", "Next.js", 
    "After Effects", "Illustrator", "Photoshop", "Spline", "Vite"
  ];

  // Double the array to create the seamless infinite scroll effect
  const marqueeItems = [...techStack, ...techStack];

  return (
    <div className="w-full overflow-hidden py-12 mt-12 border-t border-[var(--border-color)] border-b cursor-none select-none flex flex-col items-center">
      <h3 className="text-xl font-antonio mb-8 text-[var(--muted-text)] tracking-wider">MY TOOLBOX</h3>
      
      <div className="relative w-full max-w-[100vw] overflow-hidden flex">
        
        {/* Left/Right Fading Gradients mapping to theme */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--bg-color)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--bg-color)] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: [0, -1035] }} // Depends on item width, adjust if needed
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap gap-12 items-center"
        >
          {marqueeItems.map((tech, index) => (
            <div 
              key={index} 
              className="px-6 py-4 glass rounded-[2rem] flex items-center justify-center min-w-[160px] grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <span className="font-bold text-lg tracking-wide">{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>

    </div>
  );
};

export default TechStackMarquee;
