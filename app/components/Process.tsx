const steps = [
  {
    number: "01",
    title: "Cuéntanos tu idea",
    text: "Hablamos contigo para entender exactamente qué necesitas y qué objetivo quieres conseguir.",
  },
  {
    number: "02",
    title: "Planificamos",
    text: "Organizamos localizaciones, horarios, tomas y todo el material necesario antes de grabar.",
  },
  {
    number: "03",
    title: "Grabación",
    text: "Realizamos la sesión de fotografía y vídeo con equipos profesionales y dron cuando es necesario.",
  },
  {
    number: "04",
    title: "Edición",
    text: "Seleccionamos el mejor material y realizamos una edición cuidada con un acabado cinematográfico.",
  },
  {
    number: "05",
    title: "Entrega",
    text: "Recibes el contenido listo para publicar en redes sociales, web o cualquier otro medio.",
  },
];

export default function Process() {
  return (
    <section className="py-36 bg-black px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-24">

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-5">
            PROCESO
          </p>

          <h2 className="text-5xl md:text-7xl font-black mb-8">
            Así trabajamos
          </h2>

          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Un proceso simple, rápido y pensado para conseguir el mejor resultado.
          </p>

        </div>

        <div className="space-y-10">

          {steps.map((step) => (

            <div
              key={step.number}
              className="flex flex-col md:flex-row items-start gap-8 border-b border-zinc-800 pb-10"
            >

              <div className="text-6xl font-black text-red-600 min-w-[120px]">
                {step.number}
              </div>

              <div>

                <h3 className="text-3xl font-bold mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-400 leading-8 text-lg">
                  {step.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}