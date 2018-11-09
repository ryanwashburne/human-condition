import React from 'react'

import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core'
import withMobileDialog from '@material-ui/core/withMobileDialog'

class Modal extends React.Component {
  render() {
    const { title, actions, fullScreen, open, handleClose, children } = this.props
    return (
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        maxWidth="lg"
      >
        <DialogTitle>{title ? title : ''}</DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
        {actions &&
          <DialogActions>
            {actions}
          </DialogActions>
        }
      </Dialog>
    )
  }
}

export default withMobileDialog()(Modal)
