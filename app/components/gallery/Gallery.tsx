"use client";

import { motion } from "framer-motion";

type GalleryProps = {
  images: string[];
  onImageClick: (index: number) => void;
};

export default function Gallery({
  images,
  onImageClick,
}: GalleryProps) {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 [column-gap:32px] [column-fill:balance] space-y-8">

      {images.map((image, index) => (

        <motion.div
          key={image}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.04,
          }}
          className="rounded-2xl cursor-pointer break-inside-avoid mb-10"
          onClick={() => onImageClick(index)}
        >

          <img
            src={image}
            alt={`Imagen ${index + 1}`}
            className="block w-full h-auto max-w-full rounded-2xl transition duration-700"
          />

        </motion.div>

      ))}

    </div>
  );
}