/**
 * Single place for every external URL / version string used by the site.
 * Update these when a new Honya release ships.
 */
export const siteConfig = {
  name: "Honya",
  tagline: "Read more. Wait less.",
  description:
    "A lightweight, offline-first novel reader powered by the LNReader-compatible extension ecosystem.",
  version: "v1.2.0",
  github: "https://github.com/TheDeadShadow47/Honya",
  developer: "TheDeadShadow47",
  developerUrl: "https://github.com/TheDeadShadow47",
  releases: "https://github.com/TheDeadShadow47/Honya/releases",
  /** Verified release asset for the current version. */
  apk: "https://github.com/TheDeadShadow47/Honya/releases/download/v1.2.0/Honya-v1.2.0.apk",
  lnreader: "https://github.com/LNReader/lnreader",
  license: "MIT",
} as const;
