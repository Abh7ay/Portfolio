import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroServicesAboutTrack from './components/HeroServicesAboutTrack';
import TechStackMarquee from './components/TechStackMarquee';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProfileShowcaseCard from './components/ProfileShowcaseCard';

const VALID_ROUTES = new Set(['/', '/skills', '/about', '/projects', '/contact']);

function getHashRoute() {
  if (typeof window === 'undefined') return '/';

  const rawHash = window.location.hash.replace(/^#/, '') || '/';
  const normalizedRoute = rawHash.startsWith('/') ? rawHash : `/${rawHash}`;

  return VALID_ROUTES.has(normalizedRoute) ? normalizedRoute : '/';
}

function PageWrap({ children }) {
  return <main className="pt-28 md:pt-32">{children}</main>;
}

function App() {
  const [isDark, setIsDark] = useState(false);
  const [route, setRoute] = useState(getHashRoute);

  useEffect(() => {
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

  useEffect(() => {
    function handleHashChange() {
      setRoute(getHashRoute());
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  const toggleTheme = () => setIsDark(!isDark);
  const showcaseCard = <ProfileShowcaseCard />;

  function renderPage() {
    if (route === '/skills') {
      return (
        <PageWrap>
          <ServicesSection slotContent={showcaseCard} />
          <TechStackMarquee />
        </PageWrap>
      );
    }

    if (route === '/about') {
      return (
        <PageWrap>
          <AboutSection dockedCard={showcaseCard} />
        </PageWrap>
      );
    }

    if (route === '/projects') {
      return (
        <PageWrap>
          <ProjectsSection />
        </PageWrap>
      );
    }

    if (route === '/contact') {
      return <Footer standalone />;
    }

    return (
      <>
        <main className="flex flex-col gap-12 md:gap-24">
          <HeroServicesAboutTrack />
          <TechStackMarquee />
          <ProjectsSection />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <div className="relative min-h-screen w-full font-sans selection:bg-[var(--color-primary)] selection:text-white">
      <Navbar toggleTheme={toggleTheme} currentRoute={route} />
      {renderPage()}
    </div>
  );
}

export default App;
