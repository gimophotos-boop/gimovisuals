export const data = {
  title: "Carnaval 2026",
  location: "La Pobla de Mafumet",
  description:
    "Cobertura fotográfica y de vídeo de la celebración del Carnaval 2026.",
  heroVideo: "/assets/videos/eventos/carnaval-2026/video.mp4",
  artists: ["DJ Salmer", "DJ Miki"],
  services: ["Fotografía profesional", "Vídeo profesional"],
  images: Array.from(
    { length: 12 },
    (_, i) => `/assets/images/eventos/carnaval-2026/${i + 1}.jpg`
  ),
};
