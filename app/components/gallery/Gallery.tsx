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
    <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6">

      {images.map((image, index) => (

        <motion.div
          key={image}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
          }}
          className="overflow-hidden rounded-3xl cursor-pointer break-inside-avoid"
          onClick={() => onImageClick(index)}
        >

          <img
            src={image}
            alt={`Imagen ${index + 1}`}
            className="w-full rounded-3xl transition duration-500 hover:scale-105"
          />

        </motion.div>

      ))}

    </div>
  );
}