import Navbar from "@/app/components/Navbar";

export default function EventosProyectosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
