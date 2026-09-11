"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  {
    label: "Automoción",
    href: "/automocion",
  },
  {
    label: "Inmobiliarias",
    href: "/inmobiliarias",
    submenu: [
      {
        label: "Casa La Morera",
        href: "/inmobiliarias/proyectos/casa-la-morera",
      },
      {
        label: "VER TODO",
        href: "/inmobiliarias",
      },
    ],
  },
  {
    label: "Eventos",
    href: "/eventos",
    submenu: [
      {
        label: "Alvama Ice",
        href: "/eventos/proyectos/alvama-ice",
      },
      {
        label: "Carnaval 2026",
        href: "/eventos/proyectos/carnaval-2026",
      },
      {
        label: "Concurso Fuegos Artificiales Tarragona 2026",
        href: "/eventos/proyectos/concurso-fuegos-artificiales-tarragona-2026",
      },
      {
        label: "Concurso Fuegos Artificiales Tarragona 2025",
        href: "/eventos/proyectos/concurso-fuegos-artificiales-tarragona-2025",
      },
      {
        label: "Fiesta Remember 2025",
        href: "/eventos/proyectos/fiesta-remember-2025",
      },
      {
        label: "Halloween 2025",
        href: "/eventos/proyectos/halloween-2025",
      },
      {
        label: "Halloween 2024",
        href: "/eventos/proyectos/halloween-2024",
      },
      {
        label: "Henry Méndez",
        href: "/eventos/proyectos/henry-mendez",
      },
      {
        label: "Living The Sound 2026",
        href: "/eventos/proyectos/living-the-sound-2026",
      },
      {
        label: "Living The Sound 2025",
        href: "/eventos/proyectos/living-the-sound-2025",
      },
      {
        label: "Marsal Ventura",
        href: "/eventos/proyectos/marsal-ventura",
      },
      {
        label: "Mondj",
        href: "/eventos/proyectos/mondj",
      },
      {
        label: "Pobla Lledo Session 2026",
        href: "/eventos/proyectos/pobla-lledo-session-2026",
      },
      {
        label: "Pobla Lledo Session 2025",
        href: "/eventos/proyectos/pobla-lledo-session-2025",
      },
      {
        label: "Summer Festival 2025",
        href: "/eventos/proyectos/summer-festival-2025",
      },
      {
        label: "Techno Flamenco 2024",
        href: "/eventos/proyectos/techno-flamenco-2024",
      },
      {
        label: "VER TODO",
        href: "/eventos",
      },
    ],
  },
  {
    label: "Deporte",
    href: "/deporte",
    submenu: [
      {
        label: "Festa al Cel 2025",
        href: "/deporte/proyectos/festa-al-cel-2025",
      },
      {
        label: "Pobletans League 2025",
        href: "/deporte/proyectos/pobletans-league-2025",
      },
      {
        label: "Volta Catalunya 2025",
        href: "/deporte/proyectos/volta-catalunya-2025",
      },
      {
        label: "WNBF Spain 2025",
        href: "/deporte/proyectos/wnbf-spain-2025",
      },
      {
        label: "VER TODO",
        href: "/deporte",
      },
    ],
  },
  {
    label: "Bodas",
    href: "/bodas",
    submenu: [
      {
        label: "Brian & Marina",
        href: "/bodas/proyectos/brian-marina",
      },
      {
        label: "Comunión Rosa",
        href: "/bodas/proyectos/comunion-rosa",
      },
      {
        label: "Juan Carlos & Yaiza",
        href: "/bodas/proyectos/juan-carlos-yaiza",
      },
      {
        label: "VER TODO",
        href: "/bodas",
      },
    ],
  },
  {
    label: "Retratos",
    href: "/retratos",
    submenu: [
      {
        label: "Playa",
        href: "/retratos/playa",
      },
      {
        label: "Naturaleza",
        href: "/retratos/naturaleza",
      },
      {
        label: "Lugares especiales",
        href: "/retratos/lugares-especiales",
      },
      {
        label: "Urbano",
        href: "/retratos/urbano",
      },
      {
        label: "Familiar / Pareja",
        href: "/retratos/familiar-pareja",
      },
      {
        label: "Embarazo",
        href: "/retratos/embarazo",
      },
      {
        label: "Bebés",
        href: "/retratos/bebes",
      },
      {
        label: "Colaboraciones",
        href: "/retratos/colaboraciones",
      },
      {
        label: "VER TODO",
        href: "/retratos",
      },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center shrink-0"
          aria-label="GIMOVISUALS"
        >
          <Image
            src="/assets/logo/logo.png"
            alt="GIMOVISUALS"
            width={320}
            height={120}
            priority
            className={`w-auto object-contain transition-all duration-500 ${
              scrolled
                ? "h-16 md:h-18"
                : "h-24 md:h-28"
            }`}
          />
        </Link>

        {/* MENÚ */}
        <nav className="hidden lg:flex items-center gap-7">

          {navigation.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => {
                if (item.submenu) {
                  setOpenMenu(item.label);
                }
              }}
              onMouseLeave={() => {
                if (item.submenu) {
                  setOpenMenu(null);
                }
              }}
            >

              <Link
                href={item.href}
                className="relative flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors duration-300"
              >
                {item.label}

                {item.submenu && (
                  <span className="text-[10px] text-white/50">
                    ▾
                  </span>
                )}

                <span className="absolute left-0 -bottom-2 h-px w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
              </Link>

              {/* SUBMENÚ */}
              {item.submenu && openMenu === item.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5">

                  <div
                    className={`rounded-2xl border border-zinc-800 bg-black/95 backdrop-blur-xl shadow-2xl p-3 ${
                      item.label === "Eventos"
                        ? "w-[360px] max-h-[500px] overflow-y-auto"
                        : item.label === "Retratos"
                        ? "w-[260px]"
                        : "w-[300px]"
                    }`}
                  >

                    {item.submenu.map((subItem, index) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={`block rounded-xl px-4 py-3 text-sm transition-all duration-200 ${
                          subItem.label === "VER TODO"
                            ? "mt-2 border-t border-zinc-800 pt-4 text-red-500 font-bold hover:bg-red-600 hover:text-white"
                            : "text-gray-300 hover:bg-zinc-900 hover:text-white"
                        }`}
                      >
                        {subItem.label}
                      </Link>
                    ))}

                  </div>

                </div>
              )}

            </div>
          ))}

          <Link
            href="#contacto"
            className="text-sm font-semibold text-white hover:text-red-500 transition-colors duration-300"
          >
            Contacto
          </Link>

        </nav>

      </div>
    </header>
  );
}
