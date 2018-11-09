import React from 'react'

import { Text } from './'

export default ({ children, style, ...props }) => (
  <div className="col-12 col-lg-8 mx-auto">
    <Text {...props} className="mb-5" style={{ lineHeight: 1.8, ...style }}>{children}</Text>
  </div>
)
