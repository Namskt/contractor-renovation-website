import { MapPin, ArrowUpRight } from "lucide-react";

const areas = [
 "Semarang Tengah",
 "Semarang Selatan",
 "Semarang Timur",
 "Semarang Barat",
 "Tembalang",
 "Banyumanik",
 "Ungaran",
 "Demak",
];

export default function MapSection() {
 return (
  <section className="bg-zinc-50 px-6 py-28">
   <div className="mx-auto max-w-7xl px-6">
    {/* Header */}
    <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
     <div className="max-w-xl">
      <div className="mb-5 flex items-center gap-4">
       <span className="h-px w-10 bg-amber-400" />
       <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-500">
        Lokasi
       </p>
      </div>
      <h2 className="text-4xl font-black leading-[1.08] tracking-tight text-zinc-950 md:text-5xl">
       Area{" "}
       <span className="relative inline-block">
                Layanan
                <span className="absolute -bottom-1 left-0 h-1 w-full bg-amber-400" />
              </span>{" "}
       Kami
      </h2>
      <p className="mt-5 text-sm leading-7 text-zinc-500">
       Kami melayani kebutuhan bangun dan renovasi untuk area Semarang
       dan sekitarnya.
      </p>
     </div>

     <a
      href="https://maps.google.com/?q=Semarang,Jawa+Tengah"
      target="_blank"
      rel="noreferrer"
      className="group flex w-fit items-center gap-2 border border-zinc-200 bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-zinc-500 transition-all hover:border-amber-400/50 hover:text-amber-500"
     >
      <MapPin size={13} />
      Buka di Google Maps
      <ArrowUpRight
       size={13}
       className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
     </a>
    </div>

    {/* Map + area grid layout */}
    <div className="grid gap-5 lg:grid-cols-[1fr_280px]">
     {/* Map embed */}
     <div className="relative overflow-hidden border border-zinc-200">
      {/* Corner marks */}
      <span className="absolute left-0 top-0 z-10 h-5 w-5 border-l-2 border-t-2 border-amber-400" />
      <span className="absolute bottom-0 right-0 z-10 h-5 w-5 border-b-2 border-r-2 border-zinc-300" />

      <div className="h-[420px]">
       <iframe
        title="Google Maps"
        src="https://www.google.com/maps?q=Semarang%20Jawa%20Tengah&output=embed"
        className="h-full w-full border-0 grayscale"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
       />
      </div>
     </div>

     {/* Area list sidebar */}
     <div className="flex flex-col border border-zinc-200 bg-white">
      {/* Header */}
      <div className="border-b border-zinc-100 px-6 py-5">
       <div className="flex items-center gap-3">
        <span className="h-0.5 w-6 bg-amber-400" />
        <p className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400">
         Cakupan Area
        </p>
       </div>
      </div>

      {/* Area list */}
      <ul className="flex-1 divide-y divide-zinc-50">
       {areas.map((area, i) => (
        <li
         key={area}
         className="group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-amber-400/5"
        >
                  <span className="text-[10px] font-black text-amber-400/40 transition-colors group-hover:text-amber-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
         <span className="h-5 w-px bg-zinc-100" />
         <span className="text-sm font-bold text-zinc-600 transition-colors group-hover:text-zinc-950">
                    {area}
                  </span>
         <MapPin
          size={12}
          className="ml-auto flex-shrink-0 text-zinc-200 transition-colors group-hover:text-amber-400"
         />
        </li>
       ))}
      </ul>

      {/* Footer note */}
      <div className="border-t border-zinc-100 px-6 py-4">
       <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">
        Hubungi kami untuk area lainnya
       </p>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}