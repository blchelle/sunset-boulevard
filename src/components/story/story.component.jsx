import React, { useState } from 'react';
import './story.styles.css';

export default function Story({
	isStory,
	floorNumber,
	clickHandler,
	numFloors,
	canSee,
	isTopFloor,
	isTopOfTallest,
	isPartOfTallest,
	colorClass,
}) {
	const [clearStyles, setClearStyles] = useState(false);

	return (
		<div
			className={`story ${isStory ? canSee : 'empty'} ${
				isTopFloor ? 'top' : ''
			} ${isTopOfTallest ? 'top-of-tallest' : ''} ${
				clearStyles ? 'clear' : ''
			} ${isPartOfTallest ? 'part-of-tallest' : ''}
			${colorClass}`}
			style={{ height: `${100 / numFloors}%` }}
			onClick={() => {
				setClearStyles(true);
				clickHandler(floorNumber, isStory ? 'wreck' : 'build');
			}}
			onMouseLeave={() => setClearStyles(false)}
		/>
	);
}
