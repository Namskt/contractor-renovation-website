import { MapPin, ArrowUpRight } from "lucide-react";

export default function ProjectGrid({ projects }) {
 if (projects.length === 0) {
  return (
   <section className="bg-zinc-50 px-6 py-16">
    <div className="mx-auto max-w-7xl">
     <div className="flex flex-col items-center justify-center border border-zinc-200 bg-white py-20">
      <div className="mb-4 flex h-14 w-14 items-center justify-center border border-zinc-100 bg-zinc-50">
       <span className="text-2xl font-black text-zinc-200">?</span>
      </div>
      <p className="text-sm font-black text-zinc-400">
       Project belum tersedia untuk kategori ini.
      </p>
      <div className="mt-4 flex items-center gap-1.5">
       <span className="h-1 w-1 bg-amber-400/40" />
       <span className="h-1 w-1 bg-amber-400/20" />
       <span className="h-1 w-1 bg-amber-400/10" />
      </div>
     </div>
    </div>
   </section>
  );
 }

 // First project is featured (full width), rest are 2-col grid
 const [featured, ...rest] = projects;

 return (
  <section className="bg-zinc-50 px-6 py-12 pb-28">
   <div className="mx-auto max-w-7xl space-y-5">
    {/* Featured card — full width */}
    {featured && (
     <div className="group relative overflow-hidden bg-zinc-900">
      <div className="relative h-[460px] overflow-hidden">
       <img
        src={featured.image}
        alt={featured.title}
        className="h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-85"
       />
       <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

       {/* Featured tag */}
       <div className="absolute right-6 top-6 flex items-center gap-2 border border-amber-400/40 bg-amber-400/15 px-4 py-2 backdrop-blur-sm">
        <span className="h-1.5 w-1.5 bg-amber-400" />
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-400">
                  Unggulan
                </span>
       </div>

       {/* Content */}
       <div className="absolute bottom-0 left-0 w-full p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
         <div>
          <div className="mb-3 inline-flex bg-amber-400 px-4 py-2">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-950">
                        {featured.category}
                      </span>
          </div>
          <h3 className="text-3xl font-black text-white md:text-4xl">
           {featured.title}
          </h3>
          <p className="mt-3 flex items-center gap-2 text-sm text-white/50">
           <MapPin size={14} className="text-amber-400" />
           {featured.location}
          </p>
         </div>

         <div className="flex items-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="h-px w-10 bg-amber-400/40" />
          <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-amber-400">
                      Lihat Detail <ArrowUpRight size={13} />
                    </span>
         </div>
        </div>
       </div>
      </div>
     </div>
    )}

    {/* Rest — 2 col grid */}
    {rest.length > 0 && (
     <div className="grid gap-5 md:grid-cols-2">
      {rest.map((project, index) => (
       <div
        key={project.title}
        className="group relative overflow-hidden bg-zinc-900"
       >
        <div className="relative h-[340px] overflow-hidden">
         <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover opacity-65 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

         {/* Index tag */}
         <div className="absolute left-5 top-5 flex items-center gap-2 border border-white/10 bg-zinc-950/70 px-3 py-1.5 backdrop-blur-sm">
                    <span className="text-[10px] font-black text-amber-400/70">
                      {String(index + 2).padStart(2, "0")}
                    </span>
         </div>

         {/* Content */}
         <div className="absolute bottom-0 left-0 w-full p-6">
          <div className="mb-2.5 inline-flex border border-white/15 bg-zinc-950/70 px-3 py-1.5 backdrop-blur-sm">
                      <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/60">
                        {project.category}
                      </span>
          </div>
          <h3 className="text-xl font-black text-white">
           {project.title}
          </h3>
          <div className="mt-2.5 flex items-center justify-between">
           <p className="flex items-center gap-1.5 text-xs text-white/40">
            <MapPin size={12} className="text-amber-400/70" />
            {project.location}
           </p>
           <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-amber-400 opacity-0 transition-opacity group-hover:opacity-80">
                        Detail <ArrowUpRight size={11} />
                      </span>
          </div>
         </div>
        </div>
       </div>
      ))}
     </div>
    )}

    {/* Count strip */}
    <div className="flex items-center gap-6 border border-zinc-200 bg-white px-7 py-4">
     <div className="flex items-center gap-3">
            <span className="text-2xl font-black text-zinc-950">
              {projects.length}
            </span>
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
              Project ditampilkan
            </span>
     </div>
     <div className="h-px flex-1 bg-zinc-100" />
     <div className="flex items-center gap-1.5">
      <span className="h-1.5 w-1.5 bg-amber-400" />
      <span className="h-1.5 w-1.5 bg-amber-400/40" />
      <span className="h-1.5 w-1.5 bg-amber-400/15" />
     </div>
    </div>
   </div>
  </section>
 );
}