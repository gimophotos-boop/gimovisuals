"use client";

export default function Hero() {
  return (
    <section className="relative h-[75vh] overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/assets/videos/inmo.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex h-full items-end">

        <div className="max-w-7xl mx-auto w-full px-6 pb-20">

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-4">
            Proyecto inmobiliario
          </p>

          <h1 className="text-6xl md:text-8xl font-black mb-6">
            Casa La Morera
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl leading-8">
            Reportaje completo realizado con fotografía,
            vídeo y dron profesional.
          </p>

        </div>

      </div>

    </section>
  );
}