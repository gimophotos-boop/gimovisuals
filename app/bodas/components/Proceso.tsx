export default function Proceso() {
  const pasos = [
    {
      numero: "01",
      titulo: "Planificación",
      texto:
        "Hablamos con vosotros para conocer vuestro estilo, horarios y todos los momentos importantes del día.",
    },
    {
      numero: "02",
      titulo: "Cobertura",
      texto:
        "Capturamos cada instante con fotografía, vídeo y dron cuando la localización lo permite.",
    },
    {
      numero: "03",
      titulo: "Edición",
      texto:
        "Seleccionamos y editamos cada imagen y vídeo cuidando el color, la emoción y cada detalle.",
    },
    {
      numero: "04",
      titulo: "Entrega",
      texto:
        "Recibís todo el material en máxima calidad, listo para conservar y compartir toda la vida.",
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