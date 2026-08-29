import { THEMES, type Theme } from "@/lib/themes";

/** Small, self-contained mock of a themed screen — no screenshots needed. */
function ThemePreview({ theme }: { theme: Theme }) {
  return (
    <div
      aria-hidden="true"
      className="relative h-24 overflow-hidden rounded-xl border"
      style={{ backgroundColor: theme.background, borderColor: `${theme.accent}33` }}
    >
      <div
        className="flex h-6 items-center gap-1.5 px-2.5"
        style={{ backgroundColor: theme.surface }}
      >
        <span className="size-1.5 rounded-full" style={{ backgroundColor: theme.accent }} />
        <span className="h-1 w-10 rounded-full" style={{ backgroundColor: `${theme.ink}40` }} />
      </div>
      <div className="space-y-1.5 p-2.5">
        <span
          className="block h-1.5 w-3/4 rounded-full"
          style={{ backgroundColor: theme.surface }}
        />
        <span
          className="block h-1.5 w-1/2 rounded-full"
          style={{ backgroundColor: theme.surface }}
        />
      </div>
      <span
        className="absolute bottom-2.5 right-2.5 grid size-5 place-items-center rounded-full text-[8px]"
        style={{ backgroundColor: theme.accent, color: theme.background }}
      >
        ▸
      </span>
    </div>
  );
}

function ThemeCard({ theme }: { theme: Theme }) {
  return (
    <div
      className={`panel group relative h-full p-3 transition-colors hover:border-primary/40 ${
        theme.featured ? "ring-1 ring-primary/40" : ""
      }`}
    >
      {theme.featured && (
        <span className="absolute right-3 top-3 z-10 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground">
          Signature
        </span>
      )}
      <ThemePreview theme={theme} />
      <p className="mt-3 text-sm font-semibold">{theme.name}</p>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{theme.description}</p>
    </div>
  );
}

export function ThemeShowcase() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {THEMES.map((theme) => (
        <ThemeCard key={theme.name} theme={theme} />
      ))}
    </div>
  );
}
