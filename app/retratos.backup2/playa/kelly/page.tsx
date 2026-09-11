"use client";

import Navbar from "@/app/components/Navbar";
import { useEffect, useState } from "react";
import Link from "next/link";

import { project } from "./data";

import Gallery from "@/app/components/gallery/Gallery";
import Lightbox from "@/app/components/gallery/Lightbox";

const backgroundImages = project.images;

export default function KellyPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setCurrentImage((prev) =>
        prev === backgroundImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(intervalo);
  }, []);

  function openImage(index: number) {
    setCurrent(index);
    setOpen(true);
  }

  function nextImage() {
    setCurrent((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  }

  function prevImage() {
    setCurrent((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden text-white">

      <Navbar />

      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={`fixed inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url("${image}")` }}
        />
      ))}

      <div className="fixed inset-0 bg-black/55" />
      <div className="fixed inset-0 bg-gradient-to-b from-black/75 via-black/35 to-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-32">

        <Link
          href="/retratos/playa"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-12"
        >
          ← Volver a Playa
        </Link>

        <p className="uppercase tracking-[6px] text-red-500 font-medium text-[17px] mb-4">
          RETRATOS
        </p>

        <h1 className="text-[52px] md:text-[68px] leading-[1.04] font-black tracking-[-1.5px] mb-6">
          {project.title}
        </h1>

        <p className="max-w-3xl text-lg md:text-xl text-gray-300 leading-8 mb-16">
          {project.description}
        </p>

        <section>
          <h2 className="text-3xl font-black mb-8">
            Fotografías
          </h2>

          <div className="max-w-6xl">
            <Gallery
              images={project.images}
              onImageClick={openImage}
            />
          </div>
        </section>

        <Lightbox
          images={project.images}
          current={current}
          open={open}
          onClose={() => setOpen(false)}
          onNext={nextImage}
          onPrev={prevImage}
        />

      </div>
    </main>
  );
}
