import React from 'react'

import { Button as MuiButton } from '@material-ui/core'

const Button = ({ style, ...props }) => (
  <MuiButton {...props} style={{ borderRadius: 0, ...style }} />
)

export default Button
