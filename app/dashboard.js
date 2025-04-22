export default function Dashboard() {
  const patients = [
    { name: "Mario Rossi", date: "21/04/2025", status: "In analisi" },
    { name: "Giulia Verdi", date: "20/04/2025", status: "Completato" },
    { name: "Luca Bianchi", date: "19/04/2025", status: "In attesa" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Dashboard Pazienti</h1>

      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
            <tr>
              <th className="px-6 py-3 text-left">Nome</th>
              <th className="px-6 py-3 text-left">Data</th>
              <th className="px-6 py-3 text-left">Stato</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {patients.map((paziente, index) => (
              <tr key={index} className="border-t">
                <td className="px-6 py-4">{paziente.name}</td>
                <td className="px-6 py-4">{paziente.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-white text-sm ${
                    paziente.status === "Completato"
                      ? "bg-green-600"
                      : paziente.status === "In attesa"
                      ? "bg-yellow-500"
                      : "bg-blue-500"
                  }`}>
                    {paziente.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
