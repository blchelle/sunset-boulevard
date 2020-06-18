import React from 'react';
import { Slider, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import { Shuffle } from '@material-ui/icons';
import { orange } from '@material-ui/core/colors';
import './header.styles.css';


const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: orange[500],
    '&:hover': {
      backgroundColor: orange[700],
    },
  },
}))(Button);

export default function Header({sliderValue, changeHandler, clickHandler}) {
  return (
    <div className="header">
      <div className="cloud cloud-large">
        <div className="description">
          <h1 className="title">Sunset Boulevard</h1>
          <p>Welcome to sunset boulevard! Where the only way you can see the sunset is by having no taller buildings to the west. 
             Luckily, Coder Foundry has an agreement with the city that always gives them the top floor of the tallest building
             so that Bobby and Kevin can watch the sun set every night
          </p>
        </div>
      </div>
      <div className="cloud cloud-small">
        <div className="options">
          <div className="slider">
            <Typography id="continuous-slider" gutterBottom>
              Number of buildings = <strong>{sliderValue}</strong>
            </Typography>
            <Slider
              className="slider"
              defaultValue={10}
              min={3}
              max={15}
              onChange={changeHandler}
            />
          </div>
          <ColorButton variant="contained" color="primary" startIcon={<Shuffle />} onClick={clickHandler}>
            Randomize buildings
          </ColorButton>
        </div>
      </div>
    </div>
  )
}
