import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GIMOVISUALS | Fotografía y Vídeo Profesional",
  description:
    "Fotografía, vídeo y contenido audiovisual profesional para automoción, inmobiliarias, bodas, deporte, retratos y negocios.",

  keywords: [
    "fotógrafo Tarragona",
    "videógrafo Tarragona",
    "fotografía inmobiliaria",
    "fotografía coches",
    "fotografía deportiva",
    "fotografía bodas",
    "drone Tarragona",
    "GIMOVISUALS",
  ],

  authors: [{ name: "GIMOVISUALS" }],

  creator: "GIMOVISUALS",

  openGraph: {
    title: "GIMOVISUALS",
    description:
      "Fotografía y vídeo profesional en Tarragona.",
    url: "https://gimovisuals.es",
    siteName: "GIMOVISUALS",
    locale: "es_ES",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="es" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}