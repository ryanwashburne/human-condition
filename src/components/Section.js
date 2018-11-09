import React from 'react'
import classnames from 'classnames'

export default ({ children, fluid, yGutter, style, className, bgColor }) => (
  <div style={{ backgroundColor: bgColor }}>
    <div className={classnames(fluid ? 'container-fluid' : 'container', yGutter ? 'py-5' : '', className)}>
      <div className="row">
        <div className="col-12">
          {children}
        </div>
      </div>
    </div>
  </div>
)
