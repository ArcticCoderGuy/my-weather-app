import { useState } from 'react';

export default function WeatherForm({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city);
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Syötä kaupunki..."
        className="p-2 border rounded w-64"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Hae
      </button>
    </form>
  );
}
