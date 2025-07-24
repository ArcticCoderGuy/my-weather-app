import { useState } from 'react';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;

  if (!apiKey) {
    return (
      <div className="p-6 text-red-600">
        <h2 className="text-2xl font-bold mb-2">❌ API-avain puuttuu</h2>
        <p>
          Lisää OpenWeatherMap API-avain <code>.env</code>-tiedostoon muodossa:
          <br />
          <code>VITE_API_KEY=your_api_key_here</code>
        </p>
      </div>
    );
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      setWeatherData(null);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      const response = await axios.get(url);
      setWeatherData(response.data);
    } catch {
      setError('⚠️ Kaupunkia ei löytynyt.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">🌤️ Sääsovellus</h1>

      {/* Lomake */}
      <form onSubmit={handleSearch} className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Syötä kaupunki…"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Hae
        </button>
      </form>

      {/* Virhe */}
      {error && <p className="text-red-600">{error}</p>}

      {/* Säädata */}
      {weatherData && (
        <div className="bg-white p-4 rounded shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-2">{weatherData.name}</h2>
          <p>🌡️ {weatherData.main.temp} °C</p>
          <p>💨 {weatherData.wind.speed} m/s</p>
          <p>{weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
