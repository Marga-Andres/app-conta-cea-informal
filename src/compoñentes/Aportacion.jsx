import IconoPersoa from './Icono-persoa.png'
import { useEffect, useState } from "react";
import Saldo from '../componentes/Saldo/Saldo';


function Aportacion({resultado}) {

  const [Aportacion, setAportacion] = useState()
  const [Nome, setNome] = useState()
  const [ContaOperacion, setContaOperacion] = useState()

  useEffect(() => {
    let ContaOperacion = Aportacion - resultado
    setContaOperacion(ContaOperacion)
  },
    [Aportacion, resultado]
  )

  function AportacionPorPersoa(evento) {
    const novaAportacion = evento.target.value
    const valorAportacion = parseFloat(novaAportacion)
    setAportacion(valorAportacion)
  }

  function NomePersoa(Nome) {
    setNome(Nome.target.value)
  }

  return (
    <>
      <div className="container-sm card">
        <div className="row card-body">
          <div className="col-sm">
            <img src={IconoPersoa} alt='Icono-Persoa' />
          </div>
          <div className="col-sm">
            <label>
              <input type="text" placeholder="Nome" value={Nome} onInput={NomePersoa}/>
            </label>
          </div>
          <div className="col-sm">
            <label>
              <input type='text' placeholder="aportación" value={Aportacion} onInput={AportacionPorPersoa} />
            </label>
          </div>
          <div className="col-sm">
            <Saldo saldo={ContaOperacion}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aportacion;