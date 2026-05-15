import { Eye, Target, ArrowRight } from "lucide-react";

const cards = [
 {
  icon: Eye,
  num: "01",
  label: "Visi",
  title: "Menjadi Partner Terpercaya",
  desc: "Menjadi partner kontraktor terpercaya yang membantu masyarakat memiliki hunian nyaman, kuat, dan bernilai tinggi.",
  dark: false,
 },
 {
  icon: Target,
  num: "02",
  label: "Misi",
  title: "Layanan Berkualitas & Transparan",
  desc: "Memberikan layanan pembangunan dan renovasi dengan proses yang transparan, kualitas pengerjaan yang rapi, serta komunikasi yang mudah dipahami oleh client.",
  dark: true,
 },
];

export default function VisionMission() {
 return (
  <section className="bg-zinc-50 px-6 py-28">
   <div className="mx-auto max-w-7xl px-6">
    {/* Header */}
    <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
     <div>
      <div className="mb-5 flex items-center gap-4">
       <span className="h-px w-10 bg-amber-400" />
       <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-500">
        Visi & Misi
       </p>
      </div>
      <h2 className="text-4xl font-black leading-[1.08] tracking-tight text-zinc-950 md:text-5xl">
       Arah & Tujuan
       <br />
       BuildNusa Contractor
      </h2>
     </div>
     <p className="max-w-xs text-sm leading-7 text-zinc-400 md:text-right">
      Landasan yang memandu setiap langkah kerja kami dalam melayani
      klien.
     </p>
    </div>

    {/* Cards */}
    <div className="grid gap-5 md:grid-cols-2">
     {cards.map((card) => {
      const Icon = card.icon;
      return (
       <div
        key={card.label}
        className={`group relative overflow-hidden p-10 transition-all duration-300 ${
         card.dark
          ? "bg-zinc-950 text-white"
          : "border border-zinc-200 bg-white text-zinc-950 hover:border-amber-400/40"
        }`}
       >
        {/* Ghost number */}
        <span
         className={`absolute right-6 top-4 text-8xl font-black leading-none select-none ${
          card.dark ? "text-white/4" : "text-zinc-100"
         }`}
        >
                  {card.num}
                </span>

        {/* Corner frame mark */}
        <span
         className={`absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 ${
          card.dark ? "border-amber-400/40" : "border-amber-400"
         }`}
        />
        <span
         className={`absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 ${
          card.dark ? "border-white/10" : "border-zinc-200"
         }`}
        />

        {/* Top structural */}
        <div className="mb-8 flex items-center gap-3">
         <span className="h-0.5 w-10 bg-amber-400" />
         <span
          className={`text-xs font-black uppercase tracking-[0.3em] ${
           card.dark ? "text-amber-400" : "text-amber-500"
          }`}
         >
                    {card.label}
                  </span>
        </div>

        {/* Icon */}
        <div className="relative mb-8 flex h-14 w-14 items-center justify-center bg-amber-400">
         <span className="absolute -left-px -top-px h-2.5 w-2.5 border-l-2 border-t-2 border-zinc-950/20" />
         <Icon size={26} strokeWidth={2} className="text-zinc-950" />
        </div>

        <h3
         className={`text-3xl font-black tracking-tight ${
          card.dark ? "text-white" : "text-zinc-950"
         }`}
        >
         {card.title}
        </h3>

        <p
         className={`mt-5 text-sm leading-8 ${
          card.dark ? "text-white/40" : "text-zinc-500"
         }`}
        >
         {card.desc}
        </p>

        {/* Bottom expand line */}
        <div
         className={`mt-8 flex items-center gap-3 border-t pt-6 ${
          card.dark ? "border-white/8" : "border-zinc-100"
         }`}
        >
         <div className="h-px w-0 bg-amber-400 transition-all duration-500 group-hover:w-10" />
         <span
          className={`text-xs font-black uppercase tracking-[0.2em] transition-colors ${
           card.dark
            ? "text-white/20 group-hover:text-amber-400/60"
            : "text-zinc-300 group-hover:text-amber-500"
          }`}
         >
                    BuildNusa · {card.label}
                  </span>
        </div>
       </div>
      );
     })}
    </div>

    {/* Bottom tagline strip */}
    <div className="mt-10 flex items-center justify-between border border-zinc-200 bg-white px-8 py-5">
     <div className="flex items-center gap-4">
      <div className="flex items-center gap-1.5">
       <span className="h-1.5 w-1.5 bg-amber-400" />
       <span className="h-1.5 w-1.5 bg-amber-400/40" />
       <span className="h-1.5 w-1.5 bg-amber-400/15" />
      </div>
      <p className="text-sm font-black text-zinc-950">
       Bersama kami, rumah impian Anda dapat terwujud.
      </p>
     </div>
     <a
      href="https://wa.me/62895406182259"
      target="_blank"
      rel="noreferrer"
      className="hidden items-center gap-2 bg-amber-400 px-5 py-2.5 text-xs font-black tracking-wide text-zinc-950 transition-colors hover:bg-amber-300 sm:flex"
     >
      Mulai Konsultasi
      <ArrowRight size={13} strokeWidth={2.5} />
     </a>
    </div>
   </div>
  </section>
 );
}