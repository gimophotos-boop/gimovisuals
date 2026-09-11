"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    servicio: "",
    mensaje: "",
  });

  const actualizar = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const whatsapp = () => {
    const texto = `Hola, soy ${form.nombre}

Servicio: ${form.servicio}

Teléfono: ${form.telefono}

Email: ${form.email}

Mensaje:
${form.mensaje}`;

    window.open(
      `https://wa.me/34603609367?text=${encodeURIComponent(texto)}`,
      "_blank"
    );
  };

  const email = () => {
    const asunto = "Solicitud desde GIMOVISUALS";

    const cuerpo = `Nombre: ${form.nombre}

Servicio: ${form.servicio}

Teléfono: ${form.telefono}

Email: ${form.email}

Mensaje:

${form.mensaje}`;

    window.location.href =
      `mailto:gimophotos@gmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-40 px-6 bg-gradient-to-b from-zinc-950 to-black"
    >

      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto">

        <div className="text-center mb-24">

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-5">
            CONTACTO
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            ¿Hablamos?
          </h2>

          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-9">
            Cuéntame tu proyecto y elige si quieres enviarme el mensaje por
            WhatsApp o por Email.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-20">

          <div className="space-y-6">

            {[
              {
                icon: "✉️",
                title: "Email",
                value: "gimophotos@gmail.com",
              },
              {
                icon: "📞",
                title: "Teléfono",
                value: "+34 603 609 367",
              },
              {
                icon: "📷",
                title: "Instagram",
                value: "@gimovisuals",
              },
              {
                icon: "📍",
                title: "Zona de trabajo",
                value: "Tarragona · Barcelona · Toda España",
              },
            ].map((item) => (

              <motion.div
                key={item.title}
                whileHover={{
                  x: 8,
                  scale: 1.02,
                }}
                className="flex items-center gap-6 rounded-[32px] border border-zinc-800 bg-zinc-900/70 backdrop-blur-xl p-8"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 text-3xl">
                  {item.icon}
                </div>

                <div>

                  <p className="text-red-500 font-bold mb-1">
                    {item.title}
                  </p>

                  <p className="text-white text-lg">
                    {item.value}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 shadow-[0_0_80px_rgba(220,38,38,.12)] space-y-6"
          >

            <input
              name="nombre"
              value={form.nombre}
              onChange={actualizar}
              type="text"
              placeholder="Nombre"
              className="w-full rounded-2xl bg-black/50 border border-zinc-700 px-6 py-5 text-white outline-none focus:border-red-600 transition"
            />

            <input
              name="telefono"
              value={form.telefono}
              onChange={actualizar}
              type="tel"
              placeholder="Teléfono"
              className="w-full rounded-2xl bg-black/50 border border-zinc-700 px-6 py-5 text-white outline-none focus:border-red-600 transition"
            />

            <input
              name="email"
              value={form.email}
              onChange={actualizar}
              type="email"
              placeholder="Correo electrónico"
              className="w-full rounded-2xl bg-black/50 border border-zinc-700 px-6 py-5 text-white outline-none focus:border-red-600 transition"
            />

            <select
              name="servicio"
              value={form.servicio}
              onChange={actualizar}
              className="w-full rounded-2xl bg-black/50 border border-zinc-700 px-6 py-5 text-white outline-none focus:border-red-600 transition"
            >
              <option value="">Selecciona un servicio</option>
              <option>Automoción</option>
              <option>Inmobiliarias</option>
              <option>Bodas</option>
              <option>Retratos</option>
              <option>Deporte</option>
              <option>Negocios</option>
            </select>
                        <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={actualizar}
              rows={7}
              placeholder="Cuéntame tu proyecto..."
              className="w-full resize-none rounded-2xl bg-black/50 border border-zinc-700 px-6 py-5 text-white outline-none focus:border-red-600 transition"
            />

            <div className="grid md:grid-cols-2 gap-4">

              <button
                type="button"
                onClick={whatsapp}
                className="rounded-2xl bg-green-600 hover:bg-green-700 transition py-5 text-lg font-bold text-white"
              >
                🟢 Enviar por WhatsApp
              </button>

              <button
                type="button"
                onClick={email}
                className="rounded-2xl bg-red-600 hover:bg-red-700 transition py-5 text-lg font-bold text-white"
              >
                🔴 Enviar por Email
              </button>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}