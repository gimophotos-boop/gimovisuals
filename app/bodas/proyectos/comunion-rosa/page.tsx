"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { project } from "./data";

import Gallery from "@/app/components/gallery/Gallery";
import Lightbox from "@/app/components/gallery/Lightbox";
import Navbar from "@/app/components/Navbar";

export default function ComunionRosaPage() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
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
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      <Navbar />
      {/* FONDOS ROTATIVOS */}

      {project.images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 min-h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImage ? "opacity-50" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url("${image}")`,
          }}
        />
      ))}

      <div className="absolute inset-0 min-h-full bg-gradient-to-b from-black/70 via-black/30 to-black/75 pointer-events-none" />

      <section className="relative z-10 pt-[200px] pb-20 px-6">
        <div className="max-w-7xl mx-auto pt-[80px]">

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-6 transform translate-y-[80px]">
            BODAS
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-8 transform translate-y-[160px] text-center">
            {project.title}
          </h1>

          <section className="mt-[100px]">
            <h2 className="relative top-[30px] uppercase tracking-[6px] text-red-500 font-medium text-[17px] mb-8 text-center">
              BODAS
            </h2>

            {project.images.length > 0 ? (
              <div className="relative top-[150px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {project.images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => openImage(index)}
                    className="group block overflow-hidden rounded-2xl bg-black/50 border border-white/5 hover:border-red-600 transition-all duration-500 text-left"
                  >
                    <img
                      src={image}
                      alt={`${project.title} - imagen ${index + 1}`}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            ) : (
              <div className="rounded-[30px] border border-zinc-800 bg-zinc-950 p-16 text-center">
                <span className="text-zinc-600 uppercase tracking-[4px] text-sm">
                  Fotografías próximamente
                </span>
              </div>
            )}
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
      </section>

      <div className="h-[250px]" />

      <section className="relative z-10 pt-0 pb-[300px] text-center">
        <Link
          href="/bodas"
          className="inline-flex items-center justify-center gap-3 border border-red-600 px-8 py-4 text-sm font-bold tracking-[3px] text-white hover:bg-red-600 transition-all duration-300"
        >
          ← VOLVER A BODAS
        </Link>
      </section>
    </main>
  );
}
