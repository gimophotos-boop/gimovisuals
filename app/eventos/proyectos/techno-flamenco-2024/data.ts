export const data = {
  title: "Techno Flamenco 2024",
  location: "La Pobla de Mafumet",
  description:
    "Cobertura fotográfica y de vídeo del evento Techno Flamenco 2024.",
  heroVideo:
    "/assets/videos/eventos/techno-flamenco-2024/video.mp4",
  artists: ["DJ Salmer", "Marsal Ventura"],
  services: ["Fotografía profesional", "Vídeo profesional"],
  images: Array.from(
    { length: 12 },
    (_, i) =>
      `/assets/images/eventos/techno-flamenco-2024/${i + 1}.jpg`
  ),
};
