import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <div className="relative w-10 h-10 rounded overflow-hidden">
            <Image src="/logo.jpg" alt="Next Expo Logo" fill sizes="40px" className="object-cover" />
          </div>
          <div className="text-2xl font-bold text-black">
            Next Expo
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/#home" className="text-gray-700 hover:text-yellow-400 font-medium">Ana Sayfa</Link>
          <Link href="/#services" className="text-gray-700 hover:text-yellow-400 font-medium">Hizmetler</Link>
          <Link href="/#about" className="text-gray-700 hover:text-yellow-400 font-medium">Hakkımızda</Link>
          <Link href="/projeler" className="text-gray-700 hover:text-yellow-400 font-medium">Portfolyo</Link>
          <Link href="/#contact" className="text-gray-700 hover:text-yellow-400 font-medium">İletişim</Link>
        </nav>
        <button className="md:hidden">
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
      </div>
    </header>
  );
}