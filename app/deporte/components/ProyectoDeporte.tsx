"use client";

import Link from "next/link";

type ProyectoData = {
  title: string;
  location: string;
  description: string;
  heroVideo: string;
  athletes: string[];
  services: string[];
  images: string[];
};

export default function ProyectoDeporte({
  data,
}: {
  data: ProyectoData;
}) {
  return (
    <main>

      {/* CABECERA DEL PROYECTO */}

      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,.12),transparent_60%)]" />

        <div className="relative z-10 max-w-7xl mx-auto">

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-5">
            DEPORTE
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-8">
            {data.title}
          </h1>

          <p className="text-xl text-gray-400">
            {data.location}
          </p>

        </div>

      </section>

      {/* INFORMACIÓN DEL EVENTO */}

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">

          <div className="lg:col-span-2">

            <h2 className="text-4xl font-black mb-8">
              Sobre el evento
            </h2>

            <p className="text-gray-400 leading-9">
              {data.description}
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Participantes
            </h3>

            <ul className="space-y-3 text-gray-300 mb-12">
              {data.athletes.map((athlete) => (
                <li key={athlete}>• {athlete}</li>
              ))}
            </ul>

            <h3 className="text-2xl font-bold mb-6">
              Servicios realizados
            </h3>

            <ul className="space-y-3 text-gray-300">
              {data.services.map((service) => (
                <li key={service}>• {service}</li>
              ))}
            </ul>

          </div>

        </div>

      </section>

      {/* GALERÍA */}

      <section className="pb-28 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-black mb-12">
            Galería
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {data.images.map((image) => (
              <img
                key={image}
                src={image}
                className="rounded-2xl object-cover w-full aspect-[4/3]"
                alt=""
              />
            ))}

          </div>

        </div>

      </section>

      {/* VOLVER */}

      <section className="pb-28 text-center">

        <Link
          href="/deporte"
          className="inline-flex rounded-full bg-red-600 px-8 py-4 font-bold hover:bg-red-700 transition"
        >
          ← Volver a deporte
        </Link>

      </section>

    </main>
  );
}
