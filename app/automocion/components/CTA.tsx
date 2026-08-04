export default function CTA() {
  return (
    <section className="bg-black py-32 border-t border-white/10">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-6">
          GIMOPHOTOS
        </p>

        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
          ¿Quieres ver todos mis trabajos?
        </h2>

        <p className="text-xl text-gray-400 leading-9 max-w-3xl mx-auto mb-14">
          En GIMOPHOTOS encontrarás miles de fotografías y vídeos de rally,
          drift, circuitos, concentraciones y eventos del motor realizados
          durante los últimos años.
        </p>

        <a
          href="https://gimophotos.es"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 rounded-full bg-red-600 px-10 py-5 text-xl font-bold text-white transition hover:bg-red-700 hover:scale-105"
        >
          Ver todos los trabajos en GIMOPHOTOS →
        </a>

      </div>

    </section>
  );
}