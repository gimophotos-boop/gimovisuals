export const project = {
  title: "Boda Brian y Marina",
  description:
    "Una selección de fotografías de la boda de Brian y Marina.",
  coverVideo: "/assets/videos/bodas/brian-marina.mp4",
  images: Array.from(
    { length: 12 },
    (_, i) => `/assets/images/bodas/brian-marina/${i + 1}.jpg`
  ),
};
