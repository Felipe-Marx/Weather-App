from pydantic import BaseModel

class Clima(BaseModel):
    cidade: str
    pais: str
    estado: str
    temperatura: float
    umidade: int
    velocidade_vento: float 