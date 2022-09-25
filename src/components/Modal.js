import React from 'react';
import styled from 'styled-components';
import image from "./img.jpg";


const Modal = () => {
    return(
        <>
            <Overlay>
                <ContenedorModal>
                    <BotonCerrar>x</BotonCerrar>
                    <EncabezadoModal>
                        
                        <h3>Filtros</h3>
                    </EncabezadoModal>
                    
                    <img src={image} />
                                 
                </ContenedorModal>
            </Overlay>
        </>
    )
}

export default Modal;

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContenedorModal =styled.div`
    width: 780px;
    min-height: 830px;
    background: #fff;
    position: relative;
    border-radius: 13px;
    box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;
    padding: 20px;

`;
const img = styled.div`

`;

const EncabezadoModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    marging-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #EBE8E8;
    

    h3{
        font-weight: 500px;
        font-size: 16px;
        color: #000000;
 
    }
`;

const BotonCerrar = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    
    justify-content: center;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 15px;
    color: #000000;

    &:hover{
        background: #f2f2f2;
    }
`;