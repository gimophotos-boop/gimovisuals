"use client";

import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import GaleriaFotos from "./components/GaleriaFotos";
import GaleriaVideos from "./components/GaleriaVideos";
import CTA from "./components/CTA";

export default function AutomocionPage() {
  return (
    <main className="bg-black text-white">

      <Hero />

      <Servicios />

      <GaleriaFotos />

      <GaleriaVideos />

      <CTA />

    </main>
  );
}