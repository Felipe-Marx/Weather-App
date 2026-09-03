

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

export interface SearchProps {
  onSearch: () => void
  loading: boolean
  cidade: string
  handleChange:(event: React.ChangeEvent<HTMLInputElement>) => void
}