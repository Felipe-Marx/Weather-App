from fastapi import HTTPException
import requests

def buscar_cidade(nome_local:str, pais:str = None, idioma:str = "pt"):
    base_url = "https://geocoding-api.open-meteo.com/v1/search"
    
    params = {
            "name": nome_local,
            "language": idioma,
            "count": 5
        }

    if pais:
        params["name"] += f",{pais}"
    
    try:
        response = requests.get(base_url, params=params, timeout=5)
        response.raise_for_status()
        dados = response.json()
    
        if "results" in dados and dados["results"] :
            resultado = {
                "name": dados["results"][0]["name"],
                "country": dados["results"][0]["country"],
                "state": dados["results"][0]["admin1"],
                "latitude": dados["results"][0]["latitude"],
                "longitude": dados["results"][0]["longitude"]
            }
    
            return resultado
        else:
            raise HTTPException(status_code=404, detail="City not found")
            
    except requests.exceptions.RequestException:
        raise HTTPException(status_code=503, detail="Weather service unavailable")

def buscar_clima(lat:float, lon:float):
    params = {
        "latitude": lat,
        "longitude": lon,
        "current":"temperature_2m,relative_humidity_2m,wind_speed_10m",
        'temperature_unit': 'celsius',
        'windspeed_unit': 'kmh',
        'timezone': 'auto'
    }

    base_url = "https://api.open-meteo.com/v1/forecast"

    try:
        response = requests.get(base_url, params=params, timeout=5)
        response.raise_for_status()
        dados = response.json()
        print(dados)

        current = dados.get("current", {})

        temperatura = current.get("temperature_2m")
        umidade = current.get('relative_humidity_2m')
        velocidade_vento = current.get('wind_speed_10m')
        return {
            "temperatura": temperatura,
            "umidade": umidade,
            "velocidade_vento": velocidade_vento
        }

    except requests.exceptions.RequestException:
        raise HTTPException(status_code=503, detail="Weather service unavailable")