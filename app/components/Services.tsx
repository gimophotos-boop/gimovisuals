"use client";

import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Automoción",
    text: "Fotografía y vídeo profesional para concesionarios, compraventas y particulares.",
    video: "/assets/videos/automocion.mp4",
    link: "/automocion",
  },
  {
    title: "Inmobiliarias",
    text: "Fotografía, vídeo y dron para vender propiedades más rápido.",
    video: "/assets/videos/inmo.mp4",
    link: "/inmobiliarias",
  },
  {
    title: "Eventos",
    text: "Fotografía y vídeo profesional para festivales, DJs, conciertos y grandes eventos.",
    image: "/assets/images/eventos/eventos.jpg",
    link: "/eventos",
  },
  {
    title: "Retratos",
    text: "Sesiones personales, familiares, embarazo e infantiles.",
    image: "/assets/images/covers/retratos.jpg",
    link: "/retratos",
  },
  {
    title: "Deporte",
    text: "Cobertura completa de eventos deportivos y corporativos.",
    image: "/assets/images/covers/deporte.jpg",
    link: "/deporte",
  },
  {
    title: "Bodas",
    text: "Fotografía y vídeo cinematográfico para inmortalizar vuestro gran día.",
    image: "/assets/images/covers/bodas.jpg",
    link: "/bodas",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black py-40 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-24">
          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-5">
            SERVICIOS
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            Qué puedo hacer por ti
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cada proyecto está pensado para transmitir profesionalidad y generar resultados.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              text={service.text}
              video={service.video}
              image={service.image}
              link={service.link}
            />
          ))}

        </div>

      </div>
    </section>
  );
}