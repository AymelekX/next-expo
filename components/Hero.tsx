export default function Hero() {
  return (
    <section id="home" className="bg-black text-white py-20 mt-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          Fuar Stand Tasarımları
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300 leading-relaxed">
        Next Expo, fuar standınız için yaratıcı tasarımlar ve profesyonel uygulama hizmetleri.
         Sizi en iyi şekilde temsil edecek tasarımları ve mimarlık hizmelerini uygun bütçelerle sunuyoruz.
        </p>
        <div className="flex justify-center">
          <a 
            href="#contact"
            className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-500 transition transform hover:scale-105 shadow-lg inline-block"
          >
            Fiyat Teklifi Al
          </a>
        </div>
      </div>
    </section>
  );
}