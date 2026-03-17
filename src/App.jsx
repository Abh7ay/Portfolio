import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroServicesAboutTrack from './components/HeroServicesAboutTrack';
import TechStackMarquee from './components/TechStackMarquee';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="relative w-full min-h-screen font-sans selection:bg-[var(--color-primary)] selection:text-white">      
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      
      <main className="flex flex-col gap-12 md:gap-24">
        <HeroServicesAboutTrack />
        <TechStackMarquee />
        <ProjectsSection />
      </main>

      <Footer isDark={isDark} />
    </div>
  );
}

export default App;
