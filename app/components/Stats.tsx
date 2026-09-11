"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "+30.000",
    label: "Seguidores",
  },
  {
    value: "+2000",
    label: "Proyectos",
  },
  {
    value: "+400",
    label: "Clientes",
  },
  {
    value: "100%",
    label: "Compromiso",
  },
  {
    value: "24/7",
    label: "Disponibilidad",
  },
];

export default function Stats() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-black">
              {stat.value}
            </div>

            <div className="mt-3 text-lg text-gray-300">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
