import React from 'react'

import { Layout, Section, Text, Img } from './'

export default ({ title, price, description, cover, children }) => (
  <Layout>
    <Section>
      <div className="row">
        <div className="col-12 col-lg-6">
          <Text>{title}</Text>
          <Text>${price}</Text>
        </div>
        <div className="col-12 col-lg-6">
          <Img fluid={cover.childImageSharp.fluid} />
        </div>
      </div>
      {children}
    </Section>
  </Layout>
)
