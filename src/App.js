import { useEffect, useState } from "react"
import Coin from './img/€-sen-fondo.png'
import people from './img/xente-sen-fondo.png'
import Aportacion from "./compoñentes/Aportacion"

function App() {

  const [Total, setTotal] = useState(0)
  const [Participantes, setParticipantes] = useState(2)
  const [ResultadoOperacion, setResultadoOperacion] = useState(0)
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

  useEffect(()=>{
    let ResultadoOperacion = Total / Participantes
    setResultadoOperacion(ResultadoOperacion)
  },
  [Total, Participantes]
  )

  useEffect(
    () => {
      const NovoNumeroUsuarios = []
      let contador = 0
      while (contador < Participantes) {
        NovoNumeroUsuarios.push(<Aportacion
          resultado={ResultadoOperacion}
          key={contador++}/>)        
      }
      setUsuarios(NovoNumeroUsuarios)
    },
    [Participantes, ResultadoOperacion]
  )

  return (
    <main>
      <label className="InputImporte">
        <img src={Coin} alt='Icono-Persoa' />
        <input type='number' value={Total} onInput={TotalImporte} />
      </label>
      <label className="InputPersoas">
        <img src={people} alt='Icono-Persoa' />
        <input type='range' min={2} max={20} value={Participantes} list="number" onInput={TotalParticipantes} />
      </label>
      {Usuarios}
    </main>
  );
}

export default App;