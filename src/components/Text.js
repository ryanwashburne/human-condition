import React from 'react'

import { Typography } from '@material-ui/core'

export default ({ children, ...props }) => (
  <Typography {...props}>{children}</Typography>
)
