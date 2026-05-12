import { Link } from "react-router";
import { MapPin, Mail, Phone, ArrowUpRight, HardHat, Building2, Wrench } from "lucide-react";

const navLinks = [
 { label: "Home", path: "/" },
 { label: "Tentang", path: "/tentang" },
 { label: "Layanan", path: "/layanan" },
 { label: "Project", path: "/project" },
 { label: "Kontak", path: "/kontak" },
];

const services = [
 "Bangun Rumah",
 "Renovasi Total",
 "Interior & Furnitur",
 "Finishing & Cat",
 "Konsultasi Desain",
];

const contactItems = [
 { icon: MapPin, text: "Semarang, Jawa Tengah", href: null },
 { icon: Phone, text: "0895-4061-82259", href: "tel:+62895406182259" },
 { icon: Mail, text: "info@buildnusa.id", href: "mailto:info@buildnusa.id" },
];

const stats = [
 { icon: Building2, value: "250+", label: "Proyek Selesai" },
 { icon: HardHat, value: "12 Thn", label: "Pengalaman" },
 { icon: Wrench, value: "98%", label: "Kepuasan Klien" },
];

export default function Footer() {
 return (
  <footer className="bg-zinc-950">
   {/* Stats Strip */}
   <div className="border-y border-white/6">
    <div className="mx-auto max-w-7xl">
     <div className="grid divide-x divide-white/6 md:grid-cols-3">
      {stats.map(({ icon: Icon, value, label }) => (
       <div
        key={label}
        className="group flex items-center gap-5 px-8 py-7 transition-colors hover:bg-white/[0.02]"
       >
        <div className="flex h-11 w-11 items-center justify-center border border-amber-400/20 bg-amber-400/8 text-amber-400 transition-colors group-hover:border-amber-400/40 group-hover:bg-amber-400/12">
         <Icon size={20} strokeWidth={1.5} />
        </div>
        <div>
         <p className="text-2xl font-black text-white">{value}</p>
         <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">
          {label}
         </p>
        </div>
       </div>
      ))}
     </div>
    </div>
   </div>

   {/* Main Footer Content */}
   <div className="mx-auto max-w-7xl px-6 py-16">
    <div className="grid gap-12 md:grid-cols-12">
     {/* Brand Column */}
     <div className="md:col-span-4">
      {/* Logo */}
      <div className="flex items-center gap-4">
       <div className="relative flex h-12 w-12 items-center justify-center bg-amber-400">
        <span className="absolute -left-px -top-px h-2 w-2 border-l-2 border-t-2 border-zinc-950/30" />
        <span className="absolute -bottom-px -right-px h-2 w-2 border-b-2 border-r-2 border-zinc-950/30" />
        <span className="text-base font-black tracking-tighter text-zinc-950">
                  BN
                </span>
       </div>
       <div>
        <h2 className="text-lg font-black leading-tight text-white">
         BuildNusa
        </h2>
        <div className="mt-1 flex items-center gap-2">
         <span className="h-px w-4 bg-amber-400/60" />
         <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
                    Contractor
                  </span>
        </div>
       </div>
      </div>

      {/* Tagline */}
      <p className="mt-6 text-sm leading-7 text-white/40">
       Jasa kontraktor profesional untuk bangun rumah, renovasi, interior,
       dan finishing — dengan hasil rapi, terukur, dan terpercaya di Semarang.
      </p>

      {/* CTA */}
      <a
       href="https://wa.me/62895406182259"
       target="_blank"
       rel="noreferrer"
       className="group mt-7 inline-flex items-center gap-2.5 border border-amber-400/30 bg-amber-400/8 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-amber-400 transition-all hover:bg-amber-400/15"
      >
       Mulai Konsultasi
       <ArrowUpRight
        size={14}
        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
       />
      </a>

      {/* Structural decoration */}
      <div className="mt-10 flex items-center gap-3">
       <span className="h-px w-8 bg-white/10" />
       <span className="h-px w-4 bg-amber-400/40" />
       <span className="h-px w-2 bg-amber-400/20" />
      </div>
     </div>

     {/* Spacer */}
     <div className="hidden md:col-span-1 md:block" />

     {/* Menu */}
     <div className="md:col-span-2">
      <h3 className="mb-6 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.35em] text-amber-400">
       <span className="h-px w-5 bg-amber-400" />
       Menu
      </h3>
      <ul className="flex flex-col gap-1">
       {navLinks.map((item) => (
        <li key={item.path}>
         <Link
          to={item.path}
          className="group flex items-center justify-between border-b border-white/5 py-2.5 text-sm font-semibold text-white/40 transition-colors hover:border-amber-400/20 hover:text-white"
         >
          <span>{item.label}</span>
          <ArrowUpRight
           size={12}
           className="opacity-0 transition-all duration-200 group-hover:opacity-100"
          />
         </Link>
        </li>
       ))}
      </ul>
     </div>

     {/* Services */}
     <div className="md:col-span-2">
      <h3 className="mb-6 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.35em] text-amber-400">
       <span className="h-px w-5 bg-amber-400" />
       Layanan
      </h3>
      <ul className="flex flex-col gap-1">
       {services.map((s) => (
        <li key={s}>
                  <span className="flex items-center gap-2.5 border-b border-white/5 py-2.5 text-sm font-semibold text-white/40">
                    <span className="h-1 w-1 flex-shrink-0 bg-amber-400/50" />
                   {s}
                  </span>
        </li>
       ))}
      </ul>
     </div>

     {/* Contact */}
     <div className="md:col-span-3">
      <h3 className="mb-6 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.35em] text-amber-400">
       <span className="h-px w-5 bg-amber-400" />
       Kontak
      </h3>
      <ul className="flex flex-col gap-4">
       {contactItems.map(({ icon: Icon, text, href }) => (
        <li key={text}>
         {href ? (
          <a
           href={href}
           className="group flex items-start gap-3 text-sm text-white/40 transition-colors hover:text-white"
          >
           <Icon
            size={16}
            className="mt-0.5 flex-shrink-0 text-amber-400/60 transition-colors group-hover:text-amber-400"
           />
           <span className="font-semibold">{text}</span>
          </a>
         ) : (
          <div className="flex items-start gap-3 text-sm text-white/40">
           <Icon
            size={16}
            className="mt-0.5 flex-shrink-0 text-amber-400/60"
           />
           <span className="font-semibold">{text}</span>
          </div>
         )}
        </li>
       ))}
      </ul>

      {/* WhatsApp CTA */}
      <a
       href="https://wa.me/62895406182259"
       target="_blank"
       rel="noreferrer"
       className="group mt-7 flex items-center gap-3 border-l-2 border-amber-400 pl-4 text-xs"
      >
       <div>
        <p className="font-black text-white transition-colors group-hover:text-amber-400">
         Hubungi via WhatsApp
        </p>
        <p className="mt-0.5 text-white/30">
         Respon cepat & profesional
        </p>
       </div>
       <ArrowUpRight
        size={16}
        className="ml-auto flex-shrink-0 text-amber-400 opacity-60 transition-all group-hover:opacity-100"
       />
      </a>
     </div>
    </div>
   </div>

   {/* Bottom Bar */}
   <div className="border-t border-white/6">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 md:flex-row">
     <p className="text-xs font-bold text-white/20">
      © 2026 BuildNusa Contractor. All Rights Reserved.
     </p>
     <div className="flex items-center gap-6">
            <span className="text-xs font-bold text-white/15">
              Semarang · Jawa Tengah · Indonesia
            </span>
      <div className="flex items-center gap-1.5">
       <span className="h-1.5 w-1.5 bg-amber-400" />
       <span className="h-1.5 w-1.5 bg-amber-400/40" />
       <span className="h-1.5 w-1.5 bg-amber-400/15" />
      </div>
     </div>
    </div>
   </div>
  </footer>
 );
}