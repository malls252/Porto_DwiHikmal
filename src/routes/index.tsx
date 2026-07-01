import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arsen Pradana — Designer & Developer Portfolio" },
      { name: "description", content: "Selected work, thoughts, and contact for Arsen Pradana — a designer and developer crafting calm digital products." },
      { property: "og:title", content: "Arsen Pradana — Designer & Developer" },
      { property: "og:description", content: "Selected work, thoughts, and contact." },
    ],
  }),
  component: Index,
});

const projects = [
  {
    n: "01",
    title: "Lumen Banking",
    tag: "Product · Mobile",
    year: "2025",
    desc: "A calmer way to handle money. Redesigned the mobile flow around weekly rhythms instead of endless feeds.",
    img: project1,
  },
  {
    n: "02",
    title: "Kenverse Atelier",
    tag: "E-commerce · Web",
    year: "2024",
    desc: "A slow-fashion storefront that treats each product like a printed editorial spread.",
    img: project2,
  },
  {
    n: "03",
    title: "Dalloge Tea Co.",
    tag: "Branding · Identity",
    year: "2024",
    desc: "Identity system for a single-origin tea brand — packaging, type, and a warm palette pulled from dried botanicals.",
    img: project3,
  },
];

const skills = [
  "Product Design", "Design Systems", "React / TypeScript",
  "Tailwind / CSS", "Motion", "Brand Identity",
  "Prototyping", "UX Writing",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-2">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-primary font-display text-lg font-bold text-primary-foreground">A</span>
            <span className="truncate font-display text-base font-semibold">Arsen Pradana</span>
          </a>
          <nav className="flex items-center gap-1 text-sm sm:gap-2">
            <a href="#work" className="hidden rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground sm:inline-block">Work</a>
            <a href="#about" className="hidden rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground sm:inline-block">About</a>
            <a href="#contact" className="rounded-full bg-primary px-4 py-1.5 font-medium text-primary-foreground transition-opacity hover:opacity-90">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="grain relative overflow-hidden border-b border-border/60">
          <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary/15 blur-3xl" aria-hidden />
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16 lg:py-32">
            <div className="min-w-0">
              <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                Available for new work — Q3 2026
              </p>
              <h1 className="font-display text-5xl font-medium leading-[0.95] text-foreground sm:text-7xl lg:text-8xl">
                Designing <em className="italic text-primary">calm</em>,<br className="hidden sm:block" /> useful digital<br className="hidden sm:block" /> products.
              </h1>
              <p className="mt-8 max-w-lg text-base text-muted-foreground sm:text-lg">
                I'm Arsen — a designer and developer based in Bandung. I help teams ship interfaces that feel slower, clearer, and a little bit warmer.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#work" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">See selected work</a>
                <a href="#contact" className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary">Get in touch</a>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card">
                <img src={portrait} alt="Portrait of Arsen Pradana" width={1024} height={1536} className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-xl sm:block">
                <p className="font-display text-2xl font-semibold text-primary">6+ yrs</p>
                <p className="text-xs text-muted-foreground">crafting interfaces</p>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE / META */}
        <section className="border-b border-border/60 bg-secondary/30">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-6 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:px-8">
            <span>Bandung · ID</span>
            <span className="hidden sm:inline">Figma → Code</span>
            <span>Available worldwide</span>
            <span className="hidden sm:inline">Selected 2020 → 2026</span>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="border-b border-border/60 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex items-end justify-between gap-6">
              <div className="min-w-0">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Selected Work</p>
                <h2 className="font-display text-3xl font-medium sm:text-5xl">Things I'm proud of.</h2>
              </div>
              <span className="hidden shrink-0 font-display text-sm text-muted-foreground sm:block">— 03 projects</span>
            </div>

            <ul className="grid gap-8 sm:gap-12">
              {projects.map((p) => (
                <li key={p.n}>
                  <article className="group grid gap-6 overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50 lg:grid-cols-[1.1fr_1fr]">
                    <div className="aspect-[4/3] overflow-hidden bg-secondary lg:aspect-auto">
                      <img src={p.img} alt={p.title} width={1024} height={768} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-col justify-between gap-8 p-6 sm:p-10">
                      <div>
                        <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                          <span className="font-display text-primary">{p.n}</span>
                          <span>{p.year}</span>
                        </div>
                        <h3 className="mt-4 font-display text-3xl font-medium sm:text-4xl">{p.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{p.tag}</p>
                        <p className="mt-6 text-base text-foreground/80">{p.desc}</p>
                      </div>
                      <a href="#contact" className="inline-flex w-fit items-center gap-2 border-b border-primary/40 pb-1 text-sm font-medium text-primary transition-colors hover:border-primary">
                        Read case study
                        <span aria-hidden>→</span>
                      </a>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-b border-border/60 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">About</p>
              <h2 className="font-display text-3xl font-medium sm:text-5xl">A short story.</h2>
            </div>
            <div className="space-y-6 text-base text-foreground/85 sm:text-lg">
              <p>
                I started as a self-taught web designer at 16, building band sites in cafés around Bandung. Twelve years later I still chase the same feeling — when a product clicks and disappears into the background of someone's day.
              </p>
              <p>
                Today I split my time between independent product work and consulting with small teams on design systems, brand, and front-end. I care about typography, restraint, and shipping.
              </p>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
                {skills.map((s) => (
                  <span key={s} className="bg-card px-4 py-3 text-sm text-foreground/90">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="grain relative overflow-hidden px-5 py-20 sm:px-8 sm:py-32">
          <div className="pointer-events-none absolute right-0 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
            <h2 className="font-display text-4xl font-medium leading-[1.05] sm:text-6xl lg:text-7xl">
              Have a project in mind?<br />
              <em className="italic text-primary">Let's talk.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              I take on a handful of projects each year. Tell me what you're building and we'll see if it's a fit.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href="mailto:hello@arsen.studio" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">hello@arsen.studio</a>
              <a href="#" className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary">Book a call</a>
            </div>

            <ul className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-primary">Twitter / X</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Dribbble</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">GitHub</a></li>
              <li><a href="#" className="transition-colors hover:text-primary">Read.cv</a></li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 px-5 py-8 sm:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 text-xs text-muted-foreground">
          <p className="truncate">© 2026 Arsen Pradana — Crafted in Bandung.</p>
          <p>v1.0 · PWA</p>
        </div>
      </footer>
    </div>
  );
}
