import Hero from "../../assets/hero-contractor.png";


export default function ContactHero() {
 return (
  <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden bg-zinc-950 px-6 pt-28 pb-20 text-center text-white">
   <img src={Hero} alt="Kontak kontraktor" className="absolute inset-0 h-full w-full object-cover opacity-30" />
   <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/50 to-zinc-950" />
   <div className="absolute left-[8%] top-0 h-full w-px bg-white/5" />
   <div className="absolute right-[8%] top-0 h-full w-px bg-white/5" />

   <div className="relative z-10 mx-auto w-full max-w-4xl">


    {/* Headline */}
    <h1 className="text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
     Konsultasikan
     <br />
     Project <span className="text-amber-400">Anda</span>
    </h1>

    {/* Descriptor */}
    <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/50">
     Ceritakan kebutuhan bangun atau renovasi rumah Anda. Kami bantu
     susunkan rekomendasi terbaik sesuai budget dan target pengerjaan.
    </p>
   </div>

   <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-zinc-950 to-transparent" />
  </section>
 );
}