import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logos from '../logos.svg';
import styled from 'styled-components';


export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
               <Link to='/'>
                  <img style={{ width: 200, height: 200 }} src={logos} alt="store" className="navbar-brand" />
               </Link> 
               <ul className="navbar-nav align-items-center">
                 <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                       Airnbn
                    </Link>
                 </li>
               </ul>
               <Link to="/cart" className="ml-auto">
                  
               </Link>
            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3 rem;
    text-transform:capitalize;
}
`;
