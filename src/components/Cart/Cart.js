import React, { Component } from 'react'

import Details from '../Payment/Details';
import { PayWith } from '../Payment/PayWith';
import TripDetails from '../Payment/TripDetails';

export default class Store extends Component {
    render() {
        return (
           < React.Fragment > 
           <Fetch/>
            <Details />
           
            <TripDetails/>
            <PayWith /> 
            </React.Fragment>
            
        );
    }
}
