import { ShieldCheck, Handshake, Hammer, Timer } from "lucide-react";

const values = [
 {
  num: "01",
  icon: ShieldCheck,
  title: "Profesional",
  desc: "Setiap pekerjaan dikerjakan dengan standar dan tanggung jawab penuh.",
 },
 {
  num: "02",
  icon: Handshake,
  title: "Terpercaya",
  desc: "Kami menjaga komunikasi dan transparansi selama project berjalan.",
 },
 {
  num: "03",
  icon: Hammer,
  title: "Rapi",
  desc: "Pengerjaan dilakukan dengan memperhatikan detail dan hasil akhir.",
 },
 {
  num: "04",
  icon: Timer,
  title: "Terukur",
  desc: "Timeline dan kebutuhan pekerjaan disusun dengan jelas dan terarah.",
 },
];

export default function ValuesSection() {
 return (
  <section className="bg-zinc-950 px-6 py-28 text-white">
   <div className="mx-auto max-w-7xl px-6">
    {/* Header */}
    <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
     <div className="max-w-xl">
      <div className="mb-5 flex items-center gap-4">
       <span className="h-px w-10 bg-amber-400" />
       <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-400">
        Nilai Kami
       </p>
      </div>
      <h2 className="text-4xl font-black leading-[1.08] tracking-tight md:text-5xl">
       Prinsip yang Kami Pegang
       <br />
       dalam Setiap{" "}
       <span className="text-amber-400">Project</span>
      </h2>
     </div>

     {/* Decorative pattern dots */}
     <div className="flex items-end gap-1.5 pb-2">
      {Array.from({ length: 4 }).map((_, i) => (
       <div
        key={i}
        className="w-1 bg-amber-400/40 transition-all"
        style={{ height: `${(i + 1) * 10}px` }}
       />
      ))}
     </div>
    </div>

    {/* Value cards */}
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
     {values.map((item) => {
      const Icon = item.icon;
      return (
       <div
        key={item.title}
        className="group relative overflow-hidden border border-white/8 bg-white/[0.03] p-8 transition-all duration-300 hover:border-amber-400/40 hover:bg-white/[0.07]"
       >
        {/* Ghost number */}
        <span className="absolute right-4 top-3 text-7xl font-black leading-none text-white/4 transition-colors group-hover:text-amber-400/8 select-none">
                  {item.num}
                </span>

        {/* Top structural accent */}
        <div className="mb-7 flex items-center gap-2">
         <span className="h-0.5 w-8 bg-amber-400 transition-all duration-500 group-hover:w-12" />
         <span className="h-0.5 w-4 bg-amber-400/20" />
        </div>

        {/* Icon box */}
        <div className="relative mb-7 flex h-12 w-12 items-center justify-center bg-amber-400">
         <span className="absolute -left-px -top-px h-2 w-2 border-l-2 border-t-2 border-zinc-950/30" />
         <Icon size={22} strokeWidth={2} className="text-zinc-950" />
        </div>

        <h3 className="text-xl font-black">{item.title}</h3>
        <p className="mt-3 text-sm leading-7 text-white/40">{item.desc}</p>

        {/* Bottom expand line */}
        <div className="mt-7 h-px w-0 bg-amber-400 transition-all duration-500 group-hover:w-full" />
       </div>
      );
     })}
    </div>
   </div>
  </section>
 );
}