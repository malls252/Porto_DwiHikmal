import { FaInstagram, FaTiktok, FaGithub, FaLinkedin, FaWhatsapp, FaRegEye } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import project1 from "@/assets/Ponkesdes/Mockup.png";
import project2 from "@/assets/GoBulking/Mockup.png";
import project3 from "@/assets/EchoPoint/Msockup.png";
import { useState } from "react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dwi Hikmal A.R — Junior Web Developer (AI-Assisted)" },
      { name: "description", content: "Selected Project, thoughts, and contact for Dwi Hikmal A.R — Junior Web Developer (AI-Assisted)." },
      { property: "og:title", content: "Dwi Hikmal A.R — Junior Web Developer (AI-Assisted)" },
      { property: "og:description", content: "Selected Project, thoughts, and contact." },
    ],
  }),
  component: Index,
});

const projects = [
  {
    n: "01",
    title: "Ponkesdes Wiloso",
    tag: "Product · Application Website",
    year: "February-2026",
    desc: "Ini adalah project KKN Universitas Merdeka Malang 2026 di Dusun WIloso, Website ini dikembangkan secara kolaboratif dalam Program Kerja KKN, Website ini bertujuan untuk mempermudah masyarakat dalam mengakses informasi kesehatan dan layanan kesehatan di dusun Wiloso.",
    img: project1,
    images: [project1],
    href: "https://wilosoponkesdes.netlify.app/",
    github: "https://github.com/malls252/Ponkesdesnew",
  },
  {
    n: "02",
    title: "Go Bulking",
    tag: "Product · Application Website",
    year: "2025",
    desc: "Ini adalah project website yang saya buat untuk membantu pengguna yang ingin melakukan program bulking, Website ini saya kembangkan menggunakan Next.js, Tailwind CSS, dan beberapa library lainnya. Website ini bertujuan untuk memberikan informasi dan jadwal makanan yang tepat untuk program bulking, serta menghitung total kalori dan kenaikan berat badan pengguna.",
    img: project2,
    images: [project2],
    href: "https://gobulking.vercel.app/",
    github: "https://github.com/malls252/bulking-buddy",
  },
  {
    n: "03",
    title: "Echo Point",
    tag: "Design Apps · Project Design UI/UX",
    year: "2025",
    desc: "Echo Point adalah sebuah design aplikasi yang saya rancang untuk menampilkan hasil dari ide yang saya miliki dan untuk menunjukan kemampuan saya dalam mendesain aplikasi, desain ini dibuat menggunakan Figma dan dapat diakses melalui link berikut.",
    img: project3,
    images: [project3],
    href: "https://www.figma.com/design/pQkfHbpwAjFz9su8Jvpnif/ECHO-POINT?node-id=4001-255&t=c9fJ7B9AgjKGPBh0-1",
  },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/realmalls_?igsh=MWRvNW1oZjRiZXptdA==",
    icon: FaInstagram,
  },
  {
    label: "Tiktok",
    href: "https://www.tiktok.com/@realmalls_?_r=1&_t=ZS-97fUk8hj9wS",
    icon: FaTiktok,
  },
  {
    label: "Github",
    href: "https://github.com/malls252",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dwi-hikmal-044008419?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: FaLinkedin,
  },
];

function Index() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImages, setActiveImages] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    setActiveImages(images);
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % activeImages.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + activeImages.length) % activeImages.length);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-2 truncate font-display text-base font-semibold">
            <span className="text-primary">Junior Web Developer</span> (AI-Assisted)
          </a>
          <nav className="flex items-center gap-1 text-sm sm:gap-2">
            <a href="#top" className="hidden rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground sm:inline-block">Home</a>
            <a href="#about" className="hidden rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground sm:inline-block">About</a>
            <a href="#project" className="hidden rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground sm:inline-block">Project</a>
            <a href="#contact" className="rounded-full bg-primary px-4 py-1.5 font-medium text-primary-foreground transition-opacity hover:opacity-90">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="grain relative overflow-hidden border-b border-border/60">
          <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary/15 blur-3xl" aria-hidden />
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16 lg:py-30">
            <div className="min-w-0">
              <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                Available for Internship — 2026
              </p>
              <h1 className="font-display text-5xl font-medium leading-[0.95] text-foreground sm:text-7xl lg:text-8xl">
                DWI <em className="italic text-primary">HIKMAL</em> <br className="hidden sm:block" /> AKBAR<br className="hidden sm:block" /> RAMADHAN
              </h1>
              <p className="mt-8 max-w-lg text-justify text-base text-muted-foreground sm:text-lg">
                Saya adalah mahasiswa Sistem Informasi yang berfokus pada bidang IT, ui/ux designer dan Web Developer(AI-Assisted), Saya sangat tertarik untuk menciptakan pengalaman digital yang menarik dan selalu berupaya memberikan solusi terbaik pada apa yang saya kerjakan.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#project" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">See Latest Projects</a>
                <a href="#contact" className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary">More</a>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card">
                <img src={portrait} alt="Portrait of Arsen Pradana" width={1024} height={1536} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE / META */}
        <section className="border-b border-border/60 bg-secondary/30">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-6 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:px-8">
            <span>IT Support</span>
            <span>UI/UX Designer</span>
            <span>AI-Assisted Web Development</span>
            <span>|</span>
            <span>Canva</span>
            <span>Figma</span>
            <span>VSCode</span>
            <span>Codex</span>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-b border-border/60 px-5 py-20 sm:px-10 sm:py-60">
          <div className="mx-auto max-w-6xl space-y-10 text-center">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">About</p>
              <h2 className="text-primary font-display text-3xl font-medium sm:text-8xl">A little</h2>
              <h2 className="font-display text-3xl font-medium sm:text-8xl">about me.</h2>
            </div>
            <div className="mx-auto max-w-3xl space-y-6 text-justify text-base text-foreground/85 sm:text-lg">
              <p>
                Saya sangat menyukai dunia IT, UI/UX Designer dan Web Developer(AI-Assisted), Saya selalu berusaha untuk terus belajar dan mengembangkan diri dalam bidang ini. Saya percaya bahwa teknologi dapat memberikan dampak yang positif, dan saya ingin menjadi bagian dari perubahan tersebut. Saya juga sangat tertarik dengan desain, dan saya selalu berusaha untuk menciptakan pengalaman digital yang menarik dan mudah digunakan.
              </p>
              <p>
                Saya memiliki pengalaman dalam mengembangkan website, baik itu untuk kebutuhan pribadi maupun untuk kebutuhan organisasi. Saya juga memiliki pengalaman dalam mengembangkan aplikasi mobile, dan saya selalu berusaha untuk menciptakan pengalaman yang menyenangkan bagi pengguna. Saya percaya bahwa desain yang baik dapat meningkatkan kepuasan pengguna dalam menggunakan produk digital, dan saya selalu berusaha untuk menciptakan desain yang intuitif dan mudah digunakan.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECT */}
        <section id="project" className="border-b border-border/60 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex items-end justify-between gap-6">
              <div className="min-w-0">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Selected Project</p>
                <h2 className="font-display text-3xl font-medium sm:text-5xl">This my Lastest Project.</h2>
              </div>
              <span className="hidden shrink-0 font-display text-sm text-muted-foreground sm:block">3 sProjects</span>
            </div>

            <ul className="grid gap-8 sm:gap-12">
              {projects.map((p) => (
                <li key={p.n}>
                  <article className="group grid gap-6 overflow-hidden text-justify rounded-2xl border border-border bg-card transition-colors hover:border-primary/50 lg:grid-cols-[1.1fr_1fr]">
                    <button
                      type="button"
                      onClick={() => openLightbox(p.images, 0)}
                      className="group/img relative aspect-[4/3] overflow-hidden bg-secondary lg:aspect-auto cursor-zoom-in"
                    >
                      <img
                        src={p.img}
                        alt={p.title}
                        width={1024}
                        height={768}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Overlay + circle icon indicator */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover/img:bg-black/30">
                        <span className="flex h-16 w-16 scale-75 items-center justify-center rounded-full border-2 border-white bg-white/10 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover/img:scale-100 group-hover/img:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M15 3h6v6" />
                            <path d="M9 21H3v-6" />
                            <path d="M21 3l-7 7" />
                            <path d="M3 21l7-7" />
                          </svg>
                        </span>
                      </div>
                    </button>
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
                      <a  href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-fit items-center gap-2 border-b border-primary/40 pb-1 text-sm font-medium text-primary transition-colors hover:border-primary">
                            See Project
                          <span aria-hidden>→</span>
                      </a>

                      {p.github && (
    
                        <a  href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-fit items-center gap-2 border-b border-border pb-1 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                        >
                          GitHub
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.15 8.96 7.51 10.42.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.05.66-3.7-1.3-3.7-1.3-.5-1.26-1.22-1.6-1.22-1.6-1-.68.07-.67.07-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.58 1.2 3.2.92.1-.71.38-1.2.7-1.48-2.44-.28-5-1.22-5-5.44 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.12a10.5 10.5 0 0 1 5.5 0c2.1-1.42 3.02-1.12 3.02-1.12.6 1.52.22 2.64.11 2.92.7.77 1.13 1.75 1.13 2.95 0 4.23-2.57 5.16-5.02 5.43.39.34.74 1 .74 2.03 0 1.47-.01 2.65-.01 3.01 0 .29.2.64.76.53A10.52 10.52 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>


        {/* CONTACT */}
        <section id="contact" className="grain relative overflow-hidden px-5 py-20 sm:px-8 sm:py-50">
          <div className="pointer-events-none absolute right-0 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
            <h2 className="font-display text-4xl font-medium leading-[1.05] sm:text-6xl lg:text-7xl">
              Satu pesan bisa jadi awal sesuatu yang keren.<br />
              <em className="italic text-primary">Let's make it happen.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Kamu hubungi aku lewat WhatsApp atau email yang tertera. Siapa tahu kita cocok buat kerja bareng.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              
              <a  href="mailto:dwihikmalakbar@gmail.com"
                className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">
                <MdEmail className="h-4 w-4" />Email
              </a>
              
              <a  href="https://wa.me/+628815520154"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">
                <FaWhatsapp className="h-4 w-4" />WhatsApp
              </a>

              <a  href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">
                <FaRegEye className="h-4 w-4" />CV
              </a>
            </div>

            <ul className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  
                  <a  href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 transition-colors hover:text-primary">
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 px-5 py-8 sm:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 text-xs text-muted-foreground">
          <p className="truncate">© 2026 Dwi Hikmal Akbar Ramadhan — Malang.</p>
          <p>v1.0 · PWA</p>
        </div>
      </footer>
      {lightboxOpen && (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4"
    onClick={closeLightbox}
  >
    {/* Tombol close */}
    <button
      type="button"
      onClick={closeLightbox}
      className="absolute right-5 top-5 text-2xl text-white/80 hover:text-white"
      aria-label="Close"
    >
      ✕
    </button>

    {/* Tombol prev */}
    {activeImages.length > 1 && (
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          prevImage();
        }}
        className="absolute left-4 text-3xl text-white/80 hover:text-white sm:left-8"
        aria-label="Previous"
      >
        ‹
      </button>
    )}

    {/* Gambar aktif */}
    <img
      src={activeImages[activeIndex]}
      alt={`Slide ${activeIndex + 1}`}
      className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
      onClick={(e) => e.stopPropagation()}
    />

    {/* Tombol next */}
    {activeImages.length > 1 && (
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          nextImage();
        }}
        className="absolute right-4 text-3xl text-white/80 hover:text-white sm:right-8"
        aria-label="Next"
      >
        ›
      </button>
    )}

    {/* Indikator titik */}
    {activeImages.length > 1 && (
      <div className="absolute bottom-6 flex gap-2">
        {activeImages.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full ${
              i === activeIndex ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    )}
  </div>
)}
    </div>
  );
}
