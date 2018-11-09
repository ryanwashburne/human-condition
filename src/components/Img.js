import React from 'react'

import Img from 'gatsby-image'

import { Link } from './'

const Image = ({ onClick, to, ...props }) => (
  <div onClick={onClick}>
    {to && <Link to={to}><Img {...props} /></Link>}
    {!to && <Img {...props} />}
  </div>
)

export default Image
