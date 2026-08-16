import { useEffect, useState } from "react";
import icon from "@/assets/honya-icon.png";
import { siteConfig } from "@/lib/site-config";

const LINKS = [
  { href: "#features", label: "Features" },
  { href: "#screenshots", label: "Screenshots" },
  { href: "#about", label: "About" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-primary/15 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div
        className={`container-page flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-14" : "h-20"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src={icon}
            alt=""
            className={`rounded-lg transition-all duration-300 ${scrolled ? "size-7" : "size-9"}`}
          />
          <span className="font-display text-lg font-semibold tracking-tight">Honya</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={siteConfig.apk}
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Download
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-10 place-items-center rounded-lg border border-primary/25 md:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 h-px w-full bg-foreground transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-full bg-foreground transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 h-px w-full bg-foreground transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-primary/15 bg-background md:hidden"
      >
        <nav aria-label="Mobile" className="container-page flex flex-col gap-1 py-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-base text-muted-foreground hover:bg-surface hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => setOpen(false)}
            className="rounded-lg px-2 py-3 text-base text-muted-foreground hover:bg-surface hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={siteConfig.apk}
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground"
          >
            Download APK
          </a>
        </nav>
      </div>
    </header>
  );
}
