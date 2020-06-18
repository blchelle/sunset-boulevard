import React, { useState, useEffect } from 'react'
import Building from '../building/building.component'
import './city.styles.css'

export default function City({numBuildings, shuffleCity}) {
  const solve = (heights) => {
    let buildings = heights.reverse().map((height) => ({height, canSee: true}));
  
    buildings.forEach(({height}, index) => {
      // Check to see if the current building is blocking any buildings to the east
      for (let i = index - 1; i >= 0; i--) {
        if (buildings[i].height > height) break;
        buildings[i].canSee = false;
      }
    });
  
    return buildings.reverse();
  }
  
  const randomUniqueHeights = (size) => {
    let heights = [];
    for (let i = 0; i < size; i++) heights[i] = (i + 1);
    
    let tmp, current, top = size;
    if (top) while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = heights[current];
      heights[current] = heights[top];
      heights[top] = tmp
    }

    return heights;
  }

  const [buildings, setBuildings] = useState(solve(randomUniqueHeights(numBuildings)));

  useEffect(() => {
    setBuildings(solve(randomUniqueHeights(numBuildings)))
  }, [numBuildings, shuffleCity]);

  const rebuildBuilding = (buildingNumber, newHeight) => {
    const newHeights = buildings.map((building) => building.height);
    newHeights[buildingNumber] = newHeight;
    setBuildings(solve(newHeights));
  }

  if (buildings.length > numBuildings) return (<div className="city" />);

  const tallestBuilding = Math.max(...buildings.map(({height}) => height))
  const tallestBuildingIndex = buildings.findIndex(({height}) => height === (tallestBuilding));
  
  return (
    <div className="city">
      {
        buildings.map(({height, canSee}, index) => 
          <Building 
            key={index}
            buildingNumber={index}
            numStories={height}
            totalStories={numBuildings}
            canSee={canSee}
            clickHandler={rebuildBuilding}
            isTallestBuilding={index === tallestBuildingIndex}
          />
        )
      }
    </div>
  )
}
