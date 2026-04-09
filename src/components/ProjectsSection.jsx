import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';

/* ── Case study data ── */
const caseStudies = [
  {
    number: '01',
    title: 'EsportsVerse',
    label: 'Full Stack Platform',
    liveUrl: 'https://esports-verse.in',
    repoUrl: 'https://github.com/Abh7ay/EsportsVerse',
    image: 'https://opengraph.githubassets.com/1/Abh7ay/EsportsVerse',
    problem:
      'The Indian esports community had no unified platform — content was fragmented across social media, with no structured way for teams, tournaments, and updates to be discovered.',
    solution:
      'Engineered a modular, component-driven React platform with structured content architecture, route-level code splitting, and an optimized Vite build pipeline delivering sub-2s initial loads.',
    features: [
      'Component library with 12+ reusable UI primitives',
      'Route-based code splitting for lazy-loaded pages',
      'Responsive layout system across 5 breakpoints',
      'SEO-optimized metadata and semantic markup',
    ],
    impact: [
      { value: '<2s', label: 'Load Time' },
      { value: '12+', label: 'Components' },
      { value: '95+', label: 'Lighthouse' },
    ],
    stack: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript'],
  },
  {
    number: '02',
    title: 'Nestle@',
    label: 'Frontend Engineering',
    liveUrl: 'https://nestle-at.vercel.app',
    repoUrl: null,
    image: 'https://opengraph.githubassets.com/1/Abh7ay/Nestle',
    problem:
      'Needed a production-grade frontend demonstrating advanced responsive patterns and peak performance — without the overhead of a full framework like Next.js or Gatsby.',
    solution:
      'Built a zero-framework, high-performance interface using Vite and Tailwind CSS with a clean component system, achieving top Lighthouse scores and instant deployability on Vercel.',
    features: [
      'Zero framework overhead — pure Vite + vanilla JS',
      'Optimized asset pipeline with image compression',
      'CSS architecture using Tailwind utility-first patterns',
      'Fully responsive across all device categories',
    ],
    impact: [
      { value: '95+', label: 'Lighthouse' },
      { value: '0', label: 'Framework Overhead' },
      { value: '100%', label: 'Responsive' },
    ],
    stack: ['Vite', 'Tailwind CSS', 'JavaScript'],
  },
  {
    number: '03',
    title: 'Sign Language Detector',
    label: 'Machine Learning',
    liveUrl: null,
    repoUrl: 'https://github.com/Abh7ay/Sign-Language-Detector-',
    image: 'https://opengraph.githubassets.com/1/Abh7ay/Sign-Language-Detector-',
    problem:
      'Bridging accessibility gaps for hearing-impaired users — no lightweight, real-time solution existed for interpreting hand gestures via standard webcam hardware.',
    solution:
      'Built an end-to-end ML pipeline from data collection through model training, implementing real-time hand gesture recognition using OpenCV for video processing and TensorFlow for classification.',
    features: [
      'End-to-end pipeline: data collection → training → inference',
      'Feature extraction and classification for gesture types',
      'Real-time prediction with live camera feed',
      'Modular architecture for adding new gesture classes',
    ],
    impact: [
      { value: 'Real-time', label: 'Inference' },
      { value: 'Custom', label: 'ML Pipeline' },
      { value: 'Webcam', label: 'Input Source' },
    ],
    stack: ['Python', 'OpenCV', 'TensorFlow', 'MediaPipe'],
  },
  {
    number: '04',
    title: 'Gemini Clone',
    label: 'AI Interface',
    liveUrl: null,
    repoUrl: 'https://github.com/Abh7ay/Gemini_Clone',
    image: 'https://opengraph.githubassets.com/1/Abh7ay/Gemini_Clone',
    problem:
      'Modern conversational AI interfaces require sophisticated state management, real-time rendering, and responsive design — duplicating this UX from scratch demanded deliberate architecture.',
    solution:
      'Developed a fully functional chat interface with dynamic message rendering, conversation state management, and a modular component system designed for extensibility.',
    features: [
      'Dynamic message rendering with streaming support',
      'Conversation history and state persistence',
      'Responsive design across mobile and desktop',
      'Modular component architecture for feature extension',
    ],
    impact: [
      { value: 'Full', label: 'Chat UX' },
      { value: 'Modular', label: 'Architecture' },
      { value: '100%', label: 'Responsive' },
    ],
    stack: ['React.js', 'JavaScript', 'CSS'],
  },
];

/* ── Scroll reveal variants ── */
const fadeSlide = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl border-t border-[var(--border-color)] px-4 py-20 sm:px-8 sm:py-28 md:px-12"
    >
      {/* ── Section header ── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeSlide}
        className="mb-14 sm:mb-20"
      >
        <div className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--color-primary)]">
          Selected Work
        </div>
        <h2 className="mb-5 text-3xl sm:text-4xl md:text-5xl">Projects I Work On</h2>
        <p className="max-w-2xl text-sm leading-7 text-[var(--muted-text)] sm:text-base sm:leading-8 md:text-lg">
          A selection of projects focused on performance, scalability, and
          real-world problem solving. Each one represents a genuine engineering
          challenge — not just UI.
        </p>
      </motion.div>

      {/* ── Case studies — alternating layout ── */}
      <div className="space-y-16 sm:space-y-24">
        {caseStudies.map((project, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeSlide}
              className="group"
            >
              <div
                className={`grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 ${
                  isReversed ? 'lg:[direction:rtl]' : ''
                }`}
              >
                {/* ── Image side ── */}
                <div className={`${isReversed ? 'lg:[direction:ltr]' : ''}`}>
                  <div className="relative overflow-hidden rounded-[1.8rem] shadow-2xl shadow-black/10 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02] group-hover:rotate-[0.5deg]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="aspect-[16/10] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    {/* Number overlay */}
                    <div className="absolute bottom-4 left-4 font-antonio text-6xl leading-none text-white/15 sm:bottom-6 sm:left-6 sm:text-7xl md:text-8xl">
                      {project.number}
                    </div>
                  </div>
                </div>

                {/* ── Content side ── */}
                <div className={`flex flex-col gap-5 sm:gap-6 ${isReversed ? 'lg:[direction:ltr]' : ''}`}>
                  {/* Header */}
                  <div>
                    <div className="mb-3 inline-block rounded-full border border-[var(--border-color)] bg-[var(--glass-bg)] px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.26em] text-[var(--color-primary)] backdrop-blur-sm">
                      {project.label}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl">{project.title}</h3>
                  </div>

                  {/* Problem */}
                  <div>
                    <div className="mb-2 text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--color-primary)]">
                      Problem
                    </div>
                    <p className="text-sm leading-7 text-[var(--muted-text)] sm:text-base sm:leading-8">
                      {project.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="mb-2 text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--color-primary)]">
                      Solution
                    </div>
                    <p className="text-sm leading-7 text-[var(--muted-text)] sm:text-base sm:leading-8">
                      {project.solution}
                    </p>
                  </div>

                  {/* Key features */}
                  <div>
                    <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--color-primary)]">
                      Key Features
                    </div>
                    <ul className="space-y-2">
                      {project.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-3 text-sm leading-7 text-[var(--muted-text)]"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact metrics */}
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {project.impact.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-[1.1rem] border border-[var(--border-color)] bg-[var(--glass-bg)] p-3.5 text-center backdrop-blur-sm"
                      >
                        <div className="text-lg font-antonio text-[var(--color-primary)] sm:text-xl md:text-2xl">
                          {m.value}
                        </div>
                        <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[var(--muted-text)]">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[var(--border-color)] px-3.5 py-1.5 text-xs font-medium text-[var(--muted-text)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group/btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[#A855F7] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(122,63,145,0.3)] transition-all hover:scale-[1.03] hover:shadow-[0_6px_28px_rgba(122,63,145,0.45)]"
                      >
                        View Live
                        <ExternalLink size={14} className="transition-transform group-hover/btn:translate-x-0.5" />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] px-6 py-2.5 text-sm font-medium text-[var(--muted-text)] transition-all hover:border-[var(--text-color)] hover:text-[var(--text-color)]"
                      >
                        View Code
                        <Github size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Divider between projects */}
              {index < caseStudies.length - 1 && (
                <div className="mx-auto mt-16 h-px w-24 bg-[var(--border-color)] sm:mt-24" />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* ── View all on GitHub ── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeSlide}
        className="mt-16 flex justify-center sm:mt-24"
      >
        <a
          href="https://github.com/Abh7ay?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-3 rounded-full border border-[var(--border-color)] px-6 py-3 text-sm font-medium transition-all hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] sm:px-8 sm:py-3.5"
        >
          View All on GitHub
          <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
        </a>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
