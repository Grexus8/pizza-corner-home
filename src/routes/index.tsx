import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Facebook, Instagram, ArrowUp } from "lucide-react";
import logoAsset from "@/assets/super-pizza-logo-v2.png.asset.json";

const logo = logoAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Super Pizza — Pizzería en Tavernes de Valldigna" },
      {
        name: "description",
        content:
          "Super Pizza en Tavernes de Valldigna: pizzas artesanas al gusto del cliente, ensaladas, pastas y bebidas. Pide al 96 283 77 71.",
      },
      { property: "og:title", content: "Super Pizza — Tavernes de Valldigna" },
      {
        property: "og:description",
        content:
          "Pizzas artesanas hechas a tu gusto en Tavernes de Valldigna. C/ L'u i el dos s/n.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fraunces:ital,wght@0,600;0,800;1,600&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

type Pizza = { n: number; name: string; desc?: string; porcion?: string; ind?: string; fam: string };

const pizzas: Pizza[] = [
  { n: 1, name: "Jamón", porcion: "2,40", ind: "7,50", fam: "16,50" },
  { n: 2, name: "Bacon y champiñón", porcion: "2,50", ind: "8,00", fam: "17,50" },
  { n: 3, name: "Atún, aceitunas y cebolla", porcion: "2,50", ind: "8,00", fam: "17,50" },
  { n: 4, name: "Jamón y chorizo", porcion: "2,50", ind: "8,00", fam: "17,50" },
  { n: 5, name: "Anchoas, cebolla y champiñón", porcion: "2,50", ind: "8,50", fam: "18,50" },
  { n: 6, name: "Atún, salami y bacon", porcion: "2,50", ind: "8,50", fam: "18,50" },
  { n: 7, name: "Vegetal", desc: "champiñón, cebolla, calabacín y pimiento", porcion: "2,50", ind: "8,50", fam: "18,50" },
  { n: 8, name: "Cuatro quesos", porcion: "2,50", ind: "8,50", fam: "18,50" },
  { n: 9, name: "Americana", desc: "carne picada", porcion: "2,50", ind: "8,50", fam: "18,50" },
  { n: 10, name: "Jamón y nata", porcion: "2,50", ind: "8,00", fam: "17,50" },
  { n: 11, name: "Pollo", desc: "con salsa barbacoa", porcion: "2,50", ind: "8,50", fam: "18,50" },
  { n: 12, name: "Kebab", desc: "ternera de kebab con salsa de yogur", porcion: "2,50", ind: "8,50", fam: "18,50" },
  { n: 13, name: "Sabrosa", desc: "jamón y piña", ind: "8,00", fam: "17,50" },
  { n: 14, name: "Carbonara", desc: "bacon, champiñón y nata", ind: "8,50", fam: "18,50" },
  { n: 15, name: "Hawaiana", desc: "bacon, piña y dátiles", ind: "8,50", fam: "18,50" },
  { n: 16, name: "Rabiosa", desc: "frankfurt, cebolla y chorizo picante", ind: "8,50", fam: "18,50" },
  { n: 17, name: "Cuatro estaciones", desc: "jamón, chorizo, champiñón y cebolla", ind: "8,50", fam: "18,50" },
  { n: 18, name: "O Sole Mio", desc: "atún, pimiento, anchoa y huevo", ind: "9,00", fam: "19,50" },
  { n: 19, name: "Barbacoa", desc: "carne, bacon y salsa barbacoa", ind: "9,00", fam: "19,50" },
  { n: 20, name: "Marinera", desc: "atún, salmón y gambas", ind: "9,00", fam: "19,50" },
  { n: 21, name: "Especial", ind: "9,00", fam: "19,50" },
];

const ensaladas = [
  { name: "Superpizza", desc: "lechuga, jamón, huevo, atún, espárragos y zanahoria", price: "4,30" },
  { name: "Tropical", desc: "lechuga, jamón, cangrejo, piña y maíz", price: "4,30" },
  { name: "Fantasía", desc: "lechuga, cangrejo, mazorquitas de maíz, piña y gambas", price: "4,30" },
];

const picar = [
  { name: "Alitas de pollo (picantes)", price: "4,30" },
  { name: "Nuggets de pollo", desc: "8 ud. con salsa barbacoa", price: "4,30" },
  { name: "Patatas a la carbonara", price: "4,50" },
  { name: "Bolsa de papas pequeña", price: "1,00" },
  { name: "Bolsa de papas grande", price: "2,20" },
];

const pastas = [
  { name: "Lasaña de carne", price: "5,50" },
  { name: "Canelones de carne", price: "5,50" },
];

const bebidas = [
  { name: "Agua pequeña", price: "1,00" },
  { name: "Agua grande 1,5 L", price: "1,50" },
  { name: "Refresco lata", price: "1,50" },
  { name: "Refresco 1 litro", price: "2,20" },
  { name: "Cerveza lata", price: "1,50" },
  { name: "Cerveza litro", price: "2,50" },
  { name: "Vino tinto o rosado", price: "4,00" },
  { name: "Vino Lambrusco", price: "4,00" },
  { name: "Vino Peñascal", price: "5,50" },
];

const display = { fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" } as const;
const serif = { fontFamily: "'Fraunces', serif" } as const;
const body = { fontFamily: "'Inter', sans-serif" } as const;

// Red/blue palette inspired by the logo
const RED = "#c8102e";
const BLUE = "#1e3a8a";
const CREAM = "#fdf6e3";
const INK = "#1a1a1a";

const NAV = [
  { href: "#menu", label: "Carta" },
  { href: "#horario", label: "Horario" },
  { href: "#contacto", label: "Contacto" },
];

// [días (getDay), etiqueta, horas, cierre en minutos desde 00:00 | null si cerrado]
const HORARIO: { days: number[]; label: string; hours: string; close: number | null }[] = [
  { days: [1, 2], label: "Lunes · Martes", hours: "Cerrado", close: null },
  { days: [3, 4, 0], label: "Miércoles · Jueves · Domingo", hours: "18:00 – 23:00", close: 23 * 60 },
  { days: [5, 6], label: "Viernes · Sábado", hours: "18:00 – 23:30", close: 23 * 60 + 30 },
];

/** Marks an element as visible once it scrolls into view. */
function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen] as const;
}

function Reveal({
  children,
  delay = 0,
  className = "",
  style,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: "div" | "li" | "section";
}) {
  const [ref, seen] = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref as never}
      className={`sp-reveal ${seen ? "is-in" : ""} ${className}`}
      style={{ ...style, ["--d" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/** Counts from 0 to `to` once visible. */
function CountUp({ to }: { to: number }) {
  const [ref, seen] = useInView<HTMLSpanElement>();
  const [n, setN] = useState(to);
  useEffect(() => {
    if (!seen) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = performance.now();
    const dur = 1200;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    setN(0);
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to]);
  return <span ref={ref}>{n}</span>;
}

function Nav({ progress, scrolled }: { progress: number; scrolled: boolean }) {
  return (
    <header
      className="sp-nav fixed inset-x-0 top-0 z-50"
      style={{
        backgroundColor: scrolled ? `${CREAM}ee` : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        boxShadow: scrolled ? `0 2px 0 ${INK}` : "none",
        transform: scrolled ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2" aria-label="Super Pizza, inicio">
          <img src={logo} alt="" className="h-9 w-auto" />
          <span style={display} className="text-xl tracking-widest">
            <span style={{ color: RED }}>SUPER</span> <span style={{ color: BLUE }}>PIZZA</span>
          </span>
        </a>
        <nav className="flex items-center gap-4 sm:gap-8" style={{ ...display, letterSpacing: "0.15em" }}>
          {NAV.map((l) => (
            <a key={l.href} href={l.href} className="text-sm sm:text-base uppercase">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="h-[3px]">
        <div
          className="h-full origin-left"
          style={{ backgroundColor: RED, transform: `scaleX(${progress})` }}
        />
      </div>
    </header>
  );
}

function OpenNow() {
  const [state, setState] = useState<{ open: boolean; today: number } | null>(null);
  useEffect(() => {
    const compute = () => {
      const d = new Date();
      const mins = d.getHours() * 60 + d.getMinutes();
      const slot = HORARIO.find((h) => h.days.includes(d.getDay()))!;
      setState({
        today: d.getDay(),
        open: slot.close !== null && mins >= 18 * 60 && mins < slot.close,
      });
    };
    compute();
    const id = setInterval(compute, 60_000);
    return () => clearInterval(id);
  }, []);
  if (!state) return null;
  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-1 text-sm uppercase border-2"
      style={{ ...display, letterSpacing: "0.15em", borderColor: INK, backgroundColor: "#fff" }}
    >
      {state.open ? (
        <>
          <span className="sp-live" /> Abierto ahora
        </>
      ) : (
        <>
          <span className="inline-block h-[10px] w-[10px] rounded-full" style={{ backgroundColor: RED }} />
          Cerrado ahora
        </>
      )}
    </span>
  );
}

function Index() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    setToday(new Date().getDay());
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? window.scrollY / max : 0);
        setScrolled(window.scrollY > 320);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div style={{ ...body, backgroundColor: CREAM, color: INK }} className="min-h-screen">
      <Nav progress={progress} scrolled={scrolled} />

      {/* Checkered top strip */}
      <Checkered className="h-6" />

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-24 sm:pt-24 sm:pb-32 grid gap-10 md:grid-cols-12 items-center">
          <div className="md:col-span-7">
            <div className="sp-rise flex items-center gap-3 mb-6" style={{ ["--d" as string]: "0ms" }}>
              <span className="h-[2px] w-10" style={{ backgroundColor: RED }} />
              <span style={display} className="text-sm tracking-[0.3em]">Tavernes de Valldigna</span>
            </div>
            <h1
              style={{ ...display, lineHeight: 0.9 }}
              className="text-[15vw] sm:text-[9rem] md:text-[11rem]"
            >
              <span className="sp-rise inline-block" style={{ color: RED, ["--d" as string]: "100ms" }}>SUPER</span>
              <br />
              <span className="sp-rise inline-block" style={{ color: BLUE, ["--d" as string]: "250ms" }}>PIZZA</span>
            </h1>
            <p style={{ ...serif, ["--d" as string]: "450ms" }} className="sp-rise mt-6 max-w-lg text-xl italic text-stone-700">
              "Hacemos la pizza a tu gusto"
            </p>
            <div className="sp-rise mt-8 flex flex-wrap items-center gap-3" style={{ ["--d" as string]: "600ms" }}>
              <a
                href="#menu"
                className="sp-btn inline-flex items-center px-6 py-3 text-sm uppercase tracking-widest text-white"
                style={{ backgroundColor: INK, ...display, letterSpacing: "0.15em" }}
              >
                Ver la carta →
              </a>
              <a
                href="tel:+34678969601"
                className="sp-btn inline-flex items-center px-6 py-3 text-sm uppercase tracking-widest border-2"
                style={{ borderColor: INK, ...display, letterSpacing: "0.15em" }}
              >
                678 96 96 01
              </a>
              <OpenNow />
            </div>
          </div>

          <div className="sp-rise md:col-span-5 relative" style={{ ["--d" as string]: "300ms" }}>
            <div className="relative sp-float">
              <div className="bg-[color:var(--cream)] p-8 border-2 relative" style={{ ["--cream" as string]: CREAM, borderColor: INK }}>
                <img src={logo} alt="Logo Super Pizza" className="w-full h-auto" fetchPriority="high" />
              </div>
              <div className="sp-pop absolute -bottom-6 -right-6">
                <div
                  className="sp-wobble rounded-full flex items-center justify-center text-white text-center p-6 shadow-lg"
                  style={{ backgroundColor: BLUE, width: 140, height: 140, ...display, lineHeight: 1 }}
                >
                  <div>
                    <div className="text-4xl"><CountUp to={21} /></div>
                    <div className="text-xs tracking-widest mt-1">PIZZAS DE LA CASA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Checkered className="h-5" />
      </section>

      {/* Strip of stars */}
      <section
        className="sp-marquee overflow-hidden border-b-2 py-4"
        style={{ backgroundColor: BLUE, color: CREAM, borderColor: INK }}
        aria-label="Pizzas a tu gusto, ensaladas, pastas y bebidas"
      >
        <div className="sp-marquee-track" style={display} aria-hidden="true">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 items-center">
              {["Pizzas a tu gusto", "Ensaladas", "Pastas", "Para picar", "Bebidas frías", "Tavernes de Valldigna"].map((t) => (
                <span key={t} className="flex items-center text-2xl sm:text-3xl uppercase tracking-[0.15em]">
                  {t}
                  <span className="mx-6 sm:mx-10" style={{ color: "#f5c542" }}>★</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="mx-auto max-w-6xl px-4 py-20">
        <Reveal className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <div style={display} className="text-sm uppercase tracking-[0.4em]" >— La Carta —</div>
            <h2 style={display} className="text-6xl sm:text-8xl mt-2" >
              <span style={{ color: RED }}>Nuestras</span> <span style={{ color: BLUE }}>pizzas</span>
            </h2>
          </div>
          <p style={serif} className="italic text-stone-600 max-w-sm text-lg">
            Todas con tomate, queso y orégano. Ingredientes extra: +0,50 € individual · +1 € familiar.
          </p>
        </Reveal>

        {/* Pizzas list */}
        <Reveal>
        <div className="border-2" style={{ borderColor: INK, backgroundColor: "#fff" }}>
          <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-3 border-b-2" style={{ borderColor: INK, backgroundColor: RED, color: "#fff", ...display, letterSpacing: "0.15em" }}>
            <div className="col-span-7 uppercase text-sm">Pizza</div>
            <div className="col-span-1 text-right uppercase text-sm">Porción</div>
            <div className="col-span-2 text-right uppercase text-sm">Individual</div>
            <div className="col-span-2 text-right uppercase text-sm">Familiar</div>
          </div>
          <ul>
            {pizzas.map((p, idx) => (
              <Reveal
                as="li"
                key={p.n}
                delay={(idx % 4) * 60}
                className="sp-row grid grid-cols-12 gap-2 sm:gap-4 px-4 sm:px-6 py-4 items-baseline"
                style={{ borderBottom: idx === pizzas.length - 1 ? "none" : `1px dashed ${INK}33` }}
              >
                <div className="col-span-12 sm:col-span-7 flex gap-3">
                  <span style={display} className="sp-num text-2xl" >{String(p.n).padStart(2, "0")}</span>
                  <div>
                    <div style={serif} className="text-xl font-semibold" >{p.name}</div>
                    {p.desc && <div className="text-sm text-stone-500 italic" style={serif}>{p.desc}</div>}
                  </div>
                </div>
                <PriceCell label="Porción" value={p.porcion} />
                <PriceCell label="Individual" value={p.ind} span={2} />
                <PriceCell label="Familiar" value={p.fam} span={2} bold />
              </Reveal>
            ))}
          </ul>
        </div>
        </Reveal>

        {/* Otras secciones */}
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <MenuBlock title="Ensaladas" subtitle="Con salsa rosa en sobres" delay={0}>
            {ensaladas.map((i) => <Line key={i.name} {...i} />)}
          </MenuBlock>
          <MenuBlock title="Para picar" delay={100}>
            {picar.map((i) => <Line key={i.name} {...i} />)}
          </MenuBlock>
          <MenuBlock title="Pastas" delay={0}>
            {pastas.map((i) => <Line key={i.name} {...i} />)}
          </MenuBlock>
          <MenuBlock title="Bebidas" delay={100}>
            {bebidas.map((i) => <Line key={i.name} {...i} />)}
          </MenuBlock>
        </div>
      </section>

      {/* HORARIO */}
      <section id="horario" className="relative py-20 border-y-2" style={{ borderColor: INK, backgroundColor: "#fff" }}>
        <div className="mx-auto max-w-6xl px-4">
          <Reveal>
            <div style={display} className="text-sm uppercase tracking-[0.4em]">— Horario —</div>
            <h2 style={display} className="text-6xl sm:text-8xl mt-2" >
              <span style={{ color: BLUE }}>Abierto</span> <span style={{ color: RED }}>casi siempre</span>
            </h2>
          </Reveal>
          <div className="mt-8 divide-y-2" style={{ borderColor: INK }}>
            {HORARIO.map((h, i) => {
              const isToday = today !== null && h.days.includes(today);
              return (
                <Reveal
                  key={h.label}
                  delay={i * 100}
                  className="flex items-center justify-between gap-4 py-4 px-3 -mx-3 transition-colors duration-300"
                  style={{ backgroundColor: isToday ? `${CREAM}` : "transparent" }}
                >
                  <span style={serif} className="text-xl sm:text-2xl flex items-center gap-3">
                    {h.label}
                    {isToday && (
                      <span
                        className="text-xs px-2 py-0.5 text-white"
                        style={{ ...display, letterSpacing: "0.2em", backgroundColor: BLUE }}
                      >
                        HOY
                      </span>
                    )}
                  </span>
                  <span
                    style={{ ...display, letterSpacing: "0.15em", color: h.close === null ? RED : INK }}
                    className="text-lg sm:text-2xl uppercase whitespace-nowrap"
                  >
                    {h.hours}
                  </span>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="mx-auto max-w-6xl px-4 py-20">
        <Reveal className="text-center mb-12">
          <div style={display} className="text-sm uppercase tracking-[0.4em]">— Dónde —</div>
          <h2 style={display} className="text-6xl sm:text-8xl mt-2">
            <span style={{ color: RED }}>Ven</span> <span style={{ color: BLUE }}>a vernos</span>
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          <Info icon={<MapPin />} title="Dirección" delay={0}>
            <div style={serif} className="text-lg">C/ L'u i el dos s/n</div>
            <div style={serif} className="text-lg">46760 Tavernes de Valldigna</div>
          </Info>
          <Info icon={<Phone />} title="Teléfono" delay={120}>
            <a href="tel:+34962837771" className="sp-link block text-lg" style={serif}>96 283 77 71</a>
            <a href="tel:+34678969601" className="sp-link block text-lg" style={serif}>678 96 96 01</a>
          </Info>
          <Info icon={<Facebook />} title="Redes" delay={240}>
            <div className="flex items-center justify-center gap-2">
              <Facebook className="h-5 w-5" style={{ color: BLUE }} />
              <a
                href="https://www.facebook.com/Superpizza"
                target="_blank"
                rel="noreferrer"
                className="sp-link text-lg"
                style={serif}
              >
                /Superpizza
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Instagram className="h-5 w-5" style={{ color: RED }} />
              <a
                href="https://www.instagram.com/tavernessuperpizza"
                target="_blank"
                rel="noreferrer"
                className="sp-link text-lg"
                style={serif}
              >
                tavernessuperpizza
              </a>
            </div>
          </Info>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: INK, color: CREAM }}>
        <Checkered className="h-5" />
        <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Super Pizza" className="h-14 w-auto bg-white p-1" />
            <div>
              <div style={display} className="text-2xl tracking-widest">SUPER PIZZA</div>
              <div className="text-xs opacity-70">Tavernes de Valldigna · © {new Date().getFullYear()}</div>
            </div>
          </div>
          <div className="text-sm opacity-70" style={serif}>Hecho al gusto del cliente 🍕</div>
        </div>
      </footer>

      <button
        type="button"
        aria-label="Volver arriba"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="sp-btn fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center border-2 text-white"
        style={{
          backgroundColor: RED,
          borderColor: INK,
          opacity: scrolled ? 1 : 0,
          transform: scrolled ? undefined : "translateY(16px) scale(0.8)",
          pointerEvents: scrolled ? "auto" : "none",
        }}
        tabIndex={scrolled ? 0 : -1}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}

function Checkered({ className = "" }: { className?: string }) {
  return (
    <div
      className={className}
      style={{
        backgroundImage:
          `repeating-conic-gradient(${RED} 0 25%, ${CREAM} 0 50%)`,
        backgroundSize: "24px 24px",
      }}
    />
  );
}

function PriceCell({
  label,
  value,
  span = 1,
  bold = false,
}: {
  label: string;
  value?: string;
  span?: 1 | 2;
  bold?: boolean;
}) {
  const cls = span === 2 ? "col-span-4 sm:col-span-2" : "col-span-4 sm:col-span-1";
  return (
    <div className={`${cls} text-right`}>
      <span className="sm:hidden text-[10px] uppercase tracking-widest text-stone-500 mr-1" style={display}>
        {label}
      </span>
      <span
        style={{ ...display, color: bold ? RED : INK }}
        className={`text-lg sm:text-xl ${bold ? "font-bold" : ""}`}
      >
        {value ? `${value} €` : "—"}
      </span>
    </div>
  );
}

function MenuBlock({
  title,
  subtitle,
  delay = 0,
  children,
}: {
  title: string;
  subtitle?: string;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <Reveal
      delay={delay}
      className="sp-card border-2 p-6 sm:p-8"
      style={{ borderColor: INK, backgroundColor: "#fff" }}
    >
      <div className="flex items-baseline justify-between mb-4">
        <h3 style={display} className="text-3xl sm:text-4xl" >
          <span style={{ color: BLUE }}>{title}</span>
        </h3>
        {subtitle && <span style={serif} className="italic text-sm text-stone-500">{subtitle}</span>}
      </div>
      <div className="sp-bar h-[2px] w-16 mb-4" style={{ backgroundColor: RED }} />
      <ul className="space-y-3">{children}</ul>
    </Reveal>
  );
}

function Line({ name, desc, price }: { name: string; desc?: string; price: string }) {
  return (
    <li className="sp-line flex items-baseline gap-3">
      <span style={serif} className="text-lg">
        {name}
        {desc && <span className="italic text-stone-500 text-sm"> — {desc}</span>}
      </span>
      <span className="flex-1 border-b border-dotted mb-1" style={{ borderColor: `${INK}55` }} />
      <span style={{ ...display, color: RED }} className="text-lg whitespace-nowrap">
        {price} €
      </span>
    </li>
  );
}

function Info({
  icon,
  title,
  delay = 0,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <Reveal
      delay={delay}
      className="sp-card border-2 p-6 text-center"
      style={{ borderColor: INK, backgroundColor: "#fff" }}
    >
      <div
        className="sp-icon mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-white [&_svg]:h-6 [&_svg]:w-6"
        style={{ backgroundColor: RED }}
      >
        {icon}
      </div>
      <h3 style={display} className="text-2xl uppercase tracking-widest" >{title}</h3>
      <div className="h-[2px] w-10 mx-auto my-3" style={{ backgroundColor: BLUE }} />
      <div>{children}</div>
    </Reveal>
  );
}
