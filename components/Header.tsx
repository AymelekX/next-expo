import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <div className="w-12 h-12 bg-yellow-400 border-2 border-black flex items-center justify-center font-bold text-black text-sm">
            NE
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