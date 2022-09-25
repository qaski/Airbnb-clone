import React from 'react';
import Modal from './components/Modal';
import styled from 'styled-components';


function prueva(params) {
  
}


const App = () => {
	return (
		<div>
			<ContenedorBotones>
				<Boton>☍ Filtros</Boton>
			</ContenedorBotones>
			<Modal />
		</div>
	);
}



const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Boton = styled.button`
	display: block;
	padding: 15px 25px;
	border-radius: 10px;
	color: #000000;
	border: none;
	background: #ffffff;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;

	&:hover {
		background: #0066FF;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}

	p {
		font-size: 18px;
		margin-bottom: 20px;
	}

	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;

export default App;
