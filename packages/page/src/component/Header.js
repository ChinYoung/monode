import React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { withStyles } from '@material-ui/styles'
import { IconButton } from '@material-ui/core';

const HolderStyles = {
  widthHolder: {
    width: '100%'
  }
}
const Holder = ({ children, classes }) => {
  return (
    <div className={ classes.widthHolder }>
      {
        children
      }
    </div>
  )
}
const WidthHolder = withStyles(HolderStyles)(Holder)


const HeaderStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: '5rem',
    position: 'relative',
    zIndex: '500',
    '&::after': {
      zIndex: '-200',
      content: 'close-quote',
      position: 'absolute',
      right: '0',
      top: '0',
      bottom: '0',
      width: '30%',
      borderBottom: '1px solid #ccc'
    }
  }
}
const Header = ({ classes })=> {
  return (
    <div className={ classes.container}>
      <WidthHolder { ...classes } />
      <IconButton>
        <ExitToAppIcon />
      </IconButton>
    </div>
  )
}

export default withStyles(HeaderStyles)(Header)