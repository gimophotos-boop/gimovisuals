export const project = {
  title: "Comunión Rosa",
  description:
    "Una selección de fotografías de la comunión de Rosa.",
  coverVideo: "/assets/videos/bodas/comunion-rosa.mp4",
  images: Array.from(
    { length: 12 },
    (_, i) => `/assets/images/bodas/comunion-rosa/${i + 1}.jpg`
  ),
};
