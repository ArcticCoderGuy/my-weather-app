import { useState } from "react";
import axios from "axios";
import { Container, Typography, Alert } from "@mui/material";
import WeatherForm from "./Components/WeatherForm";
import WeatherDisplay from "./Components/WeatherDisplay";
import { Box, Container, Typography, Alert } from "@mui/material";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY; // sama kuin sinulla

  if (!apiKey) {
    return (
      <Container maxWidth="sm" sx={{ mt: 6 }}>
        <Alert severity="error">
          API-avain puuttuu. Lisää juureen <code>.env</code>:
          <br />
          <code>VITE_API_KEY=your_api_key_here</code>
        </Alert>
      </Container>
    );
  }

  const fetchWeather = async () => {
    try {
      setError(null);
      setWeather(null);
      const res = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: { q: city, units: "metric", appid: apiKey },
      });
      setWeather(res.data);
    } catch {
      setWeather(null);
      setError("City not found");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Weather App 🌍
      </Typography>

      <WeatherForm city={city} setCity={setCity} fetchWeather={fetchWeather} />

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      {weather && <WeatherDisplay weather={weather} />}
    </Container>
  );
}
