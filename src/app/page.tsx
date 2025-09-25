// 1. COMPONENT'LERİ İMPORT EDİYORUZ
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// 2. ANA SAYFA COMPONENT'İ
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}