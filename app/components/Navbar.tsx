"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const links = [
  { name: "Inicio", href: "#" },
  { name: "Automoción", href: "/automocion" },
  { name: "Inmobiliarias", href: "/inmobiliarias" },
  { name: "Bodas", href: "/bodas" },
  { name: "Retratos", href: "/retratos" },
  { name: "Deporte", href: "/deporte" },
  { name: "Negocios", href: "/negocios" },
  { name: "Contacto", href: "#contact" },
];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-black/80 backdrop-blur-2xl border-b border-white/10 shadow-[0_15px_50px_rgba(0,0,0,.45)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <a href="#" className="group">
          <img
            src="/assets/logo/logo.png"
            alt="GIMOVISUALS"
            className="h-14 w-auto transition-all duration-500 group-hover:scale-110"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-10">

          {links.map((link) => (

            <a
              key={link.name}
              href={link.href}
              className="relative text-gray-300 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>

          ))}

          <a
            href="#contact"
            className="rounded-full bg-red-600 px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-red-700 hover:scale-105 hover:shadow-[0_0_35px_rgba(220,38,38,.5)]"
          >
            Solicitar presupuesto
          </a>

        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white text-3xl"
        >
          ☰
        </button>

      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-2xl border-t border-white/10">

          <div className="flex flex-col gap-6 p-8">

            {links.map((link) => (

              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg text-gray-300 hover:text-white transition"
              >
                {link.name}
              </a>

            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-red-600 py-4 text-center font-bold text-white hover:bg-red-700 transition"
            >
              Solicitar presupuesto
            </a>

          </div>

        </div>
      </div>

    </header>
  );
}