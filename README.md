# 🪐 Saturnus Weather App

Tervetuloa tutkimaan säätä Saturnus-teemaisella sovelluksella! Tämä on moderni sääsovellus, joka tuo avaruudellisen tunnelman säätietojen hakemiseen.

## 🌟 Mistä on kyse?

Tämä sovellus syntyi ideasta yhdistää kaksi kiinnostavaa asiaa: käytännöllinen säätietojen haku ja visuaalisesti vaikuttava Saturnus-teema. Sovellus hakee reaaliaikaiset säätiedot OpenWeather API:sta ja esittää ne tyylikkäässä, Material-UI:lla toteutetussa käyttöliittymässä.

## 🚀 Miten se toimii?

Sovelluksen toimintaperiaate on suoraviivainen mutta tehokas:

1. **Käyttäjä syöttää kaupungin nimen** → lomakekenttään WeatherForm-komponentissa
2. **Hakupainikkeen klikkaus** → laukaisee tapahtumankäsittelijän
3. **App.jsx ottaa kopin** → tekee axios-kutsun OpenWeather API:lle
4. **Säätiedot saapuvat** → tallennetaan React-tilaan (useState)
5. **WeatherDisplay näyttää tulokset** → kauniisti muotoiltuna MUI-komponenteilla

## 🛠️ Tekninen toteutus

### Käytetyt teknologiat

Projekti hyödyntää moderneja web-teknologioita:

- **React + Vite** - Salamannopea kehitysympäristö HMR-tuella
- **Material-UI** - Googlen Material Design -komponentit
- **Emotion** - CSS-in-JS tyylittely
- **Axios** - HTTP-pyyntöjen hallinta
- **Tailwind CSS** - Utility-first CSS-framework
- **OpenWeather API** - Reaaliaikaiset säätiedot

### Projektin rakenne

```
my-weather-app/
├── src/
│   ├── components/
│   │   ├── WeatherForm.jsx      # Hakulomake
│   │   └── WeatherDisplay.jsx   # Säätietojen näyttö
│   ├── assets/
│   │   └── saturn.jpg           # Taustakuva
│   ├── App.jsx                  # Pääkomponentti
│   ├── main.jsx                 # Sovelluksen käynnistys
│   ├── theme.js                 # Saturnus-teema
│   └── index.css                # Globaalit tyylit
└── public/
```

## 🎨 Saturnus-teema

Sovelluksen visuaalinen ilme on inspiroitunut Saturnuksen mystisestä kauneudesta. Teema sisältää:

- **Syvät violetit ja kultaiset sävyt** - kuin Saturnuksen renkaat auringonlaskussa
- **Pehmeät gradientit** - luovat avaruudellisen tunnelman
- **Läpinäkyvät taustat** - glassmorphism-efekti moderniin ilmeeseen
- **Taustakuva** - upea Saturnus-näkymä luo syvyyttä

## 💻 Asennus ja käyttöönotto

### Esivalmistelut

Varmista että sinulla on asennettuna:
- Node.js (versio 14 tai uudempi)
- npm tai yarn paketinhallinta
- Git versionhallinta

### Asennusohjeet

1. **Kloonaa projekti**
   ```bash
   git clone https://github.com/your-username/my-weather-app.git
   cd my-weather-app
   ```

2. **Asenna riippuvuudet**
   ```bash
   npm install
   ```

3. **Hanki API-avain**
   - Rekisteröidy [OpenWeatherMap](https://openweathermap.org/api) -palveluun
   - Kopioi API-avaimesi
   - Lisää se App.jsx-tiedostoon (rivi missä API_KEY määritelty)

4. **Käynnistä kehityspalvelin**
   ```bash
   npm run dev
   ```

5. **Avaa selaimessa**
   ```
   http://localhost:5173
   ```

## 🎯 Käyttöohjeet

1. **Syötä kaupungin nimi** hakukenttään
2. **Klikkaa "Hae sää"** -painiketta tai paina Enter
3. **Nauti säätiedoista** Saturnus-tyyliin!

Sovellus näyttää:
- 🌡️ Lämpötilan (tuntuu kuin)
- 💧 Kosteusprosentin
- 💨 Tuulen nopeuden
- 🌤️ Säätilan kuvauksen
- 🎯 Ilmanpaineen

## 🔧 Kehitysympäristö

### Käytettävissä olevat skriptit

```bash
npm run dev          # Käynnistä kehityspalvelin
npm run build        # Buildaa tuotantoversio
npm run preview      # Esikatsele tuotantoversiota
npm run lint         # Tarkista koodin laatu
```

### ESLint-konfiguraatio

Projekti käyttää ESLint-sääntöjä koodin laadun varmistamiseen. Voit laajentaa konfiguraatiota tuotantokäyttöön lisäämällä TypeScript-tuen.

## 🚀 Jatkokehitysideoita

- **5 päivän ennuste** - Näytä tulevien päivien sää
- **Karttanäkymä** - Visualisoi sää kartalla
- **Suosikit** - Tallenna lempikaupunkisi
- **Teemanvaihto** - Lisää muita planeettateemoja
- **PWA-tuki** - Toimi offline-tilassa
- **Sääilmoitukset** - Hälytykset ääriolosuhteista

## 📝 Lisenssi

Tämä projekti on avoimen lähdekoodin ja käytettävissä MIT-lisenssillä.

## 🙏 Kiitokset

- OpenWeatherMap API:lle säädatasta
- Material-UI tiimille upeista komponenteista
- Vite-kehittäjille salamannopeasta kehitysympäristöstä

---

*Rakennettu rakkaudella React + Vite + MUI -teknologioilla. Saturnus-teema tuo avaruudellista tunnelmaa säätietoihin! 🪐*