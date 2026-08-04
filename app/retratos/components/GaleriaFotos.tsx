"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = Array.from({ length: 40 }, (_, i) => ({
  src: `/assets/images/retratos/${i + 1}.jpg`,
}));

export default function GaleriaFotos() {

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section id="galeria" className="bg-zinc-950 py-32">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-6">
            GALERÍA
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            Algunos retratos
          </h2>

        </div>

        <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">

          {images.map((image, i) => (

            <div
              key={image.src}
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="overflow-hidden rounded-[28px] cursor-pointer break-inside-avoid"
            >

              <Image
                src={image.src}
                alt=""
                width={1200}
                height={800}
                className="w-full h-auto hover:scale-105 transition duration-700"
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