"use client";

import Navbar from "@/app/components/Navbar";
import Servicios from "./components/Servicios";
import { useEffect, useState } from "react";

const backgroundImages = [
  "/assets/images/retratos/playa/itzi/1.jpg",
  "/assets/images/retratos/naturaleza/andrea-bosque/1.jpg",
  "/assets/images/retratos/urbano/andrea-urbana/1.jpg",
  "/assets/images/retratos/embarazo/lidia-emiliyan-leo/1.jpg",
  "/assets/images/retratos/lugares-especiales/lucia-delta/1.jpg",
  "/assets/images/retratos/familiar-pareja/sofi-itzi/1.jpg",
];

const categorias = [
  {
    titulo: "Sesiones en la playa",
    descripcion: "Retratos realizados en playas y entornos costeros.",
    enlace: "/retratos/playa",
    sesiones: [
      "playa/itzi",
      "playa/kelly",
      "playa/lidia-playa",
      "playa/nadia",
      "playa/olga-verano",
      "playa/paola",
      "playa/rocio",
    ],
  },
  {
    titulo: "Sesiones en la naturaleza",
    descripcion: "Bosques, montaña, campo y entornos naturales.",
    enlace: "/retratos/naturaleza",
    sesiones: [
      "naturaleza/adri-pueblo-mirador",
      "naturaleza/andrea-bosque",
      "naturaleza/andrea-naturaleza",
      "naturaleza/andrea-parque",
      "naturaleza/andrea-vias",
      "naturaleza/esther",
      "naturaleza/lidia-ermita",
      "naturaleza/lidia-vias",
      "naturaleza/lucia-naturaleza",
      "naturaleza/marina-jardines",
      "naturaleza/marina-lago",
      "naturaleza/noa-ermita",
      "naturaleza/olga-playa",
      "naturaleza/olga-vias",
    ],
  },
  {
    titulo: "Sesiones urbanas",
    descripcion: "Retratos con un estilo urbano, callejero y moderno.",
    enlace: "/retratos/urbano",
    sesiones: [
      "urbano/adri-urbano",
      "urbano/andrea-poligono",
      "urbano/andrea-urbana",
      "urbano/laia-urbana",
      "urbano/laura-ciudad",
      "urbano/laura-industrial",
      "urbano/lucia-parque",
      "urbano/olga-atardecer",
      "urbano/olga-urbana",
    ],
  },
  {
    titulo: "Embarazo",
    descripcion: "Sesiones de embarazo y maternidad.",
    enlace: "/retratos/embarazo",
    sesiones: [
      "embarazo/lidia-emiliyan-leo",
      "embarazo/lidia-emiliyan-miradores",
      "embarazo/veronica-pareja-indara",
      "embarazo/yaiza-juan-carlos",
    ],
  },
  {
    titulo: "Familiar y pareja",
    descripcion: "Sesiones para parejas, familias y momentos especiales.",
    enlace: "/retratos/familiar-pareja",
    sesiones: [
      "familiar-pareja/andrea-laura",
      "familiar-pareja/andrea-lidia-laura",
      "familiar-pareja/andrea-natalia-lidia",
      "familiar-pareja/mire-patri",
      "familiar-pareja/senay-yaiza-juan-carlos",
      "familiar-pareja/sofi-itzi",
    ],
  },
  {
    titulo: "Lugares especiales",
    descripcion: "Sesiones realizadas en escenarios únicos y especiales.",
    enlace: "/retratos/lugares-especiales",
    sesiones: [
      "lugares-especiales/adri-castillo",
      "lugares-especiales/ana",
      "lugares-especiales/ari-patrimonio",
      "lugares-especiales/lucia-delta",
      "lugares-especiales/lucia-patrimonio",
      "lugares-especiales/lucia-vias",
      "lugares-especiales/olga-cantera",
      "lugares-especiales/olga-urbana",
      "lugares-especiales/sofi",
    ],
  },
  {
    titulo: "Bebés",
    descripcion: "Sesiones de retrato para bebés y primeros meses.",
    enlace: "/retratos/bebes",
    sesiones: ["bebes/leo-3-meses"],
  },
  {
    titulo: "Colaboraciones",
    descripcion:
      "Sesiones y proyectos realizados en colaboración con marcas y profesionales.",
    enlace: "/retratos/colaboraciones",
    sesiones: [
      "colaboraciones/adri-kia",
      "colaboraciones/paula-peugeot",
    ],
  },
];

function obtenerCuatroFotos(sesiones: string[]) {
  const candidatas: string[] = [];

  for (const sesion of sesiones) {
    for (let i = 1; i <= 12; i++) {
      candidatas.push(
        `/assets/images/retratos/${sesion}/${i}.jpg`
      );
    }
  }

  // Mezclar todas las fotos disponibles
  for (let i = candidatas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [candidatas[i], candidatas[j]] = [candidatas[j], candidatas[i]];
  }

  // Elegir exactamente 4 fotos diferentes
  return candidatas.slice(0, 4);
}

function FotosDinamicas({
  sesiones,
  titulo,
}: {
  sesiones: string[];
  titulo: string;
}) {
  const [fotos, setFotos] = useState<string[]>([]);

  useEffect(() => {
    setFotos(obtenerCuatroFotos(sesiones));

    const intervalo = setInterval(() => {
      setFotos(obtenerCuatroFotos(sesiones));
    }, 5000);

    return () => clearInterval(intervalo);
  }, [sesiones]);

  return (
    <div className="absolute inset-0 grid grid-cols-2 gap-1 bg-zinc-950 p-1">
      {fotos.map((foto, index) => (
        <div
          key={`${foto}-${index}`}
          className="relative overflow-hidden rounded-sm bg-zinc-950 flex items-center justify-center"
        >
          <img
            src={foto}
            alt={`${titulo} - fotografía ${index + 1}`}
            className="w-full h-full object-contain transition-opacity duration-1000"
          />
        </div>
      ))}
    </div>
  );
}

export default function RetratosPage() {
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
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      <Navbar />

      {/* FONDOS ROTATIVOS */}

      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={`fixed inset-0 bg-cover bg-center bg-fixed transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url("${image}")`,
          }}
        />
      ))}

      {/* OSCURECIMIENTO */}

      <div className="fixed inset-0 bg-black/25" />

      {/* DEGRADADO */}

      <div className="fixed inset-0 bg-gradient-to-b from-black/65 via-black/15 to-black/45" />

      {/* CONTENIDO */}

      <div className="relative z-10 pt-[260px] pb-24 px-6">

        <div className="max-w-7xl mx-auto">

          {/* CABECERA */}

          <div className="text-center mb-16 translate-y-[100px]">

            <p className="uppercase tracking-[6px] text-red-500 font-medium text-[17px] mb-4">
              RETRATOS
            </p>

            <h1 className="text-[58px] md:text-[72px] leading-[1.04] font-black tracking-[-1.5px] translate-y-[10px]">
              Fotografía de retrato para recordar
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-8 translate-y-[80px]">
              Sesiones naturales, elegantes y auténticas para capturar vuestra historia y vuestra esencia.
            </p>

          </div>

          {/* CATEGORÍAS */}

          <section className="max-w-6xl mx-auto px-6 pt-[100px] pb-[300px]">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              {categorias.map((categoria) => (

                <a
                  key={categoria.enlace}
                  href={categoria.enlace}
                  className="group relative overflow-hidden rounded-[28px] aspect-[4/5] bg-zinc-900 border border-zinc-800 hover:border-red-600 transition duration-500"
                >

                  <FotosDinamicas
                    sesiones={categoria.sesiones}
                    titulo={categoria.titulo}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-8">

                    <h3 className="text-3xl md:text-4xl font-black leading-tight">
                      {categoria.titulo}
                    </h3>

                    <p className="mt-3 text-gray-300 leading-7">
                      {categoria.descripcion}
                    </p>

                    <span className="inline-block mt-6 text-red-500 font-semibold tracking-wide">
                      Ver sesiones →
                    </span>

                  </div>

                </a>

              ))}

            </div>

          </section>

        </div>

      </div>

      <Servicios />

    </main>
  );
}
