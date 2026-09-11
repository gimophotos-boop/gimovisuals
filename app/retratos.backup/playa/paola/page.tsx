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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === backgroundImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

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

      <div className="max-w-7xl mx-auto px-6 py-20">

        <Link
          href="/retratos/playa"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-10"
        >
          ← Volver a Playa
        </Link>

        <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-6">
          RETRATOS
        </p>

        <h1 className="text-5xl md:text-7xl font-black mb-8">
          {project.title}
        </h1>

        <p className="max-w-3xl text-xl text-gray-400 leading-9 mb-20">
          {project.description}
        </p>

        <section>
          <h2 className="text-3xl font-bold mb-8">
            Fotografías
          </h2>

          <Gallery
            images={project.images}
            onImageClick={openImage}
          />
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
