export default function Portfolio() {
    const projects = [
      {
        title: "Teknoloji Fuarı Standı",
        category: "Fuar Standı",
        description: "Modern teknoloji şirketi için özel tasarım",
        image: "💻"
      },
      {
        title: "Gıda Fuarı Standı",
        category: "Fuar Standı", 
        description: "Organik gıda markası için doğal konsept",
        image: "🍎"
      },
      {
        title: "Otomotiv Fuarı",
        category: "Fuar Standı",
        description: "Lüks otomobil galeri standı tasarımı",
        image: "🚗"
      },
      {
        title: "İç Mekan Tasarımı",
        category: "Mimarlık",
        description: "Ofis ve mağaza iç mekan projeleri",
        image: "🏢"
      },
      {
        title: "Mobilya Fuarı Standı",
        category: "Fuar Standı",
        description: "Ev tekstili ve mobilya standı",
        image: "🛋️"
      },
      {
        title: "Sağlık Fuarı",
        category: "Fuar Standı",
        description: "Medikal cihaz firması standı",
        image: "🏥"
      }
    ];
  
    return (
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Projelerimiz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Gerçekleştirdiğimiz fuar standı ve mimarlık projelerinden örnekler
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-48 bg-gradient-to-r from-red-600 to-gray-800 flex items-center justify-center">
                  <div className="text-6xl">{project.image}</div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-red-600 font-semibold mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition">
              Tüm Projeleri Görüntüle
            </button>
          </div>
        </div>
      </section>
    );
  }