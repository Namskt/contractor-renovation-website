import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import Hero from "../../assets/about-contractor.png";

const points = [
 { num: "01", text: "Pengerjaan rapi dan terukur" },
 { num: "02", text: "Tim berpengalaman di lapangan" },
 { num: "03", text: "Estimasi biaya transparan" },
 { num: "04", text: "Konsultasi kebutuhan bangunan" },
];

export default function AboutSection() {
 return (
  <section className="overflow-hidden bg-zinc-50 px-6 py-28">
   <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
    {/* Image Column */}
    <div className="relative">
     {/* Structural frame lines */}
     <div className="absolute -left-5 -top-5 h-24 w-24 border-l-2 border-t-2 border-amber-400" />
     <div className="absolute -bottom-5 -right-5 hidden h-24 w-24 border-b-2 border-r-2 border-zinc-900 md:block" />

     {/* Main image */}
     <div className="relative overflow-hidden">
      <img
       src={Hero}
       alt="Tentang BuildNusa Contractor"
       className="h-[540px] w-full object-cover"
      />
      {/* Dark tint on bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/30 to-transparent" />
     </div>

     {/* Experience badge */}
     <div
      className="absolute -bottom-6 right-6 bg-amber-400 px-8 py-7 md:-right-6"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)" }}
     >
      {/* Corner marks */}
      <span className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-zinc-950/20" />
      <p className="text-6xl font-black leading-none text-zinc-950">15+</p>
      <p className="mt-2 text-xs font-black uppercase tracking-[0.2em] text-zinc-950/60">
       Tahun
       <br />
       Pengalaman
      </p>
     </div>

     {/* Structural tag */}
     <div className="absolute left-6 top-6 flex items-center gap-2 bg-zinc-950/80 px-4 py-2 backdrop-blur-sm">
      <span className="h-1.5 w-1.5 bg-amber-400" />
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70">
              Est. 2009
            </span>
     </div>
    </div>

    {/* Content Column */}
    <div className="lg:pl-6">
     {/* Eyebrow */}
     <div className="mb-6 flex items-center gap-4">
      <span className="h-px w-10 bg-amber-400" />
      <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-500">
       Tentang Kami
      </p>
     </div>

     {/* Headline */}
     <h2 className="text-4xl font-black leading-[1.08] tracking-tight text-zinc-950 md:text-5xl">
      Membangun Hunian
      <br />
      dengan Standar{" "}
      <span className="relative inline-block">
              Profesional
              <span className="absolute -bottom-1 left-0 h-1 w-full bg-amber-400" />
            </span>
     </h2>

     {/* Paragraph */}
     <p className="mt-8 border-l-2 border-amber-400/30 pl-5 text-base leading-8 text-zinc-500">
      BuildNusa Contractor membantu client dalam pembangunan rumah,
      renovasi, interior, dan finishing. Kami mengutamakan kualitas
      pekerjaan, komunikasi yang jelas, serta hasil akhir yang sesuai
      kebutuhan dan anggaran.
     </p>

     {/* Points grid */}
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
        <p className="text-sm font-bold text-zinc-700">{text}</p>
       </div>
      ))}
     </div>

     {/* CTA */}
     <div className="mt-10 flex items-center gap-5">
      <Link
       to="/tentang"
       className="group relative flex items-center gap-2.5 overflow-hidden bg-zinc-950 px-7 py-4"
       style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)" }}
      >
       <span className="absolute inset-0 translate-x-full bg-amber-400 transition-transform duration-300 group-hover:translate-x-0" />
       <span className="relative text-sm font-black tracking-wide text-white transition-colors group-hover:text-zinc-950">
                Tentang Perusahaan
              </span>
       <ArrowRight
        size={16}
        strokeWidth={2.5}
        className="relative text-white transition-colors group-hover:text-zinc-950"
       />
      </Link>
      <a
       href="https://wa.me/62895406182259"
       target="_blank"
       rel="noreferrer"
       className="text-sm font-bold text-zinc-400 underline-offset-4 transition-colors hover:text-amber-500 hover:underline"
      >
       Konsultasi gratis →
      </a>
     </div>
    </div>
   </div>
  </section>
 );
}