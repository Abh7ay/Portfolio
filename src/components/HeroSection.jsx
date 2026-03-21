import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

/* ── Split-text character reveal ── */
const charVariants = {
  hidden: { opacity: 0, y: 44, filter: 'blur(8px)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: 0.18 + i * 0.032,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function SplitTextReveal({ text, startIndex = 0, className = '' }) {
  let charCount = startIndex;
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block mr-[0.3em]">
          {word.split('').map((char) => {
            const i = charCount++;
            return (
              <motion.span
                key={i}
                custom={i}
                variants={charVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </span>
  );
}

/* ── Trust tags ── */
const trustTags = [
  'Scalable Systems',
  'AI-driven Products',
  'High-performance UI',
  'Clean Architecture',
];

/* ── Component ── */
export default function HeroSection({ sectionRef, heroCard = null }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Scroll-based parallax for the right visual
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

  const line1 = 'I engineer high-performance';
  const line2 = 'frontend systems that scale.';

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

      {/* ── Floating card (from HeroServicesAboutTrack) ── */}
      {heroCard}

      {/* ── Main content ── */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-4 pb-18 pt-28 sm:px-8 md:px-12 lg:pb-20 lg:pt-32">
        <div className="relative z-10 grid min-h-[72vh] items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(22rem,26rem)_minmax(0,0.9fr)] lg:items-center lg:gap-12">

          {/* ═══ LEFT COLUMN ═══ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-7 self-start pt-4 lg:self-center lg:pt-0"
          >
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.06 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--hero-border)] bg-[var(--hero-panel-bg)] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--color-primary)] backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Available for Opportunities
              </div>
            </motion.div>

            {/* Headline */}
            <h1 className="text-[clamp(1.8rem,3.8vw,3rem)] font-antonio leading-[0.96] tracking-tight">
              <SplitTextReveal text="I engineer" startIndex={0} />
              <br />
              <SplitTextReveal text="high-performance" startIndex={10} />
              <br />
              <SplitTextReveal
                text="frontend systems that scale."
                startIndex={26}
                className="text-[var(--color-primary)]"
              />
            </h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.75 }}
              className="max-w-lg text-base leading-8 text-[var(--hero-muted)] sm:text-[1.05rem]"
            >
              I build frontend architectures optimized for{' '}
              <span className="text-[var(--hero-text)] font-medium">speed</span>,{' '}
              <span className="text-[var(--hero-text)] font-medium">scalability</span>, and{' '}
              <span className="text-[var(--hero-text)] font-medium">long-term maintainability</span>
              {' '}— from component systems to full-stack AI integrations.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.9 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#/projects"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[#A855F7] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_24px_rgba(122,63,145,0.3)] transition-all hover:scale-[1.04] hover:shadow-[0_6px_32px_rgba(122,63,145,0.45)]"
              >
                View Work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--hero-border)] bg-[var(--hero-panel-bg)] px-7 py-3.5 text-sm font-semibold text-[var(--hero-text)] backdrop-blur-sm transition-all hover:bg-[var(--hero-text)] hover:text-[var(--hero-bg)]"
              >
                Contact Me
                <ArrowUpRight size={15} />
              </a>
            </motion.div>

            {/* Trust tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.05 }}
              className="flex flex-wrap items-center gap-2 pt-1"
            >
              {trustTags.map((tag, idx) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--hero-border)] bg-[var(--hero-panel-bg)] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--hero-soft)] backdrop-blur-sm sm:text-[11px]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ═══ CENTER — ProfileShowcaseCard slot ═══ */}
          <div
            aria-hidden="true"
            className="mx-auto h-[clamp(20rem,52vw,32rem)] w-[min(74vw,26rem)] shrink-0 lg:h-[32rem] lg:w-[26rem]"
          />

          {/* ═══ RIGHT COLUMN — Stats & Focus ═══ */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.35 }}
            style={{ y: rightY, scale: rightScale, rotateZ: rightRotate }}
            className="flex flex-col items-start gap-5 self-end pb-3 text-left lg:max-w-sm lg:justify-self-end lg:items-stretch lg:self-center lg:pb-0"
          >
            {/* Engineering Focus card */}
            <div className="rounded-[1.7rem] border border-[var(--hero-border)] bg-[var(--hero-panel-bg)] p-6 backdrop-blur-md transition-transform duration-500 hover:scale-[1.02]">
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
              <div className="rounded-[1.5rem] border border-[var(--hero-border)] bg-[var(--hero-panel-strong)] p-5 backdrop-blur-sm transition-transform duration-500 hover:scale-[1.03]">
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
              <div className="rounded-[1.5rem] border border-[var(--hero-border)] bg-[var(--hero-panel-strong)] p-5 backdrop-blur-sm transition-transform duration-500 hover:scale-[1.03]">
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
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="relative z-10 mt-12 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-[var(--hero-soft)] sm:text-xs"
        >
          <span className="h-px w-16 bg-[var(--hero-border)]" />
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}
