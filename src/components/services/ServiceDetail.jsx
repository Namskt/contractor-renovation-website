import Service1 from "../../assets/servis1.png";
import Service2 from "../../assets/servis2.png";
import Service3 from "../../assets/servis3.png";

const details = [
 {
  num: "01",
  title: "Bangun Rumah",
  image: Service1,
  tag: "Konstruksi",
  items: [
   "Pembangunan rumah dari awal",
   "Pekerjaan struktur bangunan",
   "Pekerjaan dinding dan atap",
   "Finishing rumah siap huni",
  ],
 },
 {
  num: "02",
  title: "Renovasi Rumah",
  image: Service2,
  tag: "Renovasi",
  items: [
   "Renovasi ruang tamu",
   "Renovasi kamar dan dapur",
   "Perbaikan atap dan plafon",
   "Pengecatan dan perapihan ulang",
  ],
 },
 {
  num: "03",
  title: "Interior & Finishing",
  image: Service3,
  tag: "Interior",
  items: [
   "Kitchen set",
   "Plafon dan lighting",
   "Pemasangan lantai",
   "Finishing detail ruangan",
  ],
 },
];

export default function ServiceDetail() {
 return (
  <section id="detail" className="bg-zinc-950 px-6 py-28">
   <div className="mx-auto max-w-7xl px-6">
    {/* Header */}
    <div className="mb-16">
     <div className="mb-5 flex items-center gap-4">
      <span className="h-px w-10 bg-amber-400" />
      <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-400">
       Detail Layanan
      </p>
     </div>
     <h2 className="text-4xl font-black leading-[1.08] tracking-tight text-white md:text-5xl">
      Apa Saja yang Kami{" "}
      <span className="text-amber-400">Kerjakan</span>
     </h2>
    </div>

    {/* Detail cards */}
    <div className="space-y-5">
     {details.map((item, index) => (
      <div
       key={item.title}
       className={`group grid overflow-hidden border border-white/8 bg-white/[0.03] transition-all duration-300 hover:border-amber-400/20 lg:grid-cols-2 ${
        index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
       }`}
      >
       {/* Image */}
       <div className="relative h-[360px] overflow-hidden lg:h-auto">
        <img
         src={item.image}
         alt={item.title}
         className="h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-zinc-950/40" />

        {/* Image overlay tag */}
        <div className="absolute left-6 top-6 flex items-center gap-2 border border-white/15 bg-zinc-950/70 px-4 py-2 backdrop-blur-sm">
                  <span className="text-[10px] font-black text-amber-400">
                    {item.num}
                  </span>
         <span className="h-3 w-px bg-white/20" />
         <span className="text-[10px] font-black uppercase tracking-widest text-white/50">
                    {item.tag}
                  </span>
        </div>
       </div>

       {/* Content */}
       <div className="flex flex-col justify-center p-10 lg:p-12">
        {/* Eyebrow */}
        <div className="mb-5 flex items-center gap-4">
         <span className="h-0.5 w-8 bg-amber-400" />
         <span className="text-xs font-black uppercase tracking-[0.3em] text-amber-400">
                    Detail Layanan
                  </span>
        </div>

        <h3 className="text-4xl font-black text-white">{item.title}</h3>

        {/* List items */}
        <ul className="mt-8 space-y-3">
         {item.items.map((list, i) => (
          <li
           key={list}
           className="group/item flex items-center gap-4 border border-white/6 bg-white/[0.03] px-5 py-4 transition-all duration-200 hover:border-amber-400/30 hover:bg-white/[0.06]"
          >
                      <span className="flex-shrink-0 text-xs font-black text-amber-400/40 transition-colors group-hover/item:text-amber-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
           <span className="h-6 w-px bg-white/10" />
           <span className="text-sm font-bold text-white/70 transition-colors group-hover/item:text-white">
                        {list}
                      </span>
          </li>
         ))}
        </ul>

        {/* CTA */}
        <a
         href="https://wa.me/62895406182259"
         target="_blank"
         rel="noreferrer"
         className="group/cta mt-8 flex w-fit items-center gap-2 border border-white/15 px-6 py-3 text-xs font-black uppercase tracking-[0.2em] text-white/50 transition-all hover:border-amber-400/50 hover:text-amber-400"
        >
         Konsultasi Layanan Ini
         <span className="transition-transform group-hover/cta:translate-x-1">
                    →
                  </span>
        </a>
       </div>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
}