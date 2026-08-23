from fastapi import FastAPI
from services import buscar_cidade, buscar_clima
from models import Clima
app = FastAPI()

@app.get("/")
def home():
    return {"message": "Weather API"}

@app.get("/weather/{nome_local}", response_model=Clima)
def weather(nome_local:str):
    localização = buscar_cidade(nome_local)
    lat = localização["latitude"]
    lon = localização["longitude"]
    resultado_clima = buscar_clima(lat, lon)
    return resultado_clima