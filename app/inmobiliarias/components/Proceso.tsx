export default function Proceso() {
  const pasos = [
    {
      numero: "01",
      titulo: "Planificación",
      texto:
        "Analizamos la propiedad, la mejor hora de luz y el contenido necesario para destacar frente a la competencia.",
    },
    {
      numero: "02",
      titulo: "Sesión",
      texto:
        "Realizamos fotografías, vídeo y dron mostrando cada espacio desde su mejor perspectiva.",
    },
    {
      numero: "03",
      titulo: "Edición",
      texto:
        "Todas las imágenes y vídeos reciben una edición profesional para transmitir amplitud, luminosidad y calidad.",
    },
    {
      numero: "04",
      titulo: "Entrega",
      texto:
        "Recibes todo el material optimizado para Idealista, Fotocasa, redes sociales y página web.",
    },
  ];

  return (
    <section className="bg-zinc-950 py-32 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-6">
            PROCESO
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white">
            Cómo trabajamos
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {pasos.map((paso) => (

            <div
              key={paso.numero}
              className="rounded-[30px] border border-white/10 bg-black p-8"
            >

              <p className="text-6xl font-black text-red-600 mb-6">
                {paso.numero}
              </p>

              <h3 className="text-2xl font-bold text-white mb-4">
                {paso.titulo}
              </h3>

              <p className="text-gray-400 leading-8">
                {paso.texto}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}