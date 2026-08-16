import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import icon from "@/assets/honya-icon.png";
import shotLibrary from "@/assets/screens/1.jpeg";
import shotCatalogs from "@/assets/screens/2.jpeg";
import shotReader from "@/assets/screens/3.jpeg";
import { Navbar } from "@/components/site/Navbar";
import { Petals } from "@/components/site/Petals";
import { Phone } from "@/components/site/Phone";
import { Reveal } from "@/components/site/Reveal";
import { siteConfig } from "@/lib/site-config";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Honya — A Lightweight Novel Reader" },
      {
        name: "description",
        content:
          "Honya is a lightweight, offline-first web novel reader for Android. Add your own LNReader-compatible plugin repositories, download chapters, and keep your reading progress in sync.",
      },
      { name: "theme-color", content: "#000000" },
      { property: "og:title", content: "Honya — A Lightweight Novel Reader" },
      {
        property: "og:description",
        content:
          "Offline-first novel reading with the LNReader-compatible extension ecosystem. Free and open source.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Honya",
          applicationCategory: "BookApplication",
          operatingSystem: "Android",
          softwareVersion: siteConfig.version,
          license: "https://opensource.org/licenses/MIT",
          url: siteConfig.github,
          downloadUrl: siteConfig.apk,
          author: { "@type": "Person", name: siteConfig.developer, url: siteConfig.developerUrl },
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }),
      },
    ],
  }),
});

const SHOTS = [
  {
    src: shotLibrary,
    label: "Library",
    alt: "Honya library grid showing novel covers with unread badges and reading progress",
  },
  {
    src: shotCatalogs,
    label: "Catalogs",
    alt: "Honya catalogs screen listing installed source extensions with search",
  },
  {
    src: shotReader,
    label: "Reader",
    alt: "Honya reader screen showing a chapter in clean serif-free typography",
  },
];

const FEATURES = [
  {
    title: "Continuous reading",
    body: "Chapters load as you scroll — no “Next chapter” button, no waiting between pages.",
    icon: "M4 5h16M4 12h16M4 19h10",
  },
  {
    title: "Plugin repositories",
    body: "Add any LNReader-compatible repository by URL. Extensions are downloaded only when you install them.",
    icon: "M9 3v4M15 3v4M5 7h14v6a7 7 0 0 1-14 0z",
  },
  {
    title: "Offline downloads",
    body: "Download single chapters or bulk-select them, then read with no connection at all.",
    icon: "M12 4v10m0 0 4-4m-4 4-4-4M5 19h14",
  },
  {
    title: "Per-chapter progress",
    body: "Scroll position and read status are stored per chapter, so you always resume exactly where you stopped.",
    icon: "M6 4h9l3 3v13H6z M9 9h6M9 13h6",
  },
  {
    title: "Three languages",
    body: "English, العربية and Français, with a right-to-left app layout for Arabic.",
    icon: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c3 3.5 3 14.5 0 18",
  },
  {
    title: "Six themes",
    body: "Honya Sakura, Midnight, Daylight, Onyx, Forest and Blossom — plus independent reader backgrounds.",
    icon: "M12 3a9 9 0 1 0 1 17.9c1.5-.2 1.3-2.2.2-2.9-1.3-.8-.7-2.5.8-2.5H17a4 4 0 0 0 4-4 8.5 8.5 0 0 0-9-8.5z",
  },
];

function Icon({ d }: { d: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6 text-primary"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className="size-4" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.4 7.4 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-28 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

function Landing() {
  const [active, setActive] = useState(0);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
          <Petals />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] max-w-[140vw] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
          />
          <div className="container-page relative">
            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <Reveal>
                  <img
                    src={icon}
                    alt="Honya app icon"
                    width={80}
                    height={80}
                    className="float-soft size-20 rounded-2xl border border-primary/20 shadow-[0_20px_60px_-20px_rgba(237,141,176,0.5)]"
                  />
                </Reveal>
                <Reveal delay={80}>
                  <h1 className="mt-8 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
                    Read more.
                    <br />
                    <span className="text-primary">Wait less.</span>
                  </h1>
                </Reveal>
                <Reveal delay={160}>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                    Honya is a lightweight, offline-first web novel reader for Android. It ships
                    with zero built-in sources — every source comes from an LNReader-compatible
                    plugin repository you add yourself.
                  </p>
                </Reveal>
                <Reveal delay={240}>
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <a
                      href={siteConfig.apk}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                    >
                      Download Honya
                      <span className="opacity-70">{siteConfig.version}</span>
                    </a>
                    <a
                      href={siteConfig.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-surface"
                    >
                      <GithubIcon />
                      View on GitHub
                    </a>
                  </div>
                </Reveal>
                <Reveal delay={320}>
                  <p className="mt-6 text-xs text-muted-foreground">
                    Android APK · MIT licensed · No account, no tracking
                  </p>
                </Reveal>
              </div>

              <Reveal delay={200} className="relative">
                <div className="flex items-end justify-center gap-4">
                  <Phone
                    src={shotCatalogs}
                    alt="Honya catalogs screen with installed source extensions"
                    className="hidden max-w-[190px] opacity-70 sm:block"
                  />
                  <Phone
                    src={shotLibrary}
                    alt="Honya library screen with novel covers and unread badges"
                    className="max-w-[240px]"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SCREENSHOTS */}
        <Section id="screenshots" className="border-t border-primary/10">
          <Reveal>
            <p className="eyebrow">Screenshots</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
              The whole app, in three screens.
            </h2>
          </Reveal>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[320px_1fr]">
            <Reveal>
              <Phone src={SHOTS[active]!.src} alt={SHOTS[active]!.alt} />
            </Reveal>

            <Reveal delay={120}>
              <div role="tablist" aria-label="App screens" className="flex flex-col gap-3">
                {SHOTS.map((s, i) => (
                  <button
                    key={s.label}
                    role="tab"
                    type="button"
                    aria-selected={active === i}
                    onClick={() => setActive(i)}
                    className={`rounded-xl border px-5 py-4 text-left transition-colors ${
                      active === i
                        ? "border-primary/60 bg-surface"
                        : "border-border/60 hover:border-primary/30 hover:bg-surface/60"
                    }`}
                  >
                    <span
                      className={`block text-base font-semibold ${active === i ? "text-primary" : ""}`}
                    >
                      {s.label}
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {i === 0 && "Grid view with unread badges, progress bars and search."}
                      {i === 1 && "Installed sources, per-source browsing and global search."}
                      {i === 2 && "Continuous scrolling reader with adjustable typography."}
                    </span>
                  </button>
                ))}
              </div>
            </Reveal>
          </div>
        </Section>

        {/* FEATURES */}
        <Section id="features" className="border-t border-primary/10">
          <Reveal>
            <p className="eyebrow">Features</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
              Everything a reader needs. Nothing it doesn&apos;t.
            </h2>
          </Reveal>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <Reveal as="li" key={f.title} delay={i * 60}>
                <div className="panel h-full p-6 transition-colors hover:border-primary/40">
                  <Icon d={f.icon} />
                  <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Section>

        {/* EXTENSION ECOSYSTEM */}
        <Section className="border-t border-primary/10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="eyebrow">Extensions</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">One reader. Your own sources.</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Honya does not scrape websites itself and ships with no default repositories.
                Instead it runs LNReader-compatible plugins in a sandboxed runtime — you paste a
                repository URL, pick the extensions you want, and the reader stays independent of
                any single website.
              </p>
              <ul className="mt-7 space-y-3 text-sm text-muted-foreground">
                {[
                  "Add any number of repositories by URL",
                  "Extensions are fetched only when you tap Install",
                  "Plugin code runs sandboxed with shadowed globals",
                  "Standard plugin API: popular, latest, search, novel, chapter",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                    />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-8 rounded-xl border border-primary/20 bg-surface/60 p-4 text-sm text-muted-foreground">
                Honya uses the LNReader extension ecosystem. It is an independent project and is not
                affiliated with or endorsed by{" "}
                <a
                  href={siteConfig.lnreader}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-primary underline underline-offset-4"
                >
                  LNReader
                </a>
                .
              </p>
            </Reveal>

            <Reveal delay={120}>
              <Phone src={shotCatalogs} alt="Honya catalogs screen listing installed extensions" />
            </Reveal>
          </div>
        </Section>

        {/* READING EXPERIENCE */}
        <Section className="border-t border-primary/10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal className="lg:order-2">
              <p className="eyebrow">The reader</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Built for long sessions.</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                A continuous scrolling reader with adjustable font size, line height and padding,
                five background presets, and progress that is saved per chapter as you go — online
                or from downloaded chapters.
              </p>
              <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  ["Typography", "Font size, line height and padding controls"],
                  ["Backgrounds", "5 reader presets, independent of the app theme"],
                  ["Progress", "Scroll position and read status per chapter"],
                  ["Offline", "Downloaded chapters open without a connection"],
                ].map(([t, d]) => (
                  <div key={t} className="panel p-4">
                    <dt className="text-sm font-semibold text-primary">{t}</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{d}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={120} className="lg:order-1">
              <Phone src={shotReader} alt="Honya reader displaying a novel chapter" />
            </Reveal>
          </div>
        </Section>

        {/* LANGUAGES */}
        <Section className="border-t border-primary/10">
          <Reveal>
            <p className="eyebrow">Languages</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Read in your language.</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { label: "English", note: "Left-to-right" },
              { label: "العربية", note: "Right-to-left layout", rtl: true },
              { label: "Français", note: "Left-to-right" },
            ].map((l, i) => (
              <Reveal key={l.label} delay={i * 80}>
                <div className="panel p-6">
                  <p
                    className="font-display text-2xl font-semibold"
                    dir={l.rtl ? "rtl" : "ltr"}
                    lang={l.rtl ? "ar" : undefined}
                  >
                    {l.label}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{l.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
              Selecting Arabic switches the whole app to an RTL layout. The direction of novel
              content is handled separately, so a chapter always reads the way it was written.
            </p>
          </Reveal>
        </Section>

        {/* OPEN SOURCE */}
        <Section id="about" className="border-t border-primary/10">
          <Reveal>
            <div className="panel relative overflow-hidden p-8 sm:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/10 blur-[90px]"
              />
              <p className="eyebrow relative">Open source</p>
              <h2 className="relative mt-3 text-3xl font-bold sm:text-4xl">Built in the open.</h2>
              <p className="relative mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Honya is developed publicly by {siteConfig.developer} and released under the{" "}
                {siteConfig.license} license. It is built with React Native and Expo, stores
                everything locally in SQLite, and has no backend of its own.
              </p>
              <div className="relative mt-8 flex flex-wrap gap-3">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  <GithubIcon />
                  View GitHub
                </a>
                <a
                  href={siteConfig.releases}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold transition-colors hover:bg-surface"
                >
                  All releases
                </a>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* DOWNLOAD */}
        <Section className="relative overflow-hidden border-t border-primary/10 text-center">
          <Petals />
          <Reveal>
            <img src={icon} alt="" width={64} height={64} className="mx-auto size-16 rounded-2xl" />
            <h2 className="mt-8 text-4xl font-bold sm:text-5xl">Ready to read?</h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
              Get Honya, add a repository, and start building your library.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={siteConfig.apk}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Download APK · {siteConfig.version}
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-8 py-4 text-sm font-semibold transition-colors hover:bg-surface"
              >
                <GithubIcon />
                GitHub
              </a>
            </div>
          </Reveal>
        </Section>
      </main>

      <footer className="border-t border-primary/10 py-12">
        <div className="container-page flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={icon} alt="" className="size-7 rounded-lg" />
              <span className="font-display text-base font-semibold">Honya</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              A lightweight, offline-first web novel reader. Honya uses the LNReader extension
              ecosystem.
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
            <a
              href={siteConfig.developerUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {siteConfig.developer}
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer noopener"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href={siteConfig.lnreader}
              target="_blank"
              rel="noreferrer noopener"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              LNReader project
            </a>
          </nav>
        </div>
        <div className="container-page mt-10 border-t border-primary/10 pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.developer} · {siteConfig.license} License · Not
          affiliated with LNReader.
        </div>
      </footer>
    </div>
  );
}
