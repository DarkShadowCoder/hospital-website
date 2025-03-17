export const animationVariants = {
    fadeIn: {
      container: {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
          opacity: 1,
          transition: { staggerChildren: 0.05, delayChildren: i * 0.3 },
        }),
      },
      child: {
        hidden: { opacity: 0, y: 10 },
        visible: {
          opacity: 1,
          y: [0, -10, 0],
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
          },
        },
      },
    },
  };
  