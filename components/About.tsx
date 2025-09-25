export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-black mb-6">Next Expo Hakkında</h2>
            <p className="text-lg text-gray-600 mb-6">
              Next Expo olarak 15 yıllık deneyimimizle fuar standı tasarımı ve mimarlık alanında 
              hizmet veren uzman ekibimiz, projelerinizi en ince detayına kadar 
              planlayıp hayata geçiriyor.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              CNR Expo, İFM, Tüyap gibi prestijli fuar merkezlerinde yüzlerce 
              başarılı projeye imza attık. Markanızı fuarlarda öne çıkaracak 
              yaratıcı ve fonksiyonel çözümler üretiyoruz.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Modern tasarım anlayışımız ve yenilikçi yaklaşımımızla her projede 
              &quot;next level&quot; standartları hedefliyoruz.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-gray-600">Tamamlanan Stand</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">15+</div>
                <div className="text-gray-600">Yıl Deneyim</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">200+</div>
                <div className="text-gray-600">Mutlu Müşteri</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-black to-gray-800 h-96 rounded-lg flex items-center justify-center relative">
            <div className="absolute inset-4 border-4 border-yellow-400"></div>
            <div className="text-white text-center z-10">
              <div className="w-16 h-16 bg-yellow-400 border-2 border-white flex items-center justify-center font-bold text-black text-lg mx-auto mb-4">
                NE
              </div>
              <p className="text-xl">Next Level Stand Tasarımı</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}