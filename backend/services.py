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
            
    except requests.exceptions.RequestException as e:
        print(f"Erro na requisição: {e}")
        return None