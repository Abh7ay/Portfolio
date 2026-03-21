import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

/* ── Trust tags ── */
const trustTags = ['Scalable Systems', 'AI-driven Products', 'High-performance UI'];

/* ── Stagger animation presets ── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function HeroSection({ sectionRef, heroCard = null }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  /* Scroll-based parallax for right column */
  const rightY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 80]),
    { stiffness: 120, damping: 30 }
  );
  const rightScale = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [1, 0.96]),
    { stiffness: 120, damping: 30 }
  );
  const rightRotate = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [0, -2]),
    { stiffness: 120, damping: 30 }
  );

  /* Scroll-based shift for center card */
  const cardX = useSpring(
    useTransform(scrollYProgress, [0, 0.6], [0, 60]),
    { stiffness: 100, damping: 28 }
  );

  return (
    <section
      ref={(el) => {
        containerRef.current = el;
        if (typeof sectionRef === 'function') sectionRef(el);
        else if (sectionRef) sectionRef.current = el;
      }}
      id="home"
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden bg-[var(--hero-bg)] text-[var(--hero-text)]"
    >
      {/* ── Background layers ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 18% 14%, var(--hero-glow-a), transparent 28%), radial-gradient(circle at 76% 18%, var(--hero-glow-b), transparent 30%), radial-gradient(circle at 70% 70%, var(--hero-glow-c), transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.03), transparent 42%)',
        }}
      />
      <div className="hero-orb pointer-events-none absolute top-[8%] right-[6%] h-[420px] w-[420px] rounded-full opacity-40 blur-[100px]" />
      <div className="hero-orb-secondary pointer-events-none absolute bottom-[12%] left-[4%] h-[320px] w-[320px] rounded-full opacity-30 blur-[90px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(var(--hero-grid) 1px, transparent 1px), linear-gradient(90deg, var(--hero-grid) 1px, transparent 1px)',
          backgroundSize: 'clamp(34px,4vw,48px) clamp(34px,4vw,48px)',
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[var(--hero-topline)]" />
      {heroCard}

      {/* ── Main content ── */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-4 py-28 sm:px-8 md:px-12 lg:py-32">
        <div className="relative z-10 grid min-h-[72vh] items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,24rem)_minmax(0,0.85fr)] lg:items-center lg:gap-12">

          {/* ═══ LEFT — 50-55% ═══ */}
          <div className="flex flex-col self-start pt-4 lg:self-center lg:pt-0">
            {/* Availability badge */}
            <motion.div {...fadeUp(0.05)}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--hero-border)] bg-[var(--hero-panel-bg)] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--color-primary)] backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Available for Opportunities
              </div>
            </motion.div>

            {/* Headline — mt-6 from badge */}
            <motion.h1
              {...fadeUp(0.15)}
              className="mt-6 text-[2rem] font-semibold font-antonio leading-[1.08] tracking-tight md:text-[2.75rem] lg:text-[3.5rem]"
            >
              I{' '}
              <span className="bg-gradient-to-r from-[var(--color-primary)] to-[#A855F7] bg-clip-text text-transparent">
                engineer
              </span>{' '}
              high-performance frontend systems that{' '}
              <span className="bg-gradient-to-r from-[var(--color-primary)] to-[#C084FC] bg-clip-text font-bold text-transparent">
                scale.
              </span>
            </motion.h1>

            {/* Subtext — mt-5 from headline */}
            <motion.p
              {...fadeUp(0.35)}
              className="mt-5 max-w-lg text-lg leading-8 tracking-wide text-[var(--hero-muted)] opacity-80"
            >
              Focused on performance, scalability, and clean architecture — I build
              systems that don't just look good, but perform under real-world conditions.
            </motion.p>

            {/* CTAs — mt-7 from subtext */}
            <motion.div
              {...fadeUp(0.5)}
              className="mt-7 flex flex-wrap items-center gap-5"
            >
              <a
                href="#/projects"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[#A855F7] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_24px_rgba(122,63,145,0.35)] transition-all hover:scale-[1.04] hover:shadow-[0_8px_36px_rgba(122,63,145,0.5)]"
              >
                View Work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--hero-border)] px-6 py-3 text-sm font-medium text-[var(--hero-muted)] transition-all hover:border-[var(--hero-text)] hover:text-[var(--hero-text)]"
              >
                Contact Me
                <ArrowUpRight size={15} />
              </a>
            </motion.div>

            {/* Trust strip — mt-6 from CTAs */}
            <motion.div
              {...fadeUp(0.65)}
              className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm tracking-wide text-[var(--hero-soft)]"
            >
              {trustTags.map((tag, idx) => (
                <span key={tag} className="flex items-center gap-3">
                  {idx > 0 && (
                    <span className="text-[var(--hero-border)]">•</span>
                  )}
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ═══ CENTER — ProfileShowcaseCard slot ═══ */}
          <motion.div
            aria-hidden="true"
            style={{ x: cardX }}
            className="mx-auto h-[clamp(20rem,52vw,32rem)] w-[min(74vw,24rem)] shrink-0 translate-x-2 translate-y-8 lg:h-[32rem] lg:w-[24rem] lg:translate-x-4 lg:translate-y-10"
          />

          {/* ═══ RIGHT — ~45% ═══ */}
          <motion.div
            {...fadeUp(0.4)}
            style={{ y: rightY, scale: rightScale, rotateZ: rightRotate }}
            className="flex flex-col items-start gap-5 self-end pb-3 text-left lg:max-w-sm lg:justify-self-end lg:items-stretch lg:self-center lg:pb-0"
          >
            {/* Glow behind cards */}
            <div className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-[var(--hero-glow-c)] opacity-20 blur-3xl" />

            {/* Engineering Focus card */}
            <div className="relative rounded-[1.7rem] border border-[var(--hero-border)] bg-[var(--hero-panel-bg)] p-6 backdrop-blur-md transition-all duration-500 hover:scale-[1.02] hover:rotate-0">
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

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-[1.5rem] border border-[var(--hero-border)] bg-[var(--hero-panel-strong)] p-5 backdrop-blur-sm transition-all duration-500 hover:scale-[1.03]">
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
              <div className="relative rounded-[1.5rem] border border-[var(--hero-border)] bg-[var(--hero-panel-strong)] p-5 backdrop-blur-sm transition-all duration-500 hover:scale-[1.03]">
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

        {/* Scroll indicator */}
        <motion.div
          {...fadeUp(0.8)}
          className="relative z-10 mt-16 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-[var(--hero-soft)] sm:text-xs"
        >
          <span className="h-px w-16 bg-[var(--hero-border)]" />
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}
