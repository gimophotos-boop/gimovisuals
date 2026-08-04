export default function CTA() {
  return (
    <section className="bg-black py-32 border-t border-white/10">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-6">
          CONTACTA
        </p>

        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
          ¿Hablamos sobre vuestra boda?
        </h2>

        <p className="text-xl text-gray-400 leading-9 max-w-3xl mx-auto mb-14">
          Estaremos encantados de conocer vuestra historia y crear un recuerdo
          único en fotografía y vídeo que podréis revivir toda la vida.
        </p>

        <a
          href="/#contact"
          className="inline-flex items-center gap-4 rounded-full bg-red-600 px-10 py-5 text-xl font-bold text-white transition hover:bg-red-700 hover:scale-105"
        >
          Solicitar presupuesto →
        </a>

      </div>

    </section>
  );
}