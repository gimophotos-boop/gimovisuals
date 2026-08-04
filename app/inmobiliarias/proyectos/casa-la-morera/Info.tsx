export default function Info() {
  return (
    <section className="py-24 px-6 bg-black">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

        <div>

          <p className="uppercase tracking-[6px] text-red-500 font-semibold mb-4">
            EL PROYECTO
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-10">
            Casa La Morera
          </h2>

          <p className="text-gray-400 text-lg leading-9 mb-8">
            Para este proyecto se realizó un reportaje completo destinado a
            potenciar la comercialización de la vivienda mediante fotografía
            profesional, vídeo cinematográfico y grabaciones aéreas.
          </p>

          <p className="text-gray-400 text-lg leading-9">
            El objetivo fue transmitir amplitud, luminosidad y calidad en cada
            estancia, ofreciendo al comprador una experiencia visual muy por
            encima de un anuncio inmobiliario convencional.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-6">

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

            <h3 className="text-red-500 font-bold mb-4">
              Servicios
            </h3>

            <p className="text-gray-400 leading-8">
              Fotografía<br />
              Vídeo<br />
              Dron
            </p>

          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

            <h3 className="text-red-500 font-bold mb-4">
              Ubicación
            </h3>

            <p className="text-gray-400 leading-8">
              Tarragona
            </p>

          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

            <h3 className="text-red-500 font-bold mb-4">
              Entrega
            </h3>

            <p className="text-gray-400 leading-8">
              24 horas
            </p>

          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">

            <h3 className="text-red-500 font-bold mb-4">
              Contenido
            </h3>

            <p className="text-gray-400 leading-8">
              Web<br />
              Redes Sociales
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}