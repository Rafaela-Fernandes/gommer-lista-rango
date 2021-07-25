import React, { useState } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { useStyles } from './Search.styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Snackbar from '@material-ui/core/Snackbar';

type SearchProps = {
	text?: string;
	setDataRestaurante?: any;
	dataRestaurante?: Array<any>;
	dataInicialRestaurante?: Array<any>;
};

const listFilter = (
	dataRestaurante: any,
	value: string,
	setShowAlert: Function,
	showAlert: boolean
) => {
	const oneLista = dataRestaurante?.filter((item: any) => {
		let valueRestaurante = item.name.toLowerCase();
		let valeuInput = value.toLowerCase();
		return valueRestaurante.includes(valeuInput);
	});

	if (oneLista.length > 0) {
		return oneLista;
	} else {
		setShowAlert(!showAlert);
		return dataRestaurante;
	}
};

const Search = ({
	text = 'Buscar estabelecimento',
	setDataRestaurante,
	dataRestaurante,
	dataInicialRestaurante,
}: SearchProps): JSX.Element => {
	const classes = useStyles();

	text = window.innerWidth <= 768 ? text.slice(0, 5) : text;
	const [inputValue, setInputValue] = useState('');

	const [showAlert, setShowAlert] = useState(false);
	return (
		<Box
			px={{ xs: '20px', md: '12px', lg: '0' }}
			width={window.innerWidth <= 900 ? '100%' : 'auto'}
		>
			<ButtonGroup
				disableElevation
				variant="text"
				color="primary"
				size="small"
				className={classes.root}
			>
				<Button>{text}</Button>
				<Button>
					<InputBase
						value={inputValue}
						inputProps={{ 'aria-label': 'campo pesquisa' }}
						onChange={(event) => {
							setInputValue(event.target.value);
							let value = event.target.value == '';
							if (value) {
								setDataRestaurante(dataInicialRestaurante);
							}
						}}
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								const result = listFilter(
									dataRestaurante,
									inputValue,
									setShowAlert,
									showAlert
								);
								setDataRestaurante(result);
							}
						}}
					/>
					<IconButton
						type="submit"
						aria-label="search"
						onClick={() => {
							const result = listFilter(
								dataRestaurante,
								inputValue,
								setShowAlert,
								showAlert
							);
							setDataRestaurante(result);
						}}
					>
						<SearchIcon />
					</IconButton>
				</Button>
			</ButtonGroup>
			<Snackbar
				open={showAlert}
				autoHideDuration={4000}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				onClose={() => {
					setShowAlert(!showAlert);
					setInputValue('');
				}}
				message={`Não encontramos nenhum resultado correspondente á '${inputValue}'`}
			></Snackbar>
		</Box>
	);
};
export default Search;
