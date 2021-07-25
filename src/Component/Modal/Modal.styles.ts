import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
	paper: {
		'& .MuiDialog-paper': {
			background: 'transparent !important',
			boxShadow: 'none',
			padding: '0 22px',
			maxWidth: '641px',
		},
	},
	boxModal: {
		background: '#FFF',
		margin: '50px 0',
		borderRadius: '4px',
		boxShadow:
			'0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%)',
	},
	btnClose: {
		position: 'absolute',
		backgroundColor: '#FFF',
		padding: '2px',
		right: '6px',
		top: '20px',
		width: '45px',
		height: '45px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		cursor: 'pointer',
		borderRadius: '50px',
		boxShadow: '0px 2px 4px #00000029',
		'& svg': {
			color: '#000000',
			fontWeight: 'bold',
		},
	},

	boxText: {
		'& p:nth-child(1)': {
			flex: 1,
		},
	},

	boxImage: {
		backgroundRepeat: 'no-repeat',
		width: 'auto',
		height: '196px',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
	},
	boxButtom: {
		justifyContent: 'space-between',
		padding: '12px 24px',
		'& button': {
			border: 'none !important',
		},
		'& button:nth-child(2)': {
			'&:hover': {
				backgroundColor: '#028b91',
			},
		},
		'& div:nth-child(1)': {
			width: '125px',
			height: '50px',
			border: ' solid #E6E6E6 1px',

			'& svg, button': {
				color: '#009CA3',
				fontWeight: 'bold',
				fontSize: '16px',
			},
		},
	},
	btnAdicionar: {
		background: '#009CA3',
		textTransform: 'capitalize',
		width: '265px',
		height: '50px',
		justifyContent: 'space-between',
	},

	dialogContent: {
		padding: '20px 24px',
	},
	'@media screen and (max-width:560px)': {
		boxText: {
			flexDirection: 'column',
			alignItems: 'end',
		},

		boxButtom: {
			flexDirection: 'column',
			'& div:nth-child(1)': {
				width: '100%',
				marginBottom: '12px',
			},
		},
		paper: {
			'& .MuiDialog-paper': {
				padding: '0',
				margin: '12px',
			},
		},
		btnAdicionar: {
			width: '100%',
		},
		boxImage: {
			height: '120px',
		},

		'& .MuiDialogContent-root': {
			padding: '0',
		},
		dialogContent: {
			padding: '0 24px',
		},
	},
});
