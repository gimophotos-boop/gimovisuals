"use client";

import Navbar from "@/app/components/Navbar";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sesiones = [
  {
    title: "Sesión de pueblo y mirador con Adri",
    href: "/retratos/naturaleza/adri-pueblo-mirador",
    carpeta: "naturaleza/adri-pueblo-mirador",
  },
  {
    title: "Sesión de bosque con Andrea",
    href: "/retratos/naturaleza/andrea-bosque",
    carpeta: "naturaleza/andrea-bosque",
  },
  {
    title: "Andrea",
    href: "/retratos/naturaleza/andrea-naturaleza",
    carpeta: "naturaleza/andrea-naturaleza",
  },
  {
    title: "Andrea",
    href: "/retratos/naturaleza/andrea-parque",
    carpeta: "naturaleza/andrea-parque",
  },
  {
    title: "Andrea",
    href: "/retratos/naturaleza/andrea-vias",
    carpeta: "naturaleza/andrea-vias",
  },
  {
    title: "Esther",
    href: "/retratos/naturaleza/esther",
    carpeta: "naturaleza/esther",
  },
  {
    title: "Lidia",
    href: "/retratos/naturaleza/lidia-ermita",
    carpeta: "naturaleza/lidia-ermita",
  },
  {
    title: "Lidia",
    href: "/retratos/naturaleza/lidia-vias",
    carpeta: "naturaleza/lidia-vias",
  },
  {
    title: "Lucía",
    href: "/retratos/naturaleza/lucia-naturaleza",
    carpeta: "naturaleza/lucia-naturaleza",
  },
  {
    title: "Marina",
    href: "/retratos/naturaleza/marina-jardines",
    carpeta: "naturaleza/marina-jardines",
  },
  {
    title: "Marina",
    href: "/retratos/naturaleza/marina-lago",
    carpeta: "naturaleza/marina-lago",
  },
  {
    title: "Noa",
    href: "/retratos/naturaleza/noa-ermita",
    carpeta: "naturaleza/noa-ermita",
  },
  {
    title: "Olga",
    href: "/retratos/naturaleza/olga-playa",
    carpeta: "naturaleza/olga-playa",
  },
  {
    title: "Olga",
    href: "/retratos/naturaleza/olga-vias",
    carpeta: "naturaleza/olga-vias",
  },
];


const backgroundImages = [
  "/assets/images/retratos/naturaleza/adri-pueblo-mirador/1.jpg",
  "/assets/images/retratos/naturaleza/adri-pueblo-mirador/2.jpg",
  "/assets/images/retratos/naturaleza/adri-pueblo-mirador/3.jpg",
  "/assets/images/retratos/naturaleza/adri-pueblo-mirador/4.jpg",
  "/assets/images/retratos/naturaleza/adri-pueblo-mirador/5.jpg",
  "/assets/images/retratos/naturaleza/adri-pueblo-mirador/6.jpg",
  "/assets/images/retratos/naturaleza/adri-pueblo-mirador/7.jpg",
  "/assets/images/retratos/naturaleza/adri-pueblo-mirador/8.jpg",
  "/assets/images/retratos/naturaleza/adri-pueblo-mirador/9.jpg",
  "/assets/images/retratos/naturaleza/adri-pueblo-mirador/10.jpg",
  "/assets/images/retratos/naturaleza/adri-pueblo-mirador/11.jpg",
  "/assets/images/retratos/naturaleza/adri-pueblo-mirador/12.jpg",
  "/assets/images/retratos/naturaleza/andrea-bosque/1.jpg",
  "/assets/images/retratos/naturaleza/andrea-bosque/2.jpg",
  "/assets/images/retratos/naturaleza/andrea-bosque/3.jpg",
  "/assets/images/retratos/naturaleza/andrea-bosque/4.jpg",
  "/assets/images/retratos/naturaleza/andrea-bosque/5.jpg",
  "/assets/images/retratos/naturaleza/andrea-bosque/6.jpg",
  "/assets/images/retratos/naturaleza/andrea-bosque/7.jpg",
  "/assets/images/retratos/naturaleza/andrea-bosque/8.jpg",
  "/assets/images/retratos/naturaleza/andrea-bosque/9.jpg",
  "/assets/images/retratos/naturaleza/andrea-bosque/10.jpg",
  "/assets/images/retratos/naturaleza/andrea-bosque/11.jpg",
  "/assets/images/retratos/naturaleza/andrea-bosque/12.jpg",
  "/assets/images/retratos/naturaleza/andrea-naturaleza/1.jpg",
  "/assets/images/retratos/naturaleza/andrea-naturaleza/2.jpg",
  "/assets/images/retratos/naturaleza/andrea-naturaleza/3.jpg",
  "/assets/images/retratos/naturaleza/andrea-naturaleza/4.jpg",
  "/assets/images/retratos/naturaleza/andrea-naturaleza/5.jpg",
  "/assets/images/retratos/naturaleza/andrea-naturaleza/6.jpg",
  "/assets/images/retratos/naturaleza/andrea-naturaleza/7.jpg",
  "/assets/images/retratos/naturaleza/andrea-naturaleza/8.jpg",
  "/assets/images/retratos/naturaleza/andrea-naturaleza/9.jpg",
  "/assets/images/retratos/naturaleza/andrea-naturaleza/10.jpg",
  "/assets/images/retratos/naturaleza/andrea-naturaleza/11.jpg",
  "/assets/images/retratos/naturaleza/andrea-naturaleza/12.jpg",
  "/assets/images/retratos/naturaleza/andrea-parque/1.jpg",
  "/assets/images/retratos/naturaleza/andrea-parque/2.jpg",
  "/assets/images/retratos/naturaleza/andrea-parque/3.jpg",
  "/assets/images/retratos/naturaleza/andrea-parque/4.jpg",
  "/assets/images/retratos/naturaleza/andrea-parque/5.jpg",
  "/assets/images/retratos/naturaleza/andrea-parque/6.jpg",
  "/assets/images/retratos/naturaleza/andrea-parque/7.jpg",
  "/assets/images/retratos/naturaleza/andrea-parque/8.jpg",
  "/assets/images/retratos/naturaleza/andrea-parque/9.jpg",
  "/assets/images/retratos/naturaleza/andrea-parque/10.jpg",
  "/assets/images/retratos/naturaleza/andrea-parque/11.jpg",
  "/assets/images/retratos/naturaleza/andrea-parque/12.jpg",
  "/assets/images/retratos/naturaleza/andrea-vias/1.jpg",
  "/assets/images/retratos/naturaleza/andrea-vias/2.jpg",
  "/assets/images/retratos/naturaleza/andrea-vias/3.jpg",
  "/assets/images/retratos/naturaleza/andrea-vias/4.jpg",
  "/assets/images/retratos/naturaleza/andrea-vias/5.jpg",
  "/assets/images/retratos/naturaleza/andrea-vias/6.jpg",
  "/assets/images/retratos/naturaleza/andrea-vias/7.jpg",
  "/assets/images/retratos/naturaleza/andrea-vias/8.jpg",
  "/assets/images/retratos/naturaleza/andrea-vias/9.jpg",
  "/assets/images/retratos/naturaleza/andrea-vias/10.jpg",
  "/assets/images/retratos/naturaleza/andrea-vias/11.jpg",
  "/assets/images/retratos/naturaleza/andrea-vias/12.jpg",
  "/assets/images/retratos/naturaleza/esther/1.jpg",
  "/assets/images/retratos/naturaleza/esther/2.jpg",
  "/assets/images/retratos/naturaleza/esther/3.jpg",
  "/assets/images/retratos/naturaleza/esther/4.jpg",
  "/assets/images/retratos/naturaleza/esther/5.jpg",
  "/assets/images/retratos/naturaleza/esther/6.jpg",
  "/assets/images/retratos/naturaleza/esther/7.jpg",
  "/assets/images/retratos/naturaleza/esther/8.jpg",
  "/assets/images/retratos/naturaleza/esther/9.jpg",
  "/assets/images/retratos/naturaleza/esther/10.jpg",
  "/assets/images/retratos/naturaleza/esther/11.jpg",
  "/assets/images/retratos/naturaleza/esther/12.jpg",
  "/assets/images/retratos/naturaleza/lidia-ermita/1.jpg",
  "/assets/images/retratos/naturaleza/lidia-ermita/2.jpg",
  "/assets/images/retratos/naturaleza/lidia-ermita/3.jpg",
  "/assets/images/retratos/naturaleza/lidia-ermita/4.jpg",
  "/assets/images/retratos/naturaleza/lidia-ermita/5.jpg",
  "/assets/images/retratos/naturaleza/lidia-ermita/6.jpg",
  "/assets/images/retratos/naturaleza/lidia-ermita/7.jpg",
  "/assets/images/retratos/naturaleza/lidia-ermita/8.jpg",
  "/assets/images/retratos/naturaleza/lidia-ermita/9.jpg",
  "/assets/images/retratos/naturaleza/lidia-ermita/10.jpg",
  "/assets/images/retratos/naturaleza/lidia-ermita/11.jpg",
  "/assets/images/retratos/naturaleza/lidia-ermita/12.jpg",
  "/assets/images/retratos/naturaleza/lidia-vias/1.jpg",
  "/assets/images/retratos/naturaleza/lidia-vias/2.jpg",
  "/assets/images/retratos/naturaleza/lidia-vias/3.jpg",
  "/assets/images/retratos/naturaleza/lidia-vias/4.jpg",
  "/assets/images/retratos/naturaleza/lidia-vias/5.jpg",
  "/assets/images/retratos/naturaleza/lidia-vias/6.jpg",
  "/assets/images/retratos/naturaleza/lidia-vias/7.jpg",
  "/assets/images/retratos/naturaleza/lidia-vias/8.jpg",
  "/assets/images/retratos/naturaleza/lidia-vias/9.jpg",
  "/assets/images/retratos/naturaleza/lidia-vias/10.jpg",
  "/assets/images/retratos/naturaleza/lidia-vias/11.jpg",
  "/assets/images/retratos/naturaleza/lidia-vias/12.jpg",
  "/assets/images/retratos/naturaleza/lucia-naturaleza/1.jpg",
  "/assets/images/retratos/naturaleza/lucia-naturaleza/2.jpg",
  "/assets/images/retratos/naturaleza/lucia-naturaleza/3.jpg",
  "/assets/images/retratos/naturaleza/lucia-naturaleza/4.jpg",
  "/assets/images/retratos/naturaleza/lucia-naturaleza/5.jpg",
  "/assets/images/retratos/naturaleza/lucia-naturaleza/6.jpg",
  "/assets/images/retratos/naturaleza/lucia-naturaleza/7.jpg",
  "/assets/images/retratos/naturaleza/lucia-naturaleza/8.jpg",
  "/assets/images/retratos/naturaleza/lucia-naturaleza/9.jpg",
  "/assets/images/retratos/naturaleza/lucia-naturaleza/10.jpg",
  "/assets/images/retratos/naturaleza/lucia-naturaleza/11.jpg",
  "/assets/images/retratos/naturaleza/lucia-naturaleza/12.jpg",
  "/assets/images/retratos/naturaleza/marina-jardines/1.jpg",
  "/assets/images/retratos/naturaleza/marina-jardines/2.jpg",
  "/assets/images/retratos/naturaleza/marina-jardines/3.jpg",
  "/assets/images/retratos/naturaleza/marina-jardines/4.jpg",
  "/assets/images/retratos/naturaleza/marina-jardines/5.jpg",
  "/assets/images/retratos/naturaleza/marina-jardines/6.jpg",
  "/assets/images/retratos/naturaleza/marina-jardines/7.jpg",
  "/assets/images/retratos/naturaleza/marina-jardines/8.jpg",
  "/assets/images/retratos/naturaleza/marina-jardines/9.jpg",
  "/assets/images/retratos/naturaleza/marina-jardines/10.jpg",
  "/assets/images/retratos/naturaleza/marina-jardines/11.jpg",
  "/assets/images/retratos/naturaleza/marina-jardines/12.jpg",
  "/assets/images/retratos/naturaleza/marina-lago/1.jpg",
  "/assets/images/retratos/naturaleza/marina-lago/2.jpg",
  "/assets/images/retratos/naturaleza/marina-lago/3.jpg",
  "/assets/images/retratos/naturaleza/marina-lago/4.jpg",
  "/assets/images/retratos/naturaleza/marina-lago/5.jpg",
  "/assets/images/retratos/naturaleza/marina-lago/6.jpg",
  "/assets/images/retratos/naturaleza/marina-lago/7.jpg",
  "/assets/images/retratos/naturaleza/marina-lago/8.jpg",
  "/assets/images/retratos/naturaleza/marina-lago/9.jpg",
  "/assets/images/retratos/naturaleza/marina-lago/10.jpg",
  "/assets/images/retratos/naturaleza/marina-lago/11.jpg",
  "/assets/images/retratos/naturaleza/marina-lago/12.jpg",
  "/assets/images/retratos/naturaleza/noa-ermita/1.jpg",
  "/assets/images/retratos/naturaleza/noa-ermita/2.jpg",
  "/assets/images/retratos/naturaleza/noa-ermita/3.jpg",
  "/assets/images/retratos/naturaleza/noa-ermita/4.jpg",
  "/assets/images/retratos/naturaleza/noa-ermita/5.jpg",
  "/assets/images/retratos/naturaleza/noa-ermita/6.jpg",
  "/assets/images/retratos/naturaleza/noa-ermita/7.jpg",
  "/assets/images/retratos/naturaleza/noa-ermita/8.jpg",
  "/assets/images/retratos/naturaleza/noa-ermita/9.jpg",
  "/assets/images/retratos/naturaleza/noa-ermita/10.jpg",
  "/assets/images/retratos/naturaleza/noa-ermita/11.jpg",
  "/assets/images/retratos/naturaleza/noa-ermita/12.jpg",
  "/assets/images/retratos/naturaleza/olga-playa/1.jpg",
  "/assets/images/retratos/naturaleza/olga-playa/2.jpg",
  "/assets/images/retratos/naturaleza/olga-playa/3.jpg",
  "/assets/images/retratos/naturaleza/olga-playa/4.jpg",
  "/assets/images/retratos/naturaleza/olga-playa/5.jpg",
  "/assets/images/retratos/naturaleza/olga-playa/6.jpg",
  "/assets/images/retratos/naturaleza/olga-playa/7.jpg",
  "/assets/images/retratos/naturaleza/olga-playa/8.jpg",
  "/assets/images/retratos/naturaleza/olga-playa/9.jpg",
  "/assets/images/retratos/naturaleza/olga-playa/10.jpg",
  "/assets/images/retratos/naturaleza/olga-playa/11.jpg",
  "/assets/images/retratos/naturaleza/olga-playa/12.jpg",
  "/assets/images/retratos/naturaleza/olga-vias/1.jpg",
  "/assets/images/retratos/naturaleza/olga-vias/2.jpg",
  "/assets/images/retratos/naturaleza/olga-vias/3.jpg",
  "/assets/images/retratos/naturaleza/olga-vias/4.jpg",
  "/assets/images/retratos/naturaleza/olga-vias/5.jpg",
  "/assets/images/retratos/naturaleza/olga-vias/6.jpg",
  "/assets/images/retratos/naturaleza/olga-vias/7.jpg",
  "/assets/images/retratos/naturaleza/olga-vias/8.jpg",
  "/assets/images/retratos/naturaleza/olga-vias/9.jpg",
  "/assets/images/retratos/naturaleza/olga-vias/10.jpg",
  "/assets/images/retratos/naturaleza/olga-vias/11.jpg",
  "/assets/images/retratos/naturaleza/olga-vias/12.jpg"
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

export default function NaturalezaPage() {
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
            Sesiones en la naturaleza
          </h1>

          <p className="max-w-3xl text-xl text-gray-400 leading-9">
            Retratos realizados en bosques, campos, montañas y otros
            entornos naturales, buscando conectar a cada persona con el lugar.
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
