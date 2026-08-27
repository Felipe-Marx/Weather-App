import React, { useState } from 'react'
import './App.css'

interface Clima  {
    cidade: string
    pais: string
    estado: string
    temperatura: number
    umidade: number
    velocidade_vento: number
  }

function App() {
  const [cidade, setCidade] = useState("")

  const [clima, setClima] = useState<Clima | null>(null)

  const [erro, setErro] = useState<string | null>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCidade(event.target.value)
  }

  const handleClick = async () => {
    try {
      const resposta = await fetch(`http://127.0.0.1:8000/weather/${cidade}`)
      const dados = await resposta.json()
      
      if (!resposta.ok){
          setErro(dados.detail)
          setClima(null)
        }
      else {
          setClima(dados)
          setErro(null)
    }} catch(error) {
          setErro("Falha na requisição")
          setClima(null)
        }
  }
  
  return (
    <>
        <div>
          <h1>Weather App</h1>
          <input 
          type="text" 
          value={cidade}
          onChange={handleChange}
          />
          <button onClick={handleClick}>Buscar</button>
          {clima && (
            <div>
              <p>Cidade: {clima.cidade}</p>
              <p>País: {clima.pais}</p>
              <p>Estado: {clima.estado}</p>
              <p>Temperatura: {clima.temperatura}</p>
              <p>Umidade: {clima.umidade}</p>
              <p>Velocidade do vento: {clima.velocidade_vento}</p>
              </div>
          )}
          { erro && (
            <div>
              <p>Erro: {erro}</p>
            </div>
          )}
        </div>
    </>
  )
}

export default App
