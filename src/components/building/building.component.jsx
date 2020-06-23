import React from 'react';
import Story from '../story/story.component';
import './building.styles.css';

export default function Building({
	buildingNumber,
	numStories,
	totalStories,
	canSee,
	clickHandler,
	isTallestBuilding,
}) {
	const buildingStructure = [
		...new Array(totalStories - numStories).fill(false),
		...new Array(numStories).fill(true),
	];

	let colorOptions = ['green', 'blue', 'red'];
	let colorClass;
	if (!isTallestBuilding) colorClass = colorOptions[buildingNumber % 3];
	else colorClass = '';

	return (
		<div className='building'>
			{buildingStructure.map((isStory, index) => (
				<Story
					key={index}
					isStory={isStory}
					floorNumber={totalStories - index}
					clickHandler={(newHeight, type) => {
						if (type === 'wreck') newHeight -= 1;
						clickHandler(buildingNumber, newHeight);
					}}
					canSee={canSee ? 'see' : 'no-see'}
					isTopFloor={totalStories - index === numStories}
					isTopOfTallest={
						totalStories - index === numStories && isTallestBuilding
					}
					numFloors={totalStories}
					isPartOfTallest={isTallestBuilding}
					colorClass={colorClass}
				/>
			))}
		</div>
	);
}
