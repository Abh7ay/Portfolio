import { useEffect, useMemo, useRef, useState } from 'react';
import { cubicBezier, motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import AboutSection from './AboutSection';

const EASE = cubicBezier(0.22, 1, 0.36, 1);

// One traveling card that docks into Services, then About.
export default function HeroServicesAboutTrack() {
  const trackRef = useRef(null);
  const [isDockedAtAbout, setIsDockedAtAbout] = useState(false);
  const servicesSlotRef = useRef(null);
  const aboutSlotRef = useRef(null);

  const [servicesOffset, setServicesOffset] = useState({ x: 260, y: 80 });
  const [aboutOffset, setAboutOffset] = useState({ x: -260, y: 120 });

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  const eased = useTransform(scrollYProgress, EASE);
  // Extra slowdown: compress early progress so the card needs more scroll
  const easedSlow = useTransform(eased, (v) => v * v);
  const p = useSpring(easedSlow, { stiffness: 90, damping: 30, mass: 0.4 });

  // Measure slots and compute offsets so the card centers exactly in them.
  useEffect(() => {
    function measure() {
      if (!servicesSlotRef.current || !aboutSlotRef.current) return;

      const heroCenterX = window.innerWidth / 2;
      const heroCenterY = window.innerHeight / 2;

      const servicesRect = servicesSlotRef.current.getBoundingClientRect();
      const servicesCenterX = servicesRect.left + servicesRect.width / 2;
      const servicesCenterY = servicesRect.top + servicesRect.height / 2;

      const aboutRect = aboutSlotRef.current.getBoundingClientRect();
      const aboutCenterX = aboutRect.left + aboutRect.width / 2;
      const aboutCenterY = aboutRect.top + aboutRect.height / 2;

      setServicesOffset({
        x: servicesCenterX - heroCenterX + 40,
        y: servicesCenterY - heroCenterY,
      });

      setAboutOffset({
        x: aboutCenterX - heroCenterX + 40,
        y: aboutCenterY - heroCenterY,
      });
    }

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Progress windows: hero -> services (with small scroll hold) -> about
  // First big flip (around p ≈ 0.38) → card arrives in Services.
  // Hold position between p ≈ 0.38 and 0.5 so extra scroll doesn't move the card.
  // Second big flip (around p ≈ 0.72) → card arrives in About.
  const cardX = useTransform(
    p,
    [0, 0.38, 0.5, 0.72, 1],
    [0, servicesOffset.x, servicesOffset.x, aboutOffset.x, aboutOffset.x],
  );
  const cardY = useTransform(
    p,
    [0, 0.38, 0.5, 0.72, 1],
    [0, servicesOffset.y, servicesOffset.y, aboutOffset.y, aboutOffset.y],
  );

  // Dramatic flip right into Services, then flip again into About
  const rotateY = useTransform(p, [0, 0.22, 0.38, 0.55, 0.72, 1], [0, -78, -18, 12, 26, 26]);
  const rotateX = useTransform(p, [0, 0.38, 0.72, 1], [8, 2, 4, 4]);
  const rotateZ = useTransform(p, [0, 0.38, 0.72, 1], [0, 6, -6, -6]);
  const scale = useTransform(p, [0, 0.38, 0.72, 1], [1, 1.02, 1.02, 1.02]);

  const blur = useTransform(p, [0, 0.22, 0.30, 0.38, 1], [0, 1.2, 0.6, 0, 0]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);
  const shadow = useTransform(p, [0, 0.38, 1], [0.28, 0.42, 0.34]);
  const boxShadow = useTransform(shadow, (v) => `0 28px 90px rgba(0,0,0,${v})`);

  const card = useMemo(
    () => ({
      title: 'Selected Work',
      badge: 'Featured',
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80&auto=format&fit=crop',
    }),
    [],
  );

  useMotionValueEvent(p, 'change', (latest) => {
    // Dock once we reach the About segment; undock if user scrolls back up.
    const next = latest >= 0.72;
    setIsDockedAtAbout((prev) => (prev === next ? prev : next));
  });

  const CardMarkup = (
    <div className="w-[420px] h-[520px] rounded-[20px] overflow-hidden bg-[var(--card-bg)] border border-black/5 dark:border-white/10 backface-hidden">
      <div className="group relative h-full w-full">
        <img
          src={card.image}
          alt={card.title}
          className="h-full w-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2.5"
          loading="lazy"
          draggable="false"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/12 to-transparent" />
        <div className="absolute left-0 right-0 bottom-0 p-6 text-white">
          <div className="mb-3 inline-flex items-center rounded-full bg-white/12 px-3 py-1 text-xs font-medium backdrop-blur">
            {card.badge}
          </div>
          <div className="text-2xl tracking-tight">{card.title}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={trackRef} className="relative">
      <HeroSection />
      <ServicesSection slotRef={servicesSlotRef} />
      <AboutSection slotRef={aboutSlotRef} dockedCard={isDockedAtAbout ? CardMarkup : null} />

      <div
        className={[
          'pointer-events-none fixed inset-0 z-30 flex items-center justify-center',
          isDockedAtAbout ? 'opacity-0' : 'opacity-100',
        ].join(' ')}
      >
        <motion.div
          className="pointer-events-auto"
          style={{
            x: cardX,
            y: cardY,
            rotateY,
            rotateX,
            rotateZ,
            scale,
            filter,
            boxShadow,
            transformStyle: 'preserve-3d',
            perspective: 1400,
          }}
        >
          {CardMarkup}
        </motion.div>
      </div>
    </div>
  );
}

