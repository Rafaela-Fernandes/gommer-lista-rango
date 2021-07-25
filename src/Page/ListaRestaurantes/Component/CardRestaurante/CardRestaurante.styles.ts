import { makeStyles } from '@material-ui/styles';

import { Theme, createStyles, useTheme } from '@material-ui/core/styles';

export const useStyles = makeStyles({
	root: {
		display: 'flex',
		gap: '48px',
		flexWrap: 'wrap',
		width: '1200px',
	},

	link: {
		cursor: 'pointer',
		position: 'relative',
	},

	boxOpen: {
		backgroundColor: '#2B0D61',
		position: 'absolute',
		width: '48px',
		height: '48px',
		fontSize: '8px',
		fontWeight: 'bold',
		textAlign: 'center',
		right: '-11px',
		bottom: '75px',
	},
	boxClosed: {
		backgroundColor: '#B5ABD4',
		position: 'absolute',
		width: '48px',
		height: '48px',
		fontSize: '8px',
		fontWeight: 'bold',
		textAlign: 'center',
		right: '-11px',
		bottom: '75px',
	},

	boxText: {
		padding: '0 12px',
	},

	'@media screen and (max-width:768px)': {
		root: {
			width: '100%',
			gap: '34px',
			margin: '0 22px',
		},
		boxCard: {
			width: '100%',
		},
		link: {
			width: '100%',
		},
	},
});
