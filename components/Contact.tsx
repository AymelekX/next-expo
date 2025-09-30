"use client";

import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      fullName: String(formData.get("fullName") || ""),
      company: String(formData.get("company") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      eventInfo: String(formData.get("eventInfo") || ""),
      projectDetails: String(formData.get("projectDetails") || ""),
      submittedAt: new Date().toISOString(),
    };

    try {
      const webhook = process.env.NEXT_PUBLIC_SHEET_WEBHOOK_URL;
      if (!webhook) {
        await new Promise((r) => setTimeout(r, 600));
        setIsSuccess(true);
        e.currentTarget.reset();
        return;
      }

      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("request failed");

      setIsSuccess(true);
      e.currentTarget.reset();
    } catch (_) {
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-black text-center">Fiyat Teklifi Alın</h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ad Soyad
                </label>
                <input 
                  type="text" 
                  name="fullName"
                  className="w-full p-3 border border-gray-300 bg-white text-black rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                  placeholder="Adınızı yazın"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Şirket
                </label>
                <input 
                  type="text" 
                  name="company"
                  className="w-full p-3 border border-gray-300 bg-white text-black rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                  placeholder="Şirket adı"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  name="email"
                  className="w-full p-3 border border-gray-300 bg-white text-black rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                  placeholder="email@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  className="w-full p-3 border border-gray-300 bg-white text-black rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                  placeholder="+90 XXX XXX XX XX"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fuar/Etkinlik Bilgisi
              </label>
              <input 
                type="text" 
                name="eventInfo"
                className="w-full p-3 border border-gray-300 bg-white text-black rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="Hangi fuara katılacaksınız?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Proje Detayları
              </label>
              <textarea 
                rows={4}
                name="projectDetails"
                className="w-full p-3 border border-gray-300 bg-white text-black rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="Stand boyutu, beklentileriniz ve özel isteklerinizi belirtin"
              ></textarea>
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-block text-center bg-yellow-400 text-black py-4 px-6 rounded-full font-bold hover:bg-yellow-500 transition transform hover:scale-105 shadow-lg disabled:opacity-60 disabled:hover:scale-100"
            >
              {isSubmitting ? "Gönderiliyor..." : "Fiyat Teklifi Al"}
            </button>

            {isSuccess && (
              <p className="text-green-600 font-medium text-center">
                Teşekkürler! Sizinle en kısa sürede iletişime geçeceğiz!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}