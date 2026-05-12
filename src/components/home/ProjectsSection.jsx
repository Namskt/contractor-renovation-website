import { ArrowRight, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { projects } from "../../data/projects";

export default function ProjectsSection() {
 const featured = projects[0];
 const rest = projects.slice(1, 3);

 return (
  <section className="overflow-hidden bg-zinc-50 px-6 py-28">
   <div className="mx-auto max-w-7xl">
    {/* Header */}
    <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
     <div className="max-w-xl">
      <div className="mb-5 flex items-center gap-4">
       <span className="h-px w-10 bg-amber-400" />
       <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-500">
        Project Terbaru
       </p>
      </div>
      <h2 className="text-4xl font-black leading-[1.08] tracking-tight text-zinc-950 md:text-5xl">
       Hasil Pekerjaan yang
       <br />
       Sudah Kami{" "}
       <span className="relative inline-block">
                Selesaikan
                <span className="absolute -bottom-1 left-0 h-1 w-full bg-amber-400" />
              </span>
      </h2>
     </div>

     <Link
      to="/project"
      className="group flex w-fit items-center gap-2.5 border border-zinc-300 bg-white px-6 py-3.5 text-sm font-black tracking-wide text-zinc-950 transition-all hover:border-amber-400 hover:bg-amber-400"
     >
      Lihat Semua Project
      <ArrowRight
       size={16}
       strokeWidth={2.5}
       className="transition-transform group-hover:translate-x-0.5"
      />
     </Link>
    </div>

    {/* Projects layout: 1 featured + 2 stacked */}
    <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
     {/* Featured project */}
     <div className="group relative overflow-hidden bg-zinc-900">
      <div className="relative h-[480px] overflow-hidden lg:h-[560px]">
       <img
        src={featured.image}
        alt={featured.title}
        className="h-full w-full object-cover opacity-75 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
       />
       <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

       {/* Featured badge */}
       <div className="absolute right-5 top-5 border border-amber-400/40 bg-amber-400/15 px-3 py-1.5 backdrop-blur-sm">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-400">
                  Unggulan
                </span>
       </div>

       {/* Content overlay */}
       <div className="absolute bottom-0 left-0 w-full p-8">
        <div className="mb-3 flex items-center gap-3">
         <div className="inline-flex bg-amber-400 px-4 py-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-950">
                      {featured.category}
                    </span>
         </div>
        </div>

        <h3 className="text-3xl font-black leading-tight text-white">
         {featured.title}
        </h3>

        <div className="mt-4 flex items-center justify-between">
         <p className="flex items-center gap-2 text-sm text-white/50">
          <MapPin size={14} className="text-amber-400" />
          {featured.location}
         </p>
         <Link
          to="/project"
          className="flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.2em] text-amber-400 opacity-0 transition-opacity group-hover:opacity-100"
         >
          Lihat Detail
          <ArrowUpRight size={13} />
         </Link>
        </div>
       </div>
      </div>
     </div>

     {/* Secondary projects */}
     <div className="flex flex-col gap-5">
      {rest.map((project) => (
       <div key={project.title} className="group relative flex-1 overflow-hidden bg-zinc-900">
        <div className="relative h-full min-h-[260px] overflow-hidden">
         <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-85"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

         <div className="absolute bottom-0 left-0 w-full p-6">
          <div className="mb-2 inline-flex border border-white/15 bg-zinc-950/70 px-3 py-1.5 backdrop-blur-sm">
                      <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/60">
                        {project.category}
                      </span>
          </div>
          <h3 className="text-xl font-black text-white">{project.title}</h3>
          <div className="mt-2.5 flex items-center justify-between">
           <p className="flex items-center gap-1.5 text-xs text-white/40">
            <MapPin size={12} className="text-amber-400/70" />
            {project.location}
           </p>
           <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-amber-400/0 transition-all group-hover:text-amber-400/80">
                        Detail <ArrowUpRight size={11} />
                      </span>
          </div>
         </div>
        </div>
       </div>
      ))}
     </div>
    </div>

    {/* Bottom count strip */}
    <div className="mt-8 flex items-center gap-6 border-t border-zinc-200 pt-8">
     <div className="flex items-center gap-3">
            <span className="text-3xl font-black text-zinc-950">
              {projects.length}
            </span>
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
              Project ditampilkan
            </span>
     </div>
     <div className="h-px flex-1 bg-zinc-200" />
     <Link
      to="/project"
      className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-amber-500"
     >
      Lihat semua
      <ArrowRight size={13} />
     </Link>
    </div>
   </div>
  </section>
 );
}