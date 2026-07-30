import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-[160px] leading-none font-black text-red-600">
          404
        </h1>

        <h2 className="text-5xl font-black text-white mt-6">
          Página no encontrada
        </h2>

        <p className="text-gray-400 text-xl max-w-xl mx-auto mt-8 leading-9">
          La página que buscas no existe o ha sido movida.
        </p>

        <Link
          href="/"
          className="inline-block mt-12 rounded-full bg-red-600 px-10 py-5 text-lg font-bold text-white hover:bg-red-700 transition"
        >
          Volver al inicio
        </Link>

      </div>

    </main>
  );
}