"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";

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
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    if (data.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === data.images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [data.images.length]);

  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedImage((prev) =>
          prev === null
            ? null
            : (prev + 1) % data.images.length
        );
      }

      if (event.key === "ArrowLeft") {
        setSelectedImage((prev) =>
          prev === null
            ? null
            : (prev - 1 + data.images.length) % data.images.length
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, data.images.length]);

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* CABECERA */}

      <section className="relative overflow-hidden px-6 pt-[40px] pb-24 min-h-[310px]">

        <div className="relative z-10 max-w-7xl mx-auto translate-y-[120px]">

          <p className="uppercase tracking-[6px] text-red-500 font-medium text-[17px] mb-5">
            DEPORTE
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-black tracking-[-1.5px] mb-7">
            {data.title}
          </h1>

          <p className="uppercase tracking-[4px] text-white/70 text-sm md:text-base font-medium">
            {data.location}
          </p>

        </div>

      </section>


      {/* GALERÍA */}

      <section className="relative overflow-hidden px-6 pb-32">

        {/* FONDO CAMBIANTE */}

        {data.images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-contain bg-no-repeat bg-center bg-fixed transition-opacity duration-1000 ${
              index === currentImage ? "opacity-50" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url("${image}")`,
            }}
          />
        ))}

        {/* OSCURECIMIENTO */}

        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {data.images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedImage(index)}
                className="group block overflow-hidden rounded-2xl bg-black/50 border border-white/5 hover:border-red-600 transition-all duration-500 text-left"
              >
                <img
                  src={image}
                  alt={`${data.title} - imagen ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </button>
            ))}

          </div>

        </div>

      </section>


      {/* VISOR DE FOTOS */}

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >

          {/* CERRAR */}

          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full border border-white/30 text-white text-2xl hover:bg-red-600 hover:border-red-600 transition-all duration-300"
            aria-label="Cerrar"
          >
            ×
          </button>

          {/* ANTERIOR */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImage(
                (selectedImage - 1 + data.images.length) %
                  data.images.length
              );
            }}
            className="absolute left-4 md:left-8 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/30 bg-black/40 text-white text-2xl hover:bg-red-600 hover:border-red-600 transition-all duration-300"
            aria-label="Imagen anterior"
          >
            ←
          </button>

          {/* IMAGEN */}

          <div
            className="relative max-w-7xl max-h-[90vh]"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={data.images[selectedImage]}
              alt={`${data.title} - imagen ${selectedImage + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />

            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-4 py-2 rounded-full text-sm text-white/80">
              {selectedImage + 1} / {data.images.length}
            </p>
          </div>

          {/* SIGUIENTE */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImage(
                (selectedImage + 1) % data.images.length
              );
            }}
            className="absolute right-4 md:right-8 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/30 bg-black/40 text-white text-2xl hover:bg-red-600 hover:border-red-600 transition-all duration-300"
            aria-label="Imagen siguiente"
          >
            →
          </button>

        </div>
      )}


      {/* VOLVER */}

      <section className="relative pb-32 text-center bg-black">

        <Link
          href="/deporte"
          className="inline-flex items-center gap-3 border border-red-600 px-8 py-4 text-sm font-bold tracking-[3px] text-white hover:bg-red-600 transition-all duration-300"
        >
          ← VOLVER A DEPORTE
        </Link>

      </section>

    </main>
  );
}
