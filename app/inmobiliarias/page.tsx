import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Proyectos from "./components/Proyectos";
import CTA from "./components/CTA";

export default function InmobiliariasPage() {
  return (
    <main className="bg-black text-white">

      <Hero />

      <Servicios />

      <Proyectos />

      <CTA />

    </main>
  );
}