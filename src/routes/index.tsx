import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Facebook } from "lucide-react";
import logoAsset from "@/assets/super-pizza-logo.png.asset.json";

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

function Index() {
  return (
    <div style={{ ...body, backgroundColor: CREAM, color: INK }} className="min-h-screen">
      {/* Checkered top strip */}
      <Checkered className="h-6" />

      {/* Nav */}
      <header className="sticky top-6 z-30" style={{ backgroundColor: CREAM }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 border-b-2" style={{ borderColor: INK }}>
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Super Pizza" className="h-12 w-auto" />
          </a>
          <nav className="hidden sm:flex gap-8 text-sm uppercase tracking-widest" style={display}>
            <a href="#menu" className="hover:text-[color:var(--sp-red)]" style={{ ["--sp-red" as string]: RED }}>Carta</a>
            <a href="#horario">Horario</a>
            <a href="#contacto">Visítanos</a>
          </nav>
          <a
            href="tel:+34962837771"
            className="inline-flex items-center gap-2 rounded-none px-4 py-2 text-sm font-bold uppercase tracking-wider text-white"
            style={{ backgroundColor: RED, ...display, letterSpacing: "0.1em" }}
          >
            <Phone className="h-4 w-4" /> 96 283 77 71
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-24 sm:pt-24 sm:pb-32 grid gap-10 md:grid-cols-12 items-center">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-10" style={{ backgroundColor: RED }} />
              <span style={display} className="text-sm tracking-[0.3em]">Tavernes de Valldigna · Desde siempre</span>
            </div>
            <h1
              style={{ ...display, lineHeight: 0.9 }}
              className="text-[15vw] sm:text-[9rem] md:text-[11rem]"
            >
              <span style={{ color: RED }}>SUPER</span>
              <br />
              <span style={{ color: BLUE }}>PIZZA</span>
            </h1>
            <p style={serif} className="mt-6 max-w-lg text-xl italic text-stone-700">
              "Tomate, queso y orégano. El resto — como a ti te guste."
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#menu"
                className="inline-flex items-center px-6 py-3 text-sm uppercase tracking-widest text-white"
                style={{ backgroundColor: INK, ...display, letterSpacing: "0.15em" }}
              >
                Ver la carta →
              </a>
              <a
                href="tel:+34678969601"
                className="inline-flex items-center px-6 py-3 text-sm uppercase tracking-widest border-2"
                style={{ borderColor: INK, ...display, letterSpacing: "0.15em" }}
              >
                678 96 96 01
              </a>
            </div>
          </div>

          <div className="md:col-span-5 relative">
            <div className="relative">
              <div
                className="absolute -inset-6 -z-10"
                style={{
                  backgroundImage: `repeating-conic-gradient(${RED} 0 25%, ${CREAM} 0 50%)`,
                  backgroundSize: "40px 40px",
                  opacity: 0.9,
                }}
              />
              <div className="bg-[color:var(--cream)] p-8 border-2 relative" style={{ ["--cream" as string]: CREAM, borderColor: INK }}>
                <img src={logo} alt="Logo Super Pizza" className="w-full h-auto" />
              </div>
              <div
                className="absolute -bottom-6 -right-6 rounded-full flex items-center justify-center text-white text-center p-6 rotate-[8deg] shadow-lg"
                style={{ backgroundColor: BLUE, width: 140, height: 140, ...display, lineHeight: 1 }}
              >
                <div>
                  <div className="text-4xl">21</div>
                  <div className="text-xs tracking-widest mt-1">PIZZAS DE LA CASA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Checkered className="h-5" />
      </section>

      {/* Strip of features */}
      <section className="border-b-2" style={{ backgroundColor: BLUE, color: CREAM, borderColor: INK }}>
        <div className="mx-auto max-w-6xl px-4 py-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          {[
            "Al gusto del cliente",
            "Masa hecha en casa",
            "Para llevar y comer aquí",
          ].map((t) => (
            <div key={t} style={display} className="uppercase tracking-[0.25em] text-sm sm:text-base">
              ★ {t} ★
            </div>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <div style={display} className="text-sm uppercase tracking-[0.4em]" >— La Carta —</div>
            <h2 style={display} className="text-6xl sm:text-8xl mt-2" >
              <span style={{ color: RED }}>Nuestras</span> <span style={{ color: BLUE }}>pizzas</span>
            </h2>
          </div>
          <p style={serif} className="italic text-stone-600 max-w-sm text-lg">
            Todas con tomate, queso y orégano. Ingredientes extra: +0,50 € individual · +1 € familiar.
          </p>
        </div>

        {/* Pizzas list */}
        <div className="border-2" style={{ borderColor: INK, backgroundColor: "#fff" }}>
          <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-3 border-b-2" style={{ borderColor: INK, backgroundColor: RED, color: "#fff", ...display, letterSpacing: "0.15em" }}>
            <div className="col-span-7 uppercase text-sm">Pizza</div>
            <div className="col-span-1 text-right uppercase text-sm">Porción</div>
            <div className="col-span-2 text-right uppercase text-sm">Individual</div>
            <div className="col-span-2 text-right uppercase text-sm">Familiar</div>
          </div>
          <ul>
            {pizzas.map((p, idx) => (
              <li
                key={p.n}
                className="grid grid-cols-12 gap-2 sm:gap-4 px-4 sm:px-6 py-4 items-baseline"
                style={{ borderBottom: idx === pizzas.length - 1 ? "none" : `1px dashed ${INK}33` }}
              >
                <div className="col-span-12 sm:col-span-7 flex gap-3">
                  <span style={display} className="text-2xl" >{String(p.n).padStart(2, "0")}</span>
                  <div>
                    <div style={serif} className="text-xl font-semibold" >{p.name}</div>
                    {p.desc && <div className="text-sm text-stone-500 italic" style={serif}>{p.desc}</div>}
                  </div>
                </div>
                <PriceCell label="Porción" value={p.porcion} />
                <PriceCell label="Individual" value={p.ind} span={2} />
                <PriceCell label="Familiar" value={p.fam} span={2} bold />
              </li>
            ))}
          </ul>
        </div>

        {/* Otras secciones */}
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <MenuBlock title="Ensaladas" subtitle="Con salsa rosa en sobres">
            {ensaladas.map((i) => <Line key={i.name} {...i} />)}
          </MenuBlock>
          <MenuBlock title="Para picar">
            {picar.map((i) => <Line key={i.name} {...i} />)}
          </MenuBlock>
          <MenuBlock title="Pastas">
            {pastas.map((i) => <Line key={i.name} {...i} />)}
          </MenuBlock>
          <MenuBlock title="Bebidas">
            {bebidas.map((i) => <Line key={i.name} {...i} />)}
          </MenuBlock>
        </div>
      </section>

      {/* HORARIO */}
      <section id="horario" className="relative py-20 border-y-2" style={{ borderColor: INK, backgroundColor: "#fff" }}>
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <div style={display} className="text-sm uppercase tracking-[0.4em]">— Cuándo —</div>
            <h2 style={display} className="text-6xl sm:text-8xl mt-2" >
              <span style={{ color: BLUE }}>Abierto</span> <span style={{ color: RED }}>casi siempre</span>
            </h2>
            <div className="mt-8 divide-y-2" style={{ borderColor: INK }}>
              {[
                ["Lunes · Martes", "Cerrado", true],
                ["Miércoles · Jueves · Domingo", "18:00 – 23:00", false],
                ["Viernes · Sábado", "18:00 – 23:30", false],
              ].map(([day, hours, closed]) => (
                <div key={day as string} className="flex items-center justify-between py-4">
                  <span style={serif} className="text-xl sm:text-2xl">{day}</span>
                  <span
                    style={{ ...display, letterSpacing: "0.15em", color: closed ? RED : INK }}
                    className="text-lg sm:text-2xl uppercase"
                  >
                    {hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-square border-2 p-6 flex flex-col items-center justify-center gap-4 text-center relative" style={{ borderColor: INK, backgroundColor: CREAM }}>
              <Clock className="h-10 w-10" style={{ color: RED }} />
              <p style={serif} className="italic text-xl max-w-xs">
                "Llámanos, la sacamos del horno cuando llegues."
              </p>
              <div style={display} className="uppercase tracking-widest text-sm">— La casa —</div>
              <div
                className="absolute inset-x-0 -top-4 h-4"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, ${RED} 0 8px, ${CREAM} 8px 16px)`,
                }}
              />
              <div
                className="absolute inset-x-0 -bottom-4 h-4"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, ${BLUE} 0 8px, ${CREAM} 8px 16px)`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center mb-12">
          <div style={display} className="text-sm uppercase tracking-[0.4em]">— Dónde —</div>
          <h2 style={display} className="text-6xl sm:text-8xl mt-2">
            <span style={{ color: RED }}>Ven</span> <span style={{ color: BLUE }}>a vernos</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Info icon={<MapPin />} title="Dirección">
            <div style={serif} className="text-lg">C/ L'u i el dos s/n</div>
            <div style={serif} className="text-lg">46760 Tavernes de Valldigna</div>
          </Info>
          <Info icon={<Phone />} title="Teléfono">
            <a href="tel:+34962837771" className="block text-lg" style={serif}>96 283 77 71</a>
            <a href="tel:+34678969601" className="block text-lg" style={serif}>678 96 96 01</a>
          </Info>
          <Info icon={<Facebook />} title="Facebook">
            <a
              href="https://www.facebook.com/Superpizza"
              target="_blank"
              rel="noreferrer"
              className="text-lg underline underline-offset-4"
              style={serif}
            >
              /Superpizza
            </a>
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

function MenuBlock({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="border-2 p-6 sm:p-8" style={{ borderColor: INK, backgroundColor: "#fff" }}>
      <div className="flex items-baseline justify-between mb-4">
        <h3 style={display} className="text-3xl sm:text-4xl" >
          <span style={{ color: BLUE }}>{title}</span>
        </h3>
        {subtitle && <span style={serif} className="italic text-sm text-stone-500">{subtitle}</span>}
      </div>
      <div className="h-[2px] w-16 mb-4" style={{ backgroundColor: RED }} />
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function Line({ name, desc, price }: { name: string; desc?: string; price: string }) {
  return (
    <li className="flex items-baseline gap-3">
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

function Info({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="border-2 p-6 text-center" style={{ borderColor: INK, backgroundColor: "#fff" }}>
      <div
        className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-white [&_svg]:h-6 [&_svg]:w-6"
        style={{ backgroundColor: RED }}
      >
        {icon}
      </div>
      <h3 style={display} className="text-2xl uppercase tracking-widest" >{title}</h3>
      <div className="h-[2px] w-10 mx-auto my-3" style={{ backgroundColor: BLUE }} />
      <div>{children}</div>
    </div>
  );
}
