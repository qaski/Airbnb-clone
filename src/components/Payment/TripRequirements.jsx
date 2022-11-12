import React, { useState } from "react";
import "./TripRequirements.css";

const TripRequirements = () => {
  const [display, setDisplay] = useState('none')
  const handleModal = () => {
    setDisplay('block')
  };

  const handleClose = () => {
    setDisplay('none')
  }
  const [display2, setDisplay2] = useState('none')
  const handleModal2 = () => {
    setDisplay2('block')
  };

  const handleClose2 = () => {
    setDisplay2('none')
  }
  return (
    <div>
      <h3>Informacion requerida para tu viaje </h3>

      <div className="d-flex align-items-center">
        <div className="mr-4">
          <span>Envía un mensaje al anfitrión </span>
          <p> Cuéntale al anfitrión por qué viajas y cuándo llegas. </p>
        </div>
        <button onClick={handleModal} id="myBtn">
        Agregar
        </button>
      </div>

      <div style={{display}} id="modal" class="modal-container">
        <div class="modal-content">
          <span class="close" onClick={handleClose}>&times;</span>
          <h4 className="text-center">Mensaje al anfitrión </h4>
          <p>Mensaje al anfitrión</p>
          <p>Cuéntale al anfitrión por qué viajas y cuándo llegas.</p>
          <textarea name="area" cols="30" rows="10"></textarea>
          <button  >Guardar</button>

        </div>
      </div>

 




      <div className="d-flex align-items-center">
        <div className="mr-4">
          <span>Foto de perfil</span>
          <p> Cuéntale al anfitrión por qué viajas y cuándo llegas. </p>
        </div>
        <button onClick={handleModal2} id="myBtn">
        Agregar
        </button>
      </div>

      <div style={{display:display2}} id="modal" class="modal-container">
        <div class="modal-content">
          <span class="close" onClick={handleClose2}>&times;</span>
          <p></p>
        </div>
      </div>

   

<div id="openModal" class="modalDialog">
	<div>
		<a href="#close" title="Close" class="close">X</a>
	
		<p>Te ofrecemos este descuento porque tu reserva es de 5 días.</p>
		
	</div>
</div>



<div id="openModal1" class="modalDialog">
	<div>
		<a href="#close" title="Close" class="close">X</a>
	
		<p>Tarifa única que cobra el anfitrión para cubrir lo gastos relacionados con la limpieza del espacio. </p>
		
	</div>
</div>




<div id="openModal2" class="modalDialog">
	<div>
		<a href="#close" title="Close" class="close">X</a>
	
		<p>Esto nos permite cubrir los gastos de nuestra plataforma y ofrecer servicios como el de asistencia 24/7 al huésped. </p>
		
	</div>
</div>




      <h2> Política de cancelación </h2>

      

      <p>
        {" "}
        Cancelación gratuita por 48 horas. Si cancelas antes del 8 ene.,
        recibirás un reembolso parcial.
      <a href="https://www.airbnb.com.co/help/article/149/">Más información</a>
      </p>
     
    </div>
  );
};
export default TripRequirements;
