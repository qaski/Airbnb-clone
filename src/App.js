import React, {useState} from 'react';
import Modal from './components/Modal';
import styled from 'styled-components';


const App = () => {
	const [estadoModal1, cambiarEstadoModal1] = useState(false);
	return (
		<div>
			<ContenedorBotones>
				<Boton onClick={() => cambiarEstadoModal1(!estadoModal1)}>☍ Filtros</Boton>
			</ContenedorBotones>
			<Modal
				estado={estadoModal1}
				cambiarEstado={cambiarEstadoModal1}
				posicionModal={'center'}
			>
				<Contenido>
					<h1>Tipo de alojamiento</h1>
					<BotonFiltrar>Mostrar Alojamientos</BotonFiltrar>
				</Contenido>
			</Modal>
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

const BotonFiltrar = styled.button`
	display: block;
	position: absolute;
	bottom: 15px
    right: 15px;
	padding: 15px 25px;
	border-radius: 10px;
	color: #FFFFFF;
	border: none;
	background: #2E2E2E;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;

	&:hover {
		background: #151515;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		font-size: 32px;
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
