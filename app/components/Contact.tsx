"use client";

import { motion } from "framer-motion";

function EmailIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L4 20l1.1-3.6A8.5 8.5 0 1 1 20.5 11.5Z" />
      <path d="M8.5 8.5c.3-.5.6-.5 1-.5h.4c.3 0 .5.1.6.5l.6 1.5c.1.3.1.5-.1.8l-.5.6c-.2.2-.2.4 0 .7.5.8 1.2 1.5 2 2 .3.2.5.2.7 0l.6-.5c.2-.2.5-.2.8-.1l1.5.6c.3.1.5.3.5.6v.4c0 .4-.1.7-.5 1-.4.3-1 .4-1.4.3-1.1-.3-2.4-1-3.7-2.3-1.3-1.3-2-2.6-2.3-3.7-.1-.4 0-1 .3-1.4Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function Contact() {
  const contacts = [
    {
      icon: <EmailIcon />,
      title: "Email",
      value: "gimophotos@gmail.com",
      href: "mailto:gimophotos@gmail.com",
    },
    {
      icon: <WhatsAppIcon />,
      title: "WhatsApp",
      value: "+34 603 609 367",
      href: "https://wa.me/34603609367",
    },
    {
      icon: <InstagramIcon />,
      title: "Instagram",
      value: "@gimovisuals",
      href: "https://instagram.com/gimovisuals",
    },
  ];

  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-32 px-6 bg-gradient-to-b from-zinc-950 to-black"
    >
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[8px] text-red-500 font-semibold mb-5">
            CONTACTO
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            ¿Hablamos?
          </h2>

          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-9">
            Si tienes un proyecto en mente, puedes contactar conmigo
            directamente a través de cualquiera de estos canales.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {contacts.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{ y: -6 }}
              className="group flex items-center gap-4 rounded-[28px] border border-zinc-800 bg-zinc-900/70 backdrop-blur-xl px-5 py-5 transition duration-500 hover:border-red-600"
            >

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white">
                {item.icon}
              </div>

              <div className="min-w-0">

                <p className="text-red-500 font-bold mb-1">
                  {item.title}
                </p>

                <p className="text-white text-base break-all group-hover:text-red-400 transition">
                  {item.value}
                </p>

              </div>

            </motion.a>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.24,
            }}
            className="flex items-center gap-4 rounded-[28px] border border-zinc-800 bg-zinc-900/70 backdrop-blur-xl px-5 py-5 transition duration-500 hover:border-red-600"
          >

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white">
              <LocationIcon />
            </div>

            <div>
              <p className="text-red-500 font-bold mb-1">
                Ubicación
              </p>

              <p className="text-white text-base">
                Tarragona
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
