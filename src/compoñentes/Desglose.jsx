import IconoPersoa from './Icono-persoa.png'
import { useState } from "react";
import Saldo from './Saldo.jsx'


function Desglose(props) {


  return (
    <>
      <div className="container card">
        <div className="row card-body">
          <div className="col-sm">
            <img src={IconoPersoa} alt='Icono-Persoa'/>
          </div>
          <div className="col-sm">
            <input type="text" placeholder="Nome" />
          </div>
          <div className="col-sm">
            <input type='text' placeholder="aportación" />
          </div>
          <div className="col-sm">
            <Saldo/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Desglose;