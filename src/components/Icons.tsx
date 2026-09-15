type IconProps = { size?: number; className?: string };

const common = (size: number, className?: string) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className,
  'aria-hidden': true,
});

export function ArrowUpRight({ size = 18, className }: IconProps) {
  return <svg {...common(size, className)}><path d="M7 17 17 7M7 7h10v10" /></svg>;
}

export function ArrowRight({ size = 18, className }: IconProps) {
  return <svg {...common(size, className)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

export function Github({ size = 19, className }: IconProps) {
  return <svg {...common(size, className)}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.3 3 5.4 5.4 0 0 0 19.1 1S17.9.6 15 2.5a13.4 13.4 0 0 0-6 0C6.1.6 4.9 1 4.9 1a5.4 5.4 0 0 0-.2 2A5.8 5.8 0 0 0 3.2 7.1c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 9 18v4M9 19c-3 .9-3-1.5-4.2-2" /></svg>;
}

export function Mail({ size = 19, className }: IconProps) {
  return <svg {...common(size, className)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
}

export function Menu({ size = 22, className }: IconProps) {
  return <svg {...common(size, className)}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
}

export function Close({ size = 22, className }: IconProps) {
  return <svg {...common(size, className)}><path d="m6 6 12 12M18 6 6 18" /></svg>;
}

export function Sun({ size = 18, className }: IconProps) {
  return <svg {...common(size, className)}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>;
}

export function Moon({ size = 18, className }: IconProps) {
  return <svg {...common(size, className)}><path d="M20.5 14.1A8.4 8.4 0 0 1 9.9 3.5 8.5 8.5 0 1 0 20.5 14Z" /></svg>;
}

export function Download({ size = 18, className }: IconProps) {
  return <svg {...common(size, className)}><path d="M12 3v12m-5-5 5 5 5-5M5 21h14" /></svg>;
}
