export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-black mb-6">Hakkımızda</h2>
            <p className="text-lg text-gray-700 mb-6">
              Next Expo, 2022 yılından bu yana fuar standı tasarımı ve uygulaması alanında 
              profesyonel hizmet veren bir tasarım firmasıdır. Uzman ekibimiz ve modern 
              atölyelerimizle yurtiçi ve yurtdışı tüm fuarlarda kaliteli çözümler sunuyoruz.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Fuar standı tasarımından iç mimari çözümlere kadar geniş yelpazede hizmet 
              vermekteyiz. Müşterilerimizin taleplerine uygun tasarımlar geliştirerek, 
              projelerinizin her aşamasında yanınızda olmayı hedefliyoruz.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Misyonumuz, kağıttaki tasarımları gerçeğe dönüştürmek ve markanızın 
              fuar standında en iyi şekilde temsil edilmesini sağlamaktır. Kaliteli 
              uygulama ve yaratıcı tasarımlarla hayallerinizi gerçeğe dönüştürüyoruz.
            </p>
          </div>
          <div className="bg-gradient-to-r from-black to-gray-800 h-96 rounded-lg flex items-center justify-center relative">
            <div className="absolute inset-4 border-4 border-yellow-400"></div>
            <div className="text-white text-center z-10">
              <div className="w-16 h-16 bg-yellow-400 border-2 border-white flex items-center justify-center font-bold text-black text-lg mx-auto mb-4">
                NE
              </div>
              <p className="text-xl">Profesyonel Stand Tasarımı</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}