"use client";

import Navbar from "@/app/components/Navbar";
import { useEffect, useState } from "react";
import Link from "next/link";

import { project } from "./data";

import Gallery from "@/app/components/gallery/Gallery";
import Lightbox from "@/app/components/gallery/Lightbox";


const backgroundImages = project.images;
export default function ProjectPage() {
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
          className={`fixed inset-0 bg-contain bg-center bg-fixed bg-no-repeat transition-opacity duration-1000 ${
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

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-32">

        <Link
          href="/retratos"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-10"
        >
          ← Volver a Retratos
        </Link>

        <p className="relative top-[110px] uppercase tracking-[8px] text-red-500 font-semibold mb-6">
          RETRATOS
        </p>

        <h1 className="relative top-[130px] text-[52px] md:text-[68px] font-black mb-8">
          {project.title}
        </h1>

        <p className="relative top-[150px] max-w-3xl text-xl text-gray-400 leading-9 mb-16">
          {project.description}
        </p>
        <div className="h-[300px]" aria-hidden="true" />



        <section>
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

      <div
        className="relative z-10 flex w-full justify-center pb-[40px]"
        style={{ transform: "translateY(40px)" }}
      >
        <Link
          href="/retratos/lugares-especiales"
          className="text-sm uppercase tracking-[3px] text-gray-400 hover:text-red-500 transition"
        >
          ← VOLVER A LUGARES ESPECIALES
        </Link>
      </div>

      <div className="h-[100px]" aria-hidden="true" />

    </main>
  );
}
