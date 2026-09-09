# Weather App

Aplicação simples para consultar o clima de uma cidade em tempo real.

O projeto foi desenvolvido para praticar integração entre uma API em
FastAPI e uma interface em React + TypeScript.

## Tecnologias

### Backend

-   Python
-   FastAPI
-   Pydantic
-   Requests
-   Pytest

### Frontend

-   React
-   TypeScript
-   Vite
-   CSS

### API de clima

-   Open-Meteo

## Funcionalidades

-   Busca de cidades
-   Temperatura atual
-   Umidade
-   Velocidade do vento
-   Informações de país e estado
-   Tratamento de cidade não encontrada
-   Tratamento de falha na API
-   Interface responsiva
-   Testes automatizados para a API

## Estrutura

``` text
Weather App/
├── backend/
│   ├── main.py
│   ├── models.py
│   ├── services.py
│   └── test/
│       └── test_main.py
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Search.tsx
│   │   │   ├── WeatherInfo.tsx
│   │   │   └── WeatherLocation.tsx
│   │   ├── types/
│   │   │   └── weather.ts
│   │   ├── App.tsx
│   │   ├── App.css
│   │   └── index.css
│   └── package.json
│
├── requirements.txt
└── README.md
```

## Como executar

### Backend

Entre na pasta do backend:

``` bash
cd backend
```

Crie o ambiente virtual:

``` bash
python -m venv .venv
```

Ative o ambiente virtual no Windows:

``` powershell
.venv\Scripts\activate
```

Instale as dependências:

``` bash
python -m pip install -r ..\requirements.txt
```

Inicie a API:

``` bash
uvicorn main:app --reload
```

A API estará disponível em:

``` text
http://127.0.0.1:8000
```

### Frontend

Em outro terminal, entre na pasta do frontend:

``` bash
cd frontend
```

Instale as dependências:

``` bash
npm install
```

Inicie o projeto:

``` bash
npm run dev
```

O Vite exibirá no terminal o endereço para acessar a aplicação.

## Testes

Os testes do backend utilizam Pytest.

Dentro da pasta `backend`:

``` bash
python -m pytest -v
```

Atualmente, o projeto possui testes para:

-   consulta de clima;
-   cidade não encontrada;
-   indisponibilidade do serviço de clima.

## API

A aplicação possui uma rota principal:

``` text
GET /weather/{nome_local}
```

Exemplo:

``` text
GET /weather/Fortaleza
```

Resposta:

``` json
{
  "cidade": "Fortaleza",
  "pais": "Brasil",
  "estado": "Ceará",
  "temperatura": 30.9,
  "umidade": 52,
  "velocidade_vento": 20.3
}
```

## Próximos passos

-   Adicionar condições climáticas e ícones
-   Melhorar alguns detalhes da interface
-   Deploy da aplicação
