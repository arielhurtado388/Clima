import Alert from "./Alert/Alert";
import styles from "./App.module.css";
import Form from "./components/Form/Form";
import Loader from "./components/Loader/Loader";
import WeatherDetail from "./components/WeatherDetail/WeatherDetail";
import useWeather from "./hooks/useWeather";
function App() {
  const { weather, loading, notFound, fetchWeather, hasWeatherData } =
    useWeather();
  return (
    <>
      <h2 className={styles.title}>Buscador de clima</h2>

      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />
        {loading && <Loader />}
        {hasWeatherData && <WeatherDetail weather={weather} />}
        {notFound && <Alert>Ciudad no encontrada</Alert>}
      </div>
    </>
  );
}

export default App;
