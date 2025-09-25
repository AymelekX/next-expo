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
          <a href="#home" className="text-gray-700 hover:text-yellow-400 font-medium">Ana Sayfa</a>
          <a href="#services" className="text-gray-700 hover:text-yellow-400 font-medium">Hizmetler</a>
          <a href="#about" className="text-gray-700 hover:text-yellow-400 font-medium">Hakkımızda</a>
          <a href="#portfolio" className="text-gray-700 hover:text-yellow-400 font-medium">Portfolyo</a>
          <a href="#contact" className="text-gray-700 hover:text-yellow-400 font-medium">İletişim</a>
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