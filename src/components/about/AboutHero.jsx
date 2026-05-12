import Hero from "../../assets/about-contractor.png";


export default function AboutHero() {
 return (
  <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-zinc-950 px-6 pt-28 pb-20 text-center text-white">
   <img src={Hero} alt="Tentang BuildNusa Contractor" className="absolute inset-0 h-full w-full object-cover opacity-35" />
   <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/50 to-zinc-950" />
   <div className="absolute left-[8%] top-0 h-full w-px bg-white/5" />
   <div className="absolute right-[8%] top-0 h-full w-px bg-white/5" />

   <div className="relative z-10 mx-auto w-full max-w-4xl">
    {/* Headline */}
    <h1 className="text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
     Kontraktor{" "}
     <span className="text-amber-400">Profesional</span>
     <br />
     untuk Hunian Berkualitas
    </h1>

    {/* Descriptor */}
    <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/50">
     Kami hadir untuk membantu pembangunan, renovasi, interior, dan
     finishing rumah dengan proses kerja yang rapi dan terpercaya.
    </p>
   </div>

   <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-zinc-950 to-transparent" />
  </section>
 );
}