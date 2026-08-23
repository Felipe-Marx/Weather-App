from pydantic import BaseModel

class Clima(BaseModel):
    temperatura: float
    umidade: int
    velocidade_vento: float 