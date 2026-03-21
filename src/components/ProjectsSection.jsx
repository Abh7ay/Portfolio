import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    number: '01',
    title: 'EsportsVerse',
    label: 'Full Stack Platform',
    liveUrl: 'https://esports-verse.in',
    problem:
      'The Indian esports community lacked a unified, high-performance content platform — scattered information across social media with no structured experience for teams, updates, or highlights.',
    solution:
      'Engineered a modular React-based platform with structured content architecture, component-driven UI, and optimized build pipeline delivering sub-2s page loads.',
    impact: [
      { value: '<2s', label: 'Page Load Time' },
      { value: '12+', label: 'Reusable Components' },
      { value: '5', label: 'Responsive Breakpoints' },
    ],
    stack: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript'],
    theme:
      'bg-[linear-gradient(135deg,#2B0D3E_0%,#53246A_42%,#7A3F91_100%)]',
  },
  {
    number: '02',
    title: 'Nestle@',
    label: 'Frontend Engineering',
    liveUrl: 'https://nestle-at.vercel.app',
    problem:
      'Needed a production-ready frontend interface demonstrating advanced responsive design patterns, lightweight tooling, and fast iteration — no framework overhead.',
    solution:
      'Built a high-performance, zero-framework interface using Vite and Tailwind CSS with a clean component system, achieving top Lighthouse scores across mobile and desktop.',
    impact: [
      { value: '95+', label: 'Lighthouse Score' },
      { value: '0', label: 'Framework Overhead' },
      { value: '100%', label: 'Mobile Responsive' },
    ],
    stack: ['Vite', 'Tailwind CSS', 'JavaScript'],
    theme:
      'bg-[linear-gradient(135deg,#3A174E_0%,#7A3F91_52%,#C59DD9_145%)]',
  },
];

const supportingProjects = [
  {
    title: 'Sign Language Detector',
    description:
      'Real-time hand gesture recognition system using computer vision and machine learning to interpret sign language — from data collection to live prediction.',
    contributions: [
      'Designed the end-to-end ML pipeline from data collection through training',
      'Implemented feature extraction for gesture classification',
      'Built a real-time prediction workflow with live camera feed',
    ],
    stack: 'Python • OpenCV • TensorFlow',
    repoUrl: 'https://github.com/Abh7ay/Sign-Language-Detector-',
    image: 'https://opengraph.githubassets.com/1/Abh7ay/Sign-Language-Detector-',
  },
  {
    title: 'Gemini Clone',
    description:
      'Conversational AI interface replicating modern chat-based systems with dynamic rendering, conversation state management, and responsive design.',
    contributions: [
      'Developed a fully responsive chat interface with real-time rendering',
      'Implemented conversation history management and state persistence',
      'Designed modular architecture for extensibility',
    ],
    stack: 'React.js • JavaScript',
    repoUrl: 'https://github.com/Abh7ay/Gemini_Clone',
    image: 'https://opengraph.githubassets.com/1/Abh7ay/Gemini_Clone',
  },
];

const sectionReveal = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl border-t border-[var(--border-color)] px-4 py-24 sm:px-8 md:px-12"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionReveal}
        className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
      >
        <div>
          <div className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--color-primary)]">
            Case Studies
          </div>
          <h2 className="mb-4 text-4xl md:text-5xl">Engineering That Solves Real Problems</h2>
          <p className="max-w-2xl text-[var(--muted-text)] md:text-lg">
            Each project represents a real challenge — from architecture decisions to
            performance trade-offs. Here's how I approached them.
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

      {/* Featured Case Studies */}
      <div className="space-y-10">
        {caseStudies.map((project, index) => (
          <motion.div
            key={project.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={sectionReveal}
            custom={index * 0.08}
            className={`overflow-hidden rounded-[2rem] p-8 text-white md:p-10 ${project.theme}`}
          >
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
              {/* Left — Story */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-antonio text-6xl leading-none text-white/20 md:text-7xl">
                    {project.number}
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="rounded-full border border-white/16 bg-white/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.26em]">
                      {project.label}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-4xl md:text-5xl">{project.title}</h3>
                </div>

                {/* Problem */}
                <div>
                  <div className="mb-2 text-[11px] font-medium uppercase tracking-[0.24em] text-white/50">
                    The Problem
                  </div>
                  <p className="max-w-xl text-base leading-8 text-white/82">
                    {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <div className="mb-2 text-[11px] font-medium uppercase tracking-[0.24em] text-white/50">
                    My Solution
                  </div>
                  <p className="max-w-xl text-base leading-8 text-white/82">
                    {project.solution}
                  </p>
                </div>

                {project.liveUrl ? (
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all hover:scale-[1.03] hover:shadow-lg"
                    >
                      View Live
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                ) : null}
              </div>

              {/* Right — Impact + Stack */}
              <div className="flex flex-col gap-8">
                {/* Impact metrics */}
                <div>
                  <div className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-white/50">
                    Measurable Impact
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {project.impact.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-[1.25rem] border border-white/12 bg-white/8 p-4 text-center backdrop-blur-sm"
                      >
                        <div className="text-2xl font-antonio text-white md:text-3xl">
                          {metric.value}
                        </div>
                        <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-white/60">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div>
                  <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.24em] text-white/50">
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
            </div>
          </motion.div>
        ))}
      </div>

      {/* Supporting Projects */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionReveal}
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={sectionReveal}
            custom={index * 0.08}
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
