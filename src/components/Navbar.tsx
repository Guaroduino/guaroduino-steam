import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-900">STEAM VE</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/primaria" className="text-gray-600 hover:text-gray-900">
              Primaria
            </Link>
            <Link href="/secundaria" className="text-gray-600 hover:text-gray-900">
              Secundaria
            </Link>
            <Link href="/universidad" className="text-gray-600 hover:text-gray-900">
              Universidad
            </Link>
            <Link href="/proyectos" className="text-gray-600 hover:text-gray-900">
              Proyectos
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 