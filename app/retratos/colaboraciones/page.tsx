"use client";

import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sesiones = [
  {
    title: "Adri × Kia",
    description: "Una sesión en colaboración con Kia, combinando automoción y retrato.",
    href: "/retratos/colaboraciones/adri-kia",
    carpeta: "colaboraciones/adri-kia",
  },
  {
    title: "Paula × Peugeot",
    description: "Una sesión en colaboración con Peugeot, uniendo retrato, automoción y creatividad.",
    href: "/retratos/colaboraciones/paula-peugeot",
    carpeta: "colaboraciones/paula-peugeot",
  },
];

const backgroundImages = sesiones.flatMap((sesion) =>
  Array.from(
    { length: 12 },
    (_, index) =>
      `/assets/images/retratos/${sesion.carpeta}/${index + 1}.jpg`
  )
);

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
    const intervalo = setInterval(() => {
      setCurrentImage((prev) =>
        prev === backgroundImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <main className="relative min-h-[1400px] overflow-hidden text-white">

      <Navbar />

      <div className="fixed inset-0 z-0 bg-black pointer-events-none">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-contain bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImage ? "opacity-50" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url("${image}")`,
            }}
          />
        ))}

        <div className="absolute inset-0 bg-black/25" />
      </div>

      <section className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          <p className="relative top-[110px] text-sm font-semibold tracking-[4px] text-red-500">RETRATOS</p>

          <h1 className="relative top-[130px] text-[52px] md:text-[68px] font-black tracking-tight">
            Colaboraciones
          </h1>

          <p className="relative top-[150px] max-w-3xl text-xl text-gray-300 leading-9 mb-16">
            Sesiones y proyectos realizados en colaboración con marcas,
            empresas y profesionales.
          </p>

        </div>
      </section>

      <section className="relative z-10 top-[300px] pb-32 px-6">
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
                  className="group block rounded-[26px] border border-zinc-800 bg-zinc-950 hover:border-red-600 transition duration-500"
                >

                  <div className="relative aspect-[4/3] bg-zinc-950 overflow-hidden">
                    <PortadaSesion
                      carpeta={sesion.carpeta}
                      titulo={sesion.title}
                    />
                  </div>

                  <div className="px-6 py-5">

                    <h2 className="text-xl md:text-2xl font-black leading-tight break-words group-hover:text-red-500 transition">
                      {sesion.title}
                    </h2>

                    <p className="mt-3 pb-3 text-sm md:text-base text-gray-400 leading-7">
                      {sesion.description}
                    </p>

                  </div>

                </Link>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      <div className="relative z-20 flex justify-center pb-[40px]" style={{ transform: "translateY(350px)" }}>
        <Link
          href="/retratos"
          className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-8 py-3 text-sm font-semibold tracking-[2px] text-white transition hover:border-red-600 hover:text-red-500"
        >
          ← VOLVER A RETRATOS
        </Link>
      </div>

      <div className="h-[100px]" aria-hidden="true" />
</main>
  );
}
