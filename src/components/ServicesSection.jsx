import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const skillGroups = [
  {
    title: 'Programming Languages',
    description:
      'Core languages for systems engineering, algorithmic problem solving, and building across the stack.',
    items: ['Python', 'C++', 'Java', 'C'],
  },
  {
    title: 'AI / Machine Learning',
    description:
      'Production ML tooling — from model training and evaluation to deploying intelligent features in applications.',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras'],
  },
  {
    title: 'Web Development',
    description:
      'End-to-end web tooling for responsive, performance-first applications and scalable product codebases.',
    items: ['React.js', 'Django', 'Tailwind CSS', 'PHP'],
  },
  {
    title: 'Data & Analytics',
    description:
      'Data processing, analysis, and visualization for driving decisions and supporting ML pipelines.',
    items: ['Pandas', 'NumPy', 'Matplotlib'],
  },
  {
    title: 'Databases',
    description:
      'Storage technologies used for lightweight apps, prototypes, and structured data handling.',
    items: ['MySQL', 'SQLite'],
  },
  {
    title: 'Tools & Version Control',
    description:
      'Core collaboration and delivery tools that support code management and project workflows.',
    items: ['Git', 'GitHub'],
  },
];

const ServicesSection = ({ sectionRef, slotRef, slotContent = null }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="mx-auto max-w-7xl px-4 py-24 sm:px-8 md:px-12"
    >
      <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="nav-pill mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-semibold tracking-wide">CORE SKILLS</span>
            </div>

            <h2 className="mb-6 text-4xl md:text-5xl">Engineering Toolkit</h2>
            <p className="max-w-xl text-base leading-8 text-[var(--muted-text)] md:text-lg">
              The tools I use to ship performant software — across frontend systems,
              machine learning, and data engineering.
            </p>
          </motion.div>

          <div className="flex flex-col border-t border-[var(--glass-border)]">
            {skillGroups.map((group, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  key={group.title}
                  className="overflow-hidden border-b border-[var(--border-color)]"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="group flex w-full items-center justify-between py-6 text-left transition-colors hover:text-[var(--text-color)]"
                  >
                    <h3
                      className={`font-antonio text-3xl tracking-tight md:text-4xl ${
                        isOpen ? 'text-[var(--color-primary)]' : 'text-[var(--text-color)]'
                      }`}
                    >
                      {group.title}
                    </h3>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                        isOpen
                          ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                          : 'border-[var(--border-color)] group-hover:bg-[var(--text-color)] group-hover:text-[var(--bg-color)]'
                      }`}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: isOpen ? 'auto' : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="px-0 pb-6 sm:px-2"
                  >
                    <p className="mb-6 max-w-2xl text-[var(--muted-text)] leading-7">
                      {group.description}
                    </p>
                    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 rounded-full border border-[var(--border-color)] px-4 py-3 text-sm"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] opacity-70" />
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

        <div
          ref={slotRef}
          className="relative w-full overflow-hidden rounded-[2rem] bg-transparent aspect-[4/5] lg:sticky lg:top-32"
        >
          {slotContent ? (
            <div className="absolute inset-0 flex items-center justify-center">
              {slotContent}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
