import "./App.css";
import { WeatherProvider } from "./context/WeatherContext";
import HomePage from "./components/HomePage";

function App() {
  return (
    <WeatherProvider>
      <HomePage></HomePage>
    </WeatherProvider>
  );
}

export default App;
