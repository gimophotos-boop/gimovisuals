export default function CTA() {
  return (
    <section className="bg-black py-32 border-t border-white/10">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-6">
          CONTACTA
        </p>

        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
          ¿Quieres vender una propiedad más rápido?
        </h2>

        <p className="text-xl text-gray-400 leading-9 max-w-3xl mx-auto mb-14">
          Creamos fotografías, vídeo y contenido audiovisual que consigue
          destacar tus inmuebles frente a la competencia.
        </p>

        <a
          href="/#contact"
          className="inline-flex items-center gap-4 rounded-full bg-red-600 px-10 py-5 text-xl font-bold text-white transition hover:bg-red-700 hover:scale-105"
        >
          Solicitar presupuesto →
        </a>

      </div>

    </section>
  );
}