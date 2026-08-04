"use client";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="/assets/videos/retratos/retratos.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex h-full items-center">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-6">
            GIMOVISUALS
          </p>

          <h1 className="text-6xl md:text-8xl font-black mb-8">
            RETRATOS
          </h1>

          <p className="max-w-2xl text-xl text-gray-300 leading-9 mb-10">
            Sesiones individuales, parejas, familias, embarazo, infantil y cualquier recuerdo que quieras conservar para siempre.
          </p>

          <a
            href="#galeria"
            className="inline-block rounded-full bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700"
          >
            Ver trabajos
          </a>

        </div>

      </div>

    </section>
  );
}