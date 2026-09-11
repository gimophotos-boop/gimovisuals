"use client";

import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sesiones = [
  {
    title: "Lidia y Emiliyan",
    href: "/retratos/embarazo/lidia-emiliyan-leo",
    carpeta: "embarazo/lidia-emiliyan-leo",
    description: "Una sesión íntima en la que las sombras y la luz fueron protagonistas.",
  },
  {
    title: "Lidia y Emiliyan",
    href: "/retratos/embarazo/lidia-emiliyan-miradores",
    carpeta: "embarazo/lidia-emiliyan-miradores",
    description: "La espera de Leo rodeados de naturaleza y luz.",
  },
  {
    title: "Verónica y su pareja",
    href: "/retratos/embarazo/veronica-pareja-indara",
    carpeta: "embarazo/veronica-pareja-indara",
    description: "Una sesión al atardecer antes de la llegada de Indara.",
  },
  {
    title: "Yaiza y Juan Carlos",
    href: "/retratos/embarazo/yaiza-juan-carlos",
    carpeta: "embarazo/yaiza-juan-carlos",
    description: "Una sesión de embarazo junto al mar, a pocas semanas de conocer a la pequeña Senay.",
  },
];

const backgroundImages = sesiones
  .flatMap((sesion) =>
    Array.from(
      { length: 12 },
      (_, index) =>
        `/assets/images/retratos/${sesion.carpeta}/${index + 1}.jpg`
    )
  )
  .sort(() => Math.random() - 0.5);

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
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-zinc-950">
      <img
        src={foto}
        alt={titulo}
        className="h-full w-full object-contain transition-all duration-1000 group-hover:scale-[1.02]"
      />
    </div>
  );
}

export default function EmbarazoPage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setCurrentImage((prev) =>
        prev === backgroundImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <main className="min-h-[1400px] bg-black text-white">
      <Navbar />

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/75" />
      </div>

      <section className="px-6 pb-20 pt-32">
        <div className="mx-auto max-w-7xl">
          <p className="relative top-[110px] mb-6 font-semibold uppercase tracking-[8px] text-red-500">
            RETRATOS
          </p>

          <h1 className="relative top-[130px] mb-6 text-5xl font-black md:text-7xl">
            Embarazo
          </h1>

          <p className="relative top-[150px] max-w-3xl text-xl leading-9 text-gray-400">
            Sesiones de embarazo y maternidad para convertir una etapa única
            en recuerdos que permanecen.
          </p>
        </div>
      </section>

      <section className="relative z-10 top-[300px] px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
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
                  className="group block rounded-[26px] border border-zinc-800 bg-zinc-950 transition duration-500 hover:border-red-600"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-950">
                    <PortadaSesion
                      carpeta={sesion.carpeta}
                      titulo={sesion.title}
                    />
                  </div>

                  <div className="px-6 pt-5 pb-8">
                    <h2 className="text-xl font-black leading-tight transition group-hover:text-red-500 md:text-2xl">
                      {sesion.title}
                    </h2>

                    <p className="mt-3 pb-3 text-sm leading-7 text-gray-400 md:text-base">
                      {sesion.description}
                    </p>

                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div
        className="relative z-10 flex w-full justify-center pb-[40px]"
        style={{ transform: "translateY(400px)" }}
      >
        <Link
          href="/retratos"
          className="text-gray-400 transition hover:text-white uppercase tracking-[3px]"
        >
          ← VOLVER A RETRATOS
        </Link>
      </div>

      <div className="h-[100px]" aria-hidden="true" />

    </main>
  );
}
