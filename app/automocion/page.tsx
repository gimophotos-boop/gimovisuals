"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = Array.from({ length: 12 }, (_, i) => ({
  src: `/assets/images/automocion/${i + 1}.jpg`,
}));

export default function Automocion() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <main className="bg-black text-white">

        {/* HERO */}

        <section className="relative h-screen overflow-hidden">

          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover scale-110"
          >
            <source
              src="/assets/videos/automocion.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black" />

          <div className="relative z-10 flex h-full items-center">

            <div className="max-w-7xl mx-auto px-6">

              <p className="uppercase tracking-[10px] text-red-500 font-semibold mb-8">
                GIMOVISUALS
              </p>

              <h1 className="text-7xl md:text-[120px] leading-none font-black">
                AUTOMOCIÓN
              </h1>

              <p className="mt-10 max-w-2xl text-xl text-gray-300 leading-9">
                Contenido audiovisual pensado para vender,
                emocionar y transmitir exclusividad.
              </p>

            </div>

          </div>

        </section>

        {/* FRASE */}

        <section className="py-32">

          <div className="max-w-5xl mx-auto px-6 text-center">

            <h2 className="text-5xl md:text-7xl font-black leading-tight">

              No hacemos fotos.

              <span className="block text-red-600 mt-5">
                Creamos deseo.
              </span>

            </h2>

          </div>

        </section>

        {/* GALERÍA */}

        <section className="pb-40">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {images.map((image, i) => (

                <div
                  key={image.src}
                  onClick={() => {
                    setIndex(i);
                    setOpen(true);
                  }}
                  className="group cursor-pointer overflow-hidden rounded-[40px]"
                >

                  <Image
                    src={image.src}
                    alt=""
                    width={900}
                    height={700}
                    className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                </div>

              ))}

            </div>

          </div>

        </section>

      </main>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={index}
      />

    </>
  );
}