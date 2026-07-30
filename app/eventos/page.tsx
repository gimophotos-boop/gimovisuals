"use client";

export default function Eventos() {
  return (
    <main className="bg-black text-white">

      <section className="relative h-screen flex items-center justify-center">

        <div className="text-center px-6">

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-6">
            GIMOVISUALS
          </p>

          <h1 className="text-7xl md:text-9xl font-black mb-10">
            EVENTOS
          </h1>

          <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-10">
            Cobertura profesional para eventos deportivos, privados, conciertos y empresas.
          </p>

        </div>

      </section>

      <section className="py-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            {[1,2,3,4,5,6].map((i)=>(

              <div
                key={i}
                className="aspect-[4/5] rounded-[35px] bg-zinc-900 flex items-center justify-center text-zinc-600 text-xl"
              >
                Foto {i}
              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}