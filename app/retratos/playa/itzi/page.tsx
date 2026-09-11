"use client";

import Navbar from "@/app/components/Navbar";
import { useEffect, useState } from "react";
import Link from "next/link";

import { project } from "./data";

import Gallery from "@/app/components/gallery/Gallery";
import Lightbox from "@/app/components/gallery/Lightbox";


export default function ProjectPage() {
  const [open, setOpen] = useState(false);
  const backgroundImages = Array.from({ length: 12 }, (_, i) =>
  `/assets/images/retratos/playa/itzi/${i + 1}.jpg`
);

const [currentBackground, setCurrentBackground] = useState(0);

useEffect(() => {
  const intervalo = setInterval(() => {
    setCurrentBackground((prev) => (prev + 1) % backgroundImages.length);
  }, 4000);

  return () => clearInterval(intervalo);
}, []);

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

      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 pointer-events-none opacity-50"
        style={{
          backgroundImage: `url("${backgroundImages[currentBackground]}")`,
        }}
      />

      <div className="fixed inset-0 z-0 bg-black/50 pointer-events-none" />

      
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-32">

        <p className="relative top-[110px] uppercase tracking-[8px] text-red-500 font-semibold mb-8">
          RETRATOS
        </p>

        <h1 className="relative top-[130px] text-[58px] md:text-[74px] font-black mb-8">
          {project.title}
        </h1>

        <p className="relative top-[150px] max-w-3xl text-xl text-gray-400 leading-9 mb-20">
          {project.description}
        </p>

        <section>
          <div className="relative top-[300px]">
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

      <div className="relative z-10 top-[370px] flex w-full justify-center px-6 pb-24">
        <Link
          href="/retratos/playa"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold uppercase tracking-[2px] text-gray-300 transition hover:border-red-600 hover:text-white"
        >
          ← VOLVER A PLAYA
        </Link>
      </div>

    </main>
  );
}
