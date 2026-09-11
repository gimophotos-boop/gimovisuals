"use client";

import Navbar from "@/app/components/Navbar";
import Servicios from "./components/Servicios";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const categorias = [
  {
    titulo: "Playa",
    descripcion: "Retratos junto al mar, con luz natural y una estética fresca.",
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
    titulo: "Naturaleza",
    descripcion: "Bosques, montaña y espacios naturales convertidos en escenarios.",
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
    titulo: "Urbano",
    descripcion: "Calles, arquitectura y escenarios industriales con personalidad.",
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
    descripcion: "Una etapa única convertida en recuerdos para toda la vida.",
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
    descripcion:
      "Historias compartidas, conexiones y momentos que merecen ser recordados.",
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
    descripcion: "Escenarios diferentes para sesiones con una personalidad única.",
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
    descripcion:
      "Los primeros meses, sus pequeños gestos y recuerdos irrepetibles.",
    enlace: "/retratos/bebes",
    sesiones: ["bebes/leo-3-meses"],
  },
  {
    titulo: "Colaboraciones",
    descripcion:
      "Proyectos fotográficos realizados junto a marcas y profesionales.",
    enlace: "/retratos/colaboraciones",
    sesiones: ["colaboraciones/adri-kia", "colaboraciones/paula-peugeot"],
  },
];

function crearFotos(sesiones: string[]) {
  return sesiones.flatMap((sesion) =>
    Array.from(
      { length: 12 },
      (_, index) =>
        `/assets/images/retratos/${sesion}/${index + 1}.jpg`
    )
  );
}

function mezclar<T>(array: T[]) {
  const resultado = [...array];

  for (let i = resultado.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [resultado[i], resultado[j]] = [resultado[j], resultado[i]];
  }

  return resultado;
}

function FondoFotos({
  fotos,
  intervalo = 5000,
  oscurecer = false,
}: {
  fotos: string[];
  intervalo?: number;
  oscurecer?: boolean;
}) {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    if (fotos.length <= 1) return;

    const timer = setInterval(() => {
      setIndice((actual) => (actual + 1) % fotos.length);
    }, intervalo);

    return () => clearInterval(timer);
  }, [fotos, intervalo]);

  if (!fotos.length) return null;

  return (
    <div className="absolute inset-0 overflow-hidden bg-zinc-950">
      {fotos.map((foto, index) => (
        <div
          key={`${foto}-${index}`}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
            index === indice ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={foto}
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
      ))}

      {oscurecer && (
        <div className="absolute inset-0 bg-black/50" />
      )}
    </div>
  );
}

function TarjetaCategoria({
  categoria,
}: {
  categoria: (typeof categorias)[number];
}) {
  const fotos = useMemo(() => {
    return mezclar(crearFotos(categoria.sesiones));
  }, [categoria.sesiones]);

  return (
    <Link
      href={categoria.enlace}
      className="group relative block overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-950 shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-red-600"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-950">

        <FondoFotos
          fotos={fotos}
          intervalo={5000}
          oscurecer={false}
        />

        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">
          <h3 className="text-3xl font-black md:text-4xl">
            {categoria.titulo}
          </h3>

          <p className="mt-3 max-w-md text-sm leading-6 text-white md:text-base">
            {categoria.descripcion}
          </p>

        </div>

      </div>
    </Link>
  );
}

export default function RetratosPage() {
  const backgroundImages = useMemo(() => {
    const todasLasFotos = categorias.flatMap((categoria) =>
      crearFotos(categoria.sesiones)
    );

    return mezclar(todasLasFotos);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      <div className="fixed inset-0 z-0 pointer-events-none bg-black">
        <FondoFotos
          fotos={backgroundImages}
          intervalo={4500}
          oscurecer={true}
        />
      </div>

      
      <section className="relative z-10 px-6 pb-32 pt-[680px] md:pb-40 md:pt-[740px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(127,29,29,0.22),transparent_45%)]" />

        <div className="relative z-10 mx-auto max-w-6xl translate-y-32 text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[8px] text-red-500">
            GIMOVISUALS · RETRATOS
          </p>

          <h1 className="relative top-[60px] mx-auto max-w-5xl text-5xl font-black leading-[0.98] tracking-[-2px] md:text-7xl lg:text-8xl">
            Fotografías que
            <span className="block text-white">cuentan una historia.</span>
          </h1>

          <p className="relative top-[100px] mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
            Sesiones naturales, elegantes y auténticas para convertir momentos,
            personas y lugares en recuerdos que permanecen.
          </p>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-36 pt-[220px] md:pb-44 md:pt-[280px]">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 translate-y-[320px] text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[5px] text-red-500">
              PORTFOLIO
            </p>

            <h2 className="text-3xl font-black md:text-4xl">
              Explora mis sesiones
            </h2>
          </div>

          <div className="relative top-[400px] mb-[400px] grid grid-cols-1 gap-8 md:top-[400px] md:mb-[400px] md:grid-cols-2">
            {categorias.map((categoria) => (
              <TarjetaCategoria
                key={categoria.enlace}
                categoria={categoria}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="h-96 md:h-[500px]" />

      <section className="relative z-10 mt-0 border-y border-zinc-900 bg-zinc-950/90 px-6 py-20 md:mt-40 md:py-24">
        <div className="mx-auto flex w-full flex-col items-center text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[5px] text-red-500">
            TU HISTORIA
          </p>

          <h2 className="text-2xl font-black leading-tight md:text-4xl">
            Una sesión puede ser mucho más que una fotografía.
          </h2>

          <p className="mx-auto mt-5 w-full max-w-2xl text-center text-sm leading-7 text-zinc-400 md:text-base">
            Busco crear imágenes que tengan personalidad, emoción y significado,
            adaptando cada sesión a cada persona y a cada historia.
          </p>
        </div>
      </section>

      <Servicios />
    </main>
  );
}
