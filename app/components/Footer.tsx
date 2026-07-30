export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          <div>

            <img
              src="/assets/logo/logo.png"
              alt="GIMOVISUALS"
              className="h-14 mb-6"
            />

            <p className="text-gray-400 leading-8">
              Fotografía, vídeo y dron profesional para empresas,
              inmobiliarias, automoción, deporte y eventos.
            </p>

          </div>

          <div>

            <h3 className="text-white font-bold mb-5">
              Servicios
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Automoción</li>
              <li>Inmobiliarias</li>
              <li>Empresas</li>
              <li>Retratos</li>
              <li>Eventos</li>
              <li>Dron</li>

            </ul>

          </div>

          <div>

            <h3 className="text-white font-bold mb-5">
              Contacto
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>📞 +34 603 609 367</li>
              <li>✉️ contacto@gimovisuals.es</li>
              <li>📍 Tarragona</li>

            </ul>

          </div>

          <div>

            <h3 className="text-white font-bold mb-5">
              Redes Sociales
            </h3>

            <div className="space-y-3">

              <a
                href="https://instagram.com/gimovisuals"
                target="_blank"
                className="block text-gray-400 hover:text-red-500 transition"
              >
                Instagram
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                className="block text-gray-400 hover:text-red-500 transition"
              >
                Facebook
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                className="block text-gray-400 hover:text-red-500 transition"
              >
                TikTok
              </a>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-zinc-800 pt-8 text-center">

          <p className="text-gray-500">

            © {new Date().getFullYear()} GIMOVISUALS · Todos los derechos reservados.

          </p>

        </div>

      </div>

    </footer>
  );
}