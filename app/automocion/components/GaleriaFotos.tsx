"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = Array.from({ length: 84 }, (_, i) => ({
  src: `/assets/images/portfolio/automocion/${i + 1}.jpg`,
}));

export default function GaleriaFotos() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <section
        id="galeria"
        className="bg-black py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-black text-center mb-16 text-white">
            Galería
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {images.map((image, i) => (

              <div
                key={image.src}
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
                className="group cursor-pointer overflow-hidden rounded-3xl"
              >

                <Image
                  src={image.src}
                  alt={`Automoción ${i + 1}`}
                  width={900}
                  height={700}
                  className="w-full h-[350px] object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

            ))}

          </div>

        </div>
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={index}
      />
    </>
  );
}