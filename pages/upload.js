import { useState } from "react";

export default function Upload() {
  const [preview, setPreview] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Upload Foto</h2>
      <input type="file" accept="image/*" onChange={handleUpload} className="mb-4" />
      {preview && (
        <img src={preview} alt="Anteprima" className="w-full mb-4 rounded shadow" />
      )}
      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">
        Analizza con AI
      </button>
    </div>
  );
}
