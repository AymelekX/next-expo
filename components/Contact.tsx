export default function Contact() {
    return (
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">İletişim</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fuar standı projeniz için hemen iletişime geçin, ücretsiz keşif ve fiyat teklifi alın
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">İletişim Bilgileri</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="text-2xl mr-4 text-red-600">📧</div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600">info@standtasarim.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl mr-4 text-red-600">📱</div>
                  <div>
                    <div className="font-semibold">Telefon</div>
                    <div className="text-gray-600">+90 212 XXX XX XX</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl mr-4 text-red-600">📍</div>
                  <div>
                    <div className="font-semibold">Adres</div>
                    <div className="text-gray-600">İstanbul, Türkiye</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-2xl mr-4 text-red-600">🕒</div>
                  <div>
                    <div className="font-semibold">Çalışma Saatleri</div>
                    <div className="text-gray-600">Pazartesi-Cuma: 08:00-18:00</div>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Ücretsiz Keşif Hizmeti</h4>
                <p className="text-red-700 text-sm">
                  Fuar alanında yerinde inceleme ve ölçüm hizmeti tamamen ücretsizdir.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Fiyat Teklifi Alın</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                      placeholder="Adınızı yazın"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Şirket
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
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
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input 
                      type="tel" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
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
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                    placeholder="Hangi fuara katılacaksınız?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Proje Detayları
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                    placeholder="Stand boyutu, beklentileriniz ve özel isteklerinizi belirtin"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  Ücretsiz Fiyat Teklifi Al
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }