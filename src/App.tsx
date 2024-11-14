import "./App.css";
import { WeatherProvider } from "./context/WeatherContext";
import { ThemeProvider } from "./context/ThemeContext";
import HomePage from "./components/HomePage";

function App() {
  return (
    <ThemeProvider>
      <WeatherProvider>
        <HomePage></HomePage>
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;
