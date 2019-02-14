import React from 'react'

import { Img, Link, Text } from './'

export default ({ article, gutterBottom }) => (
  <div className={gutterBottom ? 'mb-5' : ''}>
    <Link to={`/${article.type.toLowerCase()}/${article.slug}`}>
      <Img hover fluid={article.cover.fluid} style={{ height: 250 }} className="w-100" />
    </Link>
    <Text className="font-italic mt-2">{article.type}</Text>
    <Text variant="h5" className="text-uppercase font-weight-bold" color="textPrimary" style={{ fontFamily: 'Times New Roman' }}>
      <Link to={`/${article.type.toLowerCase()}/${article.slug}`}>
        {article.title}
      </Link>
    </Text>
    <Text>
      {article.caption}
    </Text>

    {gutterBottom &&
      <hr className="w-50" style={{ float: 'left', borderColor: '#1d191b' }}/>
    }
  </div>
)
