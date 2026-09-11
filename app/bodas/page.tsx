"use client";

import { useEffect, useState } from "react";

import Navbar from "@/app/components/Navbar";
import Link from "next/link";

const backgroundImages = [
  "/assets/images/bodas/juan-carlos-yaiza/1.jpg",
  "/assets/images/bodas/brian-marina/1.jpg",
  "/assets/images/bodas/comunion-rosa/1.jpg",
];

const proyectos = [
  {
    title: "Boda Juan Carlos y Yaiza",
    description:
      "Una selección de fotografías de la boda de Juan Carlos y Yaiza.",
    href: "/bodas/proyectos/juan-carlos-yaiza",
    video: "/assets/videos/bodas/juan-carlos-yaiza.mp4",
  },
  {
    title: "Boda Brian y Marina",
    description:
      "Una selección de fotografías de la boda de Brian y Marina.",
    href: "/bodas/proyectos/brian-marina",
    video: "/assets/videos/bodas/brian-marina.mp4",
  },
  {
    title: "Comunión Rosa",
    description:
      "Una selección de fotografías de la comunión de Rosa.",
    href: "/bodas/proyectos/comunion-rosa",
    video: "/assets/videos/bodas/comunion-rosa.mp4",
  },
];

export default function BodasPage() {
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
    <main className="relative min-h-screen bg-black text-white">

      <Navbar />

      {/* FONDOS ROTATIVOS */}

      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={`fixed inset-0 bg-cover bg-center bg-fixed transition-opacity duration-1000 ${
            index === currentImage ? "opacity-50" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url("${image}")`,
          }}
        />
      ))}

      {/* DEGRADADO */}

      <div className="fixed inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black" />

      {/* CONTENIDO */}

      <div className="relative z-10 pt-[340px] pb-[300px] px-6">

        <div className="max-w-7xl mx-auto">

          {/* CABECERA */}

          <div className="text-center mb-32 transform translate-y-[100px]">

            <p className="uppercase tracking-[6px] text-red-500 font-medium text-[17px] mb-4">
              BODAS
            </p>

            <h1 className="text-[58px] md:text-[72px] leading-[1.04] font-black tracking-[-1.5px]">
              Fotografía y vídeo para recordar
              <br />
              toda la vida
            </h1>

            <p
  className="relative top-[50px] mt-10 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-8 w-full block"
  style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
>
              Capturamos cada emoción, cada mirada y cada detalle para que podáis revivir
              vuestra historia una y otra vez.
            </p>

          </div>


          {/* PROYECTOS */}

          <section className="mt-[80px] pb-[300px]">

            <div className="text-center mb-28 transform translate-y-[80px]">

              <h2 className="relative top-[90px] text-[52px] md:text-[58px] leading-[1.04] font-black tracking-[-1.5px]">
                Nuestras historias
              </h2>

            </div>

            <div className="relative top-[250px] grid grid-cols-1 md:grid-cols-2 gap-10">

              {proyectos.map((proyecto) => (

                <Link
                  key={proyecto.href}
                  href={proyecto.href}
                  className="group block"
                >

                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black/60 border border-zinc-800 group-hover:border-red-600 transition-all duration-500">

                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    >
                      <source src={proyecto.video} type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-6">

                      <h3 className="text-xl md:text-2xl font-black leading-tight group-hover:text-red-500 transition-colors duration-300">
                        {proyecto.title}
                      </h3>

                    </div>

                  </div>

                </Link>

              ))}

            </div>

          </section>

        </div>

      </div>

    </main>
  );
}
