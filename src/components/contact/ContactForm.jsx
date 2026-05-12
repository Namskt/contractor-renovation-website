import { Send, MessageCircle, Shield, Clock } from "lucide-react";
import { useState } from "react";

const services = [
 "Bangun Rumah",
 "Renovasi Rumah",
 "Interior & Finishing",
 "Perbaikan Bangunan",
];

const perks = [
 { icon: MessageCircle, text: "Respon cepat via WhatsApp" },
 { icon: Shield, text: "Konsultasi gratis tanpa komitmen" },
 { icon: Clock, text: "Estimasi diberikan dalam 1x24 jam" },
];

const fields = [
 { name: "name", type: "text", placeholder: "Nama lengkap", label: "Nama", required: true },
 { name: "phone", type: "text", placeholder: "08xx-xxxx-xxxx", label: "Nomor WhatsApp", required: true },
 { name: "location", type: "text", placeholder: "Contoh: Tembalang, Semarang", label: "Lokasi Project", required: false },
];

export default function ContactForm() {
 const [form, setForm] = useState({
  name: "", phone: "", service: "", location: "", message: "",
 });
 const [focused, setFocused] = useState(null);

 const handleChange = (e) => {
  setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  const text = `Halo BuildNusa, saya ingin konsultasi project.%0A%0ANama: ${form.name}%0ANomor: ${form.phone}%0ALayanan: ${form.service}%0ALokasi: ${form.location}%0APesan: ${form.message}`;
  window.open(`https://wa.me/62895406182259?text=${text}`, "_blank");
 };

 const inputBase =
  "w-full border bg-white px-5 py-4 text-sm font-semibold text-zinc-950 outline-none placeholder:font-normal placeholder:text-zinc-300 transition-colors duration-200";

 return (
  <section className="bg-zinc-50 px-6 py-28">
   <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.1fr]">

    {/* Left: info */}
    <div className="flex flex-col justify-center">
     <div className="mb-6 flex items-center gap-4">
      <span className="h-px w-10 bg-amber-400" />
      <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-500">
       Form Konsultasi
      </p>
     </div>

     <h2 className="text-4xl font-black leading-[1.08] tracking-tight text-zinc-950 md:text-5xl">
      Isi Data
      <br />
      Project{" "}
      <span className="relative inline-block">
              Anda
              <span className="absolute -bottom-1 left-0 h-1 w-full bg-amber-400" />
            </span>
     </h2>

     <p className="mt-7 border-l-2 border-amber-400/30 pl-5 text-sm leading-8 text-zinc-500">
      Setelah form dikirim, Anda akan langsung diarahkan ke WhatsApp
      dengan format pesan otomatis — tidak perlu ketik ulang.
     </p>

     {/* Perks */}
     <div className="mt-10 space-y-4">
      {perks.map(({ icon: Icon, text }) => (
       <div key={text} className="flex items-center gap-4 border border-zinc-200 bg-white p-4">
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center bg-amber-400">
         <Icon size={16} strokeWidth={2} className="text-zinc-950" />
        </div>
        <span className="text-sm font-bold text-zinc-700">{text}</span>
       </div>
      ))}
     </div>

     {/* Structural decoration */}
     <div className="mt-10 flex items-center gap-3">
      <span className="h-px w-8 bg-zinc-200" />
      <span className="h-px w-4 bg-amber-400/40" />
      <span className="h-px w-2 bg-amber-400/20" />
     </div>
    </div>

    {/* Right: form */}
    <div className="relative border border-zinc-200 bg-white">
     {/* Corner marks */}
     <span className="absolute -left-px -top-px h-5 w-5 border-l-2 border-t-2 border-amber-400" />
     <span className="absolute -bottom-px -right-px h-5 w-5 border-b-2 border-r-2 border-zinc-300" />

     <div className="p-8 md:p-10">
      {/* Form header */}
      <div className="mb-8 border-b border-zinc-100 pb-6">
       <p className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400">
        Formulir Konsultasi
       </p>
       <div className="mt-2 flex items-center gap-2">
        <span className="h-px w-8 bg-amber-400" />
        <span className="text-[10px] font-bold text-zinc-300">
                  Semua field wajib diisi kecuali lokasi
                </span>
       </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
       {/* Text fields */}
       {fields.map((field) => (
        <div key={field.name} className="group relative">
         <label className="mb-1.5 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">
          {field.label}
          {field.required && (
           <span className="text-amber-400">*</span>
          )}
         </label>
         <input
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          value={form[field.name]}
          onChange={handleChange}
          onFocus={() => setFocused(field.name)}
          onBlur={() => setFocused(null)}
          required={field.required}
          className={`${inputBase} ${
           focused === field.name
            ? "border-amber-400"
            : "border-zinc-200 hover:border-zinc-300"
          }`}
         />
        </div>
       ))}

       {/* Service select */}
       <div className="relative">
        <label className="mb-1.5 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">
         Layanan <span className="text-amber-400">*</span>
        </label>
        <select
         name="service"
         value={form.service}
         onChange={handleChange}
         onFocus={() => setFocused("service")}
         onBlur={() => setFocused(null)}
         required
         className={`${inputBase} cursor-pointer appearance-none ${
          focused === "service"
           ? "border-amber-400"
           : "border-zinc-200 hover:border-zinc-300"
         } ${!form.service ? "text-zinc-300" : "text-zinc-950"}`}
        >
         <option value="">Pilih layanan</option>
         {services.map((s) => (
          <option key={s} value={s}>{s}</option>
         ))}
        </select>
        {/* Custom arrow */}
        <span className="pointer-events-none absolute bottom-4 right-4 text-zinc-300">
                  ↓
                </span>
       </div>

       {/* Textarea */}
       <div>
        <label className="mb-1.5 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">
         Ceritakan Kebutuhan Anda <span className="text-amber-400">*</span>
        </label>
        <textarea
         name="message"
         placeholder="Contoh: Saya ingin renovasi 2 kamar tidur dan dapur, budget sekitar 50 juta."
         value={form.message}
         onChange={handleChange}
         onFocus={() => setFocused("message")}
         onBlur={() => setFocused(null)}
         rows="5"
         required
         className={`${inputBase} resize-none ${
          focused === "message"
           ? "border-amber-400"
           : "border-zinc-200 hover:border-zinc-300"
         }`}
        />
       </div>

       {/* Submit */}
       <div className="pt-2">
        <button
         type="submit"
         className="group flex w-full items-center justify-between bg-amber-400 px-7 py-4 transition-colors hover:bg-amber-300"
        >
                  <span className="text-sm font-black tracking-wide text-zinc-950">
                    Kirim ke WhatsApp
                  </span>
         <div className="flex items-center gap-2">
          <span className="h-px w-6 bg-zinc-950/20 transition-all duration-300 group-hover:w-10" />
          <Send size={16} strokeWidth={2.5} className="text-zinc-950" />
         </div>
        </button>
        <p className="mt-3 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">
         Anda akan diarahkan ke WhatsApp
        </p>
       </div>
      </form>
     </div>
    </div>
   </div>
  </section>
 );
}