import { TextField, Button, Stack, InputAdornment } from "@mui/material";
import { Search, LocationCity } from "@mui/icons-material";

export default function WeatherForm({ city, setCity, fetchWeather, loading }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <Stack 
      component="form"
      onSubmit={handleSubmit}
      spacing={2} 
      direction={{ xs: 'column', sm: 'row' }} 
      alignItems="stretch"
    >
      <TextField
        fullWidth
        label="Enter city name"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        disabled={loading}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationCity sx={{ color: 'rgba(255, 255, 255, 0.5)' }} />
            </InputAdornment>
          ),
        }}
        sx={{
          flex: 1,
          '& .MuiOutlinedInput-root': {
            color: 'white',
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.3)',
              borderWidth: 2,
            },
            '&:hover fieldset': {
              borderColor: 'rgba(144, 202, 249, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#90caf9',
            },
          },
          '& .MuiInputLabel-root': {
            color: 'rgba(255, 255, 255, 0.7)',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#90caf9',
          },
        }}
      />
      <Button 
        type="submit"
        variant="contained" 
        size="large"
        disabled={loading || !city.trim()}
        startIcon={<Search />}
        sx={{
          minWidth: 160,
          height: 56,
          background: 'linear-gradient(45deg, #90caf9 30%, #ce93d8 90%)',
          color: 'white',
          fontWeight: 600,
          fontSize: '1rem',
          boxShadow: '0 3px 5px 2px rgba(144, 202, 249, .3)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            background: 'linear-gradient(45deg, #42a5f5 30%, #ab47bc 90%)',
            transform: 'scale(1.02)',
            boxShadow: '0 5px 15px 2px rgba(144, 202, 249, .4)',
          },
          '&:disabled': {
            background: 'rgba(255, 255, 255, 0.1)',
            color: 'rgba(255, 255, 255, 0.3)',
          },
        }}
      >
        {loading ? 'Searching...' : 'Get Weather'}
      </Button>
    </Stack>
  );
}
