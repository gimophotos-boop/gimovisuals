export const data = {
  title: "Mondj",
  location: "La Pobla de Mafumet",
  description:
    "Cobertura fotográfica y de vídeo de un evento con Mondj.",
  heroVideo:
    "/assets/videos/eventos/mondj/video.mp4",
  artists: ["Mondj"],
  services: ["Fotografía profesional", "Vídeo profesional"],
  images: Array.from(
    { length: 12 },
    (_, i) =>
      `/assets/images/eventos/mondj/${i + 1}.jpg`
  ),
};
