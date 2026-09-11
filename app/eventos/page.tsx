"use client";

import Proyectos from "./components/Proyectos";
import Navbar from "@/app/components/Navbar";

export default function EventosPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <Proyectos />
    </main>
  );
}
