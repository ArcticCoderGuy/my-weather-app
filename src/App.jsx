import { useState } from "react";
import axios from "axios";
import { Container, Typography, Alert, Box } from "@mui/material";
import WeatherForm from "./Components/WeatherForm";
import WeatherDisplay from "./Components/WeatherDisplay";
import backgroundImage from "./assets/saturn.jpg";

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
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="sm" sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: 3,
        padding: 4,
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
      }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: 'white', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
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
    </Box>
  );
}
