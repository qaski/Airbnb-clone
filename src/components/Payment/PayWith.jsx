import React from 'react'
import style from './PayWith.css'




export const PayWith = () => {
  return (
    
     <form  accion="" id ="formulario-tarjeta" class="formulario-tarjeta"> 
     <div class="grupo" > 
    
     <input type="text"  placeholder='Numero de tarjerta' id="inputNumero" maxLength={"19"} autoComplete="off" />

              </div>

                     <div class="flexbox">
                     <div class="grupo-caducidad">
                     <input type="text"   placeholder='Caducidad' id="inputNumero" maxLength={"19"} autoComplete="off" />
                    </div>
             </div>


             <div class="flexbox">
                     <div class="grupo cvv">
                     <input type="text"   placeholder='Codigo CVV' id="inputNumero" maxLength={"19"} autoComplete="off" />
                    </div>
             </div>

  
             <div class="flexbox">
                     <div class="grupo CP">
                     <input type="text"   placeholder='Codigo Postal' id="inputNumero" maxLength={"19"} autoComplete="off" />
                    </div>
             </div>


             <div class="flexbox">
                     <div class="Grupo-selec" id="selectPais-Regio">
                    
                     <select name="Pais-Region" id="selectPais-Regio">
                      <option disabled selected>Pais/Regio</option>
                     </select>
                    

                    </div>
                    
             </div>
             <button type='submit' class="btn-confirma-paga">Confirma y paga </button>
    <h6>Ingrese cupon</h6>
   
       </form>
    
  )

}
 