from fastapi import FastAPI
from services import buscar_cidade
app = FastAPI()

@app.get("/")
def home():
    return {"message": "Weather API"}

@app.get("/geo/{nome_local}")
def buscar_geo(nome_local:str, pais:str = None, idioma:str = "pt"):
    return buscar_cidade(nome_local, pais, idioma)