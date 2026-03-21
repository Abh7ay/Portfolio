import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

function MagneticButton({ children, href, className }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.25);
    y.set((e.clientY - cy) * 0.25);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.a>
  );
}

const Navbar = ({ toggleTheme, currentRoute }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#/' },
    { name: 'Skills', href: '#/skills' },
    { name: 'About', href: '#/about' },
    { name: 'Projects', href: '#/projects' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="fixed top-6 left-1/2 z-50 w-[95%] max-w-4xl -translate-x-1/2"
      >
        <div className="nav-pill flex items-center justify-between rounded-full px-4 py-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[var(--text-color)] text-sm font-semibold text-[var(--bg-color)] shadow-sm">
              AM
            </div>
            <div className="hidden text-sm font-medium md:block">Abhishek Mathur</div>
          </div>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={[
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/10',
                  currentRoute === link.href.slice(1) ? 'bg-black/6 dark:bg-white/10' : '',
                ].join(' ')}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="hidden rounded-full border border-[var(--border-color)] p-2 transition-colors hover:bg-black/5 dark:hover:bg-white/10 sm:flex"
              aria-label="Toggle theme"
            >
              <div className="h-5 w-5 rounded-full bg-[var(--color-primary)] opacity-80" />
            </button>
            <MagneticButton
              href="#/contact"
              className="hidden rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[#A855F7] px-6 py-2.5 text-sm font-medium text-white shadow-[0_2px_12px_rgba(122,63,145,0.25)] transition-shadow hover:shadow-[0_4px_20px_rgba(122,63,145,0.4)] sm:block"
            >
              Contact
            </MagneticButton>
            <button
              className="p-2 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass absolute top-16 left-0 flex w-full flex-col gap-2 rounded-2xl p-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={[
                  'rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/10',
                  currentRoute === link.href.slice(1) ? 'bg-black/6 dark:bg-white/10' : '',
                ].join(' ')}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#/contact"
              className="mt-2 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[#A855F7] px-4 py-3 text-center text-sm font-medium text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
