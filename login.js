export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-4">Login Medico</h1>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="border p-2 rounded w-64" />
        <input type="password" placeholder="Password" className="border p-2 rounded w-64" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Accedi</button>
      </form>
    </div>
  );
}