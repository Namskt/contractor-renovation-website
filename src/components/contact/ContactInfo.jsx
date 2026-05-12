import { Clock, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

const contacts = [
 {
  num: "01",
  icon: Phone,
  title: "WhatsApp",
  value: "0895-4061-82259",
  href: "https://wa.me/62895406182259",
  cta: "Chat Sekarang",
 },
 {
  num: "02",
  icon: Mail,
  title: "Email",
  value: "info@buildnusa.id",
  href: "mailto:info@buildnusa.id",
  cta: "Kirim Email",
 },
 {
  num: "03",
  icon: MapPin,
  title: "Alamat",
  value: "Semarang, Jawa Tengah",
  href: null,
  cta: null,
 },
 {
  num: "04",
  icon: Clock,
  title: "Jam Operasional",
  value: "Senin – Sabtu, 08.00 – 17.00",
  href: null,
  cta: null,
 },
];

export default function ContactInfo() {
 return (
  <section className="bg-zinc-950 px-6 py-28 text-white">
   <div className="mx-auto max-w-7xl">
    {/* Header */}
    <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
     <div className="max-w-xl">
      <div className="mb-5 flex items-center gap-4">
       <span className="h-px w-10 bg-amber-400" />
       <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-400">
        Informasi Kontak
       </p>
      </div>
      <h2 className="text-4xl font-black leading-[1.08] tracking-tight md:text-5xl">
       Mudah Terhubung
       <br />
       dengan{" "}
       <span className="text-amber-400">Tim Kami</span>
      </h2>
     </div>

     <div className="flex items-center gap-3">
      <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
              </span>
       <span className="text-xs font-bold text-white/30">
                Tersedia untuk project baru
              </span>
      </div>
     </div>
    </div>

    {/* Contact cards */}
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
     {contacts.map((item) => {
      const Icon = item.icon;
      return (
       <div
        key={item.title}
        className="group relative overflow-hidden border border-white/8 bg-white/[0.03] p-7 transition-all duration-300 hover:border-amber-400/30 hover:bg-white/[0.06]"
       >
        {/* Ghost number */}
        <span className="absolute right-4 top-3 text-6xl font-black leading-none text-white/4 select-none">
                  {item.num}
                </span>

        {/* Top structural accent */}
        <div className="mb-7 flex items-center gap-2">
         <span className="h-0.5 w-8 bg-amber-400 transition-all duration-500 group-hover:w-12" />
         <span className="h-0.5 w-4 bg-amber-400/20" />
        </div>

        {/* Icon box */}
        <div className="relative mb-6 flex h-12 w-12 items-center justify-center bg-amber-400">
         <span className="absolute -left-px -top-px h-2 w-2 border-l-2 border-t-2 border-zinc-950/30" />
         <Icon size={20} strokeWidth={2} className="text-zinc-950" />
        </div>

        <h3 className="text-base font-black">{item.title}</h3>
        <p className="mt-2 text-sm leading-7 text-white/40">{item.value}</p>

        {/* CTA link */}
        {item.href && (
         <a
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          className="mt-5 flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.2em] text-amber-400/50 opacity-0 transition-all duration-300 group-hover:opacity-100"
         >
          {item.cta}
          <ArrowUpRight size={12} />
         </a>
        )}

        {/* Bottom expand line */}
        <div className="mt-6 h-px w-0 bg-amber-400 transition-all duration-500 group-hover:w-full" />
       </div>
      );
     })}
    </div>
   </div>
  </section>
 );
}