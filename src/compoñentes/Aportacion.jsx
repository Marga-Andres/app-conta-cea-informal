import IconoPersoa from './Icono-persoa.png'
import { useEffect, useState } from "react";
import Saldo from './Saldo.jsx'


function Aportacion({ResultadoConta}) {

  const [Aportacion, setAportacion] = useState()
  const [Nome, setNome] = useState()
  const [ResultadoOperacion, setResultadoOperacion] = useState()

  useEffect(() => {
    let NovoResultadoOperacion
    setResultadoOperacion(NovoResultadoOperacion)
  },
    [Aportacion, ResultadoConta]
  )

  function AportacionPorPersoa(evento) {
    const novaAportacion = evento.target.value
    const valorAportacion = parseFloat(novaAportacion)
    setAportacion(valorAportacion)
  }

  function NomePersoa() {
    setNome(Nome.target.value)
  }

  function TotalAPagar(props) {
    const PagoPorPersoa = Aportacion - ResultadoConta
    setResultadoOperacion(PagoPorPersoa)
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
            <Saldo onInput={TotalAPagar} readonly/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aportacion;