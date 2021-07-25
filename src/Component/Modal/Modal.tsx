import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import { useStyles } from './Modal.styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Text from '../Text';
type ModalProps = {
	open: boolean;
	cardapio: any;
};

const Modal = ({ open = false, cardapio = [] }: ModalProps): JSX.Element => {
	const [openModal, setOpen] = useState(false);
	const [addNumber, setNumber] = useState(1);
	const [data] = cardapio;
	const classes = useStyles();

	const adicionarCardapio = () => {
		setNumber(addNumber + 1);
	};
	const removeCardapio = () => {
		setNumber(addNumber - 1);
	};

	useEffect(() => {
		setOpen(open);
	}, [cardapio]);

	return (
		<Dialog
			open={openModal}
			keepMounted
			onClose={() => {
				setOpen(false);
			}}
			aria-labelledby="alert-dialog-slide-title"
			aria-describedby="alert-dialog-slide-description"
			className={classes.paper}
		>
			<Box
				className={classes.btnClose}
				onClick={() => {
					setOpen(false);
				}}
			>
				<CloseIcon />
			</Box>
			<Box className={classes.boxModal}>
				<DialogTitle>
					<Box
						style={{
							backgroundImage: `url(${data ? data.image : ''})`,
						}}
						className={classes.boxImage}
					/>
				</DialogTitle>
				<DialogContent className={classes.dialogContent}>
					<Text
						text={data ? data.name : ''}
						tag="h1"
						fontSize="24px"
						weight="900"
					/>
					<Box display="flex" alignItems="flex-end" className={classes.boxText}>
						<Text
							text="	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua."
							weight="600"
						/>
						<Text
							text={`R$ ${data ? data.price.toFixed(2) : ''}`}
							weight="600"
							fontSize="32px"
							color="#009CA3"
							mb="0"
						/>
					</Box>
				</DialogContent>
				<DialogActions className={classes.boxButtom}>
					<ButtonGroup aria-label="button group">
						<Button
							disabled={addNumber > 1 ? false : true}
							onClick={() => {
								removeCardapio();
							}}
						>
							-
						</Button>
						<Button>{addNumber}</Button>
						<Button
							onClick={() => {
								adicionarCardapio();
							}}
						>
							+
						</Button>
					</ButtonGroup>
					<Button className={classes.btnAdicionar}>
						<Text
							text="Adicionar"
							tag="span"
							fontSize="20px"
							weight="500"
							mb="0"
							color="#FFF"
						/>
						<Text
							text={`R$ ${data ? (data.price * addNumber).toFixed(2) : ''}`}
							tag="span"
							fontSize="20px"
							weight="500"
							mb="0"
							color="#FFF"
						/>
					</Button>
				</DialogActions>
			</Box>
		</Dialog>
	);
};

export default Modal;
