export const data = {
  title: "Marsal Ventura",
  location: "La Pobla de Mafumet",
  description:
    "Cobertura fotográfica y de vídeo del evento con Marsal Ventura como artista invitado.",
  heroVideo:
    "/assets/videos/eventos/marsal-ventura/video.mp4",
  artists: ["Marsal Ventura"],
  services: ["Fotografía profesional", "Vídeo profesional"],
  images: Array.from(
    { length: 12 },
    (_, i) =>
      `/assets/images/eventos/marsal-ventura/${i + 1}.jpg`
  ),
};
