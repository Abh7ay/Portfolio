import { motion } from 'framer-motion';

const stackItems = [
  'Python',
  'C++',
  'Java',
  'C',
  'TensorFlow',
  'PyTorch',
  'Scikit-learn',
  'Keras',
  'React.js',
  'Django',
  'Tailwind CSS',
  'PHP',
  'Pandas',
  'NumPy',
  'Matplotlib',
  'MySQL',
  'SQLite',
  'Git',
  'GitHub',
];

const TechStackMarquee = () => {
  const marqueeItems = [...stackItems, ...stackItems];

  return (
    <div className="mt-10 flex w-full select-none flex-col items-center overflow-hidden border-y border-[var(--border-color)] py-8 sm:mt-12 sm:py-12">
      <h3 className="mb-6 text-base tracking-wider text-[var(--muted-text)] sm:mb-8 sm:text-xl">
        CORE STACK
      </h3>

      <div className="relative flex w-full max-w-[100vw] overflow-hidden">
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-14 bg-gradient-to-r from-[var(--bg-color)] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-14 bg-gradient-to-l from-[var(--bg-color)] to-transparent sm:w-24" />

        <motion.div
          animate={{ x: [0, -1620] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 34,
              ease: 'linear',
            },
          }}
          className="flex items-center gap-4 whitespace-nowrap sm:gap-6"
        >
          {marqueeItems.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="glass flex min-w-[120px] items-center justify-center rounded-[1.4rem] px-4 py-3 opacity-75 transition-all duration-300 hover:opacity-100 sm:min-w-[150px] sm:rounded-[2rem] sm:px-6 sm:py-4"
            >
              <span className="text-base font-bold tracking-wide sm:text-lg">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStackMarquee;
