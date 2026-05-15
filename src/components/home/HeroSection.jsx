import { useEffect, useRef, useState } from "react";
import { ArrowRight, Phone, Shield, Award, Users } from "lucide-react";
import Hero from "../../assets/hero-contractor.png";

const stats = [
 { value: 250, suffix: "+", label: "Proyek Selesai" },
 { value: 12, suffix: " Thn", label: "Pengalaman" },
 { value: 98, suffix: "%", label: "Kepuasan Klien" },
];

function useCountUp(target, duration = 1800, start = false) {
 const [count, setCount] = useState(0);
 useEffect(() => {
  if (!start) return;
  let startTime = null;
  const step = (timestamp) => {
   if (!startTime) startTime = timestamp;
   const progress = Math.min((timestamp - startTime) / duration, 1);
   const ease = 1 - Math.pow(1 - progress, 3);
   setCount(Math.floor(ease * target));
   if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
 }, [target, duration, start]);
 return count;
}

function StatItem({ value, suffix, label, start }) {
 const count = useCountUp(value, 1600, start);
 return (
  <div className="group relative">
   <div className="flex flex-col">
    <div className="flex items-baseline gap-0.5">
          <span className="text-4xl font-black tabular-nums text-white md:text-5xl">
            {count}
          </span>
     <span className="text-xl font-black text-amber-400 md:text-2xl">
            {suffix}
          </span>
    </div>
    <span className="mt-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
          {label}
        </span>
   </div>
   {/* Bottom structural line */}
   <div className="mt-4 h-px w-full bg-white/10">
    <div className="h-full w-8 bg-amber-400 transition-all duration-500 group-hover:w-full" />
   </div>
  </div>
 );
}

export default function HeroSection() {
 const [visible, setVisible] = useState(false);
 const sectionRef = useRef(null);

 useEffect(() => {
  const timer = setTimeout(() => setVisible(true), 200);
  return () => clearTimeout(timer);
 }, []);

 return (
  <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-zinc-950">
   {/* Background Image */}
   <img
    src={Hero}
    alt="Kontraktor dan renovasi rumah"
    className="absolute inset-0 h-full w-full object-cover opacity-40"
   />

   {/* Gradient overlays */}
   <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
   <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/60" />

   {/* Blueprint grid overlay */}
   <div
    className="absolute inset-0 opacity-[0.025]"
    style={{
     backgroundImage: `
            linear-gradient(rgba(251,191,36,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251,191,36,1) 1px, transparent 1px)
          `,
     backgroundSize: "80px 80px",
    }}
   />

   {/* Right-side structural panel */}
   <div className="absolute right-0 top-0 hidden h-full w-px bg-white/5 md:block">
    <div className="absolute right-[120px] top-0 h-full w-px bg-white/4" />
    <div className="absolute right-[240px] top-0 h-full w-px bg-white/3" />
   </div>

   {/* Diagonal accent bar */}
   <div
    className="absolute right-[10%] top-0 h-full w-1 bg-amber-400/20"
    style={{ transform: "skewX(-8deg)" }}
   />
   <div
    className="absolute right-[10.5%] top-0 h-full w-0.5 bg-amber-400/10"
    style={{ transform: "skewX(-8deg)" }}
   />

   {/* Content */}
   <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-36 pb-20">
    <div className="max-w-3xl">
     {/* Eyebrow */}
     <div
      className={`mb-8 flex items-center gap-4 transition-all duration-700 ${
       visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
     >
      <div className="flex items-center gap-2 border border-amber-400/30 bg-amber-400/8 px-4 py-2">
       <span className="h-1.5 w-1.5 bg-amber-400" />
       <span className="text-xs font-black uppercase tracking-[0.35em] text-amber-400">
                Kontraktor Profesional
              </span>
      </div>
      <div className="flex items-center gap-2 text-xs text-white/30">
       <Shield size={12} className="text-amber-400/60" />
       <span className="font-bold">Bergaransi & Terpercaya</span>
      </div>
     </div>

     {/* Headline */}
     <div
      className={`transition-all duration-700 delay-100 ${
       visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
     >
      {/* Structural bracket decoration */}
      <div className="mb-4 flex items-center gap-3 text-amber-400/40">
       <span className="h-6 w-px bg-amber-400/40" />
       <span className="text-xs font-bold uppercase tracking-widest">
                001
              </span>
      </div>

      <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
       Bangun &{" "}
       <span className="relative inline-block">
                <span className="relative z-10 text-amber-400">Renovasi</span>
        {/* Underline structural */}
        <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-amber-400/30" />
              </span>
       <br />
       Rumah Lebih{" "}
       <span className="relative">
                Berkualitas
                <span className="absolute -right-3 -top-1 text-sm font-black text-amber-400/60">
                  ™
                </span>
              </span>
      </h1>
     </div>

     {/* Descriptor */}
     <p
      className={`mt-7 max-w-xl border-l-2 border-amber-400/30 pl-5 text-base leading-8 text-white/50 transition-all duration-700 delay-200 ${
       visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
     >
      Kami membantu pembangunan rumah, renovasi, interior, dan finishing
      dengan hasil rapi, terukur, dan profesional — sesuai anggaran &
      tepat waktu.
     </p>

     {/* CTA Buttons */}
     <div
      className={`mt-10 flex flex-wrap items-center gap-4 transition-all duration-700 delay-300 ${
       visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
     >
      <a
       href="https://khonam.id/"
       className="group relative flex items-center gap-2.5 overflow-hidden bg-amber-400 px-8 py-4"
       style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%)" }}
      >
       <span className="absolute inset-0 translate-x-full bg-amber-300 transition-transform duration-300 group-hover:translate-x-0" />
       <Phone size={17} strokeWidth={2.5} className="relative text-zinc-950" />
       <span className="relative text-sm font-black tracking-wide text-zinc-950">
                Konsultasi Gratis
              </span>
      </a>

      <a
       href="/project"
       className="group flex items-center gap-2.5 border border-white/20 px-8 py-4 text-sm font-bold text-white/70 transition-all duration-200 hover:border-amber-400/60 hover:text-amber-400"
      >
       Lihat Project
       <ArrowRight
        size={16}
        className="transition-transform duration-200 group-hover:translate-x-1"
       />
      </a>
     </div>

     {/* Trust badges */}
     <div
      className={`mt-8 flex flex-wrap items-center gap-6 transition-all duration-700 delay-[400ms] ${
       visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
     >
      {[
       { icon: Shield, text: "Garansi Pekerjaan" },
       { icon: Award, text: "Berpengalaman" },
       { icon: Users, text: "Tim Profesional" },
      ].map(({ icon: Icon, text }) => (
       <div key={text} className="flex items-center gap-2 text-xs text-white/30">
        <Icon size={13} className="text-amber-400/60" />
        <span className="font-bold">{text}</span>
       </div>
      ))}
     </div>
    </div>

    {/* Stats */}
    <div
     className={`mt-16 transition-all duration-700 delay-500 ${
      visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
     }`}
    >
     {/* Divider */}
     <div className="mb-10 flex items-center gap-4">
      <span className="h-px w-10 bg-amber-400/40" />
      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
              Track Record
            </span>
      <span className="h-px flex-1 bg-white/6" />
     </div>

     <div className="grid grid-cols-3 gap-8 md:max-w-lg">
      {stats.map((stat) => (
       <StatItem key={stat.label} {...stat} start={visible} />
      ))}
     </div>
    </div>
   </div>

   {/* Bottom diagonal cut */}
   <div
    className="absolute bottom-0 left-0 w-full"
    style={{
     height: "80px",
     background: "linear-gradient(to bottom, transparent, #09090b)",
    }}
   />
  </section>
 );
}