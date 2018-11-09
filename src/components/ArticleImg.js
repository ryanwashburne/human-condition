import React from 'react'

import { Img, Text } from './'

export default ({ horizontal, fluid, fixed, description, photographer, height, onClick, hover }) => (
  <div className="mb-5 px-0 px-lg-2">
    <div className="d-block d-lg-none">
      {fluid && <Img fluid={fluid} onClick={onClick} hover={hover} />}
      {fixed && <Img fixed={fixed} onClick={onClick} hover={hover} className="w-100" />}
    </div>
    <div className="d-none d-lg-block">
      {fluid && <Img fluid={fluid} onClick={onClick} hover={hover} style={{ width: horizontal ? '40vw' : '30vw' }} />}
      {fixed && <Img fixed={fixed} onClick={onClick} hover={hover} />}
    </div>
    <div className="w-100 row no-gutters">
      <div className="col-12 col-lg-6">
        {description && <Text className="text-left font-italic" color="textSecondary">{description}</Text>}
      </div>
      <div className="col-12 col-lg-6">
        {photographer && <Text className="text-left text-lg-right font-italic" color="textSecondary">Photo by {photographer}</Text>}
      </div>
    </div>
  </div>
)

// export default ({ src, description, photographer, height, onClick, hover }) => (
//   <div className="text-center mb-5">
//     <Img fixed={src} onClick={onClick} hover={hover} />
//     <div className="w-100 row no-gutters">
//       <div className="col-12 col-lg-6">
//         {description && <Text className="text-left font-italic" color="textSecondary">{description}</Text>}
//       </div>
//       <div className="col-12 col-lg-6">
//         {photographer && <Text className="text-left text-lg-right font-italic" color="textSecondary">Photo by {photographer}</Text>}
//       </div>
//     </div>
//   </div>
// )
