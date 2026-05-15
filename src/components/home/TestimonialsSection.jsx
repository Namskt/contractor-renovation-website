import { Star } from "lucide-react";

const testimonials = [
 {
  name: "Bapak Andi",
  role: "Pemilik Rumah",
  initial: "A",
  text: "Hasil renovasinya rapi dan komunikasinya jelas. Dari awal survey sampai selesai, semuanya dijelaskan dengan baik.",
 },
 {
  name: "Ibu Rina",
  role: "Owner Ruko",
  initial: "R",
  text: "Pengerjaan tepat waktu dan hasilnya sesuai ekspektasi. Sangat membantu untuk renovasi tempat usaha kami.",
  featured: true,
 },
 {
  name: "Bapak Fajar",
  role: "Client Interior",
  initial: "F",
  text: "Finishing interiornya bagus, detail, dan terlihat premium. Timnya juga enak diajak diskusi.",
 },
];

export default function TestimonialsSection() {
 return (
  <section className="bg-zinc-50 px-6 py-28">
   <div className="mx-auto px-6 max-w-7xl">
    {/* Header */}
    <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
     <div className="max-w-xl">
      <div className="mb-5 flex items-center gap-4">
       <span className="h-px w-10 bg-amber-400" />
       <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-500">
        Testimoni Client
       </p>
      </div>
      <h2 className="text-4xl font-black leading-[1.08] tracking-tight text-zinc-950 md:text-5xl">
       Apa Kata Client Setelah
       <br />
       Bekerja Sama dengan Kami
      </h2>
     </div>

     {/* Rating summary */}
     <div className="flex flex-col items-start gap-2 md:items-end">
      <div className="flex gap-1">
       {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={18} fill="currentColor" className="text-amber-400" />
       ))}
      </div>
      <p className="text-xs font-bold text-zinc-400">
       5.0 dari 50+ ulasan client
      </p>
     </div>
    </div>

    {/* Cards */}
    <div className="grid gap-5 md:grid-cols-3">
     {testimonials.map((item, index) => (
      <div
       key={item.name}
       className={`group relative flex flex-col justify-between overflow-hidden border p-8 transition-all duration-300 ${
        item.featured
         ? "border-amber-400/60 bg-zinc-950"
         : "border-zinc-200 bg-white hover:border-zinc-300"
       }`}
      >
       {/* Large background number */}
       <span
        className={`absolute right-5 top-3 text-7xl font-black leading-none select-none ${
         item.featured ? "text-white/5" : "text-zinc-100"
        }`}
       >
                {String(index + 1).padStart(2, "0")}
              </span>

       {/* Top: stars + quote mark */}
       <div>
        <div className="mb-5 flex items-center justify-between">
         <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
           <Star
            key={i}
            size={14}
            fill="currentColor"
            className="text-amber-400"
           />
          ))}
         </div>
         {/* Decorative quote mark */}
         <span
          className={`text-5xl font-black leading-none ${
           item.featured ? "text-amber-400/40" : "text-zinc-200"
          }`}
         >
                    "
                  </span>
        </div>

        {/* Structural divider */}
        <div className="mb-6 flex items-center gap-3">
         <span className="h-px w-6 bg-amber-400" />
         <span
          className={`h-px flex-1 ${
           item.featured ? "bg-white/10" : "bg-zinc-100"
          }`}
         />
        </div>

        <p
         className={`relative z-10 text-sm leading-8 ${
          item.featured ? "text-white/60" : "text-zinc-500"
         }`}
        >
         {item.text}
        </p>
       </div>

       {/* Bottom: identity */}
       <div
        className={`mt-8 flex items-center gap-4 border-t pt-6 ${
         item.featured ? "border-white/10" : "border-zinc-100"
        }`}
       >
        {/* Avatar */}
        <div
         className={`flex h-10 w-10 flex-shrink-0 items-center justify-center text-sm font-black ${
          item.featured
           ? "bg-amber-400 text-zinc-950"
           : "bg-zinc-950 text-white"
         }`}
        >
         {item.initial}
        </div>
        <div>
         <p
          className={`font-black ${
           item.featured ? "text-white" : "text-zinc-950"
          }`}
         >
          {item.name}
         </p>
         <p
          className={`mt-0.5 text-xs font-bold ${
           item.featured ? "text-white/30" : "text-zinc-400"
          }`}
         >
          {item.role}
         </p>
        </div>

        {item.featured && (
         <div className="ml-auto flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 bg-amber-400" />
          <span className="text-[10px] font-black uppercase tracking-widest text-amber-400/60">
                      Top
                    </span>
         </div>
        )}
       </div>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
}