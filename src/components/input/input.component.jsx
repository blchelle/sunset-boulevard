import React from 'react';
import { Slider, Typography, Button } from '@material-ui/core';
import { Shuffle } from '@material-ui/icons';
import { withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import './input.styles.css';

const ColorButton = withStyles((theme) => ({
	root: {
		color: theme.palette.getContrastText(orange[500]),
		backgroundColor: orange[500],
		'&:hover': {
			backgroundColor: orange[700],
		},
		fontSize: 14
	},
}))(Button);

const PrettoSlider = withStyles({
	root: {
		color: orange[500],
		height: 8,
	},
	thumb: {
		height: 24,
		width: 24,
		backgroundColor: '#fff',
		border: '2px solid currentColor',
		marginTop: -8,
		marginLeft: -12,
		'&:focus, &:hover, &$active': {
			boxShadow: 'inherit',
		},
	},
	active: {},
	valueLabel: {
		left: 'calc(-50% + 4px)',
	},
	track: {
		height: 8,
		borderRadius: 4,
	},
	rail: {
		height: 8,
		borderRadius: 4,
	},
})(Slider);

const theme = createMuiTheme({
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 10,
  },
});

export default function Input({ sliderValue, changeHandler, clickHandler }) {
	return (
		<div className='input'>
			<div className='slider'>
				<ThemeProvider theme={theme}>
					<Typography id='continuous-slider' fontSize="large" gutterBottom>
						Number of buildings = <strong>{sliderValue}</strong>
					</Typography>
					<PrettoSlider
						className='slider'
						defaultValue={10}
						min={3}
						max={15}
						onChange={changeHandler}
					/>
				</ThemeProvider>

			</div>
			<ColorButton
				variant='contained'
				color='primary'
				endIcon={<Shuffle />}
				onClick={clickHandler}
			>
				Randomize Buildings
			</ColorButton>
		</div>
	);
}
