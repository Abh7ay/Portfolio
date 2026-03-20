import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const highlights = [
  'Scalable web applications',
  'AI-driven product systems',
  'Responsive high-performance UI',
];

const landingLinks = [
  {
    href: '#/skills',
    label: 'Skills',
    description: 'Tech stack across full stack engineering, ML, and data tools.',
  },
  {
    href: '#/about',
    label: 'About',
    description: 'Experience, achievements, education, and current engineering focus.',
  },
  {
    href: '#/projects',
    label: 'Projects',
    description: 'EsportsVerse, Nestle@, Gemini Clone, and ML-based builds.',
  },
  {
    href: '#/contact',
    label: 'Contact',
    description: 'Reach out for collaboration, product work, or engineering roles.',
  },
];

export default function HeroSection({ sectionRef, heroCard = null }) {
  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden bg-[var(--hero-bg)] text-[var(--hero-text)]"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 18% 14%, var(--hero-glow-a), transparent 28%), radial-gradient(circle at 76% 18%, var(--hero-glow-b), transparent 30%), radial-gradient(circle at 70% 70%, var(--hero-glow-c), transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.03), transparent 42%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(var(--hero-grid) 1px, transparent 1px), linear-gradient(90deg, var(--hero-grid) 1px, transparent 1px)',
          backgroundSize: 'clamp(34px,4vw,48px) clamp(34px,4vw,48px)',
        }}
      />
      <div className="pointer-events-none absolute top-[12%] left-[8%] h-44 w-44 rounded-full bg-[var(--hero-glow-a)] blur-3xl" />
      <div className="pointer-events-none absolute right-[12%] bottom-[12%] h-56 w-56 rounded-full bg-[var(--hero-glow-b)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[var(--hero-topline)]" />
      {heroCard}

      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-4 pb-18 pt-28 sm:px-8 md:px-12 lg:pb-20 lg:pt-32">
        <div className="relative z-10 grid min-h-[72vh] items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,26rem)_minmax(0,1fr)] lg:items-center lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.05 }}
            className="flex flex-col gap-7 self-start pt-4 lg:self-center lg:pt-0"
          >
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <div className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Abhishek Mathur
                </div>
                <div className="rounded-full border border-[var(--hero-border)] bg-[var(--hero-panel-bg)] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--color-primary)] sm:text-xs">
                  Full Stack &amp; AI Developer
                </div>
              </div>
              <p className="max-w-md text-sm leading-7 text-[var(--hero-muted)] sm:text-base">
                Building modern web applications and intelligent systems with a
                strong focus on clean architecture, performance, and scalable
                engineering.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-1">
              <a
                href="#/projects"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--hero-text)] px-7 py-3 text-sm font-semibold text-[var(--hero-bg)] transition-transform hover:scale-[1.03]"
              >
                View Projects
                <ArrowRight size={16} />
              </a>
              <a
                href="#/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--hero-border)] px-7 py-3 text-sm font-semibold text-[var(--hero-text)] transition-colors hover:bg-[var(--hero-text)] hover:text-[var(--hero-bg)]"
              >
                Contact Me
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="grid gap-3 pt-2 sm:max-w-xl">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-[1.2rem] border border-[var(--hero-border)] bg-[var(--hero-panel-bg)] px-4 py-3 text-sm text-[var(--hero-muted)] backdrop-blur-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <div
            aria-hidden="true"
            className="mx-auto h-[clamp(20rem,52vw,32rem)] w-[min(74vw,26rem)] shrink-0 lg:h-[32rem] lg:w-[26rem]"
          />

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.16 }}
            className="flex flex-col items-start gap-5 self-end pb-3 text-left lg:max-w-sm lg:justify-self-end lg:items-stretch lg:self-center lg:pb-0"
          >
            <div className="rounded-[1.7rem] border border-[var(--hero-border)] bg-[var(--hero-panel-bg)] p-6 backdrop-blur-md">
              <div className="mb-3 text-[11px] uppercase tracking-[0.28em] text-[var(--hero-soft)]">
                Engineering Focus
              </div>
              <div className="text-2xl leading-tight tracking-tight">
                Frontend systems, intelligent interfaces, and scalable product execution.
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--hero-muted)]">
                Focused on clean architecture, performance optimization, and
                user-centric product thinking.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[1.5rem] border border-[var(--hero-border)] bg-[var(--hero-panel-strong)] p-5 backdrop-blur-sm">
                <div className="text-[11px] uppercase tracking-[0.24em] text-[var(--hero-soft)]">
                  Problem Solving
                </div>
                <div className="mt-3 text-3xl font-antonio text-[var(--color-primary)]">
                  360+
                </div>
                <div className="mt-2 text-sm text-[var(--hero-muted)]">
                  coding problems solved
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-[var(--hero-border)] bg-[var(--hero-panel-strong)] p-5 backdrop-blur-sm">
                <div className="text-[11px] uppercase tracking-[0.24em] text-[var(--hero-soft)]">
                  Focus
                </div>
                <div className="mt-3 text-3xl font-antonio text-[var(--color-primary)]">
                  AI
                </div>
                <div className="mt-2 text-sm text-[var(--hero-muted)]">
                  systems and web products
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.36 }}
          className="relative z-10 mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {landingLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group rounded-[1.5rem] border border-[var(--hero-border)] bg-[var(--hero-panel-bg)] p-5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-[var(--hero-panel-strong)]"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.26em] text-[var(--hero-soft)]">
                  {item.label}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-[var(--hero-muted)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
              <p className="max-w-[18rem] text-sm leading-7 text-[var(--hero-muted)]">
                {item.description}
              </p>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="relative z-10 mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-[var(--hero-soft)] sm:text-xs"
        >
          <span className="h-px w-16 bg-[var(--hero-border)]" />
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}
