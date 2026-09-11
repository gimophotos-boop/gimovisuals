import Proyectos from "./components/Proyectos";
import Navbar from "../components/Navbar";

function CameraIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="w-12 h-12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="8" y="18" width="48" height="34" rx="4" />
      <path d="M20 18l5-8h14l5 8" />
      <circle cx="32" cy="35" r="11" />
      <circle cx="32" cy="35" r="4" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="w-12 h-12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="7" y="16" width="34" height="32" rx="4" />
      <path d="M41 26l16-9v30l-16-9z" />
      <circle cx="17" cy="23" r="2" />
    </svg>
  );
}

function DroneIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="w-12 h-12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="25" y="25" width="14" height="14" rx="3" />
      <path d="M25 29H14c-7 0-10-8-4-11 5-2 10 1 11 6" />
      <path d="M39 29h11c7 0 10-8 4-11-5-2-10 1-11 6" />
      <path d="M25 35H14c-7 0-10 8-4 11 5 2 10-1 11-6" />
      <path d="M39 35h11c7 0 10 8 4 11-5 2-10-1-11-6" />
      <path d="M32 39v10" />
      <path d="M27 49h10" />
    </svg>
  );
}

function HouseIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="w-12 h-12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M8 30L32 10l24 20" />
      <path d="M14 27v27h36V27" />
      <path d="M27 54V39h10v15" />
    </svg>
  );
}

export default function InmobiliariasPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative h-[650px] overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("/assets/images/inmobiliarias/hero-inmobiliarias.png")',
          }}
        />

        {/* Oscurecimiento general */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Oscurecimiento lateral para el texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-transparent" />

        {/* Degradado inferior */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

        <div className="relative z-10 h-full max-w-[1420px] mx-auto px-8 flex items-center">

          <div className="max-w-[680px] -mt-2">

            <p className="uppercase tracking-[5px] text-red-500 font-medium text-[18px] mb-6">
              INMOBILIARIAS
            </p>

            <h1 className="text-[58px] leading-[1.04] font-black tracking-[-1.5px] mb-7">
              Propiedades que destacan.
              <br />
              Imágenes que venden.
            </h1>

            <p className="text-[20px] leading-[1.7] text-gray-200 max-w-[610px] mb-8">
              Fotografía, vídeo y dron profesional para mostrar cada propiedad
              en todo su potencial y generar más interés desde el primer
              vistazo.
            </p>

            <a
              href="#proyectos"
              className="inline-flex items-center gap-7 border border-red-600 px-8 py-4 text-[15px] font-medium text-white hover:bg-red-600 transition-all duration-300"
            >
              VER PROYECTOS
              <span className="text-[25px] leading-none text-red-500 group-hover:text-white">
                →
              </span>
            </a>

          </div>
        </div>

        {/* Indicador */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="uppercase text-[10px] tracking-[5px] text-white/45 mb-3">
            Descubre nuestro trabajo
          </span>

          <div className="w-px h-10 bg-gradient-to-b from-red-500 to-transparent" />
        </div>

      </section>


      {/* =====================================================
          INTRO + SERVICIOS
      ===================================================== */}
      <section className="bg-black">

        {/* INTRO */}
        <div className="max-w-[1120px] mx-auto text-center px-6 pt-12 pb-14">

          <p className="uppercase tracking-[5px] text-red-500 font-medium text-[17px] mb-4">
            MÁS QUE FOTOGRAFÍA
          </p>

          <h2 className="text-[42px] leading-[1.15] font-medium tracking-[-1px]">
            Cada propiedad merece
            <br />
            ser mostrada en su mejor versión.
          </h2>

          <p className="text-gray-400 text-[17px] leading-[1.7] max-w-[850px] mx-auto mt-5">
            Creamos contenido audiovisual pensado para destacar los espacios,
            transmitir sensaciones y conseguir que una propiedad llame la
            atención desde el primer vistazo.
          </p>

        </div>


        {/* SERVICIOS */}
        <div className="bg-zinc-950 border-y border-zinc-900">

          <div className="max-w-[1420px] mx-auto px-8 py-12">

            <div className="text-center mb-10">

              <p className="uppercase tracking-[5px] text-red-500 font-medium text-[17px] mb-3">
                SERVICIOS
              </p>

              <h2 className="text-[46px] leading-tight font-medium">
                Todo lo que necesita tu propiedad
              </h2>

            </div>


            <div className="grid grid-cols-4 gap-7">

              {/* FOTO */}
              <div className="text-center px-6">

                <div className="flex justify-center text-red-500 mb-5">
                  <CameraIcon />
                </div>

                <h3 className="text-[17px] font-medium uppercase mb-3">
                  Fotografía profesional
                </h3>

                <p className="text-gray-400 text-[15px] leading-[1.65]">
                  Imágenes cuidadas para destacar arquitectura, espacios,
                  iluminación y detalles.
                </p>

              </div>


              {/* VIDEO */}
              <div className="text-center px-6">

                <div className="flex justify-center text-red-500 mb-5">
                  <VideoIcon />
                </div>

                <h3 className="text-[17px] font-medium uppercase mb-3">
                  Vídeo inmobiliario
                </h3>

                <p className="text-gray-400 text-[15px] leading-[1.65]">
                  Recorridos audiovisuales que permiten descubrir la propiedad
                  de una forma mucho más atractiva.
                </p>

              </div>


              {/* DRON */}
              <div className="text-center px-6">

                <div className="flex justify-center text-red-500 mb-5">
                  <DroneIcon />
                </div>

                <h3 className="text-[17px] font-medium uppercase mb-3">
                  Dron y fotografía aérea
                </h3>

                <p className="text-gray-400 text-[15px] leading-[1.65]">
                  Perspectivas aéreas para mostrar la propiedad, su parcela y
                  todo su entorno.
                </p>

              </div>


              {/* VISIBILIDAD */}
              <div className="text-center px-6">

                <div className="flex justify-center text-red-500 mb-5">
                  <HouseIcon />
                </div>

                <h3 className="text-[17px] font-medium uppercase mb-3">
                  Más visibilidad
                </h3>

                <p className="text-gray-400 text-[15px] leading-[1.65]">
                  Contenido visual de alta calidad que genera más interés y
                  acelera la toma de decisiones.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROYECTOS
      ===================================================== */}
      <section
        id="proyectos"
        className="bg-black py-20 px-8"
      >

        <div className="max-w-[1420px] mx-auto">

          <div className="text-center mb-14">

            <p className="uppercase tracking-[5px] text-red-500 font-medium text-[17px] mb-4">
              PROYECTOS
            </p>

            <h2 className="text-[52px] leading-tight font-black tracking-[-1px]">
              Nuestros trabajos
            </h2>

            <p className="text-gray-400 text-[17px] max-w-[750px] mx-auto mt-5 leading-[1.7]">
              Descubre algunos de los proyectos inmobiliarios realizados por
              GIMOVISUALS.
            </p>

          </div>

          <Proyectos />

        </div>

      </section>

    </main>
  );
}
