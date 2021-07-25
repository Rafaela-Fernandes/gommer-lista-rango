import styled from 'styled-components';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
	root: {
		backgroundColor: '#FFF',
		borderRadius: '45px',
		boxShadow: '0px 2px 4px #00000029',
		opacity: '1',
		height: ' 40px',
		width: '100%',

		'& button:nth-child(1)': {
			borderRadius: '45px 0px 0px 45px;',
			textTransform: 'initial',
			fontFamily: 'Montserrat',
			fontWeight: '600',
			fontSize: '16px',
			color: '#404040',
			borderRight: 'none !important',
			width: '260px',

			'&:hover': {
				backgroundColor: '#FFF',
			},
			'@media screen and (max-width:700px)': {
				fontSize: '14px',
			},
		},
		'& button:nth-child(2)': {
			backgroundColor: '#FBFBFB',
			borderRadius: '0px 45px 45px 0px;',
			transition: 'none',
			cursor: 'text',
			'& button:nth-child(2)': {
				cursor: 'pointer',
			},
			'& .MuiInputBase-root ': {
				width: '560px',
				paddingLeft: '5px',
			},
			'& .MuiTouchRipple-root ': {
				display: 'none',
			},
		},
	},
});
