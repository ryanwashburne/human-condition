import React from 'react'

import { Layout, Section, Text, Img, Checkout } from './'

export default ({ title, price, description, cover, children }) => (
  <Layout>
    <Section>
      <div className="row">
        <div className="col-12 col-lg-6">
          <Text variant="h4">{title}</Text>
          <Text variant="subtitle1" gutterBottom>${price}</Text>
          <Text>{description}</Text>
          <Checkout
            amount={parseInt(price) * 100}
            name={title}
          />
        </div>
        <div className="col-12 col-lg-6">
          <Img fluid={cover.childImageSharp.fluid} />
        </div>
      </div>
      {children}
    </Section>
  </Layout>
)
