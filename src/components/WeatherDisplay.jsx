export default function WeatherDisplay({ data }) {
  if (!data) return null;

  return (
    <div className="bg-white bg-opacity-30 backdrop-blur-md p-6 rounded-xl shadow-md text-center w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-2">{data.name}</h2>
      <p className="text-lg">🌡️ {data.main.temp} °C</p>
      <p className="text-lg">💨 {data.wind.speed} m/s</p>
      <p className="italic capitalize">{data.weather[0].description}</p>
    </div>
  );
}
