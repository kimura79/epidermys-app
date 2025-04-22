export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-blue-700">Epidermys</a>
        <div className="space-x-4 text-gray-700 text-sm">
          <a href="/features" className="hover:text-blue-700">Funzioni</a>
          <a href="/pricing" className="hover:text-blue-700">Prezzi</a>
          <a href="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded">Login</a>
        </div>
      </div>
    </nav>
  );
}
