// src/App.jsx
import { useState } from "react";
import axios from "axios";
import { Box, Container, Typography, Alert } from "@mui/material";
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";

// Jos saturn.jpg on src/assets -kansiossa:
import saturnBg from "./assets/saturn.jpg";
// Jos siirrät kuvan public/assets -kansioon, poista yllä oleva import
// ja käytä: backgroundImage: 'linear-gradient(...), url("/assets/saturn.jpg")'

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;

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
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(11,16,32,.70), rgba(11,16,32,.70)), url(${saturnBg})`,
        // Jos käytät public/assets -polkua, vaihda yllä oleva riviksi:
        // backgroundImage: 'linear-gradient(rgba(11,16,32,.70), rgba(11,16,32,.70)), url("/assets/saturn.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "grid",
        placeItems: "center",
        px: 2,
      }}
    >
      <Container maxWidth="sm">
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

        <Typography
          variant="caption"
          sx={{ opacity: 0.7, display: "block", textAlign: "center", mt: 2 }}
        >
          Image: NASA / JPL-Caltech / Cassini
        </Typography>
      </Container>
    </Box>
  );
}
