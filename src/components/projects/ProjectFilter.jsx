const categories = ["Semua", "Bangun Rumah", "Renovasi", "Interior", "Komersial"];

export default function ProjectFilter({ activeCategory, setActiveCategory }) {
 return (
  <section className="bg-zinc-50 px-6 pt-16 pb-0">
   <div className="mx-auto max-w-7xl">
    {/* Label row */}
    <div className="mb-6 flex items-center gap-4">
     <span className="h-px w-10 bg-amber-400" />
     <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-500">
      Filter Project
     </p>
     <span className="h-px flex-1 bg-zinc-200" />
     <span className="text-xs font-bold text-zinc-300">
            {categories.length - 1} kategori
          </span>
    </div>

    {/* Filter buttons */}
    <div className="flex flex-wrap gap-2">
     {categories.map((item, i) => {
      const isActive = activeCategory === item;
      return (
       <button
        key={item}
        onClick={() => setActiveCategory(item)}
        className={`group flex items-center gap-2.5 border px-5 py-3 text-xs font-black uppercase tracking-[0.15em] transition-all duration-200 ${
         isActive
          ? "border-amber-400 bg-amber-400 text-zinc-950"
          : "border-zinc-200 bg-white text-zinc-500 hover:border-zinc-950 hover:bg-zinc-950 hover:text-white"
        }`}
       >
        {item !== "Semua" && (
         <span
          className={`text-[10px] font-black transition-colors ${
           isActive
            ? "text-zinc-950/50"
            : "text-zinc-300 group-hover:text-white/40"
          }`}
         >
                    {String(i).padStart(2, "0")}
                  </span>
        )}
        {item}
       </button>
      );
     })}
    </div>

    {/* Bottom structural divider */}
    <div className="mt-8 flex items-center gap-3">
     <span className="h-px flex-1 bg-zinc-200" />
     <div className="flex items-center gap-1.5">
      <span className="h-1 w-1 bg-amber-400" />
      <span className="h-1 w-1 bg-amber-400/40" />
      <span className="h-1 w-1 bg-amber-400/15" />
     </div>
    </div>
   </div>
  </section>
 );
}