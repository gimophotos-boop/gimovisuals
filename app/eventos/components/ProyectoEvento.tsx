"use client";

import Link from "next/link";
import { useState } from "react";

type ProyectoData = {
  title: string;
  location: string;
  description: string;
  images: string[];
  artists?: string[];
  services?: string[];
};

const backgroundImages = [
  "/assets/images/eventos/concurso-fuegos-artificiales-tarragona-2026/1.jpg",
  "/assets/images/eventos/concurso-fuegos-artificiales-tarragona-2026/2.jpg",
  "/assets/images/eventos/concurso-fuegos-artificiales-tarragona-2026/3.jpg",
  "/assets/images/eventos/concurso-fuegos-artificiales-tarragona-2026/4.jpg",
  "/assets/images/eventos/concurso-fuegos-artificiales-tarragona-2026/5.jpg",
  "/assets/images/eventos/concurso-fuegos-artificiales-tarragona-2026/6.jpg",
  "/assets/images/eventos/concurso-fuegos-artificiales-tarragona-2026/7.jpg",
  "/assets/images/eventos/concurso-fuegos-artificiales-tarragona-2026/8.jpg",
  "/assets/images/eventos/concurso-fuegos-artificiales-tarragona-2026/9.jpg",
  "/assets/images/eventos/concurso-fuegos-artificiales-tarragona-2026/10.jpg",
  "/assets/images/eventos/concurso-fuegos-artificiales-tarragona-2026/11.jpg",
  "/assets/images/eventos/concurso-fuegos-artificiales-tarragona-2026/12.jpg",
];

const backgroundMap: Record<string, number> = {
  "Living The Sound 2026": 0,
  "Carnaval 2026": 1,
  "Pobla Lledó Session 2026": 2,
  "Summer Festival 2025": 3,
  "Fiesta Remember 2025": 4,
  "Living The Sound 2025": 5,
  "Pobla Lledó Session 2025": 6,
  "Halloween 2024": 7,
  "Halloween 2025": 8,
  "Techno Flamenco 2024": 9,
  "Concurso de Fuegos Artificiales de Tarragona 2025": 10,
  "Concurso de Fuegos Artificiales de Tarragona 2026": 11,
  "Henry Méndez": 0,
  "Marsal Ventura": 1,
  "Alvama Ice": 2,
  "MonDj": 3,
};

function getBackgroundImage(title: string) {
  const index = backgroundMap[title] ?? 0;
  return backgroundImages[index];
}

export default function ProyectoEvento({
  data,
}: {
  data: ProyectoData;
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const backgroundImage = getBackgroundImage(data.title);

  return (
    <main className="min-h-screen bg-black text-white">

      {/* CABECERA */}

      <section className="bg-black px-6 pb-16">

        {/* ESPACIO REAL PARA SEPARAR EL NAVBAR DEL TÍTULO */}

        <div className="h-[120px]" />

        <div className="max-w-7xl mx-auto">

          <div className="max-w-5xl">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-[-1px]">
              {data.title}
            </h1>

            <p className="mt-5 text-sm md:text-base uppercase tracking-[5px] text-red-500 font-medium">
              {data.location}
            </p>

          </div>

        </div>

      </section>


      {/* GALERÍA + FOTO DE FONDO */}

      <section className="relative overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url("${backgroundImage}")`,
          }}
        />

        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/40" />

        <div className="relative z-10 px-6 py-24">

          <div className="max-w-7xl mx-auto">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {data.images.map((image, index) => (

                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className="group relative overflow-hidden bg-zinc-950 cursor-zoom-in text-left rounded-none shadow-2xl"
                >

                  <img
                    src={image}
                    alt={`${data.title} - fotografía ${index + 1}`}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none" />

                </button>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* VOLVER */}

      <section className="bg-black px-6 py-24 text-center">

        <Link
          href="/eventos"
          className="inline-flex items-center gap-4 border border-red-600 px-8 py-4 text-sm font-bold tracking-[3px] text-white hover:bg-red-600 transition-all duration-300"
        >
          ← VOLVER A EVENTOS
        </Link>

      </section>


      {/* LIGHTBOX */}

      {selectedImage && (

        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6"
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
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(event) => event.stopPropagation()}
          />

        </div>

      )}

    </main>
  );
}
