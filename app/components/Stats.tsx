"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "+200",
    title: "Proyectos realizados",
  },
  {
    number: "+50",
    title: "Clientes satisfechos",
  },
  {
    number: "100%",
    title: "Compromiso",
  },
  {
    number: "24/7",
    title: "Disponibilidad",
  },
];

export default function Stats() {
  return (
    <section className="bg-black py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

          {stats.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
              }}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10 text-center hover:border-red-600 transition-all duration-300"
            >

              <h2 className="text-5xl font-black text-red-600 mb-4">
                {item.number}
              </h2>

              <p className="text-gray-300 text-lg">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}