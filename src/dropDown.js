import React from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core'
import words from './words'

// const options = [ 'list1', 'list2', 'list3', 'list4', 'list5', 'list6', 'list7'] 
const options = Object.keys(words)

const ITEM_HEIGHT = 48

export default class DropDown extends React.Component {
  constructor() {
    super()
    this.state = {
      anchorEl: null
    }
  }

    handleClick = event => {
      this.setState({ anchorEl: event.currentTarget }) // sets whatever we selected to state
    }

    handleClose = () => {
      this.setState({ anchorEl: null }) // goes back to nothing selected
    }

    render() {
      const { anchorEl } = this.state
      const open = Boolean(anchorEl)

      return (
        <div>
          <Button 
          aria-label="More"
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup='true'
          onClick={this.handleClick}
        >
        CHOOSE A LIST
        </Button>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {options.map(option => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }   
}