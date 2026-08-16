const PETALS = [
  { left: "6%", size: 10, dur: 18, delay: 0, drift: "60px", op: 0.35 },
  { left: "18%", size: 7, dur: 24, delay: 4, drift: "-40px", op: 0.25 },
  { left: "31%", size: 12, dur: 21, delay: 9, drift: "80px", op: 0.3 },
  { left: "47%", size: 8, dur: 27, delay: 2, drift: "-70px", op: 0.22 },
  { left: "63%", size: 11, dur: 19, delay: 12, drift: "50px", op: 0.32 },
  { left: "76%", size: 6, dur: 25, delay: 6, drift: "-30px", op: 0.24 },
  { left: "88%", size: 9, dur: 22, delay: 15, drift: "45px", op: 0.28 },
];

/** Subtle falling sakura petals. Purely decorative. */
export function Petals() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="petal"
          style={
            {
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: `${p.dur}s`,
              animationDelay: `-${p.delay}s`,
              "--petal-drift": p.drift,
              "--petal-opacity": p.op,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
