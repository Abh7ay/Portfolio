import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
            <a
              href="#/contact"
              className="hidden rounded-full bg-[var(--text-color)] px-6 py-2.5 text-sm font-medium text-[var(--bg-color)] transition-transform hover:scale-105 sm:block"
            >
              Contact
            </a>
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
              className="mt-2 rounded-xl bg-[var(--text-color)] px-4 py-3 text-center text-sm font-medium text-[var(--bg-color)]"
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
