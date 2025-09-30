import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "Incanto Italia",
      description: "Mobilya fuarı standı",
      image: "/projects/incanto-italia.jpg",
    },
    {
      title: "Dust Auto",
      description: "Otomotiv fuar standı",
      image: "/projects/dust-auto.jpg",
    },
    {
      title: "Ens Danışmanlık",
      description: "Danışmanlık fuar standı",
      image: "/projects/ens-danismanlik.jpg",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">Projelerimiz</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Gerçekleştirdiğimiz fuar standı projelerinden örnekler
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition border border-gray-200"
            >
              <div className="h-56 bg-gray-100 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="/projeler"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition transform hover:scale-105 shadow-lg inline-block"
          >
            Tüm Projeleri Görüntüle
          </a>
        </div>
      </div>
    </section>
  );
}