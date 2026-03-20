import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Footer = ({ standalone = false }) => {
  return (
    <footer
      id="contact"
      className={[
        'relative w-full overflow-hidden bg-[#09070F] pb-12 pt-32 text-white',
        standalone ? 'mt-0' : 'mt-24',
      ].join(' ')}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0)_24%,rgba(255,255,255,0.02)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(122,63,145,0.22),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(242,234,247,0.08),transparent_24%),radial-gradient(circle_at_72%_72%,rgba(197,157,217,0.12),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.06]" />
      <div className="pointer-events-none absolute -top-18 left-[8%] h-56 w-56 rounded-full bg-[rgba(197,157,217,0.14)] blur-3xl" />
      <div className="pointer-events-none absolute right-[10%] bottom-[10%] h-72 w-72 rounded-full bg-[rgba(122,63,145,0.2)] blur-3xl" />

      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-8 md:px-12">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center text-[10vw] leading-none md:text-[8vw]"
        >
          LET&apos;S BUILD
          <br />
          <span className="opacity-70">SOMETHING REAL</span>
        </motion.h2>

        <div className="mb-24 grid w-full grid-cols-1 items-start gap-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h4 className="mb-2 text-xl opacity-80">EMAIL</h4>
              <a
                href="mailto:abhay00991@gmail.com"
                className="break-all text-2xl font-medium transition-all hover:underline md:text-3xl"
              >
                abhay00991@gmail.com
              </a>
            </div>

            <div>
              <h4 className="mb-2 text-xl opacity-80">PHONE</h4>
              <a
                href="tel:+919797485185"
                className="text-2xl font-medium transition-all hover:underline md:text-3xl"
              >
                +91 9797485185
              </a>
            </div>

            <div>
              <h4 className="mb-2 text-xl opacity-80">LOCATION</h4>
              <p className="text-2xl font-medium md:text-3xl">Delhi, India</p>
            </div>

            <div>
              <h4 className="mb-2 text-xl opacity-80">PROFILES</h4>
              <div className="flex flex-col gap-3 text-lg font-medium md:text-2xl">
                <a
                  href="https://github.com/Abh7ay"
                  target="_blank"
                  rel="noreferrer"
                  className="break-all transition-all hover:underline"
                >
                  github.com/Abh7ay
                </a>
                <a
                  href="https://linkedin.com/in/abh7y"
                  target="_blank"
                  rel="noreferrer"
                  className="break-all transition-all hover:underline"
                >
                  linkedin.com/in/abh7y
                </a>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href="mailto:abhay00991@gmail.com"
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 font-medium transition-colors hover:border-white"
              >
                Contact Me
                <ArrowUpRight size={18} />
              </a>
              <a
                href="#/projects"
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 font-medium transition-colors hover:border-white"
              >
                View Projects
                <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-white/18 bg-[linear-gradient(145deg,rgba(242,234,247,0.16),rgba(197,157,217,0.06))] p-8 shadow-[0_24px_80px_rgba(43,13,62,0.3)] backdrop-blur-xl md:p-12"
          >
            <div className="flex flex-col gap-6">
              <div>
                <div className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-white/62">
                  Current Focus
                </div>
                <h3 className="mb-4 text-3xl leading-none md:text-4xl">
                  Scalable platforms, real-time systems, and AI-assisted product
                  experiences.
                </h3>
                <p className="text-base leading-8 text-white/80 md:text-lg">
                  Building scalable esports platforms and exploring real-time
                  systems using modern frontend technologies and AI integrations.
                </p>
              </div>

              <div className="grid gap-4 pt-2 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/15 bg-[rgba(255,255,255,0.08)] p-5 backdrop-blur-md">
                  <div className="mb-2 text-sm uppercase tracking-[0.24em] text-white/60">
                    Focus Areas
                  </div>
                  <div className="text-lg font-medium">
                    Full stack products, AI systems, and high-performance UI
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-white/15 bg-[rgba(255,255,255,0.08)] p-5 backdrop-blur-md">
                  <div className="mb-2 text-sm uppercase tracking-[0.24em] text-white/60">
                    Engineering Style
                  </div>
                  <div className="text-lg font-medium">
                    Clean architecture, scalability, and user-centric execution
                  </div>
                </div>
              </div>

              <a
                href="mailto:abhay00991@gmail.com"
                className="group mt-4 flex w-full items-center justify-center gap-3 rounded-xl bg-white py-4 text-lg font-bold text-[var(--color-primary)] transition-colors hover:bg-black hover:text-white"
              >
                EMAIL ME
                <ArrowUpRight className="transition-transform group-hover:rotate-45" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 flex w-full flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 text-sm font-medium opacity-70 md:flex-row">
          <p>© {new Date().getFullYear()} Abhishek Mathur. Built as a personal portfolio.</p>
          <div className="flex gap-6">
            <a href="mailto:abhay00991@gmail.com" className="transition-opacity hover:opacity-100">
              Email
            </a>
            <a
              href="https://github.com/Abh7ay"
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-100"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/abh7y"
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-100"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
