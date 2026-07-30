const faqs = [
  {
    q: "¿En qué zonas trabajáis?",
    a: "Trabajamos principalmente en Tarragona y Barcelona, aunque nos desplazamos por toda España para proyectos que lo requieran.",
  },
  {
    q: "¿Realizáis fotografía y vídeo?",
    a: "Sí. Puedes contratar fotografía, vídeo, dron o un pack completo adaptado a tu proyecto.",
  },
  {
    q: "¿Disponéis de dron?",
    a: "Sí. Realizamos tomas aéreas siempre que la normativa vigente y las condiciones meteorológicas lo permitan.",
  },
  {
    q: "¿Cuánto tardáis en entregar el trabajo?",
    a: "Depende del proyecto, aunque siempre buscamos entregar el contenido lo antes posible sin comprometer la calidad.",
  },
  {
    q: "¿Editáis todo el material?",
    a: "Sí. Todas las fotografías y vídeos se entregan editados y optimizados para web, redes sociales o impresión.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-36 px-6 bg-zinc-950"
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-5">
            PREGUNTAS FRECUENTES
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            Resolvemos tus dudas
          </h2>

          <p className="text-gray-400 text-xl">
            Estas son algunas de las preguntas que más recibimos.
          </p>

        </div>

        <div className="space-y-6">

          {faqs.map((item, index) => (

            <div
              key={index}
              className="rounded-[28px] bg-black border border-zinc-800 p-8 hover:border-red-600 transition-all duration-300"
            >

              <h3 className="text-2xl font-bold text-white mb-4">
                {item.q}
              </h3>

              <p className="text-gray-400 leading-8 text-lg">
                {item.a}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}