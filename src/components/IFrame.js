import React from 'react'

export default ({ src, style, ...props }) => (
  <div className="col-12 col-lg-8 mx-auto">
    <div className="embed-responsive embed-responsive-16by9 mb-5">
      <iframe className="embed-responsive-item" src={src} allowFullScreen></iframe>
    </div>
  </div>
)
