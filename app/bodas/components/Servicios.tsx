export default function Servicios() {
  const servicios = [
    {
      titulo: "Fotografía de boda",
      texto:
        "Capturamos cada momento de forma natural, elegante y llena de emoción.",
    },
    {
      titulo: "Vídeo cinematográfico",
      texto:
        "Películas de boda con un estilo moderno para revivir vuestro día una y otra vez.",
    },
    {
      titulo: "Dron",
      texto:
        "Imágenes aéreas espectaculares para completar el recuerdo de vuestro gran día.",
    },
    {
      titulo: "Entrega premium",
      texto:
        "Todo el material editado con máxima calidad y preparado para compartir y conservar.",
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