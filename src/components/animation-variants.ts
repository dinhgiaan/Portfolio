import type { Target, Transition } from 'framer-motion';

export type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale' | 'rotate';

export interface AnimationVariant {
      initial: Target;
      animate: Target;
}

export const getAnimationVariants = (direction: AnimationDirection): AnimationVariant => {
      const variants: Record<AnimationDirection, AnimationVariant> = {
            fade: {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 }
            },
            up: {
                  initial: { opacity: 0, y: 50 },
                  animate: { opacity: 1, y: 0 }
            },
            down: {
                  initial: { opacity: 0, y: -50 },
                  animate: { opacity: 1, y: 0 }
            },
            left: {
                  initial: { opacity: 0, x: -50 },
                  animate: { opacity: 1, x: 0 }
            },
            right: {
                  initial: { opacity: 0, x: 50 },
                  animate: { opacity: 1, x: 0 }
            },
            scale: {
                  initial: { opacity: 0, scale: 0.8 },
                  animate: { opacity: 1, scale: 1 }
            },
            rotate: {
                  initial: { opacity: 0, rotate: -10, scale: 0.9 },
                  animate: { opacity: 1, rotate: 0, scale: 1 }
            }
      };

      return variants[direction];
};

export type ComplexAnimationType = 'stagger' | 'parallax' | 'elastic';

export interface ComplexAnimationVariant {
      initial: Target;
      animate: Target & {
            transition?: Transition;
      };
}

export const useScrollAnimation = (direction: ComplexAnimationType = 'stagger'): ComplexAnimationVariant => {
      const variants: Record<ComplexAnimationType, ComplexAnimationVariant> = {
            stagger: {
                  initial: { opacity: 0, y: 20 },
                  animate: {
                        opacity: 1,
                        y: 0,
                        transition: {
                              staggerChildren: 0.1,
                              delayChildren: 0.2
                        }
                  }
            },
            parallax: {
                  initial: { opacity: 0, y: 100, scale: 0.8 },
                  animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                              type: "spring",
                              stiffness: 100,
                              damping: 15,
                              mass: 1
                        }
                  }
            },
            elastic: {
                  initial: { opacity: 0, scale: 0 },
                  animate: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                              bounce: 0.4
                        }
                  }
            }
      };

      return variants[direction];
};

export const EASING = {
      smooth: [0.25, 0.46, 0.45, 0.94] as const,
      spring: [0.68, -0.55, 0.265, 1.55] as const,
      ease: [0.4, 0, 0.2, 1] as const,
      bouncy: [0.68, -0.6, 0.32, 1.6] as const
} as const;

export const ANIMATION_PRESETS: Record<string, Transition> = {
      gentle: {
            duration: 0.8,
            ease: EASING.smooth
      },
      snappy: {
            duration: 0.4,
            ease: EASING.ease
      },
      bouncy: {
            duration: 0.6,
            ease: EASING.bouncy
      },
      spring: {
            type: "spring",
            stiffness: 100,
            damping: 15
      }
} as const;