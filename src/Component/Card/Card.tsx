import React from 'react';
import Box from '@material-ui/core/Box';
import { useStyles } from './Card.styles';
import Paper from '@material-ui/core/Paper';
type CardProps = {
	widthBox?: string;
	src: string;
	children: JSX.Element;
	width?: string;
	height?: string;
	elevation?: number;
	directionColumn?: boolean;
};
const Card = ({
	widthBox = 'auto',
	src,
	children,
	width = '100px',
	height = '100px',
	elevation = 3,
	directionColumn = false,
}: CardProps): JSX.Element => {
	const classes = useStyles(directionColumn);
	return (
		<Paper
			className={classes.boxCard}
			width={widthBox}
			component={Box}
			elevation={elevation}
		>
			<Box component="img" src={src} width={width} height={height} />
			<Box>{children}</Box>
		</Paper>
	);
};
export default Card;
