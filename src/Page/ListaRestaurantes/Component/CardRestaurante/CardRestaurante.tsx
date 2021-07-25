import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import { useStyles } from './CardRestaurante.styles';
import Avatar from '@material-ui/core/Avatar';

import Card from '../../../../Component/Card';
import { useHistory } from 'react-router-dom';
import Text from '../../../../Component/Text';
type CardRestauranteProps = {
	dataRestaurante: Array<any>;
};
const CardRestaurante = ({ dataRestaurante }: CardRestauranteProps) => {
	const [date, setDate] = useState('');
	const [day, setDay] = useState(0);
	const history = useHistory();

	useEffect(() => {
		timeStatus(setDay, setDate);
	}, [date]);

	const handleRequest = (name: any, id: any, url: any) => {
		history.push({
			pathname: `restaurants/${id}/menu`,
			state: { name: name, id: id, url: url },
		});
	};
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			{dataRestaurante?.map((item) => {
				const { id, name, address, image, hours } = item;
				const status = hours ? statusOpen(hours, date, day) : false;

				return (
					<Box
						className={classes.link}
						onClick={() => {
							handleRequest(name, id, image);
						}}
					>
						{status && (
							<Avatar
								className={
									status.includes(true) ? classes.boxOpen : classes.boxClosed
								}
							>
								{status.includes(true) ? 'Aberto Agora' : 'Fechado'}
							</Avatar>
						)}

						<Card widthBox="367px" src={image}>
							<Box className={classes.boxText}>
								<Text text={name} fontSize="16px" weight="600" />
								<Text text={address} />
							</Box>
						</Card>
					</Box>
				);
			})}
		</Box>
	);
};
export default CardRestaurante;

const timeStatus = (setDay: Function, setDate: Function) => {
	setInterval(() => {
		const data = new Date();
		const Horas = data.getHours() > 9 ? data.getHours() : '0' + data.getHours();
		const Minutes =
			data.getMinutes() > 9 ? data.getMinutes() : '0' + data.getMinutes();
		const days = data.getDay() + 1;
		const resp = `${Horas}:${Minutes}`;
		setDay(days);
		setDate(resp);
	}, 1000);
};
const statusOpen = (
	hoursData: Array<object>,
	horasAtual: any,
	daysAtual: number
) => {
	if (hoursData) {
		return hoursData?.map((item: any) => {
			let from = null;
			let to = null;
			let dayMatch = item.days.includes(daysAtual);
			if (dayMatch) {
				from = item.from;
				to = item.to;
				// let horasAtualFormat =
				// 	horasAtual[0] == 0 && horasAtual[1] == 0
				// 		? '12' + ':' + horasAtual[3] + horasAtual[4]
				// 		: horasAtual;
				if (horasAtual >= from && horasAtual <= to) {
					return true;
				}
			}
		});
	}
};
