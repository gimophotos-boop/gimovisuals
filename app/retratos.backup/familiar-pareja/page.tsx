"use client";

import Navbar from "@/app/components/Navbar";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sesiones = [
  {
    title: "Andrea y Laura",
    href: "/retratos/familiar-pareja/andrea-laura",
    carpeta: "familiar-pareja/andrea-laura",
  },
  {
    title: "Andrea, Lidia y Laura",
    href: "/retratos/familiar-pareja/andrea-lidia-laura",
    carpeta: "familiar-pareja/andrea-lidia-laura",
  },
  {
    title: "Andrea, Natalia y Lidia",
    href: "/retratos/familiar-pareja/andrea-natalia-lidia",
    carpeta: "familiar-pareja/andrea-natalia-lidia",
  },
  {
    title: "Mire y Patri",
    href: "/retratos/familiar-pareja/mire-patri",
    carpeta: "familiar-pareja/mire-patri",
  },
  {
    title: "Juan Carlos, Yaiza y Senay",
    href: "/retratos/familiar-pareja/senay-yaiza-juan-carlos",
    carpeta: "familiar-pareja/senay-yaiza-juan-carlos",
  },
  {
    title: "Sofi e Itzi",
    href: "/retratos/familiar-pareja/sofi-itzi",
    carpeta: "familiar-pareja/sofi-itzi",
  },
];


const backgroundImages = [
  "/assets/images/retratos/familiar-pareja/andrea-laura/1.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-laura/2.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-laura/3.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-laura/4.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-laura/5.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-laura/6.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-laura/7.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-laura/8.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-laura/9.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-laura/10.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-laura/11.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-laura/12.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-lidia-laura/1.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-lidia-laura/2.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-lidia-laura/3.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-lidia-laura/4.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-lidia-laura/5.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-lidia-laura/6.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-lidia-laura/7.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-lidia-laura/8.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-lidia-laura/9.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-lidia-laura/10.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-lidia-laura/11.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-lidia-laura/12.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-natalia-lidia/1.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-natalia-lidia/2.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-natalia-lidia/3.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-natalia-lidia/4.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-natalia-lidia/5.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-natalia-lidia/6.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-natalia-lidia/7.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-natalia-lidia/8.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-natalia-lidia/9.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-natalia-lidia/10.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-natalia-lidia/11.jpg",
  "/assets/images/retratos/familiar-pareja/andrea-natalia-lidia/12.jpg",
  "/assets/images/retratos/familiar-pareja/mire-patri/1.jpg",
  "/assets/images/retratos/familiar-pareja/mire-patri/2.jpg",
  "/assets/images/retratos/familiar-pareja/mire-patri/3.jpg",
  "/assets/images/retratos/familiar-pareja/mire-patri/4.jpg",
  "/assets/images/retratos/familiar-pareja/mire-patri/5.jpg",
  "/assets/images/retratos/familiar-pareja/mire-patri/6.jpg",
  "/assets/images/retratos/familiar-pareja/mire-patri/7.jpg",
  "/assets/images/retratos/familiar-pareja/mire-patri/8.jpg",
  "/assets/images/retratos/familiar-pareja/mire-patri/9.jpg",
  "/assets/images/retratos/familiar-pareja/mire-patri/10.jpg",
  "/assets/images/retratos/familiar-pareja/mire-patri/11.jpg",
  "/assets/images/retratos/familiar-pareja/mire-patri/12.jpg",
  "/assets/images/retratos/familiar-pareja/senay-yaiza-juan-carlos/1.jpg",
  "/assets/images/retratos/familiar-pareja/senay-yaiza-juan-carlos/2.jpg",
  "/assets/images/retratos/familiar-pareja/senay-yaiza-juan-carlos/3.jpg",
  "/assets/images/retratos/familiar-pareja/senay-yaiza-juan-carlos/4.jpg",
  "/assets/images/retratos/familiar-pareja/senay-yaiza-juan-carlos/5.jpg",
  "/assets/images/retratos/familiar-pareja/senay-yaiza-juan-carlos/6.jpg",
  "/assets/images/retratos/familiar-pareja/senay-yaiza-juan-carlos/7.jpg",
  "/assets/images/retratos/familiar-pareja/senay-yaiza-juan-carlos/8.jpg",
  "/assets/images/retratos/familiar-pareja/senay-yaiza-juan-carlos/9.jpg",
  "/assets/images/retratos/familiar-pareja/senay-yaiza-juan-carlos/10.jpg",
  "/assets/images/retratos/familiar-pareja/senay-yaiza-juan-carlos/11.jpg",
  "/assets/images/retratos/familiar-pareja/senay-yaiza-juan-carlos/12.jpg",
  "/assets/images/retratos/familiar-pareja/sofi-itzi/1.jpg",
  "/assets/images/retratos/familiar-pareja/sofi-itzi/2.jpg",
  "/assets/images/retratos/familiar-pareja/sofi-itzi/3.jpg",
  "/assets/images/retratos/familiar-pareja/sofi-itzi/4.jpg",
  "/assets/images/retratos/familiar-pareja/sofi-itzi/5.jpg",
  "/assets/images/retratos/familiar-pareja/sofi-itzi/6.jpg",
  "/assets/images/retratos/familiar-pareja/sofi-itzi/7.jpg",
  "/assets/images/retratos/familiar-pareja/sofi-itzi/8.jpg",
  "/assets/images/retratos/familiar-pareja/sofi-itzi/9.jpg",
  "/assets/images/retratos/familiar-pareja/sofi-itzi/10.jpg",
  "/assets/images/retratos/familiar-pareja/sofi-itzi/11.jpg",
  "/assets/images/retratos/familiar-pareja/sofi-itzi/12.jpg"
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

export default function FamiliarParejaPage() {
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
            Familiar y pareja
          </h1>

          <p className="max-w-3xl text-xl text-gray-400 leading-9">
            Sesiones para parejas, familias y personas que quieren guardar
            momentos especiales juntos.
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
