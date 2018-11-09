import React from 'react'

import { Text } from './'

export default ({ children }) => (
  <div className="col-12 col-lg-8 mx-auto">
    <Text className="font-weight-bold" paragraph variant="subtitle1">HC: {children}</Text>
  </div>
)
