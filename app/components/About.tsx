export default function About() {
  return (
    <section id="about" className="bg-black py-36 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">

        <div>

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-5">
            SOBRE MÍ
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-10">
            Detrás de cada
            <br />
            imagen hay una
            <br />
            historia.
          </h2>

          <p className="text-xl text-gray-400 leading-9 mb-8">
            Soy Iván, fundador de GIMOVISUALS. Me dedico a crear fotografías y vídeos que ayudan a empresas, marcas y profesionales a transmitir una imagen de alto nivel.
          </p>

          <p className="text-xl text-gray-400 leading-9 mb-12">
            Mi objetivo no es solo hacer contenido bonito, sino crear material que genere confianza, diferencie tu negocio y haga que destaque frente a la competencia.
          </p>

          <div className="grid grid-cols-2 gap-8">

            <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-6">
              <h3 className="text-5xl font-black text-red-500">26K+</h3>
              <p className="text-gray-400 mt-3">Seguidores</p>
            </div>

            <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-6">
              <h3 className="text-5xl font-black text-red-500">500+</h3>
              <p className="text-gray-400 mt-3">Proyectos</p>
            </div>

            <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-6">
              <h3 className="text-5xl font-black text-red-500">4K</h3>
              <p className="text-gray-400 mt-3">Ultra HD</p>
            </div>

            <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-6">
              <h3 className="text-5xl font-black text-red-500">100%</h3>
              <p className="text-gray-400 mt-3">Compromiso</p>
            </div>

          </div>

        </div>

        <div className="rounded-[40px] overflow-hidden border border-zinc-800 bg-zinc-900 h-[720px] flex items-center justify-center hover:border-red-600 transition-all duration-500">

          <p className="text-3xl font-bold text-gray-500 text-center">
            TU FOTO
            <br />
            PRÓXIMAMENTE
          </p>

        </div>

      </div>

    </section>
  );
}