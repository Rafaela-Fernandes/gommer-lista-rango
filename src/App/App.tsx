import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../Component/Header';
import ListaRestaurantes from '../Page/ListaRestaurantes';
import Restaurantes from '../Page/Restaurante';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = (): JSX.Element => {
	return (
		<Router>
			<Grid container>
				<Grid item container lg={12}>
					<Header />
				</Grid>
				<Switch>
					<Grid
						item
						container
						mx={{ xs: '0px', md: '30px', lg: '74px' }}
						my="40px"
					>
						<Route exact path="/">
							<ListaRestaurantes />
						</Route>
						<Route path="/restaurants/:id">
							<Restaurantes />
						</Route>
					</Grid>
				</Switch>
			</Grid>
		</Router>
	);
};

export default App;
