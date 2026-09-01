

export interface Clima {
  cidade: string;
  pais: string;
  estado: string;
  temperatura: number;
  umidade: number;
  velocidade_vento: number;
}

export interface WeatherInfoProps {
  clima: Clima
}

export interface WeatherLocationProps {
  clima: Clima
}