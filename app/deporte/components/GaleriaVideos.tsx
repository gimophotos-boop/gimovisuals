"use client";

const videos = Array.from({ length: 20 }, (_, i) => ({
  src: `/assets/videos/deporte/${i + 1}.mp4`,
}));

export default function GaleriaVideos() {
  return (
    <section className="bg-black py-32">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-6">
            VÍDEOS
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            Vídeos deportivos
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-9">
            Producciones audiovisuales realizadas para competiciones,
            clubes, federaciones y eventos deportivos.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {videos.map((video, i) => (

            <div
              key={i}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-zinc-950"
            >

              <video
                controls
                preload="metadata"
                className="w-full aspect-video object-cover"
              >
                <source
                  src={video.src}
                  type="video/mp4"
                />
              </video>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}