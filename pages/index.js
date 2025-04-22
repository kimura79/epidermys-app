export default function Home() {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto py-20 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-6">
          Analisi Clinica Avanzata della Pelle
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Epidermys utilizza l'intelligenza artificiale per identificare rughe, pori, macchie, melasma e imperfezioni cutanee con precisione professionale.
        </p>
        <a
          href="/upload"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
        >
          Carica una Foto
        </a>
      </div>
    </div>
  );
}
