import React from 'react'

import { Text } from './'

export default ({ children, style, ...props }) => {
  if (!!children && children.length > 2 && children[1].type === 'span') {
    return (
      <div className="mb-5">
        {children}
      </div>
    )
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-8 mx-auto mb-5">
          <Text style={{ lineHeight: 1.8, ...style }} {...props}>{children}</Text>
        </div>
      </div>
    </div>
  )
}
