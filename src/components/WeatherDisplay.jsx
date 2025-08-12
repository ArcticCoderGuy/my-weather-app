import { Card, CardContent, Typography, Box } from "@mui/material";
import { WbSunny, Air, Description } from "@mui/icons-material";

export default function WeatherDisplay({ weather }) {
  if (!weather) return null;

  return (
    <Card sx={{ 
      mt: 3,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: 'white'
    }}>
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          {weather.name}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
          <Box sx={{ textAlign: 'center' }}>
            <WbSunny sx={{ fontSize: 30, mb: 1 }} />
            <Typography variant="h6">{weather.main.temp} °C</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Air sx={{ fontSize: 30, mb: 1 }} />
            <Typography variant="h6">{weather.wind.speed} m/s</Typography>
          </Box>
        </Box>
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Description sx={{ fontSize: 20, mb: 0.5 }} />
          <Typography variant="body1" sx={{ textTransform: 'capitalize' }}>
            {weather.weather[0].description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
