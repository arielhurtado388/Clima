import styles from "./App.module.css";
import Form from "./components/Form/Form";
import useWeather from "./hooks/useWeather";
function App() {
  const { fetchWeather } = useWeather();
  return (
    <>
      <h2 className={styles.title}>Buscador de clima</h2>

      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />
        <p>2</p>
      </div>
    </>
  );
}

export default App;
