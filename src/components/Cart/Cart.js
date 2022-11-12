import React, { Component } from 'react'
import TripDetails from '../Payment/TripDetails';

import Details from '../Payment/Details';
import { PayWith } from '../Payment/PayWith';   
import TripRequirements from '../Payment/TripRequirements';
import { Link } from 'react-router-dom';
export default class Store extends Component {
    render() {
        return (
           < React.Fragment > 
             <Link  className="ml-5" to='/details'> < i className='fas fa-angle-left p-6' ></i>  </Link> Confirma y paga
            <Details />
         
            <TripDetails/>
            <PayWith>
                <TripRequirements />
            </PayWith> 
            </React.Fragment>
            
            
        );
    }
}
