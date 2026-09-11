"use client";

import { useEffect, useState } from "react";
import Proyectos from "./components/Proyectos";
import Navbar from "@/app/components/Navbar";

const backgroundImages = [
  "/assets/images/deporte/festa-al-cel-2025/1.jpg",
  "/assets/images/deporte/wnbf-spain-2025/1.jpg",
  "/assets/images/deporte/volta-catalunya-2025/1.jpg",
  "/assets/images/deporte/pobletans-league-2025/1.jpg",
  "/assets/images/deporte/vuelta-a-espana-2026/1.jpg",
];

export default function DeportePage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === backgroundImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">

      <Navbar />

      {/* FONDOS ROTATIVOS */}

      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center bg-fixed transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url("${image}")`,
          }}
        />
      ))}

      {/* OSCURECIMIENTO */}

      <div className="absolute inset-0 bg-black/25" />

      {/* DEGRADADO */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/15 to-black/45" />

      {/* CONTENIDO */}

      <div className="relative z-10 pt-[260px] pb-24 px-6">

        <div className="max-w-7xl mx-auto">

          {/* CABECERA */}

          <div className="text-center mb-16 translate-y-[100px]">

            <p className="uppercase tracking-[6px] text-red-500 font-medium text-[17px] mb-4">
              DEPORTE
            </p>

            <h1 className="text-[58px] md:text-[72px] leading-[1.04] font-black tracking-[-1.5px] translate-y-[10px]">
              Proyectos deportivos
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-8 translate-y-[80px]">
              Fotografía y vídeo profesional para competiciones,
              clubes, equipos y grandes eventos deportivos.
            </p>

          </div>

          <div className="mt-[130px]">
            <Proyectos />
          </div>

        </div>

      </div>

    </main>
  );
}
