export const data = {
  title: "Henry Méndez",
  location: "La Pobla de Mafumet",
  description:
    "Cobertura fotográfica y de vídeo del evento con Henry Méndez como artista invitado.",
  heroVideo:
    "/assets/videos/eventos/henry-mendez/video.mp4",
  artists: ["Henry Méndez"],
  services: ["Fotografía profesional", "Vídeo profesional"],
  images: Array.from(
    { length: 12 },
    (_, i) =>
      `/assets/images/eventos/henry-mendez/${i + 1}.jpg`
  ),
};
