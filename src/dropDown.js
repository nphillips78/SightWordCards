import React from 'react';
import { IconButton, Menu, MenuItem } from '@material-ui/core'
import MoreVertIcon  from '@material-ui/icons/MoreVert'
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
      this.setState({ anchorEl: event.currentTarget })
    }

    handleClose = () => {
      this.setState({ anchorEl: null })
    }

    render() {
      const { anchorEl } = this.state
      const open = Boolean(anchorEl)

      return (
        <div>
          <IconButton 
          aria-label="More"
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup='true'
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
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