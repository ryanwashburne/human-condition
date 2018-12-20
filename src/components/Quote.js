import React from 'react'

export default ({ children, style, ...props }) => (
  <div className="container">
    <div className="row">
      <div
        className="col-12 col-lg-8 mx-auto mb-5 font-italic"
        style={{ fontFamily: 'Superclarendon', ...style }}
        {...props}
      >
        {children}
      </div>
    </div>
  </div>
)
