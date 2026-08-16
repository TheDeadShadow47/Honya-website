type Props = {
  src: string;
  alt: string;
  className?: string;
};

/** Device frame around a real Honya screenshot. */
export function Phone({ src, alt, className = "" }: Props) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[260px] rounded-[2.2rem] border border-primary/25 bg-surface p-2 shadow-[0_30px_80px_-30px_rgba(237,141,176,0.35)] ${className}`}
    >
      <div className="absolute left-1/2 top-3 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-background/70" />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="block w-full rounded-[1.7rem] bg-background object-cover"
      />
    </div>
  );
}
