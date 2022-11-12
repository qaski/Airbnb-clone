import React from 'react'
import style from './Details.module.css'

const Details = () => {
  return (

    <div className={style.container}>
      <section className={style.travelDetail}>
        <img src="https://a0.muscache.com/im/pictures/00adf705-3791-40e9-8512-ca5a7d619c11.jpg?aki_policy=large"
          alt='travel' />

        <div className={style.travelDescription}>
          <small>Yurta</small>
          < h3>Yurtas de jardín forestal</h3>
          <div>
            <p>4.90  (103 reseñas) <p> Superanfitrión </p></p>
          </div>
        </div>
      </section>

      
      <p className={style.lineaDivide}>Tu reservación cuenta con la protección de AirCover</p>
      <section className={style.priceInformation}>
        <h3 >Información del precio</h3>
        <p> <span className= {style.priceLene}>$439,048.09 COP x 2 noches </span> $878,096.18 COP </p>

        <p> <span className= {style.priceLene}>  <a href="#openModal">Descuento por estadia larga</a>  </span> $-151.06COP </p>
        <p> <span className= {style.priceLene}>  <a href="#openModal1">Tarifa de limpieza </a>   </span>        $288,263.90 COP  </p>
        <p> <span className= {style.priceLene}> <a href="#openModal2">Tarifa por servicio </a>   </span>      $288,263.90 COP</p>
        
      </section>
      <p className={style.totalPrice}>Total (COP)  <span className= {style.priceLene}> $1,400,696.46 </span></p>
               </div>

  )
}
export default Details