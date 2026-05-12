import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X, Phone, MapPin, ChevronRight } from "lucide-react";

const navItems = [
 { label: "Home", path: "/" },
 { label: "Tentang", path: "/tentang" },
 { label: "Layanan", path: "/layanan" },
 { label: "Project", path: "/project" },
 { label: "Kontak", path: "/kontak" },
];

export default function Navbar() {
 const [open, setOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);

 useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 40);
  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
 }, []);

 const navClass = ({ isActive }) =>
  `relative text-sm font-bold tracking-wide transition-colors duration-200 group ${
   isActive ? "text-amber-400" : "text-white/70 hover:text-white"
  }`;

 return (
  <header className="fixed left-0 top-0 z-50 w-full">
   {/* Top Info Bar */}
   <div className="hidden border-b border-white/8 bg-zinc-950 lg:block">
    <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6">
     <div className="flex items-center gap-6 text-xs text-white/40">
            <span className="flex items-center gap-1.5">
              <MapPin size={11} className="text-amber-400/70" />
              Semarang, Jawa Tengah
            </span>
      <span className="h-3 w-px bg-white/10" />
      <span className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-400" />
              </span>
              Tersedia untuk proyek baru
            </span>
     </div>
     <a
      href="tel:+62895406182259"
      className="flex items-center gap-1.5 text-xs text-white/40 transition-colors hover:text-amber-400"
     >
      <Phone size={11} />
      0895-4061-82259
     </a>
    </div>
   </div>

   {/* Main Nav */}
   <div
    className={`transition-all duration-300 ${
     scrolled
      ? "border-b border-white/10 bg-zinc-950/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
      : "bg-transparent"
    }`}
   >
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
     {/* Logo */}
     <Link to="/" className="group flex items-center gap-4">
      <div className="relative flex h-12 w-12 items-center justify-center bg-amber-400">
       {/* Corner marks */}
       <span className="absolute -left-px -top-px h-2 w-2 border-l-2 border-t-2 border-zinc-950/40" />
       <span className="absolute -bottom-px -right-px h-2 w-2 border-b-2 border-r-2 border-zinc-950/40" />
       <span className="text-base font-black tracking-tighter text-zinc-950">
                BN
              </span>
      </div>
      <div className="flex flex-col">
              <span className="text-[17px] font-black leading-tight tracking-tight text-white">
                BuildNusa
              </span>
       <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                <span className="h-px w-4 bg-amber-400/60" />
                Contractor
              </span>
      </div>
     </Link>

     {/* Desktop Nav */}
     <nav className="hidden items-center lg:flex">
      {navItems.map((item, i) => (
       <div key={item.path} className="flex items-center">
        <NavLink to={item.path} className={navClass}>
         {({ isActive }) => (
          <>
           {item.label}
           <span
            className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
             isActive
              ? "w-full bg-amber-400"
              : "w-0 bg-amber-400 group-hover:w-full"
            }`}
           />
          </>
         )}
        </NavLink>
        {i < navItems.length - 1 && (
         <span className="mx-7 h-3 w-px rotate-12 bg-white/10" />
        )}
       </div>
      ))}
     </nav>

     {/* CTA */}
     <a
      href="https://wa.me/62895406182259"
      target="_blank"
      rel="noreferrer"
      className="group relative hidden overflow-hidden bg-amber-400 px-6 py-3 lg:flex"
      style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)" }}
     >
      <span className="absolute inset-0 translate-y-full bg-amber-300 transition-transform duration-300 group-hover:translate-y-0" />
      <span className="relative flex items-center gap-2 text-[13px] font-black tracking-wide text-zinc-950">
              <Phone size={14} strokeWidth={2.5} />
              Konsultasi Gratis
              <ChevronRight size={14} strokeWidth={2.5} />
            </span>
     </a>

     {/* Mobile Toggle */}
     <button
      onClick={() => setOpen(!open)}
      className="flex h-10 w-10 items-center justify-center border border-white/10 text-white lg:hidden"
      aria-label="Toggle menu"
     >
      {open ? <X size={20} /> : <Menu size={20} />}
     </button>
    </div>
   </div>

   {/* Mobile Menu */}
   <div
    className={`overflow-hidden bg-zinc-950 transition-all duration-300 lg:hidden ${
     open ? "max-h-96 border-b border-white/10" : "max-h-0"
    }`}
   >
    <nav className="flex flex-col px-6 pb-6 pt-4">
     {/* Structural line */}
     <div className="mb-4 flex items-center gap-3">
      <span className="h-px flex-1 bg-white/8" />
      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-400/60">
              Menu
            </span>
      <span className="h-px flex-1 bg-white/8" />
     </div>

     {navItems.map((item) => (
      <NavLink
       key={item.path}
       to={item.path}
       onClick={() => setOpen(false)}
       className={({ isActive }) =>
        `flex items-center justify-between border-b border-white/6 py-3.5 text-sm font-bold tracking-wide transition-colors ${
         isActive ? "text-amber-400" : "text-white/60 hover:text-white"
        }`
       }
      >
       {({ isActive }) => (
        <>
         <span>{item.label}</span>
         <ChevronRight
          size={14}
          className={isActive ? "text-amber-400" : "text-white/20"}
         />
        </>
       )}
      </NavLink>
     ))}

     <a
      href="https://wa.me/62895406182259"
      target="_blank"
      rel="noreferrer"
      className="mt-5 flex items-center justify-center gap-2 bg-amber-400 py-3.5 text-sm font-black tracking-wide text-zinc-950"
     >
      <Phone size={15} strokeWidth={2.5} />
      Konsultasi Gratis
     </a>
    </nav>
   </div>
  </header>
 );
}