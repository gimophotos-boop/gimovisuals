"use client";

import Navbar from "@/app/components/Navbar";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sesiones = [
  {
    title: "Adri × Kia",
    href: "/retratos/colaboraciones/adri-kia",
    carpeta: "colaboraciones/adri-kia",
  },
  {
    title: "Paula × Peugeot",
    href: "/retratos/colaboraciones/paula-peugeot",
    carpeta: "colaboraciones/paula-peugeot",
  },
];


const backgroundImages = [
  "/assets/images/retratos/colaboraciones/adri-kia/1.jpg",
  "/assets/images/retratos/colaboraciones/adri-kia/2.jpg",
  "/assets/images/retratos/colaboraciones/adri-kia/3.jpg",
  "/assets/images/retratos/colaboraciones/adri-kia/4.jpg",
  "/assets/images/retratos/colaboraciones/adri-kia/5.jpg",
  "/assets/images/retratos/colaboraciones/adri-kia/6.jpg",
  "/assets/images/retratos/colaboraciones/adri-kia/7.jpg",
  "/assets/images/retratos/colaboraciones/adri-kia/8.jpg",
  "/assets/images/retratos/colaboraciones/adri-kia/9.jpg",
  "/assets/images/retratos/colaboraciones/adri-kia/10.jpg",
  "/assets/images/retratos/colaboraciones/adri-kia/11.jpg",
  "/assets/images/retratos/colaboraciones/adri-kia/12.jpg",
  "/assets/images/retratos/colaboraciones/paula-peugeot/1.jpg",
  "/assets/images/retratos/colaboraciones/paula-peugeot/2.jpg",
  "/assets/images/retratos/colaboraciones/paula-peugeot/3.jpg",
  "/assets/images/retratos/colaboraciones/paula-peugeot/4.jpg",
  "/assets/images/retratos/colaboraciones/paula-peugeot/5.jpg",
  "/assets/images/retratos/colaboraciones/paula-peugeot/6.jpg",
  "/assets/images/retratos/colaboraciones/paula-peugeot/7.jpg",
  "/assets/images/retratos/colaboraciones/paula-peugeot/8.jpg",
  "/assets/images/retratos/colaboraciones/paula-peugeot/9.jpg",
  "/assets/images/retratos/colaboraciones/paula-peugeot/10.jpg",
  "/assets/images/retratos/colaboraciones/paula-peugeot/11.jpg",
  "/assets/images/retratos/colaboraciones/paula-peugeot/12.jpg"
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
        className="w-full h-full object-contain transition-all duration-1000 group-hover:scale-[1.02]"
      />
    </div>
  );
}

export default function ColaboracionesPage() {
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
            Colaboraciones
          </h1>

          <p className="max-w-3xl text-xl text-gray-400 leading-9">
            Sesiones y proyectos realizados en colaboración con marcas,
            empresas y profesionales.
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
