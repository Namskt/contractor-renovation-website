import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import HeroCTA from "../../assets/hero-contractor.png";

const reasons = ["Konsultasi Gratis", "Estimasi Transparan", "Tepat Waktu"];

export default function CTASection() {
 return (
  <section className="relative overflow-hidden bg-amber-400 px-6 py-28">
   {/* Background image — very subtle */}
   <div className="absolute inset-0 overflow-hidden">
    <img
     src={HeroCTA}
     alt=""
     aria-hidden="true"
     className="h-full w-full object-cover opacity-10 mix-blend-multiply"
    />
   </div>

   {/* Structural grid overlay */}
   <div className="absolute inset-0 opacity-[0.06]">
    <div className="grid h-full grid-cols-[repeat(12,1fr)]">
     {Array.from({ length: 12 }).map((_, i) => (
      <div key={i} className="border-r border-zinc-950" />
     ))}
    </div>
   </div>

   {/* Corner frame marks */}
   <span className="absolute left-6 top-6 h-10 w-10 border-l-2 border-t-2 border-zinc-950/20" />
   <span className="absolute right-6 top-6 h-10 w-10 border-r-2 border-t-2 border-zinc-950/20" />
   <span className="absolute bottom-6 left-6 h-10 w-10 border-b-2 border-l-2 border-zinc-950/20" />
   <span className="absolute bottom-6 right-6 h-10 w-10 border-b-2 border-r-2 border-zinc-950/20" />

   <div className="relative z-10 mx-auto grid max-w-7xl px-6 items-center gap-12 md:grid-cols-[1.3fr_0.7fr]">
    {/* Left: copy */}
    <div>
     {/* Eyebrow */}
     <div className="mb-6 flex items-center gap-4">
      <span className="h-px w-10 bg-zinc-950/40" />
      <p className="text-xs font-black uppercase tracking-[0.35em] text-zinc-950/60">
       Konsultasi Project
      </p>
     </div>

     <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-zinc-950 md:text-5xl lg:text-6xl">
      Punya Rencana
      <br />
      Bangun atau
      <br />
      Renovasi Rumah?
     </h2>

     <p className="mt-7 max-w-lg border-l-2 border-zinc-950/20 pl-5 text-sm leading-8 text-zinc-950/60">
      Diskusikan kebutuhan bangunan Anda dengan tim kami. Kami bantu
      rekomendasikan solusi terbaik sesuai kebutuhan, budget, dan target
      pengerjaan.
     </p>

     {/* Trust chips */}
     <div className="mt-8 flex flex-wrap gap-3">
      {reasons.map((r) => (
       <div
        key={r}
        className="flex items-center gap-2 border border-zinc-950/15 bg-zinc-950/8 px-4 py-2"
       >
        <span className="h-1.5 w-1.5 bg-zinc-950/50" />
        <span className="text-xs font-black tracking-wide text-zinc-950/70">
                  {r}
                </span>
       </div>
      ))}
     </div>
    </div>

    {/* Right: CTAs */}
    <div className="flex flex-col gap-4">
     {/* Primary — dark */}
     <a
      href="https://wa.me/62895406182259?text=Halo%20BuildNusa%2C%20saya%20ingin%20konsultasi%20bangun%20atau%20renovasi%20rumah."
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between gap-3 bg-zinc-950 px-7 py-5 text-white transition-colors hover:bg-zinc-800"
     >
      <div className="flex items-center gap-3">
       <MessageCircle size={20} strokeWidth={2} className="text-amber-400" />
       <div>
        <p className="text-sm font-black">Konsultasi WhatsApp</p>
        <p className="mt-0.5 text-xs text-white/40">Respon cepat & gratis</p>
       </div>
      </div>
      <ArrowRight
       size={18}
       className="flex-shrink-0 text-white/30 transition-transform group-hover:translate-x-1 group-hover:text-amber-400"
      />
     </a>

     {/* Secondary — outline dark */}
     <a
      href="/kontak"
      className="group flex items-center justify-between gap-3 border-2 border-zinc-950/30 px-7 py-5 text-zinc-950 transition-all hover:border-zinc-950 hover:bg-zinc-950/8"
     >
      <div className="flex items-center gap-3">
       <Phone size={20} strokeWidth={2} className="text-zinc-950/60" />
       <div>
        <p className="text-sm font-black">Hubungi Langsung</p>
        <p className="mt-0.5 text-xs text-zinc-950/40">0895-4061-82259</p>
       </div>
      </div>
      <ArrowRight
       size={18}
       className="flex-shrink-0 text-zinc-950/20 transition-transform group-hover:translate-x-1 group-hover:text-zinc-950"
      />
     </a>

     {/* Micro trust note */}
     <div className="flex items-center gap-2 pt-2">
      <span className="h-px flex-1 bg-zinc-950/15" />
      <p className="text-xs font-bold text-zinc-950/40">
       Tidak ada komitmen di awal
      </p>
      <span className="h-px flex-1 bg-zinc-950/15" />
     </div>
    </div>
   </div>
  </section>
 );
}