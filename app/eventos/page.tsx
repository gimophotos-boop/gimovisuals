"use client";

import Proyectos from "./components/Proyectos";

export default function EventosPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Eventos
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl">
            Fotografía y vídeo profesional para festivales, DJs, conciertos y grandes eventos.
          </p>

        </div>

      </section>

      <Proyectos />

    </main>
  );
}