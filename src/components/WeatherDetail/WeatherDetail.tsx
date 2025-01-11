import { formatTempeture } from "../../helpers";
import { Weather } from "../../hooks/useWeather";
import styles from "./WeatherDetail.module.css";

type WeatherDetailProps = {
  weather: Weather;
};
export default function WeatherDetail({ weather }: WeatherDetailProps) {
  return (
    <div className={styles.container}>
      <h2>Clima de {weather.name}</h2>
      <p className={styles.current}>
        {formatTempeture(weather.main.temp)}&deg;C
      </p>
      <div className={styles.tempetures}>
        <p>
          Mínima: <span> {formatTempeture(weather.main.temp_min)}&deg;C</span>
        </p>
        <p>
          Máxima: <span> {formatTempeture(weather.main.temp_max)}&deg;C</span>
        </p>
      </div>
    </div>
  );
}
