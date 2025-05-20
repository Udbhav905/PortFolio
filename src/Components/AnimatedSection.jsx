
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, direction = 'up' }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
