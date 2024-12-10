interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * @default false
  vertical?: boolean;
  // Should the marquee scroll horizontally or vertically.If set to `true`, the marquee will scroll vertically.

  /**
   * The number of times to repeat the children. Set this value so that the repeated children overflow the container.
   * @default 5
   */
  repeat?: number;
  /**
   * Reverse the marquee direction.
   */
  reverse?: boolean;
  /**
   * Pause the marquee animation on hover.
   */
  pauseOnHover?: boolean;
  /**
   * Apply a gradient mask to the marquee.
   * @default true
   */
  applyMask?: boolean;
}
