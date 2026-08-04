export default function Servicios() {
  const servicios = [
    {
      titulo: "Fotografía inmobiliaria",
      texto:
        "Fotografías profesionales que muestran cada estancia con la mejor luz y composición.",
    },
    {
      titulo: "Vídeo profesional",
      texto:
        "Recorridos cinematográficos para transmitir la experiencia de visitar la vivienda.",
    },
    {
      titulo: "Fotografía con dron",
      texto:
        "Perspectivas aéreas para destacar ubicación, entorno y dimensiones de la propiedad.",
    },
    {
      titulo: "Contenido para redes sociales",
      texto:
        "Vídeos verticales y contenido optimizado para Instagram, Facebook, TikTok y portales inmobiliarios.",
    },
  ];

  return (
    <section className="bg-black py-32">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-6">
            SERVICIOS
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            Qué ofrecemos
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {servicios.map((servicio) => (

            <div
              key={servicio.titulo}
              className="rounded-[30px] border border-white/10 bg-zinc-950 p-10"
            >

              <h3 className="text-3xl font-bold text-white mb-6">
                {servicio.titulo}
              </h3>

              <p className="text-gray-400 leading-8">
                {servicio.texto}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}