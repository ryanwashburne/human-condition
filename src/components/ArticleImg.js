import React from 'react'

import { Img, Text } from './'

export default ({ horizontal, fluid, fixed, description, photographer, onClick, hover }) => (
  <div className="mb-5 px-0 px-lg-2">
    <div className="d-block d-lg-none">
      {fluid && <Img fluid={fluid} onClick={onClick} />}
      {fixed && <Img fixed={fixed} onClick={onClick} className="w-100" />}
    </div>
    <div className="d-none d-lg-block">
      {fluid && <Img fluid={fluid} onClick={onClick} hover={hover} style={{ width: horizontal ? '40vw' : '30vw', cursor: 'pointer' }} />}
      {fixed && <Img fixed={fixed} onClick={onClick} hover={hover} style={{ cursor: 'pointer' }} />}
    </div>
    <div className="w-100 row">
      <div className="col-12 col-lg-6">
        {description && <Text className="text-left font-italic ml-2 ml-lg-0" color="textSecondary" variant="body1">{description}</Text>}
      </div>
      <div className="col-12 col-lg-6">
        {photographer && <Text className="text-left text-lg-right font-italic mr-2 mr-lg-0" color="textSecondary" variant="body1">Photo by {photographer}</Text>}
      </div>
    </div>
  </div>
)