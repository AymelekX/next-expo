export default function Footer() {
    return (
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/logo.png/468004891_1714512139196293_6101156079016187826_n.jpg"
                  alt="Next Expo Logo" 
                  className="w-12 h-12 object-contain"
                />
                <h3 className="text-2xl font-bold">Next Expo</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Fuar standı tasarımı ve mimarlık hizmetlerinde next level çözümler.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition">📘</a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition">📷</a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition">💼</a>
              </div>
            </div>
            {/* Geri kalan footer içeriği aynı kalacak */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Hizmetlerimiz</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition">Fuar Standı Tasarımı</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Stand Kurulumu</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">3D Görselleştirme</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Mimarlık Hizmetleri</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Fuar Merkezleri</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition">CNR Expo</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">İstanbul Fuar Merkezi</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Tüyap Fuar Merkezi</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Diğer Lokasyonlar</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">İletişim</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📧 info@nextexpo.com.tr</li>
                <li>📱 +90 212 XXX XX XX</li>
                <li>📍 İstanbul, Türkiye</li>
                <li>🕒 Ptesi-Cuma: 08:00-18:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Next Expo. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    );
  }