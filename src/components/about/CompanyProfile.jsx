import Hero from "../../assets/about-contractor.png";

const points = [
 { num: "01", text: "Bangun rumah baru" },
 { num: "02", text: "Renovasi rumah dan ruko" },
 { num: "03", text: "Interior dan finishing" },
 { num: "04", text: "Perencanaan dan estimasi biaya" },
];

export default function CompanyProfile() {
 return (
  <section className="bg-zinc-50 px-6 py-28">
   <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
    {/* Text column */}
    <div className="order-2 lg:order-1">
     {/* Eyebrow */}
     <div className="mb-6 flex items-center gap-4">
      <span className="h-px w-10 bg-amber-400" />
      <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-500">
       Company Profile
      </p>
     </div>

     <h2 className="text-4xl font-black leading-[1.08] tracking-tight text-zinc-950 md:text-5xl">
      Membangun Kepercayaan
      <br />
      Melalui{" "}
      <span className="relative inline-block">
              Kualitas Pekerjaan
              <span className="absolute -bottom-1 left-0 h-1 w-full bg-amber-400" />
            </span>
     </h2>

     {/* Two paragraphs */}
     <div className="mt-8 space-y-5 border-l-2 border-zinc-200 pl-5">
      <p className="text-sm leading-8 text-zinc-500">
       BuildNusa Contractor adalah layanan kontraktor yang berfokus pada
       pembangunan rumah, renovasi, interior, dan finishing. Kami membantu
       client dari tahap konsultasi, survey, perencanaan, hingga pengerjaan
       lapangan.
      </p>
      <p className="text-sm leading-8 text-zinc-500">
       Setiap pekerjaan dilakukan dengan komunikasi yang jelas, estimasi
       yang transparan, dan hasil akhir yang mengutamakan kenyamanan serta
       kualitas bangunan.
      </p>
     </div>

     {/* Points */}
     <div className="mt-10 grid gap-3 sm:grid-cols-2">
      {points.map(({ num, text }) => (
       <div
        key={num}
        className="group flex items-center gap-4 border border-zinc-200 bg-white p-4 transition-all duration-200 hover:border-amber-400/50 hover:bg-amber-400/4"
       >
                <span className="flex-shrink-0 text-xs font-black text-amber-400/50 transition-colors group-hover:text-amber-400">
                  {num}
                </span>
        <div className="h-7 w-px bg-zinc-200 transition-colors group-hover:bg-amber-400/30" />
        <span className="text-sm font-bold text-zinc-700">{text}</span>
       </div>
      ))}
     </div>
    </div>

    {/* Image column */}
    <div className="relative order-1 lg:order-2">
     {/* Frame lines */}
     <div className="absolute -right-5 -top-5 h-24 w-24 border-r-2 border-t-2 border-amber-400" />
     <div className="absolute -bottom-5 -left-5 hidden h-24 w-24 border-b-2 border-l-2 border-zinc-300 md:block" />

     {/* Image */}
     <div className="relative overflow-hidden">
      <img
       src={Hero}
       alt="Tim kontraktor BuildNusa"
       className="h-[540px] w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent" />
     </div>

     {/* Stat badge — bottom left */}
     <div className="absolute -bottom-6 left-6 bg-zinc-950 px-8 py-7 md:-left-6">
      <span className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-amber-400/40" />
      <p className="text-5xl font-black leading-none text-amber-400">120+</p>
      <p className="mt-2 text-xs font-black uppercase tracking-[0.2em] text-white/40">
       Project
       <br />
       Diselesaikan
      </p>
     </div>

     {/* Label tag — top right */}
     <div className="absolute right-5 top-5 flex items-center gap-2 border border-white/15 bg-zinc-950/70 px-4 py-2 backdrop-blur-sm">
      <span className="h-1.5 w-1.5 bg-amber-400" />
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60">
              Semarang
            </span>
     </div>
    </div>
   </div>
  </section>
 );
}