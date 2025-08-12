import { TextField, Button, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function WeatherForm({ city, setCity, fetchWeather }) {
  return (
    <Stack spacing={2} direction="row" alignItems="center">
      <TextField
        label="Enter city"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        sx={{
          '& .MuiOutlinedInput-root': {
            color: 'white',
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.5)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.8)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'rgba(255, 255, 255, 0.7)',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'white',
          },
        }}
      />
      <Button 
        variant="contained" 
        onClick={fetchWeather} 
        startIcon={<SearchIcon />}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          color: 'white',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
          }
        }}
      >
        GET WEATHER
      </Button>
    </Stack>
  );
}
