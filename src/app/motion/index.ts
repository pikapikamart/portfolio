

export const customSwipeUpVariant = (y: string, duration: number, delay: number = 0 ) => ({
  initial: {
    y,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: "linear"
    }
  },
  hidden: {
    opacity: 0
  }
})

export const fadeVariant = ( ) => ({
  initial: {
    opacity: 0,
  },
  animate: (index: number) => ({
    opacity: 1,
    transition: {
      delay: .05 * index
    }
  })
})