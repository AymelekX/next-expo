import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Contact from "../../../../components/Contact";
import Footer from "../../../../components/Footer";

type Service = {
  slug: string;
  title: string;
  seoDescription: string;
  content: string;
  image: string;
};

const SERVICES: Service[] = [
  {
    slug: "fuar-standi-tasarimi",
    title: "Fuar Standı Tasarımı",
    seoDescription:
      "Fuar standı tasarımı hizmetimiz; marka hedeflerinize, konumlandırmanıza ve bütçenize uygun, maksimum görünürlük ve etkileşim sağlayan özgün çözümler üretir. Keşif ve brief aşamasından konsept geliştirmeye, 3D görselleştirme ve teknik çizimlere, malzeme seçimi ve üretim detaylarına kadar süreci uçtan uca yönetiriz. Ziyaretçi akışını, aydınlatmayı ve ergonomiyi optimize eder; modüler ve sürdürülebilir çözümlerle yatırımınızın değerini artırırız. Deneyim tasarımına odaklanan yaklaşımımız, fuar performansınızı ölçülebilir biçimde iyileştirir.",
    content:
      "Fuar standı tasarımında amacımız yalnızca estetik bir alan yaratmak değildir; satış, pazarlama ve iletişim hedeflerinizi destekleyen bütünsel bir deneyim kurgulamaktır. Bu nedenle süreç, detaylı bir keşif ve hedef analiziyle başlar. Marka kimliğiniz, hedef kitle beklentileri, ürün gamı ve fuar konumunuz birlikte değerlendirilir. Metrekare kullanımının verimliliği, dolaşım ve görüş aksları, teşhir stratejisi, depolama gereksinimleri ve toplantı alanları aynı plan içinde optimize edilir. Zemin-tavan kurgusu ile aydınlatma ve grafik dili uyum içinde kurgulanır; ziyaretçinin dikkati doğru noktalara yönlendirilir. Modüler ve demonte tasarımlar sayesinde yatırımın farklı fuarlarda esnek biçimde kullanılabilmesi sağlanır. Üretimde dayanıklılığı yüksek, bakımı kolay ve sürdürülebilir malzemeler tercih edilir; montaj kolaylığı ve lojistik maliyeti de denklemin bir parçası olarak ele alınır.\n\nKonsept belirginleştikçe 3D görselleştirme, teknik çizim ve malzeme örneklemeleriyle karar süreçleri hızlandırılır. Aydınlatma testleri, kullanıcı ergonomisi, akustik ve güvenlik kriterleri kontrol listeleri üzerinden doğrulanır. Grafik tasarımlar ve iletişim mesajları, marka tonunu koruyacak şekilde mekânsal elemanlarla bütünleşir. Ziyaretçiyi içeri çekmek için giriş kurgusu ve cephe etkisi güçlendirilir; bekleme alanlarında konfor ve yönlendirme işaretleriyle akış sorunları çözülür. Süreç boyunca revizyonlar hızlı geri bildirimlerle yönetilir; onaylanan dokümantasyon üretime doğrudan referans olacak düzeyde netleştirilir.\n\nTeslimde hedefimiz, fuar süresince kesintisiz bir kullanım deneyimidir. Bu kapsamda bakım ve hızlı müdahale senaryoları tanımlanır; elektrik altyapısı, multimedya ve güvenlik gereksinimleri devreye alma protokolleriyle test edilir. Proje kapanışında performans değerlendirmesi yapılır, sonraki etkinliklere yönelik iyileştirme önerileri dokümante edilir. Böylece süreç bir defalık bir kurulumdan ziyade, markanızın etkinlik stratejisinin sürdürülebilir bir parçasına dönüşür.",
    image: "/images/services/fuar-standi-tasarimi.jpg",
  },
  {
    slug: "stand-kurulumu",
    title: "Stand Kurulumu",
    seoDescription:
      "Stand kurulumu hizmetimiz; üretimden sahaya sevkiyata, montajdan elektrik ve mekanik bağlantılara kadar tüm adımları planlı ve güvenli şekilde yürütür. Fuar alanı kurallarına ve iş sağlığı–güvenliği standartlarına uygun çalışır, zaman çizelgesini risk planlarıyla destekleriz. Deneyimli saha ekibimiz son kontrolleri yapar, etkinlik boyunca bakım ve hızlı müdahale desteği vererek aksaksız bir katılım sağlar. Söküm ve depolama seçenekleriyle yatırımınızı sonraki etkinliklere hazır halde tutarız.",
    content:
      "Kurulum aşamasında başarılı bir sonuç, sadece doğru parçaların bir araya getirilmesiyle değil; iyi planlanmış lojistik, şantiye güvenliği ve disiplinler arası koordinasyonla elde edilir. Bu nedenle sahaya çıkmadan önce iş programını, yükleme-boşaltma saatlerini, vinç ve forklift erişimini, elektrik altyapısını ve fuar yönetmeliğini detaylı biçimde planlarız. Lojistikte paketleme ve etiketleme standartları sayesinde sahada aranan parçaya hızlı erişim sağlanır. Montaj sırası, riski ve bağımlılıkları minimize edecek şekilde kurgulanır; zemin uygulaması, iskelet montajı, panel ve grafik uygulamaları, elektrik ve multimedya devreleri kontrol listeleriyle doğrulanır.\n\nİş sağlığı ve güvenliği prosedürleri tüm ekibe aktarılır; kişisel koruyucu donanım, çalışma alanı izolasyonu ve ekipman kontrolleri eksiksiz uygulanır. Aydınlatma testleri, kablo yönetimi ve yangın güvenliği kriterleri teslimden önce tek tek kontrol edilir. Ziyaretçi güvenliği ve erişilebilirlik kuralları gözetilerek dolaşım alanları açık tutulur. Teslim öncesi son temizlik ve görsel kontrol ardından, kullanım brief’i müşteri ekibine aktarılır. Etkinlik süresince vardiyalı destek ve hızlı müdahale hattı ile kesintisiz hizmet sağlanır. Sökümde malzemeler hasarsız şekilde paketlenir, depolama koşulları ve yeniden kullanım stratejileri planlanır.",
    image: "/images/services/stand-kurulumu.jpg",
  },
  {
    slug: "3d-gorsellestirme",
    title: "3D Görselleştirme",
    seoDescription:
      "3D görselleştirme hizmeti; konsept onayı öncesi projenizi gerçeğe yakın ışık, malzeme ve kamera açılarıyla deneyimlemenizi sağlar. Fotogerçekçi render’lar, hızlı revizyon döngüleri ve alternatif tasarım senaryoları ile karar süreçlerini hızlandırır. Sunum dosyaları, animasyonlar ve ölçülendirilmiş görseller üretim ekibi için net bir referans oluşturur. Bu sayede sürpriz maliyetler azalır, hedeflenen kalite seviyesi üretime eksiksiz aktarılır.",
    content:
      "3D süreç, stratejik bir iletişim aracıdır. İlk etapta referans görseller ve malzeme paletleri belirlenir; bu girdiler ışık kurgusu ve kamera yollarını etkiler. Yüksek poligon sayısı gerektiren detaylarda performans dengesi gözetilir, instancing ve proxy teknikleriyle sahne optimize edilir. Işık simülasyonlarında gerçek dünya aydınlatma verileri esas alınır; spot, lineer ve backlight ilişkileri ürünün ön plana çıkmasını sağlayacak şekilde düzenlenir. Post-prodüksiyonda renk düzeltme, keskinlik, kontrast ve gürültü azaltma adımları işlenir.\n\nKarar vericilere hazırlanan sunum paketinde; genel planlar, yakın plan ürün detayları, malzeme ve dokulara ait kırpımlar, farklı renk varyasyonları ve alternatif grafik yerleşimleri yer alır. Animasyon ve walkthrough seçenekleriyle mekânın deneyimi önceden aktarılır. Onaylanan sahneler, ölçülendirilmiş görseller ve teknik kesitlerle imalata referans olacak şekilde arşivlenir. Bu sistematik çalışma, üretim ve kurulum aşamasında sürprizleri azaltır, kaliteyi öngörülebilir kılar.",
    image: "/images/services/3d-gorsellestirme.jpg",
  },
  {
    slug: "mimarlik-hizmetleri",
    title: "Mimarlık Hizmetleri",
    seoDescription:
      "Mimarlık hizmetlerimiz; konsept geliştirme, uygulama projeleri, keşif–metraj, malzeme seçimi ve saha koordinasyonunu kapsayan bütünleşik bir yaklaşım sunar. Fonksiyonel ihtiyaçları kullanıcı deneyimiyle birleştirir, sürdürülebilir malzemeler ve enerji verimli çözümlerle mekanın yaşam döngüsü maliyetini düşürürüz. Zaman–bütçe hedeflerini gözeterek disiplinler arası koordinasyonu sağlar, teslim kalitesini ölçülebilir standartlarla güvence altına alırız.",
    content:
      "Mimaride önceliğimiz, mekânın amacına hizmet eden, ölçülebilir fayda sağlayan çözümler üretmektir. Bu yüzden ihtiyaç programı, kullanıcı profilleri ve trafik verileriyle desteklenir; dolaşım, görüş ve erişilebilirlik analizleri üzerinden yerleşim şemaları geliştirilir. Akustik konfor ve aydınlatma performansı, enerji verimliliğiyle birlikte düşünülür. Malzeme seçiminde sürdürülebilirlik, bakım maliyeti ve yaşlanma performansı kriterleri dikkate alınır.\n\nUygulama projelerinde detay çözümleri, montaj prensipleri ve birleşim türleri netleştirilir; shop-drawing dokümantasyonu tedarik ve üretim ekipleri için açık ve okunaklı şekilde hazırlanır. Disiplinler arası koordinasyon (mekanik, elektrik, data, yangın) çakışma analizleriyle yönetilir. Şantiye sürecinde kalite güvence listeleri, örnek daire/alan onayları ve mock-up çalışmaları ile teslim kalitesi garanti edilir. Teslim sonrası bakım ve kullanım kılavuzlarıyla mekanın sürdürülebilir performansı desteklenir.",
    image: "/images/services/mimarlik-hizmetleri.jpg",
  },
  {
    slug: "ozel-dekorasyon",
    title: "Özel Dekorasyon",
    seoDescription:
      "Özel dekorasyon hizmetimiz; markanıza özgü teşhir üniteleri, yönlendirme ve dekoratif elemanların tasarım–üretim–uygulama süreçlerini kapsar. Ahşap, metal, pleksi ve kompozit malzemeleri projeye uygun şekilde birleştirir, dayanıklılık ve taşınabilirlik kriterlerini gözetiriz. Renk–doku uyumunu, ışık ve grafiklerle destekleyerek mekânın algısını güçlendirir, ürünlerin sahnelenmesini etkili hale getiririz. Modüler çözümler farklı etkinliklerde tekrar kullanımı mümkün kılar.",
    content:
      "Her markanın kendine özgü bir sahne anlatımı vardır ve dekorasyon bu anlatının görünür olduğu alandır. Tasarım sürecinde mekanın fonksiyonu, hedef kitle davranışları ve marka tonu birlikte değerlendirilir. Teşhir elemanlarında ergonomi ve erişilebilirlik esastır; ürünün ışık altında doğru algılanması için aydınlatma ve malzeme ilişkileri test edilir. Malzeme seçiminde dayanıklılık ve sürdürülebilirlik önceliklidir; ahşap, metal, pleksi ve kompozit çözümler projeye göre birlikte kullanılır.\n\nPrototip ve numune çalışmaları, üretim öncesinde kalite çıtasını belirler. Kenar bantları, birleşim detayları ve yüzey kaplamaları standartlaştırılır. Grafik, yönlendirme ve multimedya elemanları mekan kurgusuyla bütünleşecek şekilde yerleştirilir. Kurulumda iş güvenliği ve çevre koşulları gözetilir; söküm ve yeniden kullanım senaryoları planlanır. Böylece dekoratif unsurlar yalnızca çekici bir görüntü değil, aynı zamanda sürdürülebilir bir yatırım haline gelir.",
    image: "/images/services/ozel-dekorasyon.jpg",
  },
  {
    slug: "proje-yonetimi",
    title: "Proje Yönetimi",
    seoDescription:
      "Proje yönetimi hizmetimiz; kapsam belirleme, zaman–bütçe planlaması, tedarik ve üretim koordinasyonu, saha uygulaması ve kapanış süreçlerini şeffaf metriklerle yönetir. Riskleri erken aşamada analiz eder, değişiklik taleplerini kontrollü biçimde ele alırız. Düzenli raporlama, onay kapıları ve kalite kontrol listeleri sayesinde sürprizleri azaltır; proje hedeflerinin eksiksiz karşılanmasını sağlarız. Paydaş iletişimini tek merkezden yürüterek verimliliği artırırız.",
    content:
      "Başarılı proje yönetimi, öngörülebilirlik ve şeffaflık üzerine kurulur. Başlangıçta kapsam netleştirilir; hedefler, teslimatlar ve kabul kriterleri yazılı hale getirilir. Zaman çizelgesi kritik yol analizi ile oluşturulur; kaynak atamaları ve öncelikler belirlenir. Bütçe planlamasında tedarik, üretim, lojistik ve saha kalemleri ayrı izlenir. Risk yönetimi matrisi ile olası gecikme veya kalite sapmalarına karşı önleyici adımlar planlanır. İletişim planı, paydaşların bilgi ihtiyacına göre düzenli raporlar ve toplantı ritimleri içerir.\n\nUygulama sırasında değişiklik talepleri kontrollü bir onay sürecinden geçer; dokümantasyon tek merkezde tutulur ve versiyonlama ilkelerine uygun güncellenir. Kalite güvence listeleri, ara kontroller ve saha denetimleriyle teslim seviyesi korunur. Kapanışta finansal mutabakat, garanti ve bakım dokümanları teslim edilir; retrospektif değerlendirmeyle sonraki projeler için öğrenimler kayda alınır. Bu yaklaşım, projelerinizi zamanında, bütçesinde ve beklenen kaliteyle tamamlamaya odaklanır.",
    image: "/images/services/proje-yonetimi.jpg",
  },
];

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) {
    return { title: "Hizmet" };
  }
  return {
    title: `${service.title} | NextExpo`,
    description: service.seoDescription,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return null;

  return (
    <main className="pt-24 pb-20 bg-white min-h-screen">
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
        <nav className="text-sm text-gray-500 mb-6" aria-label="breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-yellow-400">Ana Sayfa</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/#services" className="hover:text-yellow-400">Hizmetler</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900">{service.title}</li>
          </ol>
        </nav>

        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">{service.title}</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <div className="prose max-w-none text-gray-700 text-left leading-relaxed">
              <p className="mb-6 whitespace-pre-line">{service.content}</p>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="relative w-full h-64 md:h-80 lg:h-full min-h-72 bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <Image src={service.image} alt={service.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
            </div>
          </div>
        </div>
        </div>
      </section>

      <div className="mt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}


