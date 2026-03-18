import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const featuredProjects = [
  {
    title: 'EsportsVerse',
    label: 'Primary Featured',
    tagline:
      'A scalable esports platform delivering structured content, team insights, and interactive user experiences.',
    description:
      'EsportsVerse is a modern web platform designed for esports audiences, focusing on high-performance content delivery, clean UI, and scalable architecture. The platform is structured to support future real-time features and dynamic data integration.',
    stack: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript'],
    features: [
      'Structured esports content across teams, updates, and highlights',
      'Fully responsive and performance-optimized UI',
      'Modular component architecture built for scalability',
      'Smooth transitions and modern UX patterns',
    ],
    focus: [
      'Scalable frontend architecture',
      'Performance optimization',
      'Clean, maintainable component design',
    ],
    future: [
      'Real-time match updates',
      'Player statistics dashboard',
      'API-driven dynamic content',
    ],
    theme:
      'bg-[linear-gradient(135deg,#0f172a_0%,#132f57_38%,#1d4ed8_100%)]',
  },
  {
    title: 'Nestle@',
    label: 'Secondary Featured',
    tagline:
      'A high-performance, responsive web interface focused on clean design and fast interaction.',
    description:
      'Nestle@ is a modern frontend project emphasizing performance, responsiveness, and modular UI design. It demonstrates the ability to build production-ready interfaces using lightweight tooling and efficient styling systems.',
    stack: ['Vite', 'Tailwind CSS', 'JavaScript'],
    features: [
      'Fully responsive design across devices',
      'Fast-loading UI powered by Vite',
      'Clean and reusable component architecture',
      'Smooth transitions and interactive elements',
    ],
    focus: [
      'UI performance optimization',
      'Component reusability',
      'Design system consistency',
    ],
    future: [],
    theme:
      'bg-[linear-gradient(135deg,#161616_0%,#2f2320_45%,#6b4f3b_100%)]',
  },
];

const supportingProjects = [
  {
    title: 'Sign Language Detector',
    description:
      'A real-time hand gesture recognition system using machine learning to interpret sign language.',
    contributions: [
      'Designed the ML pipeline from data collection through training',
      'Implemented feature extraction for gesture classification',
      'Built a real-time prediction workflow',
    ],
    stack: 'Python • OpenCV • TensorFlow / ML libraries',
    repoUrl: 'https://github.com/Abh7ay/Sign-Language-Detector-',
    image: 'https://opengraph.githubassets.com/1/Abh7ay/Sign-Language-Detector-',
  },
  {
    title: 'Gemini Clone',
    description:
      'A conversational AI interface replicating modern chat-based systems with dynamic rendering.',
    contributions: [
      'Developed a responsive chat interface',
      'Implemented conversation history management',
      'Designed modular and scalable frontend architecture',
    ],
    stack: 'React.js • JavaScript',
    repoUrl: 'https://github.com/Abh7ay/Gemini_Clone',
    image: 'https://opengraph.githubassets.com/1/Abh7ay/Gemini_Clone',
  },
];

function FeatureList({ title, items }) {
  if (!items.length) return null;

  return (
    <div>
      <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.24em] text-white/55">
        {title}
      </div>
      <div className="space-y-3 text-sm leading-7 text-white/80">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-[1.25rem] border border-white/12 bg-white/6 px-4 py-3 backdrop-blur-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl border-t border-[var(--border-color)] px-4 py-24 sm:px-8 md:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
      >
        <div>
          <div className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--color-primary)]">
            Featured Projects
          </div>
          <h2 className="mb-4 text-4xl md:text-5xl">Project Work Across Esports, AI, and Modern Frontend Systems</h2>
          <p className="max-w-2xl text-[var(--muted-text)] md:text-lg">
            A mix of scalable product thinking, responsive UI engineering, and
            machine learning experimentation.
          </p>
        </div>
        <a
          href="https://github.com/Abh7ay?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full border border-[var(--border-color)] px-6 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] md:flex"
        >
          View GitHub
          <ArrowUpRight size={16} />
        </a>
      </motion.div>

      <div className="space-y-10">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className={`overflow-hidden rounded-[2rem] p-8 text-white md:p-10 ${project.theme}`}
          >
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/16 bg-white/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.26em]">
                    {project.label}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-white/55">
                    Engineering Case Study
                  </span>
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl">{project.title}</h3>
                  <p className="mt-4 max-w-xl text-lg leading-8 text-white/82">
                    {project.tagline}
                  </p>
                </div>
                <p className="max-w-2xl text-sm leading-8 text-white/74 md:text-base">
                  {project.description}
                </p>
                <div>
                  <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.24em] text-white/55">
                    Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/14 bg-black/14 px-4 py-2 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <FeatureList title="Key Features" items={project.features} />
                <div className="space-y-6">
                  <FeatureList title="Engineering Focus" items={project.focus} />
                  <FeatureList title="Future Enhancements" items={project.future} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mt-20 mb-10"
      >
        <div className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--color-primary)]">
          More Projects
        </div>
        <h3 className="text-3xl md:text-4xl">Supporting Builds</h3>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        {supportingProjects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="group overflow-hidden rounded-[2rem] border border-[var(--border-color)] bg-[var(--card-bg)]"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/20 to-transparent" />
              <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight size={22} />
              </div>
              <div className="absolute right-5 bottom-5 left-5 text-white">
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/62">
                  GitHub Project
                </div>
                <div className="mt-2 text-3xl">{project.title}</div>
              </div>
            </div>

            <div className="space-y-6 p-6 md:p-8">
              <p className="text-[var(--muted-text)] leading-7">
                {project.description}
              </p>

              <div>
                <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--color-primary)]">
                  Key Contributions
                </div>
                <div className="space-y-3 text-sm leading-7 text-[var(--muted-text)]">
                  {project.contributions.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.1rem] border border-[var(--border-color)] px-4 py-3"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-[var(--border-color)] pt-5 text-sm font-medium text-[var(--muted-text)]">
                {project.stack}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <a
        href="https://github.com/Abh7ay?tab=repositories"
        target="_blank"
        rel="noreferrer"
        className="mt-10 flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--border-color)] px-6 py-4 text-sm font-bold transition-colors hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] md:hidden"
      >
        VIEW GITHUB
        <ArrowUpRight size={18} />
      </a>
    </section>
  );
};

export default ProjectsSection;
