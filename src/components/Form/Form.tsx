import Alert from "../../Alert/Alert";
import { countries } from "../../data/countries";
import { SearchType } from "../../types";
import styles from "./Form.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

type FormProps = {
  fetchWeather: () => void;
};

export default function Form({ fetchWeather }: FormProps) {
  const [search, setSearch] = useState<SearchType>({
    city: "",
    country: "",
  });

  const [alert, setAlert] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(search).includes("")) {
      setAlert("Todos los campos son obligatorios");
      return;
    }
    fetchWeather();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {alert && <Alert> {alert}</Alert>}

      <div className={styles.field}>
        <label htmlFor="city">Ciudad: </label>
        <input
          id="city"
          name="city"
          type="text"
          placeholder="Ciudad"
          value={search.city}
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="country">País: </label>
        <select
          id="country"
          name="country"
          value={search.country}
          onChange={handleChange}
        >
          <option value="">-- Seleccione un país</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <input className={styles.submit} type="submit" value="Consultar clima" />
    </form>
  );
}
