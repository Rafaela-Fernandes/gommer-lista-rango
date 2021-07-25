import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import { getRestaurante } from '../../Service';
import Card from '../../Component/Card';
import Box from '@material-ui/core/Box';
import Search from '../../Component/Search';
import AcordionMenu from './Component/Acordion/AcordionMenu';
import Text from '../../Component/Text';

const Restaurantes = (props: any) => {
	const history = useHistory<any>();
	const widthPage = window.innerWidth <= 560;
	const { id, name, url } = history.location.state;
	const [dataMenuRestaurante, setMenuRestaurante] = useState([]);

	useEffect(() => {
		getRestaurante(id).then((response) => {
			const { data } = response;
			setMenuRestaurante(data);
		});
	}, []);

	return (
		<Grid container px="16px">
			<Grid item lg={12}>
				<Card
					widthBox="500px"
					elevation={0}
					width="145px"
					height="145px"
					src={url}
					directionColumn={true}
				>
					<Box
						ml="20px"
						height="145px"
						mt="20px"
						style={{ textAlign: widthPage ? 'center' : 'initial' }}
					>
						<Text text={name} weight="600" tag="h4" fontSize="24px" />
						<Text
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
							fontSize="16px"
						/>

						<Text text="Segunda à Sexta: 11:30 às 15:00" />
						<Text text="Sabado e Domingo à Sexta: 11:30 às 15:00" />
					</Box>
				</Card>
			</Grid>
			<Grid
				item
				lg={12}
				container
				justifyContent="end"
				alignItems="center"
				mt="32px"
			>
				<Search
					setDataRestaurante={() => {}}
					dataRestaurante={[]}
					dataInicialRestaurante={[]}
					text="Buscar no cardápio"
				/>
			</Grid>

			<Grid item xs={12} sm={12} md={8} lg={6} mt="40px">
				<AcordionMenu dataMenuRestaurante={dataMenuRestaurante} />
			</Grid>
		</Grid>
	);
};

export default Restaurantes;
