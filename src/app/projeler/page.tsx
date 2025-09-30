import type { Metadata } from "next";
import Image from "next/image";
import Contact from "../../../components/Contact";
import Footer from "../../../components/Footer";

export const metadata: Metadata = {
  title: "Projeler | NextExpo",
  description:
    "Türkiye ve dünyada fuar ve etkinlikler için tasarladığımız etkileyici stand projelerimizi keşfedin.",
};

export default function ProjelerPage() {
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
    <main className="pt-24 pb-20 bg-white min-h-screen">
      <section className="container mx-auto px-4">
        <nav className="text-sm text-gray-500 mb-6" aria-label="breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <a href="/" className="hover:text-yellow-400">Ana Sayfa</a>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900">Projeler</li>
          </ol>
        </nav>
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Projelerimiz</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Türkiye ve dünyada fuar ve etkinlikler için marka hedeflerinize uygun, fonksiyonel ve dikkat çekici stand projeleri tasarlıyor ve üretiyoruz. Aşağıda seçili işlerden örnekleri keşfedin.
          </p>
        </header>

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
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="mt-24">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}


