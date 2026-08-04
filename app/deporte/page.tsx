import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import GaleriaFotos from "./components/GaleriaFotos";
import GaleriaVideos from "./components/GaleriaVideos";
import Proceso from "./components/Proceso";
import CTA from "./components/CTA";

export default function DeportePage() {
  return (
    <main className="bg-black text-white">

      <Hero />

      <Servicios />

      <GaleriaFotos />

      <GaleriaVideos />

      <Proceso />

      <CTA />

    </main>
  );
}