export default function Videos() {
  return (
    <section
      id="videos"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold mb-6">
          Vídeos
        </h2>

        <p className="text-white/60 mb-12">
          Próximamente podrás ver algunos de nuestros trabajos audiovisuales.
        </p>

        <div className="aspect-video rounded-3xl overflow-hidden border border-white/10">

          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Video"
            allowFullScreen
          />

        </div>

      </div>
    </section>
  );
}