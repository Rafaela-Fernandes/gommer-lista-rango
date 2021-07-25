import React from 'react';
import Typography from '@material-ui/core/Typography';
import { ElementType } from 'react';

type TextProps = {
	color?: string;
	weight?: string;
	fontSize?: string;
	fontFamily?: string;
	text: string;
	tag?: ElementType;
	textDecoration?: string;
	mb?: string;
	ml?: string;
};

const Text = ({
	color = '#404040',
	weight = '400',
	fontSize = '12px',
	fontFamily = 'Montserrat',
	text = '',
	tag = 'p',
	textDecoration = 'auto',
	mb = '8px',
	ml = '0',
}: TextProps): JSX.Element => {
	return (
		<Typography
			component={tag}
			mb={mb}
			ml={ml}
			style={{
				font: `normal  normal ${weight} ${fontSize} ${fontFamily}`,
				color: color,
				textDecoration: textDecoration,
			}}
		>
			{text}
		</Typography>
	);
};
export default Text;
