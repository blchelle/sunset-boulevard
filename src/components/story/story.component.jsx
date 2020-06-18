import React, { useState } from 'react'
import './story.styles.scss';

export default function Story({isStory, floorNumber, clickHandler, canSee, isTopFloor, isTopOfTallest}) {
  const [clearStyles, setClearStyles] = useState(false)
  
  const storyWindows = () => {
    let windows = [];
    if (isStory && !isTopOfTallest) {
      windows.push(<div key={1} className="window"/>)
      windows.push(<div key={2} className="window"/>)
      windows.push(<div key={3} className="window"/>)
      return windows
    }
  }

  return (
    <div 
      className={`story ${isStory ? canSee : 'empty'} ${isTopFloor ? 'top': ''} ${isTopOfTallest ? 'top-of-tallest' : ''} ${clearStyles ? 'clear' : ''}`} 
      onClick={() => {
        setClearStyles(true)
        clickHandler(floorNumber, isStory ? 'wreck' : 'build')
      }}
      onMouseLeave={() => setClearStyles(false)}
    >
      {
        storyWindows()
      }
    </div>
  )
}
