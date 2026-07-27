import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Facebook } from "lucide-react";
import logo from "@/assets/super-pizza-logo.png";
import heroImg from "@/assets/pizza-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Super Pizza — Pizzería en Tavernes de Valldigna" },
      {
        name: "description",
        content:
          "Super Pizza en Tavernes de Valldigna: pizzas artesanas, ensaladas, pastas y más. Al gusto del cliente. Pide al 96 283 77 71.",
      },
      { property: "og:title", content: "Super Pizza — Tavernes de Valldigna" },
      {
        property: "og:description",
        content:
          "Pizzas artesanas hechas a tu gusto, ensaladas frescas, pastas y para picar. C/ L'u i el dos s/n, Tavernes de Valldigna.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Pizza = { n: number; name: string; desc?: string; porcion?: string; ind?: string; fam: string };

const pizzas: Pizza[] = [
  { n: 1, name: "Jamón", porcion: "2,40 €", ind: "7,50 €", fam: "16,50 €" },
  { n: 2, name: "Bacon y champiñón", porcion: "2,50 €", ind: "8,00 €", fam: "17,50 €" },
  { n: 3, name: "Atún, aceitunas y cebolla", porcion: "2,50 €", ind: "8,00 €", fam: "17,50 €" },
  { n: 4, name: "Jamón y chorizo", porcion: "2,50 €", ind: "8,00 €", fam: "17,50 €" },
  { n: 5, name: "Anchoas, cebolla y champiñón", porcion: "2,50 €", ind: "8,50 €", fam: "18,50 €" },
  { n: 6, name: "Atún, salami y bacon", porcion: "2,50 €", ind: "8,50 €", fam: "18,50 €" },
  { n: 7, name: "Vegetal", desc: "champiñón, cebolla, calabacín y pimiento", porcion: "2,50 €", ind: "8,50 €", fam: "18,50 €" },
  { n: 8, name: "Cuatro quesos", porcion: "2,50 €", ind: "8,50 €", fam: "18,50 €" },
  { n: 9, name: "Americana", desc: "carne picada", porcion: "2,50 €", ind: "8,50 €", fam: "18,50 €" },
  { n: 10, name: "Jamón y nata", porcion: "2,50 €", ind: "8,00 €", fam: "17,50 €" },
  { n: 11, name: "Pollo", desc: "con salsa barbacoa", porcion: "2,50 €", ind: "8,50 €", fam: "18,50 €" },
  { n: 12, name: "Kebab", desc: "ternera de kebab con salsa de yogur", porcion: "2,50 €", ind: "8,50 €", fam: "18,50 €" },
  { n: 13, name: "Sabrosa", desc: "jamón y piña", ind: "8,00 €", fam: "17,50 €" },
  { n: 14, name: "Carbonara", desc: "bacon, champiñón y nata", ind: "8,50 €", fam: "18,50 €" },
  { n: 15, name: "Hawaiana", desc: "bacon, piña y dátiles", ind: "8,50 €", fam: "18,50 €" },
  { n: 16, name: "Rabiosa", desc: "frankfurt, cebolla y chorizo picante", ind: "8,50 €", fam: "18,50 €" },
  { n: 17, name: "Cuatro estaciones", desc: "jamón, chorizo, champiñón y cebolla", ind: "8,50 €", fam: "18,50 €" },
  { n: 18, name: "O Sole Mio", desc: "atún, pimiento, anchoa y huevo", ind: "9,00 €", fam: "19,50 €" },
  { n: 19, name: "Barbacoa", desc: "carne, bacon y salsa barbacoa", ind: "9,00 €", fam: "19,50 €" },
  { n: 20, name: "Marinera", desc: "atún, salmón y gambas", ind: "9,00 €", fam: "19,50 €" },
  { n: 21, name: "Especial", ind: "9,00 €", fam: "19,50 €" },
];

const ensaladas = [
  { name: "Superpizza", desc: "lechuga, jamón, huevo, atún, espárragos y zanahoria", price: "4,30 €" },
  { name: "Tropical", desc: "lechuga, jamón, cangrejo, piña y maíz", price: "4,30 €" },
  { name: "Fantasía", desc: "lechuga, cangrejo, mazorquitas de maíz, piña y gambas", price: "4,30 €" },
];

const picar = [
  { name: "Alitas de pollo (picantes)", price: "4,30 €" },
  { name: "Nuggets de pollo (8 ud. con salsa barbacoa)", price: "4,30 €" },
  { name: "Patatas a la carbonara", price: "4,50 €" },
  { name: "Bolsa de papas pequeña", price: "1,00 €" },
  { name: "Bolsa de papas grande", price: "2,20 €" },
];

const pastas = [
  { name: "Lasaña de carne", price: "5,50 €" },
  { name: "Canelones de carne", price: "5,50 €" },
];

const bebidas = [
  { name: "Agua pequeña", price: "1,00 €" },
  { name: "Agua grande 1,5 L", price: "1,50 €" },
  { name: "Refresco lata", price: "1,50 €" },
  { name: "Refresco 1 litro", price: "2,20 €" },
  { name: "Cerveza lata", price: "1,50 €" },
  { name: "Cerveza litro", price: "2,50 €" },
  { name: "Vino tinto o rosado", price: "4,00 €" },
  { name: "Vino Lambrusco", price: "4,00 €" },
  { name: "Vino Peñascal", price: "5,50 €" },
];

function Index() {
  return (
    <div className="min-h-screen bg-[#fdf7ec] text-stone-800">
      {/* Nav */}
      <header className="sticky top-0 z-30 bg-[#fdf7ec]/95 backdrop-blur border-b border-stone-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#inicio" className="flex items-center gap-2">
            <img src={logo} alt="Super Pizza" className="h-10 w-10 object-contain" width={40} height={40} />
            <span className="font-bold text-red-700 text-lg">Super Pizza</span>
          </a>
          <nav className="hidden gap-6 text-sm font-medium sm:flex">
            <a href="#menu" className="hover:text-red-700">Menú</a>
            <a href="#horario" className="hover:text-red-700">Horario</a>
            <a href="#contacto" className="hover:text-red-700">Contacto</a>
          </nav>
          <a
            href="tel:+34962837771"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-red-700 px-4 py-2 text-sm font-semibold text-white hover:bg-red-800"
          >
            <Phone className="h-4 w-4" /> Pedir
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 -z-10 bg-black/45" />
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28 text-center text-white">
          <img
            src={logo}
            alt="Logo Super Pizza"
            className="mx-auto mb-6 h-40 w-40 sm:h-48 sm:w-48 object-contain drop-shadow-xl"
            width={192}
            height={192}
          />
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight drop-shadow">
            Super Pizza
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Pizzas artesanas hechas al gusto del cliente, en el corazón de
            Tavernes de Valldigna. Tomate, queso y orégano en todas — el resto,
            como a ti te guste.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#menu"
              className="rounded-full bg-red-700 px-6 py-3 font-semibold hover:bg-red-800"
            >
              Ver el menú
            </a>
            <a
              href="tel:+34962837771"
              className="rounded-full border-2 border-white px-6 py-3 font-semibold hover:bg-white hover:text-stone-900"
            >
              Llamar: 96 283 77 71
            </a>
          </div>
        </div>
      </section>

      {/* Menú */}
      <section id="menu" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-red-700">Nuestro menú</h2>
          <p className="mt-2 text-stone-600">
            Todas las pizzas llevan tomate, queso y orégano. Se hacen a gusto del
            cliente. Ingredientes adicionales: +0,50 € individual · +1 € familiar.
          </p>
        </div>

        {/* Pizzas */}
        <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-stone-200">
          <h3 className="mb-4 text-2xl font-bold text-blue-800">Pizzas</h3>
          <div className="hidden sm:grid grid-cols-12 gap-4 border-b border-stone-200 pb-2 text-xs font-semibold uppercase tracking-wide text-stone-500">
            <div className="col-span-6">Pizza</div>
            <div className="col-span-2 text-right">Porción</div>
            <div className="col-span-2 text-right">Individual</div>
            <div className="col-span-2 text-right">Familiar</div>
          </div>
          <ul className="divide-y divide-stone-100">
            {pizzas.map((p) => (
              <li key={p.n} className="grid grid-cols-12 gap-2 sm:gap-4 py-3 items-baseline">
                <div className="col-span-12 sm:col-span-6">
                  <span className="font-semibold text-stone-900">
                    {p.n}. {p.name}
                  </span>
                  {p.desc && (
                    <span className="block text-sm text-stone-500">{p.desc}</span>
                  )}
                </div>
                <div className="col-span-4 sm:col-span-2 text-right text-sm sm:text-base">
                  <span className="sm:hidden text-xs text-stone-500 mr-1">Porción:</span>
                  {p.porcion ?? "—"}
                </div>
                <div className="col-span-4 sm:col-span-2 text-right text-sm sm:text-base">
                  <span className="sm:hidden text-xs text-stone-500 mr-1">Ind.:</span>
                  {p.ind ?? "—"}
                </div>
                <div className="col-span-4 sm:col-span-2 text-right text-sm sm:text-base font-medium text-red-700">
                  <span className="sm:hidden text-xs text-stone-500 mr-1">Fam.:</span>
                  {p.fam}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Grid de secciones */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card title="Ensaladas" note="Con salsa rosa en sobres">
            {ensaladas.map((i) => (
              <Row key={i.name} name={i.name} desc={i.desc} price={i.price} />
            ))}
          </Card>

          <Card title="Para picar">
            {picar.map((i) => (
              <Row key={i.name} name={i.name} price={i.price} />
            ))}
          </Card>

          <Card title="Pastas">
            {pastas.map((i) => (
              <Row key={i.name} name={i.name} price={i.price} />
            ))}
          </Card>

          <Card title="Bebidas">
            {bebidas.map((i) => (
              <Row key={i.name} name={i.name} price={i.price} />
            ))}
          </Card>
        </div>
      </section>

      {/* Horario */}
      <section id="horario" className="bg-white border-y border-stone-200">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-red-700 flex items-center gap-3">
              <Clock className="h-8 w-8" /> Horario
            </h2>
            <p className="mt-3 text-stone-600">
              Te esperamos con las pizzas recién hechas.
            </p>
            <ul className="mt-6 space-y-2 text-lg">
              <li className="flex justify-between border-b border-stone-100 pb-2">
                <span className="font-medium">Lunes y martes</span>
                <span className="text-red-700 font-semibold">Cerrado</span>
              </li>
              <li className="flex justify-between border-b border-stone-100 pb-2">
                <span className="font-medium">Miércoles, jueves y domingo</span>
                <span>18:00 – 23:00</span>
              </li>
              <li className="flex justify-between pb-2">
                <span className="font-medium">Viernes y sábado</span>
                <span>18:00 – 23:30</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-[#fdf7ec] border border-stone-200 p-8 text-center">
            <img
              src={logo}
              alt="Super Pizza"
              className="mx-auto h-40 w-40 object-contain"
              loading="lazy"
              width={160}
              height={160}
            />
            <p className="mt-4 text-stone-700 italic">
              "Hechas al gusto del cliente"
            </p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-red-700">Encuéntranos</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <InfoCard
            icon={<MapPin className="h-6 w-6" />}
            title="Dirección"
            lines={["C/ L'u i el dos s/n", "46760 Tavernes de Valldigna"]}
          />
          <InfoCard
            icon={<Phone className="h-6 w-6" />}
            title="Teléfono"
            lines={[
              <a key="1" href="tel:+34962837771" className="hover:text-red-700">96 283 77 71</a>,
              <a key="2" href="tel:+34678969601" className="hover:text-red-700">678 96 96 01</a>,
            ]}
          />
          <InfoCard
            icon={<Facebook className="h-6 w-6" />}
            title="Facebook"
            lines={[
              <a
                key="fb"
                href="https://www.facebook.com/Superpizza"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-700"
              >
                Superpizza
              </a>,
            ]}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Super Pizza" className="h-10 w-10 object-contain" loading="lazy" width={40} height={40} />
            <span>© {new Date().getFullYear()} Super Pizza · Tavernes de Valldigna</span>
          </div>
          <span className="text-white/70">Hecho con cariño 🍕</span>
        </div>
      </footer>
    </div>
  );
}

function Card({ title, note, children }: { title: string; note?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-stone-200">
      <h3 className="text-2xl font-bold text-blue-800">{title}</h3>
      {note && <p className="text-sm text-stone-500 mt-1">{note}</p>}
      <ul className="mt-4 divide-y divide-stone-100">{children}</ul>
    </div>
  );
}

function Row({ name, desc, price }: { name: string; desc?: string; price: string }) {
  return (
    <li className="flex justify-between gap-4 py-3">
      <div>
        <div className="font-medium text-stone-900">{name}</div>
        {desc && <div className="text-sm text-stone-500">{desc}</div>}
      </div>
      <div className="whitespace-nowrap font-semibold text-red-700">{price}</div>
    </li>
  );
}

function InfoCard({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: React.ReactNode[];
}) {
  return (
    <div className="rounded-2xl bg-white border border-stone-200 p-6 text-center shadow-sm">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-700 text-white">
        {icon}
      </div>
      <h3 className="font-bold text-lg text-blue-800">{title}</h3>
      <div className="mt-2 space-y-1 text-stone-700">
        {lines.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
    </div>
  );
}
