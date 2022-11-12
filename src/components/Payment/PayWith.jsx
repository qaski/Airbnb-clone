import React, { useEffect, useState } from 'react'

import style from './PayWith.css'




export const PayWith = ({children}) => {

       const [ contries, setCountries ] = useState([])
       const getContries =  async() => {
           const response = await fetch('https://restcountries.com/v3.1/all')
           const json = await response.json()
           const responseCountries = []

           json.forEach(country =>  {
              responseCountries.push(country.name.common)     
           }) 
           responseCountries.sort()
           setCountries(responseCountries)
       }
       useEffect(()=> {
              getContries()
       }, [])  

  return (

       
    
     <form  accion="" id ="formulario-tarjeta" class="formulario-tarjeta ml-5"> 
     <div class="grupo" >     
     
     
     
     <input id="tarjeta" type="number" maxLength={5} required pattern="[0-9\s]"    placeholder="Numero de tarjeta" />
     
              </div>


                     <div class="flexbox">
                     <div class="grupo-caducidad">
                     <input id="caducidad" type="number"    required pattern="[0-9\s]{4}" autocomplete="cc-number" placeholder="Caducidad" />

                    </div>
             </div>

             <div class="flexbox">
                     <div class="grupo cvv">
                     <input id="cvv" type="number"   required pattern="[0-9\s]{3}"  maxlength="3" placeholder="CVV" />


                    </div>
             </div>

  
             <div class="flexbox">
                     <div class="grupo CP">
                     <input type="number" required  placeholder='Codigo Postal' id="inputNumero" maxLength={"19"} autoComplete="off" />
                    </div>
             </div>


             <div class="flexbox">
                     <div class="Grupo-selec" id="selectPais-Regio">
                    
                     <select  >
                            {contries.map(country => <option key={country} value={country}> {country}</option> )   }   
                         
                     </select>
                    

                    </div>                

                    
             </div>
              {children}

             <button type='submit' class="btn-confirma-paga">Confirma y paga </button>

    
       </form>
   

  )

}
 