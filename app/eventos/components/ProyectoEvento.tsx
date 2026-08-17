"use client";

import Link from "next/link";
import { useState } from "react";

type ProyectoData = {
  title: string;
  location: string;
  description: string;
  heroImage: string;
  images: string[];
  artists?: string[];
  services?: string[];
};

export default function ProyectoEvento({
  data,
}: {
  data: ProyectoData;
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="bg-black text-white">

      {/* INFORMACIÓN */}

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">

          <div className="lg:col-span-2">

            <h1 className="text-4xl md:text-5xl font-black mb-8">
              {data.title}
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              {data.location}
            </p>

            <h2 className="text-4xl font-black mb-8">
              Sobre el evento
            </h2>

            <p className="text-gray-400 leading-9">
              {data.description}
            </p>

          </div>

          <div>

            {data.artists && data.artists.length > 0 && (
              <>
                <h3 className="text-2xl font-bold mb-6">
                  Artistas
                </h3>

                <ul className="space-y-3 text-gray-300 mb-12">
                  {data.artists.map((artist) => (
                    <li key={artist}>
                      • {artist}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {data.services && data.services.length > 0 && (
              <>
                <h3 className="text-2xl font-bold mb-6">
                  Servicios realizados
                </h3>

                <ul className="space-y-3 text-gray-300">
                  {data.services.map((service) => (
                    <li key={service}>
                      • {service}
                    </li>
                  ))}
                </ul>
              </>
            )}

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
              <button
                key={image}
                type="button"
                onClick={() => setSelectedImage(image)}
                className="group relative overflow-hidden rounded-2xl bg-neutral-900 cursor-zoom-in"
              >
                <img
                  src={image}
                  alt={data.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </button>
            ))}

          </div>

        </div>

      </section>


      {/* VOLVER */}

      <section className="pb-28 text-center">

        <Link
          href="/eventos"
          className="inline-flex rounded-full bg-red-600 px-8 py-4 font-bold hover:bg-red-700 transition"
        >
          ← Volver a eventos
        </Link>

      </section>


      {/* VISOR DE IMAGEN AMPLIADA */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-3xl flex items-center justify-center transition"
            aria-label="Cerrar imagen"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt={data.title}
            className="max-w-full max-h-[90vh] object-contain rounded-xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

    </main>
  );
}