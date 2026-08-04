export default function Proceso() {
  const pasos = [
    {
      numero: "01",
      titulo: "Planificación",
      texto:
        "Definimos el objetivo del proyecto, la localización y el tipo de contenido que mejor representa tu marca.",
    },
    {
      numero: "02",
      titulo: "Producción",
      texto:
        "Realizamos fotografía, vídeo y dron con un enfoque totalmente profesional y adaptado a cada vehículo.",
    },
    {
      numero: "03",
      titulo: "Edición",
      texto:
        "Cada fotografía y cada vídeo reciben un tratamiento individual para conseguir un acabado cinematográfico.",
    },
    {
      numero: "04",
      titulo: "Entrega",
      texto:
        "Recibes el contenido optimizado para web, redes sociales, publicidad y cualquier otro formato que necesites.",
    },
  ];

  return (
    <section className="bg-black py-32 border-t border-white/10">

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
              className="rounded-[30px] border border-white/10 bg-zinc-950 p-8"
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