# Weather API

Uma API REST desenvolvida em Python com FastAPI para consultar informações meteorológicas de uma cidade.

A aplicação utiliza a API da Open-Meteo para localizar a cidade e obter os dados meteorológicos atuais.

## Tecnologias

- Python
- FastAPI
- Pydantic
- Requests
- Pytest

## Funcionalidades

- Buscar informações meteorológicas por cidade
- Obter temperatura atual
- Obter umidade relativa do ar
- Obter velocidade do vento
- Identificar cidade, estado e país
- Tratamento de cidades não encontradas
- Tratamento de indisponibilidade do serviço externo
- Testes automatizados

## Estrutura do projeto

```text
weather-app/
├── backend/
│   ├── main.py
│   ├── models.py
│   ├── services.py
│   └── tests/
│       └── test_main.py
│
├── .gitignore
├── requirements.txt
└── README.md
```

## Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/Felipe-Marx/Weather-App
cd Weather-app
```

### 2. Instale as dependências

```bash
pip install -r requirements.txt
```

### 3. Execute a API

Entre na pasta `backend`:

```bash
cd backend
```

Execute:

```bash
uvicorn main:app --reload
```

A API estará disponível em:

```text
http://127.0.0.1:8000
```

A documentação interativa pode ser acessada em:

```text
http://127.0.0.1:8000/docs
```

## Endpoint

### Consultar clima

```http
GET /weather/{nome_local}
```

Exemplo:

```http
GET /weather/Fortaleza
```

Resposta:

```json
{
    "cidade": "Fortaleza",
    "pais": "Brazil",
    "estado": "Ceará",
    "temperatura": 28.5,
    "umidade": 73,
    "velocidade_vento": 14.2
}
```

Os valores meteorológicos variam de acordo com as condições atuais.

## Tratamento de erros

| Status | Descrição |
|---|---|
| `200` | Consulta realizada com sucesso |
| `404` | Cidade não encontrada |
| `503` | Serviço meteorológico indisponível |

## Testes

Os testes foram desenvolvidos utilizando Pytest.

Para executar:

```bash
pytest
```

Atualmente são testados:

- Consulta bem-sucedida
- Cidade inexistente
- Indisponibilidade da API externa

## API externa

Os dados meteorológicos são obtidos através da [Open-Meteo](https://open-meteo.com/).
