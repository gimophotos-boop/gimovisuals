const servicios = [
  "Fotografía para concesionarios",
  "Fotografía de vehículos deportivos",
  "Cobertura de rallies y eventos",
  "Fotografía Drift",
  "Contenido para redes sociales",
  "Vídeos cinematográficos",
  "Grabación con dron",
  "Reels para Instagram y TikTok",
];

export default function Servicios() {
  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-black text-center mb-16">
          Servicios
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {servicios.map((servicio) => (

            <div
              key={servicio}
              className="rounded-3xl border border-white/10 bg-zinc-900 p-8 hover:border-red-600 transition"
            >
              <p className="text-lg font-semibold">
                {servicio}
              </p>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}