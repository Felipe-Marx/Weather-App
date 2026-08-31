import type { WeatherLocationProps } from "../types/weather";

function WeatherLocation({ clima }: WeatherLocationProps) {
  return (
    <div className="weather-loc">
      <div className="weather-city">
        <p>{clima.cidade}</p>
      </div>
      <div className="weather-location-detail">
        <p>
          {clima.pais} • {clima.estado}
        </p>
      </div>
    </div>
  );
}

export default WeatherLocation;
