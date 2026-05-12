import { ShieldCheck, Clock, Wallet, Users } from "lucide-react";

const items = [
 {
  icon: ShieldCheck,
  num: "01",
  title: "Kualitas Terjamin",
  desc: "Pengerjaan dilakukan dengan standar material dan tenaga kerja profesional.",
 },
 {
  icon: Clock,
  num: "02",
  title: "Tepat Waktu",
  desc: "Timeline pekerjaan dibuat jelas agar project berjalan lebih terarah.",
 },
 {
  icon: Wallet,
  num: "03",
  title: "Biaya Transparan",
  desc: "Estimasi dan kebutuhan pekerjaan dijelaskan sejak awal tanpa biaya tersembunyi.",
 },
 {
  icon: Users,
  num: "04",
  title: "Tim Berpengalaman",
  desc: "Dikerjakan oleh tim yang terbiasa menangani bangunan dan renovasi.",
 },
];

export default function WhyChooseSection() {
 return (
  <section className="bg-zinc-950 px-6 py-28 text-white">
   <div className="mx-auto max-w-7xl">
    {/* Header */}
    <div className="mb-16 grid gap-10 md:grid-cols-2 md:items-end">
     <div>
      <div className="mb-5 flex items-center gap-4">
       <span className="h-px w-10 bg-amber-400" />
       <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-400">
        Kenapa Memilih Kami
       </p>
      </div>
      <h2 className="text-4xl font-black leading-[1.08] tracking-tight md:text-5xl">
       Partner Tepat untuk
       <br />
       Bangun &{" "}
       <span className="text-amber-400">Renovasi</span> Rumah
      </h2>
     </div>

     <div className="flex flex-col gap-5 md:pl-8">
      <div className="h-px w-full bg-white/8" />
      <p className="text-sm leading-8 text-white/40">
       Kami membantu proses pembangunan menjadi lebih mudah, mulai dari
       konsultasi kebutuhan, perencanaan, pengerjaan, hingga finishing
       dengan standar terbaik.
      </p>
      <div className="flex items-center gap-3">
       <span className="h-px w-10 bg-amber-400/40" />
       <span className="text-xs font-black uppercase tracking-[0.3em] text-white/20">
                Berpengalaman sejak 2009
              </span>
      </div>
     </div>
    </div>

    {/* Feature cards */}
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
     {items.map((item) => {
      const Icon = item.icon;
      return (
       <div
        key={item.title}
        className="group relative overflow-hidden border border-white/8 bg-white/[0.03] p-7 transition-all duration-300 hover:border-amber-400/30 hover:bg-white/[0.07]"
       >
        {/* Ghost number */}
        <span className="absolute right-4 top-3 text-6xl font-black leading-none text-white/4 transition-colors group-hover:text-amber-400/8 select-none">
                  {item.num}
                </span>

        {/* Top structural line */}
        <div className="mb-7 flex items-center gap-2">
         <span className="h-0.5 w-8 bg-amber-400" />
         <span className="h-0.5 w-4 bg-amber-400/30" />
        </div>

        {/* Icon */}
        <div className="relative mb-6 flex h-12 w-12 items-center justify-center bg-amber-400">
         <span className="absolute -left-px -top-px h-2 w-2 border-l-2 border-t-2 border-zinc-950/30" />
         <Icon size={22} strokeWidth={2} className="text-zinc-950" />
        </div>

        <h3 className="text-lg font-black">{item.title}</h3>
        <p className="mt-3 text-sm leading-7 text-white/40">{item.desc}</p>

        {/* Bottom hover indicator */}
        <div className="mt-6 h-px w-0 bg-amber-400 transition-all duration-500 group-hover:w-full" />
       </div>
      );
     })}
    </div>
   </div>
  </section>
 );
}