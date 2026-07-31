"use client";

const videos = Array.from({ length: 30 }, (_, i) => ({
  src: `/assets/videos/automocion/${i + 1}.mp4`,
}));

export default function GaleriaVideos() {
  return (
    <section className="bg-zinc-950 py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-black text-center text-white mb-16">
          Vídeos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {videos.map((video) => (

            <video
              key={video.src}
              controls
              playsInline
              preload="metadata"
              className="w-full rounded-3xl border border-white/10"
            >
              <source src={video.src} type="video/mp4" />
            </video>

          ))}

        </div>

      </div>

    </section>
  );
}