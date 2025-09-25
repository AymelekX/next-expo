export default function Services() {
  const services = [
    {
      title: "Fuar Standı Tasarımı",
      description: "Markanıza özel yaratıcı ve etkileyici fuar standı tasarımları",
      icon: "🏗️"
    },
    {
      title: "Stand Kurulumu",
      description: "Profesyonel ekibimizle hızlı ve kaliteli stand montajı",
      icon: "🔧"
    },
    {
      title: "3D Görselleştirme",
      description: "Standınızın gerçeğe yakın 3D modellemesi ve sunum",
      icon: "📐"
    },
    {
      title: "Mimarlık Hizmetleri",
      description: "İç mekan tasarımı ve mimari proje çözümleri",
      icon: "🏛️"
    },
    {
      title: "Özel Dekorasyon",
      description: "Stand için özel dekoratif ürünler ve aksesuarlar",
      icon: "🎨"
    },
    {
      title: "Proje Yönetimi",
      description: "A'dan Z'ye tüm sürecin profesyonel yönetimi",
      icon: "📊"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Hizmetlerimiz</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Next Expo ile fuar standı tasarımından mimarlık hizmetlerine kadar geniş yelpazede profesyonel çözümler
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition border-l-4 border-yellow-400">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-black">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="mt-4">
                <button className="text-yellow-600 font-semibold hover:text-black transition">
                  Detay →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}