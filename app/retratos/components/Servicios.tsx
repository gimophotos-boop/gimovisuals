export default function Servicios() {
  const servicios = [
    {
      titulo: "Sesiones individuales",
      texto: "Fotografía personal con un estilo natural y profesional.",
    },
    {
      titulo: "Familias",
      texto: "Momentos únicos para conservar los recuerdos más importantes.",
    },
    {
      titulo: "Embarazo e infantil",
      texto: "Sesiones llenas de emoción para recordar una etapa irrepetible.",
    },
    {
      titulo: "Parejas",
      texto: "Fotografías espontáneas y naturales para inmortalizar vuestra historia.",
    },
  ];

  return (
    <section className="bg-black py-20 md:py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12 md:mb-14">

          <p className="uppercase tracking-[5px] text-red-500 text-[11px] font-semibold mb-4">
            SERVICIOS
          </p>

          <h2 className="text-3xl md:text-4xl font-black text-white mb-5">
            Qué ofrecemos
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">

          {servicios.map((servicio) => (

            <div
              key={servicio.titulo}
              className="rounded-[24px] border border-white/10 bg-zinc-950 p-7 md:p-8"
            >

              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                {servicio.titulo}
              </h3>

              <p className="text-sm md:text-base text-gray-400 leading-6">
                {servicio.texto}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}