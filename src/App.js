import { useEffect, useState } from "react"
import Coin from './img/€-sen-fondo.png'
import people from './img/xente-sen-fondo.png'
import Aportacion from "./compoñentes/Aportacion"

function App() {

  const [Total, setTotal] = useState()
  const [Participantes, setParticipantes] = useState()
  const [ResultadoConta, setResultadoConta] = useState()
  const [Usuarios, setUsuarios] = useState([])

  function TotalImporte(evento) {
    const novoImporte = evento.target.value
    const valorImporte = parseFloat(novoImporte)
    setTotal(valorImporte)
  }

  function TotalParticipantes(evento) {
    const novoParticipantes = evento.target.value
    const valorParticipantes = parseInt(novoParticipantes)
    setParticipantes(valorParticipantes)
  }

  function Operacion() {
    const NovoValor = Total / Participantes
    setResultadoConta(NovoValor)
  }

  useEffect(
    () => {
      const NovoNumeroUsuarios = []
      let contador = 0
      while (contador < Participantes) {
        NovoNumeroUsuarios.push(<Aportacion key={contador++}/>)
        contador++
      }
      setUsuarios(NovoNumeroUsuarios)
    },
    [Participantes]
  )

  return (
    <>
      <label>
        <img src={Coin} alt='Icono-Persoa' />
        <input type='number' value={Total} onInput={TotalImporte} />
      </label>
      <label>
        <img src={people} alt='Icono-Persoa' />
        <input type='range' min={2} max={20} value={Participantes} list="number" onInput={TotalParticipantes} />
        <output>{Participantes}</output>
      </label>
      <button value={ResultadoConta} onClick={Operacion}>
        Calcular
      </button>
      {Usuarios}
    </>
  );
}

export default App;
