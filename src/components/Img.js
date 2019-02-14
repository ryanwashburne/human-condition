import React from 'react'

import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { Link } from './'

const HoverImage = styled(Img)`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.03);
  }
`

export default ({ onClick, hover, to, ...props }) => {
  let Image = Img
  if (hover) {
    Image = HoverImage
  }
  return (
    <div onClick={onClick}>
      {to && <Link to={to}><Image {...props} /></Link>}
      {!to && <Image {...props} />}
    </div>
  )
}
