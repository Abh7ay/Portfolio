import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useMotionTemplate, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import AboutSection from './AboutSection';
import ProfileShowcaseCard from './ProfileShowcaseCard';

// One traveling card that docks into Services, then About.
export default function HeroServicesAboutTrack() {
  const prefersReducedMotion = useReducedMotion();
  const [enableFloatingCard, setEnableFloatingCard] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(min-width: 1024px)').matches;
  });
  const heroSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const servicesSlotRef = useRef(null);
  const aboutSlotRef = useRef(null);
  const [isMeasured, setIsMeasured] = useState(false);
  const [layout, setLayout] = useState({
    slots: {
      services: { x: 0, y: 120 },
      about: { x: 0, y: 120 },
    },
    stages: {
      start: 0,
      serviceMid: 220,
      serviceDock: 420,
      serviceSettle: 500,
      serviceHoldEnd: 760,
      aboutMid: 1120,
      aboutDock: 1380,
      aboutSettle: 1520,
      fadeStart: 1350,
      fadeEnd: 1410,
    },
  });

  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, prefersReducedMotion
    ? { stiffness: 180, damping: 36, mass: 0.35 }
    : { stiffness: 110, damping: 28, mass: 0.45 });
  const rotationDriver = useSpring(scrollY, prefersReducedMotion
    ? { stiffness: 180, damping: 36, mass: 0.35 }
    : { stiffness: 82, damping: 26, mass: 0.62 });
  const transformSpring = prefersReducedMotion
    ? { stiffness: 240, damping: 34, mass: 0.3 }
    : { stiffness: 170, damping: 24, mass: 0.42 };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    function handleChange(event) {
      setEnableFloatingCard(event.matches);
    }

    setEnableFloatingCard(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useLayoutEffect(() => {
    if (!enableFloatingCard) {
      return;
    }

    if (
      !heroSectionRef.current ||
      !servicesSectionRef.current ||
      !aboutSectionRef.current ||
      !servicesSlotRef.current ||
      !aboutSlotRef.current
    ) {
      return;
    }

    let frameId = 0;

    function documentTop(node) {
      return window.scrollY + node.getBoundingClientRect().top;
    }

    function readOffset(node) {
      const rect = node.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2 - window.innerWidth / 2,
        y: rect.top + rect.height / 2 - window.innerHeight / 2,
      };
    }

    function measure() {
      if (
        !heroSectionRef.current ||
        !servicesSectionRef.current ||
        !aboutSectionRef.current ||
        !servicesSlotRef.current ||
        !aboutSlotRef.current
      ) {
        return;
      }

      const viewportHeight = window.innerHeight;
      const heroTop = documentTop(heroSectionRef.current);
      const servicesTop = documentTop(servicesSectionRef.current);
      const aboutTop = documentTop(aboutSectionRef.current);

      const start = heroTop + viewportHeight * 0.06;
      const serviceDock = Math.max(start + 180, servicesTop - viewportHeight * 0.54);
      const serviceMid = start + (serviceDock - start) * 0.68;
      const aboutDockTarget = aboutTop - viewportHeight * 0.08;
      const serviceHoldEnd = Math.max(
        serviceDock + 120,
        serviceDock + (aboutDockTarget - serviceDock) * 0.24,
      );
      const serviceSettle = Math.max(
        serviceDock + 24,
        Math.min(serviceDock + viewportHeight * 0.08, serviceHoldEnd - 24),
      );
      const aboutDock = Math.max(serviceHoldEnd + 180, aboutDockTarget);
      const aboutMid = serviceHoldEnd + (aboutDock - serviceHoldEnd) * 0.68;
      const aboutSettle = aboutDock + viewportHeight * 0.14;
      const fadeStart = aboutMid + (aboutDock - aboutMid) * 0.74;
      const fadeEnd = aboutDock + viewportHeight * 0.02;

      const next = {
        slots: {
          services: readOffset(servicesSlotRef.current),
          about: readOffset(aboutSlotRef.current),
        },
        stages: {
          start,
          serviceMid,
          serviceDock,
          serviceSettle,
          serviceHoldEnd,
          aboutMid,
          aboutDock,
          aboutSettle,
          fadeStart,
          fadeEnd,
        },
      };

      setLayout((prev) => {
        const unchanged =
          Math.abs(prev.slots.services.x - next.slots.services.x) < 0.5 &&
          Math.abs(prev.slots.services.y - next.slots.services.y) < 0.5 &&
          Math.abs(prev.slots.about.x - next.slots.about.x) < 0.5 &&
          Math.abs(prev.slots.about.y - next.slots.about.y) < 0.5 &&
          Math.abs(prev.stages.start - next.stages.start) < 0.5 &&
          Math.abs(prev.stages.serviceMid - next.stages.serviceMid) < 0.5 &&
          Math.abs(prev.stages.serviceDock - next.stages.serviceDock) < 0.5 &&
          Math.abs(prev.stages.serviceSettle - next.stages.serviceSettle) < 0.5 &&
          Math.abs(prev.stages.serviceHoldEnd - next.stages.serviceHoldEnd) < 0.5 &&
          Math.abs(prev.stages.aboutMid - next.stages.aboutMid) < 0.5 &&
          Math.abs(prev.stages.aboutDock - next.stages.aboutDock) < 0.5 &&
          Math.abs(prev.stages.aboutSettle - next.stages.aboutSettle) < 0.5 &&
          Math.abs(prev.stages.fadeStart - next.stages.fadeStart) < 0.5 &&
          Math.abs(prev.stages.fadeEnd - next.stages.fadeEnd) < 0.5;

        return unchanged ? prev : next;
      });

      setIsMeasured(true);
    }

    function queueMeasure() {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(measure);
    }

    const resizeObserver = new ResizeObserver(queueMeasure);
    resizeObserver.observe(heroSectionRef.current);
    resizeObserver.observe(servicesSectionRef.current);
    resizeObserver.observe(aboutSectionRef.current);
    resizeObserver.observe(servicesSlotRef.current);
    resizeObserver.observe(aboutSlotRef.current);

    queueMeasure();
    window.addEventListener('resize', queueMeasure);
    window.addEventListener('scroll', queueMeasure, { passive: true });

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener('resize', queueMeasure);
      window.removeEventListener('scroll', queueMeasure);
    };
  }, [enableFloatingCard]);

  const serviceTravelX = layout.slots.services.x * 0.68;
  const serviceTravelY = layout.slots.services.y * 0.72;
  const firstFlipMid = prefersReducedMotion ? 0 : 172;
  const firstFlipDock = prefersReducedMotion ? 0 : 332;
  const firstFlipEnd = prefersReducedMotion ? 0 : 360;
  const secondFlipMid = prefersReducedMotion ? 0 : 532;
  const secondFlipDock = prefersReducedMotion ? 0 : 692;
  const secondFlipEnd = prefersReducedMotion ? 0 : 720;
  const serviceFlipPeakScroll =
    layout.stages.start + (layout.stages.serviceDock - layout.stages.start) * 0.62;
  const serviceFlipDockScroll =
    layout.stages.serviceDock + (layout.stages.serviceSettle - layout.stages.serviceDock) * 0.82;
  const serviceFlipEndScroll =
    layout.stages.serviceSettle
    + (layout.stages.serviceHoldEnd - layout.stages.serviceSettle) * 0.42;
  const aboutFlipPeakScroll =
    layout.stages.serviceHoldEnd
    + (layout.stages.aboutDock - layout.stages.serviceHoldEnd) * 0.62;
  const aboutFlipDockScroll =
    layout.stages.aboutDock + (layout.stages.aboutSettle - layout.stages.aboutDock) * 0.72;
  const rotationTimeline = [
    layout.stages.start,
    serviceFlipPeakScroll,
    serviceFlipDockScroll,
    serviceFlipEndScroll,
    layout.stages.serviceHoldEnd,
    aboutFlipPeakScroll,
    aboutFlipDockScroll,
    layout.stages.aboutSettle,
  ];
  const aboutDeltaX = layout.slots.about.x - layout.slots.services.x;
  const aboutDeltaY = layout.slots.about.y - layout.slots.services.y;
  // Keep the second flip anchored near the Services slot so it doesn't drift right mid-rotation.
  const aboutTravelX = layout.slots.services.x + (aboutDeltaX < 0 ? aboutDeltaX * 0.36 : 0);
  const aboutTravelY = layout.slots.services.y + aboutDeltaY * 0.72;

  const rawCardX = useTransform(
    smoothScrollY,
    [
      layout.stages.start,
      layout.stages.serviceMid,
      layout.stages.serviceDock,
      layout.stages.serviceSettle,
      layout.stages.serviceHoldEnd,
      layout.stages.aboutMid,
      layout.stages.aboutDock,
      layout.stages.aboutSettle,
    ],
    [
      0,
      serviceTravelX,
      layout.slots.services.x,
      layout.slots.services.x,
      layout.slots.services.x,
      aboutTravelX,
      layout.slots.about.x,
      layout.slots.about.x,
    ],
  );
  const rawCardY = useTransform(
    smoothScrollY,
    [
      layout.stages.start,
      layout.stages.serviceMid,
      layout.stages.serviceDock,
      layout.stages.serviceSettle,
      layout.stages.serviceHoldEnd,
      layout.stages.aboutMid,
      layout.stages.aboutDock,
      layout.stages.aboutSettle,
    ],
    [
      0,
      serviceTravelY,
      layout.slots.services.y,
      layout.slots.services.y,
      layout.slots.services.y,
      aboutTravelY,
      layout.slots.about.y,
      layout.slots.about.y,
    ],
  );

  const rawRotateY = useTransform(
    rotationDriver,
    rotationTimeline,
    prefersReducedMotion
      ? [0, 0, 0, 0, 0, 0, 0, 0]
      : [0, firstFlipMid, firstFlipDock, firstFlipEnd, firstFlipEnd, secondFlipMid, secondFlipDock, secondFlipEnd],
  );
  const rawRotateX = useTransform(
    rotationDriver,
    rotationTimeline,
    prefersReducedMotion ? [0, 0, 0, 0, 0, 0, 0, 0] : [8, 16, 10, 2, 1, 16, 10, 0],
  );
  const rawRotateZ = useTransform(
    rotationDriver,
    rotationTimeline,
    prefersReducedMotion
      ? [0, 0, 0, 0, 0, 0, 0, 0]
      : [0, -8, -4, -1, 0, -8, -4, 0],
  );
  const rawScale = useTransform(
    smoothScrollY,
    [
      layout.stages.start,
      layout.stages.serviceMid,
      layout.stages.serviceDock,
      layout.stages.serviceSettle,
      layout.stages.serviceHoldEnd,
      layout.stages.aboutMid,
      layout.stages.aboutDock,
      layout.stages.aboutSettle,
    ],
    prefersReducedMotion
      ? [1, 1, 1, 1, 1, 1, 1, 1]
      : [0.96, 0.995, 1.018, 1.006, 1.004, 0.995, 1.018, 1],
  );
  const rawBlur = useTransform(
    smoothScrollY,
    [
      layout.stages.start,
      layout.stages.serviceMid,
      layout.stages.serviceDock,
      layout.stages.serviceSettle,
      layout.stages.serviceHoldEnd,
      layout.stages.aboutMid,
      layout.stages.aboutDock,
      layout.stages.aboutSettle,
    ],
    prefersReducedMotion
      ? [0, 0, 0, 0, 0, 0, 0, 0]
      : [0, 0.95, 0.18, 0, 0, 0.95, 0.18, 0],
  );
  const rawBrightness = useTransform(
    smoothScrollY,
    [
      layout.stages.start,
      layout.stages.serviceMid,
      layout.stages.serviceDock,
      layout.stages.serviceSettle,
      layout.stages.serviceHoldEnd,
      layout.stages.aboutMid,
      layout.stages.aboutDock,
      layout.stages.aboutSettle,
    ],
    prefersReducedMotion
      ? [1, 1, 1, 1, 1, 1, 1, 1]
      : [1, 1.03, 1.015, 1, 1, 1, 1, 1],
  );
  const rawSaturate = useTransform(
    smoothScrollY,
    [
      layout.stages.start,
      layout.stages.serviceMid,
      layout.stages.serviceDock,
      layout.stages.serviceSettle,
      layout.stages.serviceHoldEnd,
      layout.stages.aboutMid,
      layout.stages.aboutDock,
      layout.stages.aboutSettle,
    ],
    prefersReducedMotion
      ? [1, 1, 1, 1, 1, 1, 1, 1]
      : [1, 1.06, 1.02, 1, 1, 1, 1, 1],
  );
  const rawZ = useTransform(
    smoothScrollY,
    [
      layout.stages.start,
      layout.stages.serviceMid,
      layout.stages.serviceDock,
      layout.stages.serviceSettle,
      layout.stages.serviceHoldEnd,
      layout.stages.aboutMid,
      layout.stages.aboutDock,
      layout.stages.aboutSettle,
    ],
    prefersReducedMotion
      ? [0, 0, 0, 0, 0, 0, 0, 0]
      : [0, 64, 12, 0, 0, 64, 12, 0],
  );
  const rawShadow = useTransform(
    smoothScrollY,
    [
      layout.stages.start,
      layout.stages.serviceMid,
      layout.stages.serviceDock,
      layout.stages.serviceSettle,
      layout.stages.serviceHoldEnd,
      layout.stages.aboutMid,
      layout.stages.aboutDock,
      layout.stages.aboutSettle,
    ],
    [0.24, 0.46, 0.4, 0.34, 0.34, 0.46, 0.3, 0.16],
  );
  const rawOriginX = useTransform(
    smoothScrollY,
    [
      layout.stages.start,
      layout.stages.serviceMid,
      layout.stages.serviceDock,
      layout.stages.serviceSettle,
      layout.stages.serviceHoldEnd,
      layout.stages.aboutMid,
      layout.stages.aboutDock,
      layout.stages.aboutSettle,
    ],
    prefersReducedMotion
      ? [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]
      : [0.74, 0.78, 0.74, 0.68, 0.62, 0.56, 0.52, 0.5],
  );
  const cardX = useSpring(rawCardX, transformSpring);
  const cardY = useSpring(rawCardY, transformSpring);
  const rotateY = rawRotateY;
  const rotateX = rawRotateX;
  const rotateZ = rawRotateZ;
  const scale = useSpring(rawScale, transformSpring);
  const blur = useSpring(rawBlur, transformSpring);
  const brightness = useSpring(rawBrightness, transformSpring);
  const saturate = useSpring(rawSaturate, transformSpring);
  const z = useSpring(rawZ, transformSpring);
  const shadow = useSpring(rawShadow, transformSpring);
  const originX = useSpring(rawOriginX, transformSpring);
  const filter = useMotionTemplate`blur(${blur}px) brightness(${brightness}) saturate(${saturate})`;
  const boxShadow = useTransform(shadow, (v) => `0 28px 90px rgba(0,0,0,${v})`);
  const heroFloatingOpacity = useTransform(
    smoothScrollY,
    [layout.stages.start, layout.stages.serviceMid, layout.stages.serviceDock],
    [1, 1, 0],
  );
  const sectionFloatingOpacity = useTransform(
    smoothScrollY,
    [layout.stages.start, layout.stages.serviceMid, layout.stages.serviceDock, layout.stages.fadeStart, layout.stages.fadeEnd],
    [0, 0, 1, 1, 0],
  );
  const dockedOpacity = useTransform(
    smoothScrollY,
    [layout.stages.fadeStart, layout.stages.fadeEnd],
    [0, 1],
  );
  const dockedCard = enableFloatingCard ? (
    <motion.div
      style={{ opacity: dockedOpacity }}
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
    >
      <ProfileShowcaseCard />
    </motion.div>
  ) : null;
  const floatingCardStyles = {
    x: cardX,
    y: cardY,
    z,
    rotateY,
    rotateX,
    rotateZ,
    scale,
    filter,
    boxShadow,
    originX,
    originY: 0.5,
    transformPerspective: 1800,
    transformStyle: 'preserve-3d',
  };
  const heroCard = enableFloatingCard ? (
    <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center" style={{ paddingTop: '5rem', paddingLeft: '6rem' }}>
      <motion.div
        className="pointer-events-none"
        style={{
          opacity: heroFloatingOpacity,
          ...floatingCardStyles,
        }}
      >
        <ProfileShowcaseCard />
      </motion.div>
    </div>
  ) : null;

  return (
    <div className="relative">
      <HeroSection
        sectionRef={heroSectionRef}
        heroCard={heroCard}
        centerCard={!enableFloatingCard ? <ProfileShowcaseCard /> : null}
      />
      <ServicesSection
        sectionRef={servicesSectionRef}
        slotRef={servicesSlotRef}
        slotContent={!enableFloatingCard ? <ProfileShowcaseCard /> : null}
      />
      <AboutSection sectionRef={aboutSectionRef} slotRef={aboutSlotRef} dockedCard={dockedCard} />

      {enableFloatingCard && (
        <div
          className={[
            'pointer-events-none fixed inset-0 z-30 flex items-center justify-center transition-opacity duration-300',
            isMeasured ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
        >
          <motion.div
            className="pointer-events-none"
            style={{
              opacity: sectionFloatingOpacity,
              ...floatingCardStyles,
            }}
          >
            <ProfileShowcaseCard />
          </motion.div>
        </div>
      )}
    </div>
  );
}
