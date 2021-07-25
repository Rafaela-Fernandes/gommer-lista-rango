import React from 'react';
import Box from '@material-ui/core/Box';
import { useStyles } from './Header.styles';

const Header = (): JSX.Element => {
	const classes = useStyles();
	return <Box className={classes.root} />;
};
export default Header;
