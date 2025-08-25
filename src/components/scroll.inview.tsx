import { motion } from 'framer-motion';
import type React from 'react';
import type { Transition } from 'framer-motion';
import {
      getAnimationVariants,
      EASING,
      ANIMATION_PRESETS,
      type AnimationDirection
} from './animation-variants';

interface ScrollInViewProps {
      children: React.ReactNode;
      direction?: AnimationDirection;
      delay?: number;
      duration?: number;
      preset?: keyof typeof ANIMATION_PRESETS;
      className?: string;
}

const ScrollInView: React.FC<ScrollInViewProps> = ({
      children,
      direction = 'up',
      delay = 0,
      duration = 0.6,
      preset,
      className
}) => {
      const { initial, animate } = getAnimationVariants(direction);

      const transitionConfig: Transition = preset
            ? { ...ANIMATION_PRESETS[preset], delay }
            : {
                  duration,
                  delay,
                  ease: EASING.smooth,
                  type: "tween"
            };

      return (
            <motion.div
                  initial={initial}
                  whileInView={animate}
                  transition={transitionConfig}
                  viewport={{
                        once: true,
                        amount: 0.2,
                        margin: "0px 0px -100px 0px"
                  }}
                  className={className}
                  style={{ willChange: 'transform, opacity' }}
            >
                  {children}
            </motion.div>
      );
};

export default ScrollInView
