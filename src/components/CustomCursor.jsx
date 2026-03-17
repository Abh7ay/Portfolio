import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const innerDotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      backgroundColor: "var(--color-primary)",
      mixBlendMode: "normal"
    },
    text: {
      height: 8,
      width: 8,
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      backgroundColor: "var(--color-primary)",
      mixBlendMode: "difference"
    }
  };

  const outerRingVariants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      backgroundColor: "transparent",
      border: "1px solid var(--color-primary)",
      mixBlendMode: "difference"
    },
    text: {
      height: 64,
      width: 64,
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      backgroundColor: "var(--color-primary)",
      mixBlendMode: "difference"
    }
  };

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999]"
        variants={outerRingVariants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[10000]"
        variants={innerDotVariants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.1 }}
      />
    </>
  );
};

export default CustomCursor;
