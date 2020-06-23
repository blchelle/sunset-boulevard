import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { GitHub, LinkedIn } from '@material-ui/icons/';
import { withStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import './pullout.styles.css';

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

export default function Pullout() {
	const [expanded, setExpanded] = useState(true);

	return (
		<div>
			<ColorButton
				className='open-pullout'
				onClick={() => setExpanded(expanded ? false : true)}
			>
				{expanded ? 'Close Pullout' : 'Show Pullout'}
			</ColorButton>
			<div className={`pullout ${expanded ? 'expand' : 'compress'}`}>
				<h1 className='problem__title'>
					Sunset Boulevard: Coding Challenge
				</h1>
				<div className='pullout-section'>
					<h2 className='problem__title'>The Problem</h2>
					<p className='problem__description'>
						You've been hired by Coder Foundry to find the perfect
						building for their new headquarters. Cost is irrelevant
						and their only requirement is that they can see the
						sunset every night. Your job is to pick out the perfect
						set of buildings for them to choose from.
						<br />
						<br />
						This site was created as a submission for a coding
						challenge given by Coder Foundry. The challenge was to
						create a solution to the sunset hills coding problem,
						and to provide a clean user interface along with it.
					</p>
				</div>
				<div className='pullout-section'>
					<h2 className='problem__title'>Instructions for Demo</h2>
					<p className='problem__description'>
						Any buildings that can see the sunset are colored green,
						blue, or red. Any buildings that are unable to see the
						sunset have been greyed out. The tallest building in the
						scene will always be the coder foundry office, to
						guarantee that they see the sunset every night. You can
						change the number of buildings in the scene and also
						change the heights of individual buildings by hovering
						over them and clicking.
					</p>
				</div>
				<div className='social-media'>
					<a
						href='https://github.com/blchelle/sunset-boulevard'
						className='github'
					>
						<GitHub
							fontSize='large'
							style={{ color: orange[500] }}
						/>
					</a>
					<a
						href='https://www.linkedin.com/in/blchelle/'
						className='linked-in'
					>
						<LinkedIn
							fontSize='large'
							style={{ color: orange[500] }}
						/>
					</a>
				</div>
			</div>
		</div>
	);
}
