import React from 'react'

export default ({ style, ...props }) => (
  <hr style={{ margin: 0, ...style }} {...props} />
)
