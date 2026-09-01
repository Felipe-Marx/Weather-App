import React, { useState } from "react";
import "./App.css";
import type { Clima } from "./types/weather"
import WeatherInfo from "./components/WeatherInfo"
import WeatherLocation from "./components/WeatherLocation"

function App() {
  const [cidade, setCidade] = useState("");

  const [clima, setClima] = useState<Clima | null>(null);

  const [erro, setErro] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCidade(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == "Enter") {
      handleClick();
    }
  }

  const handleClick = async () => {
    setLoading(true);
    try {
      const resposta = await fetch(`http://127.0.0.1:8000/weather/${cidade}`);
      const dados = await resposta.json();

      if (!resposta.ok) {
        setErro(dados.detail);
        setClima(null);
      } else {
        setClima(dados);
        setErro(null);
      }
    } catch (error) {
      setErro("Falha na requisição");
      setClima(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="app">
        <main>
          <header>
          <h1>Weather App</h1>
          </header>

          <section className="search">
            <input
              type="text"
              value={cidade}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              disabled={loading}
            />
            <button onClick={handleClick} disabled={loading}>
              {loading ? "Buscando..." : "Buscar"}
            </button>
          </section>

        {clima && (
          <section className="weather">
            <WeatherLocation clima={clima} />
            <WeatherInfo clima={clima} />
          </section>
        )}

        {erro && (
          <section className="error">
            <div>
              <p>Error: {erro}</p>
            </div>
          </section>
        )}
        
        </main>

      </div>
    </>
  );
}

export default App;
