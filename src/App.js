import { useEffect, useState } from "react"
import Coin from './img/€-sen-fondo.png'
import people from './img/xente-sen-fondo.png'
import Desglose from "./compoñentes/Desglose"



function App() {

  const [Importe, setImporte] = useState()
  const [NumeroPersoas, setNumeroPersoas] = useState()
  const [Usuarios, setUsuarios] = useState([])

  useEffect(
    () => {
      const NovoNumeroUsuarios = []
      let contador = 0
      while (contador < NumeroPersoas) {
        NovoNumeroUsuarios.push(<Desglose/>)
        contador++
      }
      setUsuarios(NovoNumeroUsuarios)
    },
    []
  )


  function TotalImporte(evento) {
    const novoImporte = evento.target.value
    const ValorImporte = parseFloat(novoImporte)
    setImporte(ValorImporte)
  }

  function TotalPersoas(evento) {
    const novoPersoas = evento.target.value
    const ValorPersoas = parseInt(novoPersoas)
    setNumeroPersoas(ValorPersoas)
  }

  return (
    <>
      <label>
        <img src={Coin} alt='Icono-Persoa' />
        <input value={Importe} onInput={TotalImporte} />
      </label>
      <label>
        <img src={people} alt='Icono-Persoa' />
        <input value={NumeroPersoas} onInput={TotalPersoas} />
      </label>
      <button />

      {Usuarios}

    </>
  );
}

export default App;
