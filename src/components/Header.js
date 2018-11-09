import React from 'react'

import { AppBar, Toolbar, ButtonBase, Drawer, List, ListItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Text, Link } from './'

const HEIGHT = 65

class Header extends React.Component {
  state = {
    open: false
  }
  handleOpen = () => {
    this.setState({ open: true })
  }
  handleClose = () => {
    this.setState({ open: false })
  }
  render() {
    const { open } = this.state
    return (
      <div>
        <AppBar position="fixed" color="inherit" style={{ height: HEIGHT, boxShadow: 'none', backgroundColor: '#f8f6ed' }}>
          <Toolbar>
            <div className="container-fluid">
              <div className="row">
                <div className="col-10 col-lg-6 d-flex align-items-center">
                  <Text style={{ fontFamily: 'Human' }} variant="h4" color="textPrimary"><Link to="/">HUMAN CONDITION</Link></Text>
                </div>
                <div className="col-6 d-none d-lg-flex align-items-center justify-content-end">
                  <Text><Link to="/editorial">Editorial</Link></Text>
                  <Text className="ml-4"><Link to="/about">About</Link></Text>
                  <Text className="ml-4"><Link to="/store">Store</Link></Text>
                </div>
                <div className="col-2 d-flex d-lg-none justify-content-end">
                  <ButtonBase variant="fab" onClick={this.handleOpen}>
                    <MenuIcon />
                  </ButtonBase>
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={open} onClose={this.handleClose}>
          <List component="nav" style={{ width: 250 }}>
            <Link to="/editorial">
              <ListItem button>
                Editorial
              </ListItem>
            </Link>
            <Link to="/about">
              <ListItem button>
                About
              </ListItem>
            </Link>
            <Link to="/Store">
              <ListItem button>
                Store
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <div style={{ height: HEIGHT }} />
      </div>
    )
  }
}

export default Header
