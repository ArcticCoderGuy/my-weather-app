import { Card, CardContent, Typography, Box, Chip, Divider, Grow } from "@mui/material";
import { Thermostat, Air, Cloud, LocationOn, Opacity, Compress } from "@mui/icons-material";

export default function WeatherDisplay({ weather }) {
  if (!weather) return null;

  const getWeatherIcon = (temp) => {
    if (temp < 0) return '❄️';
    if (temp < 10) return '🌨️';
    if (temp < 20) return '☁️';
    if (temp < 30) return '☀️';
    return '🔥';
  };

  return (
    <Grow in={true} timeout={600}>
      <Card 
        sx={{ 
          mt: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          color: 'white',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 40px rgba(144, 202, 249, 0.2)',
          },
        }}
      >
        <CardContent sx={{ p: 4 }}>
          {/* Location Header */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
            <LocationOn sx={{ mr: 1, color: '#90caf9' }} />
            <Typography variant="h4" sx={{ fontWeight: 600, letterSpacing: 1 }}>
              {weather.name}, {weather.sys.country}
            </Typography>
          </Box>

          {/* Main Temperature Display */}
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography variant="h1" sx={{ 
              fontWeight: 300, 
              fontSize: '5rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              {Math.round(weather.main.temp)}°
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.9, mt: 1 }}>
              {getWeatherIcon(weather.main.temp)} {weather.weather[0].main}
            </Typography>
            <Chip 
              label={weather.weather[0].description}
              sx={{ 
                mt: 2,
                backgroundColor: 'rgba(144, 202, 249, 0.2)',
                color: 'white',
                fontWeight: 500,
                fontSize: '0.9rem',
                textTransform: 'capitalize',
              }}
            />
          </Box>

          <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', my: 3 }} />

          {/* Weather Details Grid */}
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 3,
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Thermostat sx={{ mr: 2, color: '#ff7043', fontSize: 28 }} />
              <Box>
                <Typography variant="caption" sx={{ opacity: 0.7 }}>Feels Like</Typography>
                <Typography variant="h6">{Math.round(weather.main.feels_like)}°C</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Air sx={{ mr: 2, color: '#42a5f5', fontSize: 28 }} />
              <Box>
                <Typography variant="caption" sx={{ opacity: 0.7 }}>Wind Speed</Typography>
                <Typography variant="h6">{weather.wind.speed} m/s</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Opacity sx={{ mr: 2, color: '#66bb6a', fontSize: 28 }} />
              <Box>
                <Typography variant="caption" sx={{ opacity: 0.7 }}>Humidity</Typography>
                <Typography variant="h6">{weather.main.humidity}%</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Compress sx={{ mr: 2, color: '#ab47bc', fontSize: 28 }} />
              <Box>
                <Typography variant="caption" sx={{ opacity: 0.7 }}>Pressure</Typography>
                <Typography variant="h6">{weather.main.pressure} hPa</Typography>
              </Box>
            </Box>
          </Box>

          {/* Min/Max Temperature */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 4, 
            mt: 3,
            pt: 3,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}>
            <Typography variant="body1" sx={{ opacity: 0.8 }}>
              ↓ Min: {Math.round(weather.main.temp_min)}°
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.8 }}>
              ↑ Max: {Math.round(weather.main.temp_max)}°
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grow>
  );
}
