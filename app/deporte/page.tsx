import Proyectos from "./components/Proyectos";

export default function DeportePage() {
  return (
    <main>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Deporte
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl">
            Fotografía y vídeo profesional para competiciones,
            clubes, equipos y grandes eventos deportivos.
          </p>

        </div>
      </section>

      <Proyectos />

    </main>
  );
}
