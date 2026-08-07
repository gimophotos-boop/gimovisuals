export const data = {
  title: "Alvama Ice",
  location: "La Pobla de Mafumet (Tarragona)",
  description:
    "Cobertura fotográfica y de vídeo de la actuación de Alvama Ice como artista invitado en Pobla Lledó Session 2026.",
  heroVideo: "/assets/videos/eventos/alvama-ice/video.mp4",
  artists: ["Alvama Ice"],
  services: ["Fotografía profesional", "Vídeo profesional"],
  images: Array.from(
    { length: 6 },
    (_, i) => `/assets/images/eventos/alvama-ice/${i + 1}.jpg`
  ),
};
