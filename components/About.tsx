import Image from "next/image";

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
          <div className="relative h-96 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <Image
              src="/images/about.jpg"
              alt="Next Expo Hakkımızda Görseli"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm opacity-90"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}