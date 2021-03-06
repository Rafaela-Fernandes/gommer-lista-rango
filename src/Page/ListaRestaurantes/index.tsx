import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Text from '../../Component/Text';
import Search from '../../Component/Search';
import CardRestaurante from './Component/CardRestaurante';
import { getListaRestaurantes } from '../../Service';
const ListaRestaurantes = () => {
	const [dataRestaurante, setDataRestaurante] = useState([]);
	const [dataInicialRestaurante, setStateInitial] = useState([]);
	useEffect(() => {
		getListaRestaurantes().then((response) => {
			console.log('resp', response);
			const { data } = response;
			setDataRestaurante(data);
			setStateInitial(data);
		});
	}, []);

	return (
		<React.Fragment>
			<Grid
				item
				lg={12}
				container
				justifyContent="center"
				alignItems="center"
				my="32px"
			>
				<Text
					text="Bem-vindo ao Lista Rango"
					fontSize="24px"
					weight="900"
					tag="h2"
				/>
			</Grid>
			<Grid item lg={12} container justifyContent="center" alignItems="center">
				<Search
					setDataRestaurante={setDataRestaurante}
					dataRestaurante={dataRestaurante}
					dataInicialRestaurante={dataInicialRestaurante}
				/>
			</Grid>

			<Grid
				item
				lg={12}
				container
				justifyContent="center"
				alignItems="center"
				my="46px"
			>
				<CardRestaurante dataRestaurante={dataRestaurante} />
			</Grid>
		</React.Fragment>
	);
};

export default ListaRestaurantes;

const dadosFake = [
	{
		id: 1,
		name: 'Cupcake para todos',
		address: 'Rua dos Sonhos, 310',
		hours: [
			{
				from: '09:00',
				to: '18:00',
				days: [2, 3, 4, 5, 6],
			},
			{
				from: '11:00',
				to: '20:00',
				days: [7, 1],
			},
		],
		image:
			'https://images.unsplash.com/photo-1525640788966-69bdb028aa73?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d53c30ba55d9ca863d57fabfffdb416b&auto=format&fit=crop&w=1047&q=80',
	},
	{
		id: 2,
		name: 'Comida de república',
		address: 'Rua, 890',
		hours: [
			{
				from: '12:00',
				to: '15:00',
				days: [2, 3, 4, 5, 6],
			},
			{
				from: '19:00',
				to: '23:00',
				days: [2, 3, 4, 5],
			},
			{
				from: '19:00',
				to: '02:00',
				days: [6, 7, 1],
			},
		],
		image:
			'https://images.unsplash.com/photo-1520209268518-aec60b8bb5ca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b2b04f771779f9ce281cb3e6035f360e&auto=format&fit=crop&w=884&q=80',
	},
	{
		id: 3,
		name: 'Comida de mãe',
		image:
			'https://images.unsplash.com/photo-1527756898251-203e9ce0d9c4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6571e314f2e91127c49108ecaabffdaf&auto=format&fit=crop&w=1054&q=80',
		address: 'Rua da minha casa, 417',
	},
];
