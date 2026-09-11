import Hero from "./components/Hero";
import Servicios from "./components/Servicios";

const categorias = [
  {
    titulo: "Sesiones en la playa",
    descripcion: "Retratos realizados en playas y entornos costeros.",
    imagen: "/assets/images/retratos/categorias/playa.jpg",
    enlace: "/retratos/playa",
  },
  {
    titulo: "Sesiones en la naturaleza",
    descripcion: "Bosques, montaña, campo y entornos naturales.",
    imagen: "/assets/images/retratos/categorias/naturaleza.jpg",
    enlace: "/retratos/naturaleza",
  },
  {
    titulo: "Sesiones urbanas",
    descripcion: "Retratos con un estilo urbano, callejero y moderno.",
    imagen: "/assets/images/retratos/categorias/urbano.jpg",
    enlace: "/retratos/urbano",
  },
  {
    titulo: "Embarazo",
    descripcion: "Sesiones de embarazo y maternidad.",
    imagen: "/assets/images/retratos/categorias/embarazo.jpg",
    enlace: "/retratos/embarazo",
  },
  {
    titulo: "Familiar y pareja",
    descripcion: "Sesiones para parejas, familias y momentos especiales.",
    imagen: "/assets/images/retratos/categorias/familiar-pareja.jpg",
    enlace: "/retratos/familiar-pareja",
  },
  {
    titulo: "Lugares especiales",
    descripcion: "Sesiones realizadas en escenarios únicos y especiales.",
    imagen: "/assets/images/retratos/categorias/lugares-especiales.jpg",
    enlace: "/retratos/lugares-especiales",
  },
];

export default function RetratosPage() {
  return (
    <main className="bg-black text-white">
      <Hero />

      <Servicios />

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-6">
            PORTFOLIO
          </p>

          <h2 className="text-5xl md:text-7xl font-black">
            Mis retratos
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Explora las diferentes sesiones y estilos de fotografía de retrato.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {categorias.map((categoria) => (
            <a
              key={categoria.enlace}
              href={categoria.enlace}
              className="group relative overflow-hidden rounded-[28px] aspect-[4/5] bg-zinc-900"
            >
              <img
                src={categoria.imagen}
                alt={categoria.titulo}
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-black">
                  {categoria.titulo}
                </h3>

                <p className="mt-3 text-gray-300">
                  {categoria.descripcion}
                </p>

                <span className="inline-block mt-6 text-red-500 font-semibold">
                  Ver sesiones →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
