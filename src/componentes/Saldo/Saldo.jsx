
import DebenCartos from "./Debenche-Cartos"
import DebesCartos from "./Debes-Cartos"
import IgualCero from "./Igual-A-Cero"



   



function Saldo({saldo}) {
   


   return(
    <>
    {saldo < 0 && <p>Deben cartos {saldo} <DebenCartos/></p>}
    {saldo > 0 && <p>Debes cartos {saldo} <DebesCartos/></p>}
    {saldo === 0 && <p>Igual a cero {saldo} <IgualCero/></p>}
    </>
  )

}

export default Saldo





        
        