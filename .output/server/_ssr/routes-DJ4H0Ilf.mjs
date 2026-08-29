import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as siteConfig } from "./router-B46JRqfW.mjs";
import { _ as Bell, a as Smartphone, c as RefreshCw, d as Layers, f as Languages, g as BookOpen, h as Check, i as Type, l as Palette, m as Download, n as Wrench, o as Rows3, p as HardDrive, r as WifiOff, s as Rocket, t as Zap, u as Library, v as ArrowRight, y as AlignVerticalSpaceAround } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DJ4H0Ilf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var honya_icon_default = "/assets/honya-icon-R2nK221_.png";
var _1_default = "/assets/1-CaY4M0DN.jpeg";
var _2_default = "/assets/2-BTuDpcCg.jpeg";
var _3_default = "/assets/3-CNmrLqs-.jpeg";
var LINKS = [
	{
		href: "#features",
		label: "Features"
	},
	{
		href: "#screenshots",
		label: "Screenshots"
	},
	{
		href: "#themes",
		label: "Themes"
	},
	{
		href: "#whats-new",
		label: "What's New"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 16);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-primary/15 bg-background/85 backdrop-blur-md" : "border-b border-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `container-page flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14" : "h-20"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: honya_icon_default,
						alt: "",
						className: `rounded-lg transition-all duration-300 ${scrolled ? "size-7" : "size-9"}`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg font-semibold tracking-tight",
						children: "Honya"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Main",
					className: "hidden items-center gap-8 md:flex",
					children: [
						LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
							children: l.label
						}, l.href)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: siteConfig.github,
							target: "_blank",
							rel: "noreferrer noopener",
							className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
							children: "GitHub"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: siteConfig.apk,
							className: "rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5",
							children: "Download"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen((v) => !v),
					"aria-expanded": open,
					"aria-controls": "mobile-nav",
					"aria-label": open ? "Close menu" : "Open menu",
					className: "grid size-10 place-items-center rounded-lg border border-primary/25 md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative block h-3 w-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute left-0 h-px w-full bg-foreground transition-all ${open ? "top-1.5 rotate-45" : "top-0"}` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute left-0 top-1.5 h-px w-full bg-foreground transition-opacity ${open ? "opacity-0" : ""}` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute left-0 h-px w-full bg-foreground transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}` })
						]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-nav",
			hidden: !open,
			className: "border-t border-primary/15 bg-background md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Mobile",
				className: "container-page flex flex-col gap-1 py-4",
				children: [
					LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						onClick: () => setOpen(false),
						className: "rounded-lg px-2 py-3 text-base text-muted-foreground hover:bg-surface hover:text-foreground",
						children: l.label
					}, l.href)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: siteConfig.github,
						target: "_blank",
						rel: "noreferrer noopener",
						onClick: () => setOpen(false),
						className: "rounded-lg px-2 py-3 text-base text-muted-foreground hover:bg-surface hover:text-foreground",
						children: "GitHub"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: siteConfig.apk,
						onClick: () => setOpen(false),
						className: "mt-2 rounded-full bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground",
						children: "Download APK"
					})
				]
			})
		})]
	});
}
var PETALS = [
	{
		left: "6%",
		size: 10,
		dur: 18,
		delay: 0,
		drift: "60px",
		op: .35
	},
	{
		left: "18%",
		size: 7,
		dur: 24,
		delay: 4,
		drift: "-40px",
		op: .25
	},
	{
		left: "31%",
		size: 12,
		dur: 21,
		delay: 9,
		drift: "80px",
		op: .3
	},
	{
		left: "47%",
		size: 8,
		dur: 27,
		delay: 2,
		drift: "-70px",
		op: .22
	},
	{
		left: "63%",
		size: 11,
		dur: 19,
		delay: 12,
		drift: "50px",
		op: .32
	},
	{
		left: "76%",
		size: 6,
		dur: 25,
		delay: 6,
		drift: "-30px",
		op: .24
	},
	{
		left: "88%",
		size: 9,
		dur: 22,
		delay: 15,
		drift: "45px",
		op: .28
	}
];
/** Subtle falling sakura petals. Purely decorative. */
function Petals() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": "true",
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: PETALS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "petal",
			style: {
				left: p.left,
				width: p.size,
				height: p.size,
				animationDuration: `${p.dur}s`,
				animationDelay: `-${p.delay}s`,
				"--petal-drift": p.drift,
				"--petal-opacity": p.op
			}
		}, i))
	});
}
/** Device frame around a real Honya screenshot. */
function Phone({ src, alt, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative mx-auto w-full max-w-[260px] rounded-[2.2rem] border border-primary/25 bg-surface p-2 shadow-[0_30px_80px_-30px_rgba(237,141,176,0.35)] ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-3 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-background/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			loading: "lazy",
			decoding: "async",
			className: "block w-full rounded-[1.7rem] bg-background object-cover"
		})]
	});
}
/** Reveals children on scroll. Falls back to visible when IO is unavailable. */
function Reveal({ children, delay = 0, className = "", as = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el || typeof IntersectionObserver === "undefined") {
			setShown(true);
			return;
		}
		const io = new IntersectionObserver((entries) => {
			if (entries[0]?.isIntersecting) {
				setShown(true);
				io.disconnect();
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -40px 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(as, {
		ref,
		className: `reveal ${shown ? "reveal-in" : ""} ${className}`,
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
var THEMES = [
	{
		name: "Honya Sakura",
		bg: "#000000",
		surface: "#0A0A0F",
		text: "#FFF8F3",
		muted: "#A89BA0",
		primary: "#ED8DB0",
		onPrimary: "#000000",
		primaryContainer: "#3D1F2E",
		onPrimaryContainer: "#FFF8F3",
		secondaryContainer: "#1A1218",
		outline: "#2A2A35"
	},
	{
		name: "Blossom",
		bg: "#FFF8F9",
		surface: "#FFFFFF",
		text: "#241A1C",
		muted: "#6E6063",
		primary: "#B0485F",
		onPrimary: "#FFFFFF",
		primaryContainer: "#FFD9E0",
		onPrimaryContainer: "#400412",
		secondaryContainer: "#F1DCE0",
		outline: "#D8C0C6"
	},
	{
		name: "Forest",
		bg: "#0F1512",
		surface: "#131A16",
		text: "#E2ECE5",
		muted: "#A0B0A5",
		primary: "#8FD4A8",
		onPrimary: "#0D2F1C",
		primaryContainer: "#1D3F2C",
		onPrimaryContainer: "#C9F0D6",
		secondaryContainer: "#203026",
		outline: "#2F3D34"
	},
	{
		name: "Onyx",
		bg: "#000000",
		surface: "#0E0E12",
		text: "#EDEDF2",
		muted: "#9C97A8",
		primary: "#B7A4FF",
		onPrimary: "#241A55",
		primaryContainer: "#332569",
		onPrimaryContainer: "#E6DDFF",
		secondaryContainer: "#241F33",
		outline: "#2A2A33"
	},
	{
		name: "Daylight",
		bg: "#FDFBFF",
		surface: "#FFFFFF",
		text: "#1C1B20",
		muted: "#5E5A68",
		primary: "#5B45B8",
		onPrimary: "#FFFFFF",
		primaryContainer: "#E6DDFF",
		onPrimaryContainer: "#20005F",
		secondaryContainer: "#E6E0EF",
		outline: "#CFC9DB"
	},
	{
		name: "Midnight",
		bg: "#101014",
		surface: "#17171D",
		text: "#E7E4EE",
		muted: "#A49FB4",
		primary: "#B7A4FF",
		onPrimary: "#241A55",
		primaryContainer: "#3B2F7A",
		onPrimaryContainer: "#E6DDFF",
		secondaryContainer: "#332F45",
		outline: "#3A3A46"
	},
	{
		name: "Ocean",
		bg: "#071A24",
		surface: "#0D2935",
		text: "#E7F7FA",
		muted: "#91B8C0",
		primary: "#28B8C7",
		onPrimary: "#04262B",
		primaryContainer: "#0F4A55",
		onPrimaryContainer: "#B8EDF2",
		secondaryContainer: "#167D91",
		outline: "#254A58"
	},
	{
		name: "Amethyst",
		bg: "#120D1C",
		surface: "#1D1529",
		text: "#F3EDFF",
		muted: "#B5A7C9",
		primary: "#9B6DFF",
		onPrimary: "#160B2E",
		primaryContainer: "#3B2770",
		onPrimaryContainer: "#E2D5FF",
		secondaryContainer: "#6D3BB5",
		outline: "#4A3F5C"
	},
	{
		name: "Ember",
		bg: "#1A0F0C",
		surface: "#291714",
		text: "#FFF1E8",
		muted: "#C9A99B",
		primary: "#E87845",
		onPrimary: "#2B0D03",
		primaryContainer: "#5A2A1C",
		onPrimaryContainer: "#FFE2CC",
		secondaryContainer: "#A8442A",
		outline: "#59433C"
	},
	{
		name: "Arctic",
		bg: "#F4F8FB",
		surface: "#FFFFFF",
		text: "#17232D",
		muted: "#667784",
		primary: "#3B82B6",
		onPrimary: "#FFFFFF",
		primaryContainer: "#D3E7F7",
		onPrimaryContainer: "#0E3A5C",
		secondaryContainer: "#6BA8D1",
		outline: "#C4D0DA"
	},
	{
		name: "Coffee",
		bg: "#17120E",
		surface: "#241B15",
		text: "#F7EBDD",
		muted: "#B9A494",
		primary: "#D39A6A",
		onPrimary: "#2C1706",
		primaryContainer: "#59351C",
		onPrimaryContainer: "#F6D6B3",
		secondaryContainer: "#7A4E2C",
		outline: "#4A3A2E"
	},
	{
		name: "Sage",
		bg: "#111713",
		surface: "#1B231D",
		text: "#F0F4EA",
		muted: "#AAB5A2",
		primary: "#9CAF88",
		onPrimary: "#1C2818",
		primaryContainer: "#3A4730",
		onPrimaryContainer: "#DCE8CE",
		secondaryContainer: "#4A5A3F",
		outline: "#41503F"
	},
	{
		name: "Rosewood",
		bg: "#170D0E",
		surface: "#261416",
		text: "#F8E9E7",
		muted: "#B99A99",
		primary: "#C66A72",
		onPrimary: "#2D0A0E",
		primaryContainer: "#5C2730",
		onPrimaryContainer: "#F6D2D2",
		secondaryContainer: "#823F49",
		outline: "#563B3E"
	},
	{
		name: "Parchment",
		bg: "#F1E7D2",
		surface: "#FFF8E9",
		text: "#30251D",
		muted: "#76695C",
		primary: "#8A5A32",
		onPrimary: "#FFFFFF",
		primaryContainer: "#EBD8BE",
		onPrimaryContainer: "#3A2410",
		secondaryContainer: "#E8D3B4",
		outline: "#D5C3A6"
	},
	{
		name: "Lemon",
		bg: "#17150A",
		surface: "#25220F",
		text: "#FFF9D8",
		muted: "#BDB58A",
		primary: "#E4C84A",
		onPrimary: "#2B2402",
		primaryContainer: "#5E541C",
		onPrimaryContainer: "#FAECB0",
		secondaryContainer: "#6E5D16",
		outline: "#554F2E"
	}
];
function Card({ theme, active, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"aria-pressed": active,
		"data-selected": active,
		onClick: onSelect,
		className: "theme-swatch w-full p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "block rounded-xl border p-3",
			style: {
				backgroundColor: theme.bg,
				borderColor: theme.outline
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block h-1.5 w-12 rounded-full",
					style: { backgroundColor: theme.primary }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-2.5 block h-1.5 w-3/4 rounded-full",
					style: {
						backgroundColor: theme.text,
						opacity: .7
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-2 block h-1.5 rounded-full",
					style: {
						backgroundColor: theme.text,
						opacity: .45
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-2 block h-1.5 w-2/3 rounded-full",
					style: {
						backgroundColor: theme.muted,
						opacity: .6
					}
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-3 block text-sm font-semibold",
			children: theme.name
		})]
	});
}
/** Interactive showcase of Honya's 15 built-in themes. */
function ThemeShowcase() {
	const [active, setActive] = (0, import_react.useState)(0);
	const theme = THEMES[active];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid items-start gap-8 lg:grid-cols-[minmax(0,400px)_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:sticky lg:top-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "theme-room rounded-[2rem] border border-primary/25 p-3 shadow-[0_30px_80px_-30px_rgba(237,141,176,0.35)]",
				style: { backgroundColor: theme.surface },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[1.5rem] p-6 sm:p-7",
					style: {
						backgroundColor: theme.bg,
						color: theme.text
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.18em]",
								style: {
									backgroundColor: theme.primary,
									color: theme.onPrimary
								},
								children: "Honya"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em]",
								style: {
									backgroundColor: theme.secondaryContainer,
									color: theme.text
								},
								children: "Chapter 49"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-xl font-bold leading-snug sm:text-2xl",
							children: theme.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed",
								style: { opacity: .85 },
								children: "The rain had stopped by the time they reached the ridge, leaving the air sharp and clean where the trail climbed through the pines."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed",
								style: { color: theme.muted },
								children: "Below, the valley unfolded slowly, lit in amber — another chapter, ready whenever you are."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 rounded-2xl border px-4 py-3",
							style: {
								borderColor: theme.outline,
								backgroundColor: theme.primaryContainer
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs font-semibold",
								style: { color: theme.onPrimaryContainer },
								children: "Continue reading"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2.5 h-1.5 w-full overflow-hidden rounded-full",
								style: {
									backgroundColor: theme.outline,
									opacity: .5
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full w-3/5 rounded-full",
									style: { backgroundColor: theme.primary }
								})
							})]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted-foreground",
				children: "Tap a theme to preview it in the reader."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid grid-cols-2 gap-3 sm:grid-cols-3",
			children: THEMES.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				theme: t,
				active: i === active,
				onSelect: () => setActive(i)
			}) }, t.name))
		})]
	});
}
var SHOTS = [
	{
		src: _1_default,
		label: "Library",
		alt: "Honya library grid showing novel covers with unread badges and reading progress"
	},
	{
		src: _2_default,
		label: "Catalogs",
		alt: "Honya catalogs screen listing installed source extensions with search"
	},
	{
		src: _3_default,
		label: "Reader",
		alt: "Honya reader screen showing a chapter in clean serif-free typography"
	}
];
var SCREEN_NOTES = [
	"Grid view with unread badges, progress bars and search.",
	"Installed sources, per-source browsing and global search.",
	"Continuous scrolling reader with adjustable typography."
];
var DOWNLOAD_ITEMS = [
	"Batch-download any selection of chapters",
	"A persistent download queue that survives restarts",
	"Live progress per chapter and per batch",
	"Pause and cancel individual downloads",
	"Keeps downloading even while Honya is in the background",
	"Download state stays in sync with library and read progress"
];
var READING_ITEMS = [
	"Continuous scroll with automatic next-chapter loading",
	"Read online or from downloaded chapters",
	"Scroll position and read status saved per chapter",
	"Adjustable typography inside the reader"
];
var LIBRARY_ITEMS = [
	"A personal library that lives on your device",
	"Search across library, catalogs and history",
	"Unread badges and per-novel progress",
	"Recently read chapters in history",
	"New-chapter updates surface as a feed"
];
var UPDATE_ITEMS = [
	"One-tap manual library updates",
	"Automatic updates on your schedule",
	"New chapters detected across your library",
	"Background processing with clear state reporting"
];
var NOTIFY_ITEMS = [
	"Download and update progress",
	"Background activity stays visible",
	"Quiet completion and result summaries"
];
var INAPP_ITEMS = [
	"Checks for newer Honya releases",
	"Notifies you when an update is available",
	"Downloads the new APK",
	"Hands off to Android's installer when you're ready"
];
var FLOW = [
	{
		step: "Add repository",
		body: "Paste a plugin repository URL into Honya."
	},
	{
		step: "Browse extensions",
		body: "See every extension that repository ships."
	},
	{
		step: "Install extension",
		body: "Fetched only when you tap Install."
	},
	{
		step: "Discover novels",
		body: "Popular, latest, search — whatever the plugin exposes."
	},
	{
		step: "Read",
		body: "Stream it, or download chapters for offline."
	}
];
var PERSONALIZATION = [
	{
		icon: Palette,
		label: "15 app themes",
		note: "Switch the whole look of Honya in one tap."
	},
	{
		icon: Type,
		label: "Font size",
		note: "Comfortable at any distance."
	},
	{
		icon: AlignVerticalSpaceAround,
		label: "Line height",
		note: "Dial in the vertical rhythm."
	},
	{
		icon: Rows3,
		label: "Page padding",
		note: "Keep the reading column just right."
	},
	{
		icon: Layers,
		label: "Reader backgrounds",
		note: "Presets that work with any theme."
	},
	{
		icon: Languages,
		label: "5 languages",
		note: "Arabic included, read right-to-left."
	}
];
var WHATS_NEW = [
	{
		icon: Rocket,
		title: "Expo SDK 57",
		body: "The underlying Expo / React Native stack was modernized to keep the foundation current."
	},
	{
		icon: Download,
		title: "Background downloads",
		body: "Long-running downloads continue more reliably while Honya is outside the foreground."
	},
	{
		icon: RefreshCw,
		title: "Better library updates",
		body: "Improved manual and automatic updates, including background processing and better state reporting."
	},
	{
		icon: Languages,
		title: "German & Italian",
		body: "Two more interface languages bring Honya to five supported languages."
	},
	{
		icon: Zap,
		title: "Performance",
		body: "Snappier interactions with large libraries and long chapter lists."
	},
	{
		icon: Wrench,
		title: "Reliability",
		body: "Improved synchronization, background processing, and overall stability."
	}
];
var LANGUAGES = [
	{
		label: "English",
		note: "Left-to-right"
	},
	{
		label: "Français",
		note: "Left-to-right"
	},
	{
		label: "العربية",
		note: "Right-to-left layout",
		rtl: true
	},
	{
		label: "Deutsch",
		note: "Left-to-right"
	},
	{
		label: "Italiano",
		note: "Left-to-right"
	}
];
function GithubIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 16 16",
		fill: "currentColor",
		className: "size-4",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.4 7.4 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z" })
	});
}
function Section({ id, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: `scroll-mt-20 py-20 sm:py-28 ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page",
			children
		})
	});
}
function CheckList({ items, cols = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: `grid gap-2 text-sm text-muted-foreground ${cols ? "sm:grid-cols-2" : ""}`,
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex gap-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
				className: "mt-0.5 size-4 shrink-0 text-primary",
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "leading-relaxed",
				children: item
			})]
		}, item))
	});
}
function FeatureGroup({ icon: Icon, title, subtitle, items, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "panel h-full p-6 transition-colors hover:border-primary/40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "size-6 text-primary",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 text-lg font-semibold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: subtitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, { items }),
			note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs text-muted-foreground/80",
				children: note
			}) : null
		]
	});
}
function Landing() {
	const [active, setActive] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Petals, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": "true",
							className: "pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] max-w-[140vw] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "container-page relative",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: honya_icon_default,
										alt: "Honya app icon",
										width: 80,
										height: 80,
										className: "float-soft size-20 rounded-2xl border border-primary/20 shadow-[0_20px_60px_-20px_rgba(237,141,176,0.5)]"
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										delay: 80,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "#whats-new",
											className: "mt-8 inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-surface",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "size-1.5 rounded-full bg-primary",
													"aria-hidden": "true"
												}),
												siteConfig.version,
												" is out — see what's new"
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										delay: 140,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
											className: "mt-5 text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl",
											children: [
												"Read more.",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-primary",
													children: "Wait less."
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										delay: 200,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
											children: "Honya is a lightweight, customizable web novel reader for Android. Read online or offline, manage your library, download chapters in bulk, extend it with community plugins, and make the reader your own."
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										delay: 280,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-9 flex flex-col gap-3 sm:flex-row sm:items-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: siteConfig.apk,
												className: "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5",
												children: ["Download Honya", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "opacity-70",
													children: siteConfig.version
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: siteConfig.github,
												target: "_blank",
												rel: "noreferrer noopener",
												className: "inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-surface",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GithubIcon, {}), "View on GitHub"]
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
										delay: 340,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-6 text-xs text-muted-foreground",
											children: [
												"Android APK · ",
												siteConfig.version,
												" · MIT licensed · No account, no tracking"
											]
										})
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
									delay: 200,
									className: "relative",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-end justify-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
											src: _2_default,
											alt: "Honya catalogs screen with installed source extensions",
											className: "hidden max-w-[190px] opacity-70 sm:block"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
											src: _1_default,
											alt: "Honya library screen with novel covers and unread badges",
											className: "max-w-[240px]"
										})]
									})
								})]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					id: "screenshots",
					className: "border-t border-primary/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "App showcase"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-2xl text-3xl font-bold sm:text-4xl",
						children: "The whole app, in three screens."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 grid items-center gap-10 lg:grid-cols-[320px_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							src: SHOTS[active].src,
							alt: SHOTS[active].alt
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 120,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								role: "tablist",
								"aria-label": "App screens",
								className: "flex flex-col gap-3",
								children: SHOTS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									role: "tab",
									type: "button",
									"aria-selected": active === i,
									onClick: () => setActive(i),
									className: `rounded-xl border px-5 py-4 text-left transition-colors ${active === i ? "border-primary/60 bg-surface" : "border-border/60 hover:border-primary/30 hover:bg-surface/60"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `block text-base font-semibold ${active === i ? "text-primary" : ""}`,
										children: s.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-sm text-muted-foreground",
										children: SCREEN_NOTES[i]
									})]
								}, s.label))
							})
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					id: "features",
					className: "border-t border-primary/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Features"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-2xl text-3xl font-bold sm:text-4xl",
						children: "Everything a reader needs. Nothing it doesn't."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 grid gap-4 lg:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 60,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "panel border-primary/40 p-6 transition-colors hover:border-primary/60 sm:p-8 lg:col-span-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid items-center gap-8 lg:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center rounded-full border border-primary/40 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-primary",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
													className: "mr-1.5 size-3.5",
													"aria-hidden": "true"
												}), "Spotlight"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-4 text-2xl font-bold sm:text-3xl",
												children: "Download Manager"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-sm leading-relaxed text-muted-foreground",
												children: "Honya's downloads grew up. Queue entire backlogs, track progress per chapter, and let Honya keep fetching while you do something else — then read it all offline."
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
											items: DOWNLOAD_ITEMS,
											cols: true
										})]
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 80,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureGroup, {
									icon: BookOpen,
									title: "Reading",
									subtitle: "A flow built for long sessions",
									items: READING_ITEMS
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 140,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureGroup, {
									icon: Library,
									title: "Library & history",
									subtitle: "Your personal shelf, always in sync",
									items: LIBRARY_ITEMS
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 100,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureGroup, {
									icon: RefreshCw,
									title: "Updates",
									subtitle: "Never miss a new chapter",
									items: UPDATE_ITEMS
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 160,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureGroup, {
									icon: Bell,
									title: "Notifications",
									subtitle: "Progress without prying",
									items: NOTIFY_ITEMS,
									note: "Pause and cancel controls live in the Download Manager."
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: 120,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "panel p-6 transition-colors hover:border-primary/40 sm:p-8 lg:col-span-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] sm:items-start",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, {
												className: "size-6 text-primary",
												"aria-hidden": "true"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-4 text-xl font-bold",
												children: "In-app updates"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm leading-relaxed text-muted-foreground",
												children: "When a new release lands, Honya can fetch it and let Android take it from there."
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
											items: INAPP_ITEMS,
											cols: true
										})]
									})
								})
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					className: "border-t border-primary/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-12 lg:grid-cols-2 lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							className: "lg:order-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "The reader"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 text-3xl font-bold sm:text-4xl",
									children: "Built for long sessions."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-base leading-relaxed text-muted-foreground",
									children: "A continuous scrolling reader that loads the next chapter on its own, with adjustable font size, line height and padding, five background presets, and progress saved per chapter as you go — online or from downloaded chapters."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
									className: "mt-8 grid gap-4 sm:grid-cols-2",
									children: [
										["Continuous scroll", "The next chapter loads before you reach the end"],
										["Typography", "Font size, line height and padding controls"],
										["Reader backgrounds", "5 presets, independent of the app theme"],
										["Offline", "Downloaded chapters open without a connection"]
									].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "panel p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-sm font-semibold text-primary",
											children: t
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "mt-1 text-sm text-muted-foreground",
											children: d
										})]
									}, t))
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 120,
							className: "lg:order-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								src: _3_default,
								alt: "Honya reader displaying a novel chapter"
							})
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					id: "offline",
					className: "relative overflow-hidden border-t border-primary/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": "true",
						className: "pointer-events-none absolute -left-24 top-1/2 size-80 -translate-y-1/2 rounded-full bg-primary/10 blur-[110px]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative grid gap-12 lg:grid-cols-2 lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Offline-first"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-3xl font-bold sm:text-4xl",
								children: "Download what you want. Read whenever you want."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-base leading-relaxed text-muted-foreground",
								children: "Honya keeps your reading where it belongs — on your device. Grab a single chapter or a whole backlog, then read with no connection at all. An internet connection is only needed when you want to fetch something new."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, { items: [
								"Read downloaded chapters with no connection",
								"Progress and read state stored locally",
								"Library and chapter state persist on-device",
								"Download Manager keeps large batches manageable"
							] })
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 120,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-3",
								children: [
									{
										icon: Download,
										title: "Download what you need",
										body: "Single chapters, entire arcs, or a full backlog."
									},
									{
										icon: WifiOff,
										title: "Read without a connection",
										body: "Commutes, flights, dead zones — no problem."
									},
									{
										icon: HardDrive,
										title: "Everything stays on-device",
										body: "Progress, library and chapter state persist locally."
									}
								].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "panel flex items-start gap-4 p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, {
											className: "size-5",
											"aria-hidden": "true"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold",
										children: c.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: c.body
									})] })]
								}, c.title))
							})
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					id: "extensions",
					className: "border-t border-primary/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-12 lg:grid-cols-2 lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Extensions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-3xl font-bold sm:text-4xl",
								children: "One reader. Your own sources."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-base leading-relaxed text-muted-foreground",
								children: "Honya does not scrape websites itself and ships with no default repositories. Instead it runs LNReader-compatible plugins in a sandboxed runtime — you paste a repository URL, pick the extensions you want, and the reader stays independent of any single website."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, { items: [
								"Add any number of repositories by URL",
								"Extensions are fetched only when you tap Install",
								"Plugin code runs sandboxed with shadowed globals",
								"Standard plugin API: popular, latest, search, novel, chapter"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-8 rounded-xl border border-primary/20 bg-surface/60 p-4 text-sm text-muted-foreground",
								children: [
									"Honya uses the LNReader extension ecosystem. It is an independent project and is not affiliated with or endorsed by",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: siteConfig.lnreader,
										target: "_blank",
										rel: "noreferrer noopener",
										className: "text-primary underline underline-offset-4",
										children: "LNReader"
									}),
									"."
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 120,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								src: _2_default,
								alt: "Honya catalogs screen listing installed extensions"
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 120,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
							children: FLOW.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "panel p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-sm font-bold text-primary",
										children: String(i + 1).padStart(2, "0")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm font-semibold",
										children: s.step
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs leading-relaxed text-muted-foreground",
										children: s.body
									})
								]
							}, s.step))
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					id: "personalization",
					className: "border-t border-primary/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Personalization"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 max-w-2xl text-3xl font-bold sm:text-4xl",
							children: "Make it yours."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground",
							children: "Fifteen themes, a reader you can reshape, and five interface languages — Honya adapts to the way you read."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: PERSONALIZATION.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 60,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "panel h-full p-5 transition-colors hover:border-primary/40",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, {
										className: "size-5 text-primary",
										"aria-hidden": "true"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm font-semibold",
										children: p.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs leading-relaxed text-muted-foreground",
										children: p.note
									})
								]
							})
						}, p.label))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					id: "themes",
					className: "border-t border-primary/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Themes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-bold sm:text-4xl",
							children: "Fifteen themes in the box."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground",
							children: "From Honya Sakura to Lemon — a distinct look for every mood and every time of day."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeShowcase, {}) })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					id: "languages",
					className: "border-t border-primary/10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Languages"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-bold sm:text-4xl",
							children: "Read in your language."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5",
							children: LANGUAGES.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * 60,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "panel p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-xl font-semibold",
										dir: l.rtl ? "rtl" : "ltr",
										lang: l.rtl ? "ar" : void 0,
										children: l.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground",
										children: [l.rtl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded bg-primary/15 px-1.5 py-0.5 font-bold text-primary",
											children: "RTL"
										}) : null, l.note]
									})]
								})
							}, l.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 200,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground",
								children: "Selecting Arabic switches the whole app to an RTL layout. The direction of novel content is handled separately, so a chapter always reads the way it was written."
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					id: "whats-new",
					className: "border-t border-primary/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel relative overflow-hidden p-8 sm:p-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": "true",
								className: "pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/10 blur-[90px]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow relative",
								children: "What's new"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "relative mt-3 text-3xl font-bold sm:text-4xl",
								children: [siteConfig.version, " — the biggest update yet."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "relative mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground",
								children: "The highlights of the latest release — a modern foundation, reliable background work, and two new languages."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
								children: WHATS_NEW.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-primary/10 bg-surface/60 p-5 transition-colors hover:border-primary/30",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-10 place-items-center rounded-xl bg-primary/10 text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
												className: "size-5",
												"aria-hidden": "true"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-3 text-base font-semibold",
											children: item.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 text-sm leading-relaxed text-muted-foreground",
											children: item.body
										})
									]
								}, item.title))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: siteConfig.releases,
								target: "_blank",
								rel: "noreferrer noopener",
								className: "relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80",
								children: ["Read the full release notes", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "size-4",
									"aria-hidden": "true"
								})]
							})
						]
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					id: "about",
					className: "border-t border-primary/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel relative overflow-hidden p-8 sm:p-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": "true",
								className: "pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/10 blur-[90px]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow relative",
								children: "Open source"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "relative mt-3 text-3xl font-bold sm:text-4xl",
								children: "Built in the open."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "relative mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground",
								children: [
									"Honya is developed publicly by ",
									siteConfig.developer,
									" and released under the",
									" ",
									siteConfig.license,
									" license. It is built with React Native and Expo, stores everything locally in SQLite, and has no backend of its own."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: siteConfig.github,
									target: "_blank",
									rel: "noreferrer noopener",
									className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GithubIcon, {}), "View GitHub"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: siteConfig.releases,
									target: "_blank",
									rel: "noreferrer noopener",
									className: "inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold transition-colors hover:bg-surface",
									children: "All releases"
								})]
							})
						]
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					className: "relative overflow-hidden border-t border-primary/10 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Petals, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: honya_icon_default,
							alt: "",
							width: 64,
							height: 64,
							className: "mx-auto size-16 rounded-2xl"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-8 text-4xl font-bold sm:text-5xl",
							children: "Ready to read?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mx-auto mt-4 max-w-lg text-base text-muted-foreground",
							children: [
								"Get Honya ",
								siteConfig.version,
								", add a repository, and start building your library."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-col justify-center gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: siteConfig.apk,
								className: "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5",
								children: ["Download APK · ", siteConfig.version]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: siteConfig.github,
								target: "_blank",
								rel: "noreferrer noopener",
								className: "inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-8 py-4 text-sm font-semibold transition-colors hover:bg-surface",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GithubIcon, {}), "GitHub"]
							})]
						})
					] })]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-primary/10 py-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: honya_icon_default,
							alt: "",
							className: "size-7 rounded-lg"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-base font-semibold",
							children: "Honya"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-sm text-sm text-muted-foreground",
						children: "A lightweight, offline-first web novel reader. Honya uses the LNReader extension ecosystem."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Footer",
						className: "flex flex-col gap-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: siteConfig.developerUrl,
								target: "_blank",
								rel: "noreferrer noopener",
								className: "text-muted-foreground transition-colors hover:text-foreground",
								children: siteConfig.developer
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: siteConfig.github,
								target: "_blank",
								rel: "noreferrer noopener",
								className: "text-muted-foreground transition-colors hover:text-foreground",
								children: "GitHub"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: siteConfig.lnreader,
								target: "_blank",
								rel: "noreferrer noopener",
								className: "text-muted-foreground transition-colors hover:text-foreground",
								children: "LNReader project"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page mt-10 border-t border-primary/10 pt-6 text-xs text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						siteConfig.developer,
						" · ",
						siteConfig.license,
						" License · Not affiliated with LNReader."
					]
				})]
			})
		]
	});
}
//#endregion
export { Landing as component };
