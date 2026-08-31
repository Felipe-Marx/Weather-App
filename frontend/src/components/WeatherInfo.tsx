
import type { WeatherInfoProps } from "../types/weather";

function WeatherInfo ({clima}:WeatherInfoProps) {
    return (
    <div className="weather-info">
  <div className="weather-item">
    <span>Temperatura</span>
    <strong>{clima.temperatura} °C</strong>
  </div>

  <div className="weather-item">
    <span>Umidade</span>
    <strong>{clima.umidade} %</strong>
  </div>

  <div className="weather-item">
    <span>Vento</span>
    <strong>{clima.velocidade_vento} km/h</strong>
  </div>
</div>
    )
}
export default WeatherInfo