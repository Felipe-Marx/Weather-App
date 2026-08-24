from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_weather():
    response = client.get("/weather/Fortaleza")
    assert response.status_code == 200
    dados = response.json()
    assert "cidade" in dados
    assert "pais" in dados
    assert "estado" in dados
    assert "temperatura" in dados
    assert "umidade" in dados
    assert "velocidade_vento" in dados

def test_weather_city_not_found():
    response = client.get("/weather/aaaaaaaa")
    assert response.status_code == 404
    assert response.json() == {
        "detail": "City not found"
    }