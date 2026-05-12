import Service3 from "../../assets/servis3.png";

const stats = ["250+ Project", "12 Thn Pengalaman", "Semarang & Sekitarnya"];

export default function ProjectsHero() {
 return (
  <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-zinc-950 px-6 pt-28 pb-20 text-center text-white">
   <img src={Service3} alt="Portfolio project kontraktor" className="absolute inset-0 h-full w-full object-cover opacity-30" />
   <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/50 to-zinc-950" />
   <div className="absolute left-[8%] top-0 h-full w-px bg-white/5" />
   <div className="absolute right-[8%] top-0 h-full w-px bg-white/5" />

   <div className="relative z-10 mx-auto w-full max-w-4xl">

    {/* Headline */}
    <h1 className="text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
     Project yang
     <br />
     Sudah Kami <span className="text-amber-400">Kerjakan</span>
    </h1>

    {/* Descriptor */}
    <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/50">
     Lihat beberapa hasil pekerjaan bangun rumah, renovasi, interior, dan
     finishing yang telah kami selesaikan bersama client.
    </p>

    {/* Stats chips */}
    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
     {stats.map((label, i) => (
      <div key={label} className="flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2">
       <span className="text-[10px] font-black text-amber-400/60">{String(i + 1).padStart(2, "0")}</span>
       <span className="h-3 w-px bg-white/10" />
       <span className="text-xs font-bold text-white/50">{label}</span>
      </div>
     ))}
    </div>
   </div>

   <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-zinc-950 to-transparent" />
  </section>
 );
}