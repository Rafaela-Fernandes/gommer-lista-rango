import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
	boxCard: {
		display: 'flex',
		borderRadius: '4px',
		opacity: '1',
		alignItems: 'center',
		cursor: 'pointer',
		'@media screen and (max-width:768px)': {
			width: 'auto',
		},
		'@media screen and (max-width:560px)': {
			flexDirection: (theme) => (theme ? 'column' : 'row'),
		},
	},
}));
