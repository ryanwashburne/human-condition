import React from 'react'

import { Img, Link, Text, Bar } from './'

export default ({ article, src, gutterBottom }) => (
  <div className={gutterBottom ? 'mb-5' : ''}>
    <Link to={article.path}>
      <Img fluid={article.cover.childImageSharp.fluid} style={{ height: 250 }} className="w-100" />
    </Link>
    <Text className="font-italic mt-2">{article.type}</Text>
    <Text variant="h6" className="text-uppercase" color="textPrimary">
      <Link to={article.path}>
        {article.title}
      </Link>
    </Text>
    <Text>
      {article.caption}
    </Text>

    {gutterBottom &&
      <hr style={{ width: '80%', marginRight: '100%', borderColor: '#1d191b' }}/>
    }
  </div>
)
