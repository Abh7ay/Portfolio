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
    <div className="mt-12 flex w-full select-none flex-col items-center overflow-hidden border-y border-[var(--border-color)] py-12 cursor-none">
      <h3 className="mb-8 text-xl tracking-wider text-[var(--muted-text)]">
        CORE STACK
      </h3>

      <div className="relative flex w-full max-w-[100vw] overflow-hidden">
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--bg-color)] to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-24 bg-gradient-to-l from-[var(--bg-color)] to-transparent" />

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
          className="flex items-center gap-6 whitespace-nowrap"
        >
          {marqueeItems.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="glass flex min-w-[150px] items-center justify-center rounded-[2rem] px-6 py-4 opacity-75 transition-all duration-300 hover:opacity-100"
            >
              <span className="text-lg font-bold tracking-wide">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStackMarquee;
