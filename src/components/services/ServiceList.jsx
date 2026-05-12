import { ArrowUpRight } from "lucide-react";
import { services } from "../../data/services";

export default function ServiceList() {
 return (
  <section className="bg-zinc-50 px-6 py-28">
   <div className="mx-auto max-w-7xl">
    {/* Header */}
    <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
     <div className="max-w-xl">
      <div className="mb-5 flex items-center gap-4">
       <span className="h-px w-10 bg-amber-400" />
       <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-500">
        Pilihan Layanan
       </p>
      </div>
      <h2 className="text-4xl font-black leading-[1.08] tracking-tight text-zinc-950 md:text-5xl">
       Layanan yang Bisa
       <br />
       Anda{" "}
       <span className="relative inline-block">
                Pilih
                <span className="absolute -bottom-1 left-0 h-1 w-full bg-amber-400" />
              </span>
      </h2>
     </div>

     <div className="flex items-center gap-3">
      <span className="h-px w-10 bg-zinc-200" />
      <span className="text-xs font-black uppercase tracking-[0.3em] text-zinc-300">
              {services.length} Layanan tersedia
            </span>
     </div>
    </div>

    {/* Grid */}
    <div className="grid gap-5 md:grid-cols-3">
     {services.map((item, index) => {
      const Icon = item.icon;
      return (
       <div
        key={item.title}
        className="group relative overflow-hidden border border-zinc-200 bg-white transition-all duration-300 hover:border-amber-400/40 hover:shadow-lg"
       >
        {/* Image */}
        <div className="relative h-60 overflow-hidden">
         <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />

         {/* Index number on image */}
         <div className="absolute left-5 top-5 flex items-center gap-2 border border-white/15 bg-zinc-950/70 px-3 py-1.5 backdrop-blur-sm">
                    <span className="text-[10px] font-black text-amber-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
          <span className="h-3 w-px bg-white/20" />
          <span className="text-[10px] font-black uppercase tracking-widest text-white/50">
                      Layanan
                    </span>
         </div>
        </div>

        {/* Content */}
        <div className="p-7">
         {/* Icon box */}
         <div className="relative -mt-12 mb-6 flex h-12 w-12 items-center justify-center bg-amber-400">
          <span className="absolute -left-px -top-px h-2 w-2 border-l-2 border-t-2 border-zinc-950/30" />
          <Icon size={22} strokeWidth={2} className="text-zinc-950" />
         </div>

         <h3 className="text-xl font-black text-zinc-950">{item.title}</h3>
         <p className="mt-3 text-sm leading-7 text-zinc-500">{item.desc}</p>

         {/* CTA row */}
         <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-5">
          <a
           href="/layanan#detail"
           className="group/link flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-amber-500"
          >
           Lihat Detail
           <ArrowUpRight
            size={13}
            className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
           />
          </a>
          {/* Hover expand line */}
          <div className="h-px w-0 bg-amber-400 transition-all duration-500 group-hover:w-16" />
         </div>
        </div>
       </div>
      );
     })}
    </div>
   </div>
  </section>
 );
}