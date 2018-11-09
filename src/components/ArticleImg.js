import React from 'react'

import { Img, Text } from './'

export default ({ fluid, fixed, description, photographer, height, onClick, hover }) => (
  <div className="mb-5">
    {fluid && <Img fluid={fluid} onClick={onClick} hover={hover} />}
    {fixed && <Img fixed={fixed} onClick={onClick} hover={hover} />}
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
