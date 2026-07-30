export default function Divider() {
  return (
    <div className="relative h-40 overflow-hidden bg-black">

      <div className="absolute left-1/2 top-1/2 h-px w-[90%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-red-600/70 to-transparent" />

      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600 shadow-[0_0_30px_rgba(220,38,38,.9)]" />

    </div>
  );
}