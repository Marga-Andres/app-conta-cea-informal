import { useEffect, useState } from "react"
import Coin from './img/€-sen-fondo.png'
import people from './img/xente-sen-fondo.png'
import Aportacion from "./compoñentes/Aportacion"

function App() {

  const [Total, setTotal] = useState()
  const [Participantes, setParticipantes] = useState()
  const [ResultadoOperacion, setResultadoOperacion] = useState()
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
    [Usuarios]
  )



  return (
    <>
      <label>
        <img src={Coin} alt='Icono-Persoa' />
        <input type='number' value={Total} onInput={TotalImporte} />
      </label>
      <label>
        <img src={people} alt='Icono-Persoa' />
        <input type='number' value={Participantes} list="number" onInput={TotalParticipantes} />
      </label>
      {Usuarios}
    </>
  );
}

export default App;