import React, { Component, useEffect } from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import 'react-datepicker/dist/react-datepicker.css'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value=>{
                   const {id, company, img, info, price, title, inCart} = value.detailProduct; 
                   return(
                       <div className="container py-5">
                           {/*title*/}
                            <div className="row>">
                                <div className="col-12 mx-auto text-left text-slanted text-black my-3">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/*end of title*/}
                            {/*product info*/}
                            <div className="row">
                            <div className="col-6">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>
                                <div className="col-3">
                                    <img src={img} className="img-fluid" alt="product" />
                                    <div className="row">
                                    <div className="col-12">
                                    <img src={img} className="img-fluid" alt="product" />
                                    </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <img src={img} className="img-fluid" alt="product" />
                                    <div className="row">
                                    <div className="col-12">
                                    <img src={img} className="img-fluid" alt="product" />
                                    </div>
                                    </div>
                                </div>
                            </div>
                            {/*product text*/}
                            <div className="row">
                                <div className="col-12 mx-auto text-uppercase">
                                    <h2>model:{title}</h2>
                                    </div>
                                <div className="row">
                                    <div className='col'>
                                    <h4 className="text-title text-muted mx-auto">
                                        made by: <span className="text-uppercase">{company}</span>
                                    </h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-9">
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                            some info about product
                                    </p>
                                    </div>
                                    <p className="col-9 text-muted lead">
                                        {info}
                                    </p>
                                    {/*buttons*/}
                                    <div className="col-3 card">
                                    <div class="card-body">
                                    <h4 className="text-black">
                                        <strong>
                                            Price : <span>$</span>{price}
                                        </strong>
                                    </h4>
                                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div class="card">
                                    <ul className="row list-group list-group-flush">
                                        <li class="col list-group-item">Llegada</li>
                                        <li class="col list-group-item">Salida</li>
                                        <li class="col list-group-item">Huespedes</li>
                                    </ul>
                                    </div>
                                    <a href="#" class="btn btn-primary" type="button">Reservar</a>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col">
                                       <Link to="/">
                                           <ButtonContainer>
                                               back to products
                                           </ButtonContainer>
                                        </Link>
                                            <ButtonContainer cart disabled={inCart ? true : false}
                                                onClick={() => {
                                                    value.addToCart(id);
                                                    value.openModal(id);
                                                }}>
                                               {inCart ? "inCart" : "add to cart"}
                                            </ButtonContainer>
                                </div>
                                </div>
                                <div className="col">
                                <h3 className="mx-auto py-5">
                                    Calendario
                                </h3>
                                </div>
                                </div>  
                                </div>
                            </div>
                        
                       
                   ); 
                }}
            </ProductConsumer>
        )
    }  
}
