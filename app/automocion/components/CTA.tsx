export default function CTA() {
  return (
    <section className="py-28 px-6 bg-black">

      <div className="max-w-5xl mx-auto text-center">

        <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-6">
          GIMOVISUALS
        </p>

        <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
          ¿Quieres destacar sobre tu competencia?
        </h2>

        <p className="text-xl text-gray-400 leading-9 max-w-3xl mx-auto mb-12">
          Creamos contenido profesional para concesionarios,
          compraventas, eventos, equipos de competición y marcas
          que quieren transmitir calidad y aumentar su impacto.
        </p>

        <a
          href="/#contacto"
          className="inline-flex items-center justify-center rounded-full bg-red-600 px-10 py-5 text-lg font-semibold text-white transition hover:bg-red-700"
        >
          Solicitar presupuesto
        </a>

      </div>

    </section>
  );
}