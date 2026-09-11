"use client";

import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { serviceImages } from "../data/serviceImages";

const services = [
  {
    title: "Automoción",
    text: "Fotografía y vídeo profesional para concesionarios, compraventas y particulares.",
    images: [
      "/assets/images/automocion/1.jpg",
      "/assets/images/automocion/4.jpg",
      "/assets/images/automocion/7.jpg",
      "/assets/images/automocion/10.jpg",
    ],
    link: "/automocion",
  },
  {
    title: "Inmobiliarias",
    text: "Fotografía, vídeo y dron para vender propiedades más rápido.",
    images: [
      "/assets/images/inmobiliarias/casa-la-morera/1.jpg",
      "/assets/images/inmobiliarias/casa-la-morera/4.jpg",
      "/assets/images/inmobiliarias/casa-la-morera/7.jpg",
      "/assets/images/inmobiliarias/casa-la-morera/10.jpg",
    ],
    link: "/inmobiliarias",
  },
  {
    title: "Eventos",
    text: "Fotografía y vídeo profesional para festivales, DJs, conciertos y grandes eventos.",
    images: serviceImages.eventos,
    link: "/eventos",
  },
  {
    title: "Deporte",
    text: "Cobertura completa de eventos deportivos y competiciones.",
    images: serviceImages.deporte,
    link: "/deporte",
  },
  {
    title: "Bodas",
    text: "Fotografía y vídeo para inmortalizar cada momento especial.",
    images: serviceImages.bodas,
    link: "/bodas",
  },
  {
    title: "Retratos",
    text: "Sesiones personales, familiares, embarazo e infantiles.",
    images: serviceImages.retratos,
    link: "/retratos",
  },
];

function getInitialImages() {
  return services.map((service) => {
    if (!service.images.length) return "";

    return service.images[0];
  });
}

export default function Services() {
  const [currentImages, setCurrentImages] = useState(getInitialImages);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((previous) => {
        return services.map((service, index) => {
          if (!service.images.length) return "";

          if (service.images.length === 1) {
            return service.images[0];
          }

          let next =
            service.images[
              Math.floor(Math.random() * service.images.length)
            ];

          let attempts = 0;

          while (next === previous[index] && attempts < 50) {
            next =
              service.images[
                Math.floor(Math.random() * service.images.length)
              ];

            attempts++;
          }

          return next;
        });
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

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

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              text={service.text}
              images={
                currentImages[index]
                  ? [currentImages[index]]
                  : []
              }
              link={service.link}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
