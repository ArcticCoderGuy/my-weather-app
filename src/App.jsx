import { useState } from "react";
import axios from "axios";
import { Container, Typography, Alert, Box, Paper, Fade, CircularProgress, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import WeatherForm from "./Components/WeatherForm";
import WeatherDisplay from "./Components/WeatherDisplay";
import backgroundImage from "./assets/saturn.jpg";
import theme from "./theme";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      setWeather(null);
      const res = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: { q: city, units: "metric", appid: apiKey },
      });
      setWeather(res.data);
    } catch {
      setWeather(null);
      setError("City not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
      <Container maxWidth="sm">
        <Paper 
          elevation={24}
          sx={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(20px) saturate(180%)',
            borderRadius: 4,
            padding: 5,
            border: '1px solid rgba(255, 255, 255, 0.18)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.5)',
            }
          }}
        >
          <Typography 
            variant="h4" 
            align="center" 
            gutterBottom 
            sx={{ 
              color: 'white', 
              fontWeight: 'bold', 
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              mb: 4,
              background: 'linear-gradient(45deg, #90caf9 30%, #ce93d8 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Weather App 🌍
          </Typography>

          <WeatherForm city={city} setCity={setCity} fetchWeather={fetchWeather} loading={loading} />

          <Fade in={!!error}>
            <Alert 
              severity="error" 
              sx={{ 
                mt: 2,
                backgroundColor: 'rgba(211, 47, 47, 0.1)',
                color: '#ff8a80',
                '& .MuiAlert-icon': {
                  color: '#ff8a80',
                },
              }}
            >
              {error}
            </Alert>
          </Fade>

          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
              <CircularProgress sx={{ color: 'rgba(144, 202, 249, 0.8)' }} />
            </Box>
          )}
          
          <Fade in={!!weather} timeout={500}>
            <Box>
              {weather && <WeatherDisplay weather={weather} />}
            </Box>
          </Fade>
        </Paper>
      </Container>
    </Box>
    </ThemeProvider>
  );
}
