export default function Footer() {
  const services = [
    { name: "Automoción", href: "/automocion" },
    { name: "Inmobiliarias", href: "/inmobiliarias" },
    { name: "Eventos", href: "/eventos" },
    { name: "Deporte", href: "/deporte" },
    { name: "Bodas", href: "/bodas" },
    { name: "Retratos", href: "/retratos" },
  ];

  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-3 gap-16">

          <div>
            <a href="/" className="inline-block">
              <img
                src="/assets/logo/logo.png"
                alt="GIMOVISUALS"
                className="h-32 md:h-40 w-auto mb-8"
              />
            </a>

            <p className="text-gray-400 leading-8 max-w-md">
              Fotografía, vídeo y dron profesional para empresas,
              marcas y profesionales que quieren destacar.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-7">
              Servicios
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.href}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-red-500 transition"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-7">
              Contacto
            </h3>

            <ul className="space-y-5">
              <li>
                <a
                  href="mailto:gimophotos@gmail.com"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  gimophotos@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/34603609367"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  WhatsApp
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/gimovisuals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  @gimovisuals
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-20 border-t border-zinc-800 pt-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-5">

            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} GIMOVISUALS · Todos los derechos reservados.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="/aviso-legal"
                className="text-gray-500 hover:text-white transition"
              >
                Aviso legal
              </a>

              <a
                href="/privacidad"
                className="text-gray-500 hover:text-white transition"
              >
                Privacidad
              </a>

              <a
                href="/cookies"
                className="text-gray-500 hover:text-white transition"
              >
                Cookies
              </a>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}
