import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
 {
  num: "01",
  q: "Apakah bisa konsultasi dulu sebelum mulai project?",
  a: "Bisa. Kami bantu diskusikan kebutuhan, gambaran pekerjaan, dan estimasi awal tanpa biaya apapun. Konsultasi bisa dilakukan via WhatsApp atau langsung ke lokasi.",
 },
 {
  num: "02",
  q: "Apakah bisa survey lokasi?",
  a: "Bisa. Survey membantu kami memahami kondisi lapangan dan membuat estimasi lebih akurat. Tim kami siap datang ke lokasi sesuai jadwal yang disepakati.",
 },
 {
  num: "03",
  q: "Apakah melayani renovasi kecil?",
  a: "Bisa. Kami dapat membantu renovasi ringan sampai renovasi besar. Tidak ada minimum pekerjaan — selama kami bisa bantu, kami siap kerjakan.",
 },
 {
  num: "04",
  q: "Apakah biaya bisa menyesuaikan budget?",
  a: "Bisa didiskusikan. Kami bantu rekomendasikan solusi sesuai kebutuhan dan prioritas agar hasil tetap optimal dalam anggaran yang ada.",
 },
 {
  num: "05",
  q: "Berapa lama proses pengerjaan berlangsung?",
  a: "Tergantung skala pekerjaan. Renovasi ringan bisa selesai dalam beberapa hari, sedangkan bangun rumah baru bisa memakan waktu beberapa bulan. Timeline akan disusun sejak awal bersama client.",
 },
];

export default function ServiceFAQ() {
 const [open, setOpen] = useState(null);

 return (
  <section className="bg-zinc-50 px-6 py-28">
   <div className="mx-auto max-w-4xl">
    {/* Header */}
    <div className="mb-16 flex flex-col items-center text-center">
     <div className="mb-5 flex items-center gap-4">
      <span className="h-px w-10 bg-amber-400" />
      <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-500">
       FAQ
      </p>
      <span className="h-px w-10 bg-amber-400" />
     </div>
     <h2 className="text-4xl font-black leading-[1.08] tracking-tight text-zinc-950 md:text-5xl">
      Pertanyaan{" "}
      <span className="relative inline-block">
              Umum
              <span className="absolute -bottom-1 left-0 h-1 w-full bg-amber-400" />
            </span>
     </h2>
     <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400">
      Belum menemukan jawaban yang kamu cari? Langsung hubungi kami via
      WhatsApp.
     </p>
    </div>

    {/* Accordion */}
    <div className="space-y-3">
     {faqs.map((item) => {
      const isOpen = open === item.num;
      return (
       <div
        key={item.num}
        className={`border transition-all duration-200 ${
         isOpen
          ? "border-amber-400/40 bg-white"
          : "border-zinc-200 bg-white hover:border-zinc-300"
        }`}
       >
        <button
         onClick={() => setOpen(isOpen ? null : item.num)}
         className="flex w-full items-center gap-5 px-7 py-5 text-left"
        >
         {/* Number */}
         <span
          className={`flex-shrink-0 text-xs font-black transition-colors ${
           isOpen ? "text-amber-400" : "text-zinc-300"
          }`}
         >
                    {item.num}
                  </span>

         {/* Divider */}
         <span
          className={`h-6 w-px flex-shrink-0 transition-colors ${
           isOpen ? "bg-amber-400/40" : "bg-zinc-100"
          }`}
         />

         {/* Question */}
         <span
          className={`flex-1 text-sm font-black transition-colors ${
           isOpen ? "text-zinc-950" : "text-zinc-700"
          }`}
         >
                    {item.q}
                  </span>

         {/* Toggle icon */}
         <div
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center transition-colors ${
           isOpen
            ? "bg-amber-400 text-zinc-950"
            : "border border-zinc-200 text-zinc-400"
          }`}
         >
          {isOpen ? <Minus size={14} strokeWidth={2.5} /> : <Plus size={14} strokeWidth={2.5} />}
         </div>
        </button>

        {/* Answer */}
        <div
         className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40" : "max-h-0"
         }`}
        >
         <div className="flex gap-5 px-7 pb-6">
          {/* Indent spacer matching num + divider */}
          <span className="flex-shrink-0 text-xs text-transparent select-none">
                      {item.num}
                    </span>
          <span className="h-full w-px flex-shrink-0 bg-amber-400/20" />
          <p className="text-sm leading-8 text-zinc-500">{item.a}</p>
         </div>
        </div>
       </div>
      );
     })}
    </div>

    {/* Bottom CTA */}
    <div className="mt-10 flex items-center justify-between border border-zinc-200 bg-white px-7 py-5">
     <p className="text-sm font-black text-zinc-950">
      Masih ada pertanyaan lain?
     </p>
     <a
      href="https://wa.me/62895406182259"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 bg-amber-400 px-5 py-2.5 text-xs font-black tracking-wide text-zinc-950 transition-colors hover:bg-amber-300"
     >
      Tanya via WhatsApp →
     </a>
    </div>
   </div>
  </section>
 );
}