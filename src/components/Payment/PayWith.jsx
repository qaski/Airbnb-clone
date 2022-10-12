import React from 'react'




export const PayWith = () => {
  return (
    
     <form  accion="" id ="formulario-tarjeta" class="formulario-tarjeta"> 
     <div class="grupo" > 
    
     <input type="text"  placeholder='Numero de tarjerta' id="inputNumeo" maxLength={"19"} autoComplete="off" />

              </div>

                     <div className="flexbox">
                     <div className="grupo expira">
                     <input type="text"   placeholder='Caducidad' id="inputNumeo" maxLength={"19"} autoComplete="off" />
                    </div>
             </div>


             <div className="flexbox">
                     <div className="grupo cvv">
                     <input type="text"   placeholder='Codigo CVV' id="inputNumeo" maxLength={"19"} autoComplete="off" />
                    </div>
             </div>

  
             <div className="flexbox">
                     <div className="grupo CP">
                     <input type="text"   placeholder='Codigo Postal' id="inputNumeo" maxLength={"19"} autoComplete="off" />
                    </div>
             </div>
             <div className="flexbox">
                     <div className="Pais/Region" id="selectPais/Regio">
                    
                     <select name="Pais/Region" id="selectPais/Regio">
                      <option disabled selected>Pais/Regio</option>
                     </select>

                    </div>
             </div>
    <p>Ingrese cupon</p>
     </form>
    
  )

}
 