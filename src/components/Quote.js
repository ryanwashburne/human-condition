import React from 'react'

import { Text, Answer } from './'

export default ({ children }) => (
  <Answer>
    <Text className="font-italic" variant="h4" color="textPrimary">{children}</Text>
  </Answer>
)
