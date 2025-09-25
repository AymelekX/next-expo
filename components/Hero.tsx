export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-black via-gray-800 to-black text-white py-20 mt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          {/* Büyük Next Expo Logosu */}
          <img 
            src="/logo.png/468004891_1714512139196293_6101156079016187826_n.jpg"
            alt="Next Expo Logo" 
            className="w-24 h-24 mx-auto mb-6 object-contain"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-yellow-400">Fuar Standı</span> Tasarım ve Uygulama
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Next Expo ile fuar standınızı öne çıkaran yaratıcı tasarımlar ve profesyonel uygulama hizmetleri. 
          Markanızı fuarlarda en iyi şekilde temsil edecek standları tasarlıyoruz.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition transform hover:scale-105">
            Ücretsiz Fiyat Teklifi Al
          </button>
          <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition transform hover:scale-105">
            Projelerimizi İncele
          </button>
        </div>
      </div>
    </section>
  );
}