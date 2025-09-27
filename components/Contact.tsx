export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-black text-center">Fiyat Teklifi Alın</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ad Soyad
                </label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-300 bg-white text-black rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                  placeholder="Adınızı yazın"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Şirket
                </label>
                <input 
                  type="text" 
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
                  className="w-full p-3 border border-gray-300 bg-white text-black rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon
                </label>
                <input 
                  type="tel" 
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
                className="w-full p-3 border border-gray-300 bg-white text-black rounded-lg focus:ring-yellow-400 focus:border-yellow-400"
                placeholder="Stand boyutu, beklentileriniz ve özel isteklerinizi belirtin"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-yellow-400 text-black py-4 px-6 rounded-full font-bold hover:bg-yellow-500 transition transform hover:scale-105 shadow-lg"
            >
              Fiyat Teklifi Al
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}