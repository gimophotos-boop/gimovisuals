"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = Array.from({ length: 40 }, (_, i) => ({
  src: `/assets/images/inmobiliarias/${i + 1}.jpg`,
}));

export default function GaleriaFotos() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section
      id="galeria"
      className="bg-zinc-950 py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-6">
            GALERÍA
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            Algunos de nuestros trabajos
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-9">
            Fotografías inmobiliarias realizadas para viviendas,
            apartamentos, casas y propiedades de todo tipo.
          </p>

        </div>

        <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">

          {images.map((image, i) => (

            <div
              key={image.src}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="overflow-hidden rounded-[28px] cursor-pointer group break-inside-avoid"
            >

              <Image
                src={image.src}
                alt=""
                width={1200}
                height={800}
                className="w-full h-auto transition duration-700 group-hover:scale-105"
              />

            </div>

          ))}

        </div>

      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={index}
      />

    </section>
  );
}