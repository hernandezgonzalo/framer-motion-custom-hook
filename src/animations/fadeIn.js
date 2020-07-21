export const fadeInContainerWithStagger = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
      type: "tween",
      ease: "easeIn",
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring"
    }
  }
};
