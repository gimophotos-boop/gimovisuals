"use client";

import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

const images = Array.from({ length: 12 }, (_, i) => ({
  src: `/assets/images/inmobiliarias/${i + 1}.jpg`,
}));

export default function Inmobiliarias() {

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <main className="bg-white text-black">

        <section className="relative h-screen overflow-hidden">

          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source
              src="/assets/videos/inmobiliarias.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-black/45" />

          <div className="relative z-10 flex h-full items-center">

            <div className="max-w-7xl mx-auto px-6">

              <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-6">
                GIMOVISUALS
              </p>

              <h1 className="text-7xl md:text-9xl font-black text-white">
                INMOBILIARIAS
              </h1>

              <p className="text-2xl text-white max-w-2xl mt-10 leading-10">
                Fotografía, vídeo y drone profesional para vender viviendas más
                rápido y con una imagen premium.
              </p>

            </div>

          </div>

        </section>

        <section className="py-28">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div>

                <h2 className="text-6xl font-black mb-8">
                  Haz que cada vivienda destaque.
                </h2>

                <p className="text-xl text-zinc-600 leading-10 mb-10">
                  Una buena imagen genera más visitas, más interés y mejores
                  resultados. Creamos fotografías, vídeos y tomas aéreas que
                  muestran el verdadero potencial de cada inmueble.
                </p>

                <ul className="space-y-5 text-xl">

                  <li>✓ Fotografía profesional</li>

                  <li>✓ Vídeo cinematográfico</li>

                  <li>✓ Drone 4K</li>

                  <li>✓ Edición premium</li>

                  <li>✓ Entrega rápida</li>

                </ul>

              </div>

              <Image
                src="/assets/images/inmobiliarias/1.jpg"
                alt=""
                width={900}
                height={1200}
                className="rounded-[40px] object-cover w-full h-[750px]"
              />

            </div>

          </div>

        </section>

        <section className="py-20">

          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-6xl font-black text-center mb-20">
              Galería
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

              {images.map((image, i) => (

                <div
                  key={i}
                  onClick={() => {
                    setIndex(i);
                    setOpen(true);
                  }}
                  className="cursor-pointer overflow-hidden rounded-3xl"
                >

                  <Image
                    src={image.src}
                    alt=""
                    width={800}
                    height={800}
                    className="aspect-square object-cover hover:scale-110 transition duration-700"
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