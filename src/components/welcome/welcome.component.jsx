import React from 'react'
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import { Check } from '@material-ui/icons/';
import { orange } from '@material-ui/core/colors';
import './welcome.styles.css'

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: orange[500],
    '&:hover': {
      backgroundColor: orange[700],
    },
  },
}))(Button);

export default function Welcome({clickHandler}) {
  return (
    <div className="welcome">
      <h1 className="title">Sunset Boulevard</h1>
      <p className="description">
        Welcome to sunset boulevard! Where the only way you can see the sunset is by having no taller buildings to the west. 
        Luckily, Coder Foundry has an agreement with the city that always gives them the top floor of the tallest building
        so that Bobby and Kevin can watch the sun set every night. <br /> Note: If you're on mobile, try tapping the buildings to change their heights
      </p>
      <ColorButton variant="contained" color="primary" endIcon={<Check />} onClick={clickHandler}>
        Continue
      </ColorButton>
    </div>
  )
}
