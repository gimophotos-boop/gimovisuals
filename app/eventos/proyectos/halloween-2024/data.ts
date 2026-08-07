export const data = {
  title: "Halloween 2024",
  location: "La Pobla de Mafumet",
  description:
    "Cobertura fotográfica y de vídeo de la celebración de Halloween 2024.",
  heroVideo:
    "/assets/videos/eventos/halloween-2024/video.mp4",
  artists: ["DJ Salmer", "DJ Miki"],
  services: ["Fotografía profesional", "Vídeo profesional"],
  images: Array.from(
    { length: 12 },
    (_, i) =>
      `/assets/images/eventos/halloween-2024/${i + 1}.jpg`
  ),
};
