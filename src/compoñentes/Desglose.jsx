import IconoPersoa from './Icono-persoa.png'
import { useEffect, useState } from "react";
import Saldo from './Saldo.jsx'


function Desglose(props) {

  const [Aportacion, setAportacion] = useState()
  const [Nome, setNome] = useState()
  const [ResultadoOperacion, setResultadoOperacion] = useState()

  useEffect(() => {
    let NovoResultadoOperacion
    setResultadoOperacion(NovoResultadoOperacion)
  },
    [Aportacion, props]
  )

  function AportacionPorPersoa(evento) {
    const NovaAportacion = parseFloat(evento.target.value)
    setAportacion(NovaAportacion)
  }

  function NomePersoa() {
    setNome(Nome)
  }

  function TotalAPagar(props) {
    const PagoPorPersoa = Aportacion - props.Total
  }


  return (
    <>
      <div className="container card">
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
            <Saldo />
          </div>
        </div>
      </div>
    </>
  );
}

export default Desglose;