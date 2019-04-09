import React from 'react'
import classnames from 'classnames'

export default ({ children, fluid, yGutter, className, bgColor, ...props }) => (
  <div style={{ backgroundColor: bgColor }} {...props}>
    <div className={classnames(fluid ? 'container-fluid' : 'container', yGutter ? 'py-5' : '', className)}>
      <div className="row">
        <div className="col-12">
          {children}
        </div>
      </div>
    </div>
  </div>
)
