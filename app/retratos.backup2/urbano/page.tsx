"use client";

import Navbar from "@/app/components/Navbar";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sesiones = [
  {
    title: "Adri",
    href: "/retratos/urbano/adri-urbano",
    carpeta: "urbano/adri-urbano",
  },
  {
    title: "Andrea",
    href: "/retratos/urbano/andrea-poligono",
    carpeta: "urbano/andrea-poligono",
  },
  {
    title: "Andrea",
    href: "/retratos/urbano/andrea-urbana",
    carpeta: "urbano/andrea-urbana",
  },
  {
    title: "Sesión muy callejera con Laia",
    href: "/retratos/urbano/laia-urbana",
    carpeta: "urbano/laia-urbana",
  },
  {
    title: "Laura",
    href: "/retratos/urbano/laura-ciudad",
    carpeta: "urbano/laura-ciudad",
  },
  {
    title: "Laura",
    href: "/retratos/urbano/laura-industrial",
    carpeta: "urbano/laura-industrial",
  },
  {
    title: "Sesión con Lucia en un parque en la ciudad",
    href: "/retratos/urbano/lucia-parque",
    carpeta: "urbano/lucia-parque",
  },
  {
    title: "Olga",
    href: "/retratos/urbano/olga-atardecer",
    carpeta: "urbano/olga-atardecer",
  },
  {
    title: "Sesión de calle con Olga",
    href: "/retratos/urbano/olga-urbana",
    carpeta: "urbano/olga-urbana",
  },
];


const backgroundImages = [
  "/assets/images/retratos/urbano/adri-urbano/1.jpg",
  "/assets/images/retratos/urbano/adri-urbano/2.jpg",
  "/assets/images/retratos/urbano/adri-urbano/3.jpg",
  "/assets/images/retratos/urbano/adri-urbano/4.jpg",
  "/assets/images/retratos/urbano/adri-urbano/5.jpg",
  "/assets/images/retratos/urbano/adri-urbano/6.jpg",
  "/assets/images/retratos/urbano/adri-urbano/7.jpg",
  "/assets/images/retratos/urbano/adri-urbano/8.jpg",
  "/assets/images/retratos/urbano/adri-urbano/9.jpg",
  "/assets/images/retratos/urbano/adri-urbano/10.jpg",
  "/assets/images/retratos/urbano/adri-urbano/11.jpg",
  "/assets/images/retratos/urbano/adri-urbano/12.jpg",
  "/assets/images/retratos/urbano/andrea-poligono/1.jpg",
  "/assets/images/retratos/urbano/andrea-poligono/2.jpg",
  "/assets/images/retratos/urbano/andrea-poligono/3.jpg",
  "/assets/images/retratos/urbano/andrea-poligono/4.jpg",
  "/assets/images/retratos/urbano/andrea-poligono/5.jpg",
  "/assets/images/retratos/urbano/andrea-poligono/6.jpg",
  "/assets/images/retratos/urbano/andrea-poligono/7.jpg",
  "/assets/images/retratos/urbano/andrea-poligono/8.jpg",
  "/assets/images/retratos/urbano/andrea-poligono/9.jpg",
  "/assets/images/retratos/urbano/andrea-poligono/10.jpg",
  "/assets/images/retratos/urbano/andrea-poligono/11.jpg",
  "/assets/images/retratos/urbano/andrea-poligono/12.jpg",
  "/assets/images/retratos/urbano/andrea-urbana/1.jpg",
  "/assets/images/retratos/urbano/andrea-urbana/2.jpg",
  "/assets/images/retratos/urbano/andrea-urbana/3.jpg",
  "/assets/images/retratos/urbano/andrea-urbana/4.jpg",
  "/assets/images/retratos/urbano/andrea-urbana/5.jpg",
  "/assets/images/retratos/urbano/andrea-urbana/6.jpg",
  "/assets/images/retratos/urbano/andrea-urbana/7.jpg",
  "/assets/images/retratos/urbano/andrea-urbana/8.jpg",
  "/assets/images/retratos/urbano/andrea-urbana/9.jpg",
  "/assets/images/retratos/urbano/andrea-urbana/10.jpg",
  "/assets/images/retratos/urbano/andrea-urbana/11.jpg",
  "/assets/images/retratos/urbano/andrea-urbana/12.jpg",
  "/assets/images/retratos/urbano/laia-urbana/1.jpg",
  "/assets/images/retratos/urbano/laia-urbana/2.jpg",
  "/assets/images/retratos/urbano/laia-urbana/3.jpg",
  "/assets/images/retratos/urbano/laia-urbana/4.jpg",
  "/assets/images/retratos/urbano/laia-urbana/5.jpg",
  "/assets/images/retratos/urbano/laia-urbana/6.jpg",
  "/assets/images/retratos/urbano/laia-urbana/7.jpg",
  "/assets/images/retratos/urbano/laia-urbana/8.jpg",
  "/assets/images/retratos/urbano/laia-urbana/9.jpg",
  "/assets/images/retratos/urbano/laia-urbana/10.jpg",
  "/assets/images/retratos/urbano/laia-urbana/11.jpg",
  "/assets/images/retratos/urbano/laia-urbana/12.jpg",
  "/assets/images/retratos/urbano/laura-ciudad/1.jpg",
  "/assets/images/retratos/urbano/laura-ciudad/2.jpg",
  "/assets/images/retratos/urbano/laura-ciudad/3.jpg",
  "/assets/images/retratos/urbano/laura-ciudad/4.jpg",
  "/assets/images/retratos/urbano/laura-ciudad/5.jpg",
  "/assets/images/retratos/urbano/laura-ciudad/6.jpg",
  "/assets/images/retratos/urbano/laura-ciudad/7.jpg",
  "/assets/images/retratos/urbano/laura-ciudad/8.jpg",
  "/assets/images/retratos/urbano/laura-ciudad/9.jpg",
  "/assets/images/retratos/urbano/laura-ciudad/10.jpg",
  "/assets/images/retratos/urbano/laura-ciudad/11.jpg",
  "/assets/images/retratos/urbano/laura-ciudad/12.jpg",
  "/assets/images/retratos/urbano/laura-industrial/1.jpg",
  "/assets/images/retratos/urbano/laura-industrial/2.jpg",
  "/assets/images/retratos/urbano/laura-industrial/3.jpg",
  "/assets/images/retratos/urbano/laura-industrial/4.jpg",
  "/assets/images/retratos/urbano/laura-industrial/5.jpg",
  "/assets/images/retratos/urbano/laura-industrial/6.jpg",
  "/assets/images/retratos/urbano/laura-industrial/7.jpg",
  "/assets/images/retratos/urbano/laura-industrial/8.jpg",
  "/assets/images/retratos/urbano/laura-industrial/9.jpg",
  "/assets/images/retratos/urbano/laura-industrial/10.jpg",
  "/assets/images/retratos/urbano/laura-industrial/11.jpg",
  "/assets/images/retratos/urbano/laura-industrial/12.jpg",
  "/assets/images/retratos/urbano/lucia-parque/1.jpg",
  "/assets/images/retratos/urbano/lucia-parque/2.jpg",
  "/assets/images/retratos/urbano/lucia-parque/3.jpg",
  "/assets/images/retratos/urbano/lucia-parque/4.jpg",
  "/assets/images/retratos/urbano/lucia-parque/5.jpg",
  "/assets/images/retratos/urbano/lucia-parque/6.jpg",
  "/assets/images/retratos/urbano/lucia-parque/7.jpg",
  "/assets/images/retratos/urbano/lucia-parque/8.jpg",
  "/assets/images/retratos/urbano/lucia-parque/9.jpg",
  "/assets/images/retratos/urbano/lucia-parque/10.jpg",
  "/assets/images/retratos/urbano/lucia-parque/11.jpg",
  "/assets/images/retratos/urbano/lucia-parque/12.jpg",
  "/assets/images/retratos/urbano/olga-atardecer/1.jpg",
  "/assets/images/retratos/urbano/olga-atardecer/2.jpg",
  "/assets/images/retratos/urbano/olga-atardecer/3.jpg",
  "/assets/images/retratos/urbano/olga-atardecer/4.jpg",
  "/assets/images/retratos/urbano/olga-atardecer/5.jpg",
  "/assets/images/retratos/urbano/olga-atardecer/6.jpg",
  "/assets/images/retratos/urbano/olga-atardecer/7.jpg",
  "/assets/images/retratos/urbano/olga-atardecer/8.jpg",
  "/assets/images/retratos/urbano/olga-atardecer/9.jpg",
  "/assets/images/retratos/urbano/olga-atardecer/10.jpg",
  "/assets/images/retratos/urbano/olga-atardecer/11.jpg",
  "/assets/images/retratos/urbano/olga-atardecer/12.jpg",
  "/assets/images/retratos/urbano/olga-urbana/1.jpg",
  "/assets/images/retratos/urbano/olga-urbana/2.jpg",
  "/assets/images/retratos/urbano/olga-urbana/3.jpg",
  "/assets/images/retratos/urbano/olga-urbana/4.jpg",
  "/assets/images/retratos/urbano/olga-urbana/5.jpg",
  "/assets/images/retratos/urbano/olga-urbana/6.jpg",
  "/assets/images/retratos/urbano/olga-urbana/7.jpg",
  "/assets/images/retratos/urbano/olga-urbana/8.jpg",
  "/assets/images/retratos/urbano/olga-urbana/9.jpg",
  "/assets/images/retratos/urbano/olga-urbana/10.jpg",
  "/assets/images/retratos/urbano/olga-urbana/11.jpg",
  "/assets/images/retratos/urbano/olga-urbana/12.jpg"
];

function PortadaSesion({
  carpeta,
  titulo,
}: {
  carpeta: string;
  titulo: string;
}) {
  const [foto, setFoto] = useState("");

  useEffect(() => {
    const obtenerFoto = () =>
      `/assets/images/retratos/${carpeta}/${Math.floor(Math.random() * 12) + 1}.jpg`;

    setFoto(obtenerFoto());

    const intervalo = setInterval(() => {
      setFoto(obtenerFoto());
    }, 5000);

    return () => clearInterval(intervalo);
  }, [carpeta]);

  if (!foto) {
    return <div className="absolute inset-0 bg-zinc-950" />;
  }

  return (
    <div className="absolute inset-0 bg-zinc-950 flex items-center justify-center overflow-hidden">
      <img
        src={foto}
        alt={titulo}
        className="relative w-full h-full object-contain transition-all duration-1000 group-hover:scale-[1.02]"
      />
    </div>
  );
}

export default function UrbanoPage() {
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
    <main className="min-h-screen bg-black text-white">

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


      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          <Link
            href="/retratos"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition mb-12"
          >
            ← Volver a Retratos
          </Link>

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-6">
            RETRATOS
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Sesiones urbanas
          </h1>

          <p className="max-w-3xl text-xl text-gray-400 leading-9">
            Retratos con un estilo urbano, callejero y moderno,
            utilizando la ciudad como parte de la composición.
          </p>

        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {sesiones.map((sesion, index) => (
              <motion.div
                key={sesion.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
              >

                <Link
                  href={sesion.href}
                  className="group block overflow-hidden rounded-[30px] border border-zinc-800 bg-zinc-950 hover:border-red-600 transition duration-500"
                >

                  <div className="relative aspect-[4/3] bg-zinc-950 overflow-hidden">
                    <PortadaSesion
                      carpeta={sesion.carpeta}
                      titulo={sesion.title}
                    />
                  </div>

                  <div className="p-7">

                    <h2 className="text-xl md:text-2xl font-black leading-tight group-hover:text-red-500 transition">
                      {sesion.title}
                    </h2>

                    <div className="mt-6 flex items-center justify-between">

                      <span className="text-sm text-gray-500 uppercase tracking-[2px]">
                        Retratos
                      </span>

                      <span className="text-sm font-semibold text-white group-hover:text-red-500 transition">
                        Ver sesión →
                      </span>

                    </div>

                  </div>

                </Link>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}
