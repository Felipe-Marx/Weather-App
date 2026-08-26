from fastapi import FastAPI
from services import buscar_cidade, buscar_clima
from models import Clima
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Weather API"}


@app.get("/weather/{nome_local}", response_model=Clima)
def weather(nome_local:str):
    cidade = buscar_cidade(nome_local)
    lat = cidade["latitude"]
    lon = cidade["longitude"]
    resultado_clima = buscar_clima(lat, lon)
    resultado = {
        "cidade":cidade["name"],
        "pais":cidade["country"],
        "estado":cidade["state"],
        **resultado_clima
    }
    return resultado