import { useEffect, useRef, useState } from "react";

const stats = [
 { value: 15, suffix: "+", label: "Tahun Pengalaman" },
 { value: 250, suffix: "+", label: "Project Selesai" },
 { value: 98, suffix: "%", label: "Client Puas" },
 { value: 35, suffix: "+", label: "Tim Profesional" },
];

function useCountUp(target, duration = 1600, triggered = false) {
 const [count, setCount] = useState(0);
 useEffect(() => {
  if (!triggered) return;
  let start = null;
  const step = (ts) => {
   if (!start) start = ts;
   const p = Math.min((ts - start) / duration, 1);
   const ease = 1 - Math.pow(1 - p, 3);
   setCount(Math.floor(ease * target));
   if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
 }, [target, duration, triggered]);
 return count;
}

function StatItem({ value, suffix, label, triggered, index }) {
 const count = useCountUp(value, 1400, triggered);
 return (
  <div
   className="group relative flex flex-col items-center justify-center px-6 py-10 transition-colors duration-300 hover:bg-amber-400/10"
   style={{ transitionDelay: `${index * 60}ms` }}
  >
   {/* Top corner marks */}
   <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-amber-400/40" />
   <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-amber-400/40" />

   <div className="flex items-baseline gap-1">
        <span className="text-5xl font-black tabular-nums text-amber-400 md:text-6xl">
          {count}
        </span>
    <span className="text-2xl font-black text-amber-400/70">{suffix}</span>
   </div>

   <div className="mt-3 flex flex-col items-center gap-2">
    <div className="h-px w-8 bg-amber-400/30 transition-all duration-500 group-hover:w-16 group-hover:bg-amber-400" />
    <p className="text-xs font-black uppercase tracking-[0.25em] text-white/50">
     {label}
    </p>
   </div>

   {/* Bottom corner marks */}
   <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-amber-400/40" />
   <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-amber-400/40" />
  </div>
 );
}

export default function StatsSection() {
 const [triggered, setTriggered] = useState(false);
 const ref = useRef(null);

 useEffect(() => {
  const observer = new IntersectionObserver(
   ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
   { threshold: 0.3 }
  );
  if (ref.current) observer.observe(ref.current);
  return () => observer.disconnect();
 }, []);

 return (
  <section ref={ref} className="relative bg-zinc-950 px-6">
   {/* Blueprint grid */}
   <div
    className="absolute inset-0 opacity-[0.02]"
    style={{
     backgroundImage: `linear-gradient(rgba(251,191,36,1) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,1) 1px, transparent 1px)`,
     backgroundSize: "60px 60px",
    }}
   />

   <div className="relative mx-auto max-w-7xl">
    {/* Section label */}
    <div className="flex items-center">
     <div className="flex-1 border-t border-white/6" />
     <div className="border border-white/8 bg-zinc-950 px-6 py-3">
      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-400/70">
       Track Record
      </p>
     </div>
     <div className="flex-1 border-t border-white/6" />
    </div>

    <div className="grid grid-cols-2 divide-x divide-y divide-white/6 md:grid-cols-4 md:divide-y-0">
     {stats.map((item, i) => (
      <StatItem key={item.label} {...item} triggered={triggered} index={i} />
     ))}
    </div>

    <div className="flex items-center">
     <div className="flex-1 border-t border-white/6" />
     <div className="border border-white/8 bg-zinc-950 px-4 py-2">
      <div className="flex items-center gap-1.5">
       <span className="h-1 w-1 bg-amber-400" />
       <span className="h-1 w-1 bg-amber-400/40" />
       <span className="h-1 w-1 bg-amber-400/15" />
      </div>
     </div>
     <div className="flex-1 border-t border-white/6" />
    </div>
   </div>
  </section>
 );
}