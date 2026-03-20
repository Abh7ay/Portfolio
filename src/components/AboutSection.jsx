import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  GraduationCap,
  Rocket,
} from 'lucide-react';

const aboutParagraphs = [
  'I am a software developer focused on building scalable systems and AI-driven solutions, with hands-on experience across full stack development and machine learning.',
  'My work involves developing responsive web applications, designing intelligent systems, and working with data-driven architectures to solve real-world problems efficiently.',
  'I emphasize clean architecture, performance optimization, and user-centric design in every project I build.',
  'I am particularly interested in esports platforms, real-time applications, and intelligent interfaces that enhance user engagement at scale.',
];

const stats = [
  { value: '360+', label: 'Coding Problems Solved' },
  { value: '4', label: 'Featured Projects' },
  { value: '2', label: 'Google Programs Completed' },
];

const achievements = [
  'Completed Google Cloud Program and Google Cloud Facilitator Program',
  'Attended Google DevFest in 2022 and 2025',
  'Participated in hackathons including iNeuron, BFF, and Glitch',
  'Selected for the OPPO User Trial Research Program in Thailand',
];

const education = [
  {
    title: 'B.Tech - Computer Science Engineering',
    institution: 'Delhi Technical Campus',
    period: '2020 - 2024',
  },
];

const AboutSection = ({ sectionRef, slotRef, dockedCard }) => {
  return (
    <section
      id="about"
      ref={sectionRef}
      className="mx-auto max-w-7xl border-t border-[var(--border-color)] px-4 py-24 sm:px-8 md:px-12"
    >
      <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.9fr)] lg:gap-20">
        <div className="order-1 flex flex-col gap-14">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <div className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-[var(--color-primary)]">
                About Me
              </div>
              <h2 className="mb-4 text-4xl md:text-5xl">
                Software Developer focused on Scalable Systems &amp; AI Solutions
              </h2>
              <p className="mb-6 max-w-3xl text-sm uppercase tracking-[0.24em] text-[var(--muted-text)] sm:text-base">
                Building intelligent products with clean systems thinking
              </p>
              <div className="space-y-5 text-base leading-8 text-[var(--muted-text)] md:text-lg">
                {aboutParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 border-y border-[var(--border-color)] py-8 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-2">
                  <span className="text-4xl font-antonio text-[var(--color-primary)] md:text-5xl">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted-text)] md:text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Abh7ay"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-[var(--text-color)] px-7 py-3 font-medium text-[var(--bg-color)] transition-transform hover:scale-[1.03]"
              >
                GitHub
                <ArrowUpRight size={18} />
              </a>
              <a
                href="https://linkedin.com/in/abh7y"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-[var(--border-color)] px-7 py-3 font-medium transition-colors hover:bg-[var(--text-color)] hover:text-[var(--bg-color)]"
              >
                LinkedIn
                <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[2rem] border border-[var(--border-color)] bg-[var(--card-bg)] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.06)]"
          >
            <div className="mb-6 flex items-center gap-3 text-[var(--color-primary)]">
              <BriefcaseBusiness size={18} />
              <span className="text-[11px] font-medium uppercase tracking-[0.28em]">
                Experience
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-3xl md:text-4xl">Machine Learning Intern</h3>
                  <p className="mt-1 text-lg font-medium text-[var(--color-primary)]">
                    EiSystems
                  </p>
                </div>
                <span className="w-fit rounded-full bg-[var(--color-primary)]/12 px-4 py-1.5 text-sm font-medium text-[var(--color-primary)]">
                  Practical ML Delivery
                </span>
              </div>
              <p className="max-w-3xl text-[var(--muted-text)] leading-7">
                Worked on building and evaluating machine learning models for
                practical applications across domains, with emphasis on model
                quality, data understanding, and rapid prototyping.
              </p>
              <ul className="grid gap-3 text-sm leading-7 text-[var(--muted-text)] md:grid-cols-2">
                <li className="rounded-[1.25rem] border border-[var(--border-color)] p-4">
                  Developed and tested ML models and neural networks.
                </li>
                <li className="rounded-[1.25rem] border border-[var(--border-color)] p-4">
                  Analyzed large datasets to identify patterns and insights.
                </li>
                <li className="rounded-[1.25rem] border border-[var(--border-color)] p-4">
                  Built rapid prototypes to solve real-world system problems.
                </li>
                <li className="rounded-[1.25rem] border border-[var(--border-color)] p-4">
                  Contributed to AI-driven solutions with efficient, practical
                  experiments.
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="rounded-[2rem] border border-[var(--border-color)] bg-[linear-gradient(145deg,rgba(197,157,217,0.22),rgba(122,63,145,0.1))] p-8"
          >
            <div className="mb-6 flex items-center gap-3 text-[var(--color-primary)]">
              <Rocket size={18} />
              <span className="text-[11px] font-medium uppercase tracking-[0.28em]">
                Current Focus
              </span>
            </div>
            <p className="max-w-4xl text-base leading-8 text-[var(--muted-text)] md:text-lg">
              Building scalable esports platforms and exploring real-time
              systems using modern frontend technologies and AI integrations.
            </p>
          </motion.div>
        </div>

        <div className="order-2 flex flex-col gap-8 lg:pt-2">
          <div
            ref={slotRef}
            className="relative w-full overflow-hidden rounded-[2rem] bg-transparent aspect-[4/5] lg:sticky lg:top-28"
          >
            {dockedCard ? (
              <div className="absolute inset-0 flex items-center justify-center">
                {dockedCard}
              </div>
            ) : null}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-[2rem] border border-[var(--border-color)] bg-[var(--card-bg)] p-8"
          >
            <div className="mb-6 flex items-center gap-3 text-[var(--color-primary)]">
              <Award size={18} />
              <span className="text-[11px] font-medium uppercase tracking-[0.28em]">
                Achievements
              </span>
            </div>
            <div className="space-y-4 text-sm leading-7 text-[var(--muted-text)] md:text-base">
              {achievements.map((achievement) => (
                <div
                  key={achievement}
                  className="rounded-[1.25rem] border border-[var(--border-color)] px-5 py-4"
                >
                  {achievement}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="rounded-[2rem] border border-[var(--border-color)] bg-[var(--card-bg)] p-8"
          >
            <div className="mb-6 flex items-center gap-3 text-[var(--color-primary)]">
              <GraduationCap size={18} />
              <span className="text-[11px] font-medium uppercase tracking-[0.28em]">
                Education
              </span>
            </div>
            <div className="space-y-5">
              {education.map((item) => (
                <div
                  key={`${item.title}-${item.institution}`}
                  className="rounded-[1.25rem] border border-[var(--border-color)] p-5"
                >
                  <div className="text-lg font-semibold">{item.title}</div>
                  <div className="mt-1 text-sm text-[var(--muted-text)]">
                    {item.institution}
                  </div>
                  {item.period ? (
                    <div className="mt-3 text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-primary)]">
                      {item.period}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[1.5rem] border border-[var(--border-color)] bg-[var(--card-bg)] p-5">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted-text)]">
                Location
              </div>
              <div className="mt-2 text-lg font-medium">Delhi, India</div>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--border-color)] bg-[var(--card-bg)] p-5">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted-text)]">
                Contact
              </div>
              <a
                href="mailto:abhay00991@gmail.com"
                className="mt-2 block text-lg font-medium hover:text-[var(--color-primary)]"
              >
                abhay00991@gmail.com
              </a>
              <a
                href="tel:+919797485185"
                className="mt-1 block text-sm text-[var(--muted-text)] hover:text-[var(--color-primary)]"
              >
                +91 9797485185
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
