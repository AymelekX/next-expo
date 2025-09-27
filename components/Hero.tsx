export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-white text-black py-20 mt-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
          Fuar Stand Tasarımları
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700 leading-relaxed">
          Next Expo ile fuar standınızı öne çıkaran yaratıcı tasarımlar ve profesyonel uygulama hizmetleri. 
          Markanızı fuarlarda en iyi şekilde temsil edecek standları uygun bütçelerle tasarlıyoruz.
        </p>
        <div className="flex justify-center">
          <button 
            onClick={scrollToContact}
            className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-500 transition transform hover:scale-105 shadow-lg"
          >
            Fiyat Teklifi Al
          </button>
        </div>
      </div>
    </section>
  );
}