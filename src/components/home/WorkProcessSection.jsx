const steps = [
 {
  number: "01",
  title: "Konsultasi",
  desc: "Kami mulai dari memahami kebutuhan, konsep rumah, budget, dan target pengerjaan.",
  tag: "Awal",
 },
 {
  number: "02",
  title: "Survey Lokasi",
  desc: "Tim melakukan pengecekan lokasi agar estimasi pekerjaan lebih akurat.",
  tag: "Analisa",
 },
 {
  number: "03",
  title: "Rencana & Penawaran",
  desc: "Kami susun kebutuhan pekerjaan, estimasi biaya, timeline, dan detail pengerjaan.",
  tag: "Perencanaan",
 },
 {
  number: "04",
  title: "Pengerjaan Project",
  desc: "Project dikerjakan oleh tim profesional dengan pengawasan dan komunikasi berkala.",
  tag: "Eksekusi",
 },
];

export default function WorkProcessSection() {
 return (
  <section className="bg-zinc-50 px-6 py-28">
   <div className="mx-auto max-w-7xl px-6">
    {/* Header */}
    <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
     <div className="max-w-xl">
      <div className="mb-5 flex items-center gap-4">
       <span className="h-px w-10 bg-amber-400" />
       <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-500">
        Proses Kerja
       </p>
      </div>
      <h2 className="text-4xl font-black leading-[1.08] tracking-tight text-zinc-950 md:text-5xl">
       Alur Kerja yang Jelas
       <br />
       dari Awal Sampai{" "}
       <span className="relative inline-block">
                Selesai
                <span className="absolute -bottom-1 left-0 h-1 w-full bg-amber-400" />
              </span>
      </h2>
     </div>

     <div className="flex items-center gap-3">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-zinc-300">
              {steps.length} Tahap
            </span>
      <span className="h-px w-10 bg-zinc-200" />
     </div>
    </div>

    {/* Connector bar (desktop) */}
    <div className="relative mb-0 hidden lg:block">
     <div className="absolute left-[12.5%] right-[12.5%] top-[28px] h-px bg-zinc-200" />
     <div
      className="absolute left-[12.5%] top-[28px] h-px bg-amber-400"
      style={{ width: "75%" }}
     />
     {/* Dots on connector */}
     <div className="flex justify-around px-[12.5%]">
      {steps.map((step) => (
       <div
        key={step.number}
        className="flex h-[57px] w-[57px] items-center justify-center border-2 border-amber-400 bg-amber-400 text-sm font-black text-zinc-950"
       >
        {step.number}
       </div>
      ))}
     </div>
    </div>

    {/* Step cards */}
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
     {steps.map((step, index) => (
      <div
       key={step.number}
       className="group relative overflow-hidden border border-zinc-200 bg-white p-7 transition-all duration-300 hover:border-amber-400/40 hover:shadow-lg"
      >
       {/* Ghost number background */}
       <span className="absolute right-4 top-2 text-7xl font-black leading-none text-zinc-100 transition-colors group-hover:text-amber-400/10 select-none">
                {step.number}
              </span>

       {/* Mobile step number */}
       <div className="mb-6 flex items-center gap-3 lg:hidden">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-amber-400 text-sm font-black text-zinc-950">
         {step.number}
        </div>
        <div className="h-px flex-1 bg-zinc-100" />
       </div>

       {/* Top accent bar (desktop) */}
       <div className="mb-7 hidden h-0.5 w-10 bg-amber-400 lg:block" />

       {/* Tag */}
       <div className="mb-5 inline-flex border border-zinc-100 bg-zinc-50 px-3 py-1.5 lg:hidden">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">
                  {step.tag}
                </span>
       </div>

       <div className="relative z-10">
        <h3 className="text-xl font-black text-zinc-950">{step.title}</h3>
        <p className="mt-4 text-sm leading-7 text-zinc-500">{step.desc}</p>
       </div>

       {/* Connector arrow (not last) */}
       {index < steps.length - 1 && (
        <div className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 rotate-45 border-r-2 border-t-2 border-amber-400 bg-zinc-50 lg:block" />
       )}

       {/* Bottom hover indicator */}
       <div className="mt-6 h-px w-0 bg-amber-400 transition-all duration-500 group-hover:w-full" />
      </div>
     ))}
    </div>

    {/* Bottom CTA line */}
    <div className="mt-10 flex items-center justify-between border border-zinc-200 bg-white p-6">
     <div className="flex items-center gap-4">
      <div className="flex items-center gap-1.5">
       {steps.map((_, i) => (
        <div
         key={i}
         className={`h-1.5 w-1.5 ${
          i < steps.length ? "bg-amber-400" : "bg-zinc-200"
         }`}
        />
       ))}
      </div>
      <p className="text-sm font-bold text-zinc-500">
       Proses selesai — project siap diserahkan
      </p>
     </div>
     <a
      href="https://wa.me/62895406182259"
      target="_blank"
      rel="noreferrer"
      className="hidden items-center gap-2 border border-zinc-900 bg-zinc-950 px-5 py-2.5 text-xs font-black tracking-wide text-white transition-colors hover:bg-amber-400 hover:text-zinc-950 sm:flex"
     >
      Mulai Konsultasi →
     </a>
    </div>
   </div>
  </section>
 );
}