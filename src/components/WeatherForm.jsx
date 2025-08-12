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
      />
      <Button variant="contained" onClick={fetchWeather} startIcon={<SearchIcon />}>
        GET WEATHER
      </Button>
    </Stack>
  );
}
