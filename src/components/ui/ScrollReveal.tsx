import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none' | 'earth';
  distance?: number;
  duration?: number;
  className?: string;
}

/**
 * ScrollReveal
 * 
 * Scroll-triggered motion container with support for 'earth' growth direction:
 * rising from the ground with organic micro-scale and smooth easing.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  distance = 32,
  duration = 0.85,
  className = '',
  ...props
}) => {
  const getInitialProperties = () => {
    switch (direction) {
      case 'earth':
        return { y: distance || 36, x: 0, scale: 0.975 };
      case 'up':
        return { y: distance, x: 0, scale: 1 };
      case 'down':
        return { y: -distance, x: 0, scale: 1 };
      case 'left':
        return { x: distance, y: 0, scale: 1 };
      case 'right':
        return { x: -distance, y: 0, scale: 1 };
      case 'none':
        return { x: 0, y: 0, scale: 1 };
    }
  };

  const initial = {
    opacity: 0,
    ...getInitialProperties(),
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Luxury cubic-bezier
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}> = ({ children, className = '', staggerDelay = 0.12 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  distance?: number;
}> = ({ children, className = '', distance = 28 }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: distance, scale: 0.98 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * EarthGrowthContainer & EarthGrowthItem
 * 
 * Specifically orchestrated for staggered "crecimiento desde la tierra":
 * items emerge like shoots breaking through the soil into full bloom.
 */
export const EarthGrowthContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}> = ({ children, className = '', staggerDelay = 0.14 }) => {
  return (
    <motion.div
      initial="dormant"
      whileInView="blooming"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        dormant: {},
        blooming: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const EarthGrowthItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  distance?: number;
}> = ({ children, className = '', distance = 32 }) => {
  return (
    <motion.div
      variants={{
        dormant: { opacity: 0, y: distance, scale: 0.97 },
        blooming: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.85,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
