const breakpoints = [320, 480, 768, 1024]

export const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)
