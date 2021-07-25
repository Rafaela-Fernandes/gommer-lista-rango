import React, { useState, useEffect, useMemo } from 'react';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Card from '../../../../Component/Card';
import Box from '@material-ui/core/Box';
import Modal from '../../../../Component/Modal';
import Text from '../../../../Component/Text';
import { useStyles } from './Acordion.style';

type AcordionMenuProps = {
	dataMenuRestaurante: any;
};
const filterGroup = (data: any, setGroup: any) => {
	const group: any = [];
	data?.map((item: any) => {
		if (item.group) {
			let isGroup = group.includes(item.group);
			if (!isGroup) {
				group.push(item.group);
			}
		}
	});
	setGroup(group);
};

const AcordionMenu = ({ dataMenuRestaurante }: AcordionMenuProps) => {
	const [expanded, setExpanded] = React.useState<string | false>(false);
	const [groups, setGroup] = useState([]);
	const [groupsMenu, setGroupMenu] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [cardapio, setCardapio] = useState([]);
	const classes = useStyles();
	useMemo(() => {
		filterGroup(dataMenuRestaurante, setGroup);
	}, [dataMenuRestaurante]);

	const filterCardapio = (name: string) => {
		const result = dataMenuRestaurante?.filter((item: any) => {
			return item.name === name;
		});
		setCardapio(result);
	};

	useEffect(() => {
		setShowModal(false);
	}, []);
	const handleChange =
		(panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
			const result = dataMenuRestaurante?.filter((item: any) => {
				return item.group === panel;
			});
			setGroupMenu(result);
		};
	return (
		<React.Fragment>
			{groups?.map((group, index) => {
				return (
					<Box width="100%">
						<Accordion
							expanded={expanded === group}
							onChange={handleChange(group)}
							elevation={0}
						>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1bh-content"
								id={group}
								className={classes.boxSumary}
							>
								<Text tag="h5" fontSize="16px" text={group} weight="600" />
							</AccordionSummary>
							<AccordionDetails>
								<Grid container spacing={2}>
									{groupsMenu?.map((item: any) => {
										return (
											<Grid item lg={6} md={8} sm={12}>
												<Box
													onClick={() => {
														filterCardapio(item.name);
														setShowModal(true);
														console.log('name', showModal);
													}}
												>
													<Card
														widthBox="386px"
														elevation={1}
														width="115px"
														height="115px"
														src={item.image}
													>
														<Box ml="20px">
															<Text
																tag="h4"
																text={item.name}
																fontSize="16px"
																weight="600"
															/>
															<Text
																tag="p"
																text="Lorem ipsum dolor sit amet, consectetura dipiscing elit"
															/>

															<Text
																tag="span"
																text={`R$ ${item.price.toFixed(2)}`}
																fontSize="16px"
																weight="600"
																color="#009CA3"
															/>

															<Text
																tag="span"
																text={`R$ ${item.price.toFixed(2)}`}
																fontSize="12px"
																weight="400"
																textDecoration="line-through"
																ml="26px"
															/>
														</Box>
													</Card>
												</Box>
											</Grid>
										);
									})}
								</Grid>
							</AccordionDetails>
						</Accordion>
					</Box>
				);
			})}
			<Modal open={showModal} cardapio={cardapio}></Modal>
		</React.Fragment>
	);
};

export default AcordionMenu;
