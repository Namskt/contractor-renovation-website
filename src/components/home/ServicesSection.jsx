import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "../../data/services";

export default function ServicesSection() {
 return (
  <section className="relative overflow-hidden bg-zinc-950 px-6 py-28">
   {/* Blueprint grid */}
   <div
    className="absolute inset-0 opacity-[0.025]"
    style={{
     backgroundImage: `linear-gradient(rgba(251,191,36,1) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,1) 1px, transparent 1px)`,
     backgroundSize: "80px 80px",
    }}
   />

   {/* Diagonal accent */}
   <div
    className="absolute right-[15%] top-0 h-full w-0.5 bg-amber-400/10"
    style={{ transform: "skewX(-6deg)" }}
   />

   <div className="relative mx-auto max-w-7xl">
    {/* Header row */}
    <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
     <div className="max-w-xl">
      <div className="mb-5 flex items-center gap-4">
       <span className="h-px w-10 bg-amber-400" />
       <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-400">
        Layanan Kami
       </p>
      </div>
      <h2 className="text-4xl font-black leading-[1.08] tracking-tight text-white md:text-5xl">
       Solusi Bangun &{" "}
       <span className="text-amber-400">Renovasi</span>
       <br />
       untuk Kebutuhan Anda
      </h2>
     </div>

     <div className="flex items-center gap-3">
      <div className="h-px w-12 bg-white/10" />
      <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/20">
              {services.length} Layanan tersedia
            </span>
     </div>
    </div>

    {/* Cards grid */}
    <div className="grid gap-6 md:grid-cols-3">
     {services.map((item, index) => {
      const Icon = item.icon;
      return (
       <div
        key={item.title}
        className="group relative overflow-hidden border border-white/8 bg-white/[0.03] transition-all duration-500 hover:border-amber-400/30 hover:bg-white/[0.06]"
       >
        {/* Index number */}
        <div className="absolute right-5 top-5 z-10 text-5xl font-black leading-none text-white/5 transition-colors group-hover:text-amber-400/10">
         {String(index + 1).padStart(2, "0")}
        </div>

        {/* Image */}
        <div className="relative h-56 overflow-hidden">
         <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

         {/* Category tag */}
         <div className="absolute bottom-4 left-4 border border-white/15 bg-zinc-950/80 px-3 py-1.5 backdrop-blur-sm">
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/60">
                      Layanan
                    </span>
         </div>
        </div>

        {/* Content */}
        <div className="p-7">
         {/* Icon */}
         <div className="relative mb-6 flex h-12 w-12 items-center justify-center bg-amber-400">
          <span className="absolute -left-px -top-px h-2 w-2 border-l-2 border-t-2 border-zinc-950/30" />
          <Icon size={22} strokeWidth={2} className="text-zinc-950" />
         </div>

         <h3 className="text-xl font-black text-white">{item.title}</h3>

         <p className="mt-3 text-sm leading-7 text-white/40">{item.desc}</p>

         {/* Bottom line + link */}
         <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-5">
          <a
           href="/layanan"
           className="group/link flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white/30 transition-colors hover:text-amber-400"
          >
           Lihat Detail
           <ArrowRight
            size={13}
            className="transition-transform group-hover/link:translate-x-1"
           />
          </a>
          <ArrowUpRight
           size={16}
           className="text-white/10 transition-colors group-hover:text-amber-400/40"
          />
         </div>
        </div>
       </div>
      );
     })}
    </div>

    {/* Bottom CTA strip */}
    <div className="mt-14 flex items-center justify-between border border-white/8 bg-white/[0.02] p-6">
     <div>
      <p className="text-sm font-black text-white">
       Tidak menemukan layanan yang Anda cari?
      </p>
      <p className="mt-1 text-xs text-white/30">
       Konsultasikan kebutuhan spesifik bangunan Anda bersama tim kami.
      </p>
     </div>
     <a
      href="https://wa.me/62895406182259"
      target="_blank"
      rel="noreferrer"
      className="group flex flex-shrink-0 items-center gap-2.5 bg-amber-400 px-6 py-3 transition-colors hover:bg-amber-300"
      style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)" }}
     >
            <span className="text-xs font-black tracking-wide text-zinc-950">
              Konsultasi Sekarang
            </span>
      <ArrowRight size={14} strokeWidth={2.5} className="text-zinc-950" />
     </a>
    </div>
   </div>
  </section>
 );
}