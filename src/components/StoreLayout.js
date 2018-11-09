import React from 'react'

import { Layout, Section, Text, Img, Checkout } from './'

export default ({ title, price, description, cover, children }) => (
  <Layout>
    <Section>
      <div className="row">
        <div className="col-12 col-lg-6 h-100">
          <Section yGutter fluid>
            <Text variant="h4">{title}</Text>
            <Text variant="subtitle1" gutterBottom>${parseInt(price) + 7}*</Text>
            <Text>{description}</Text>
            {parseInt(price) > 0 &&
              <Checkout
                amount={parseInt(price) * 100 + 700}
                name={title}
              />
            }
            {parseInt(price) === 0 &&
              <Text>Sold out</Text>
            }
            <Text color="textSecondary">* = shipping and handling included</Text>
          </Section>
        </div>
        <div className="col-12 col-lg-6">
          <Img fluid={cover.childImageSharp.fluid} />
        </div>
      </div>
      {children}
    </Section>
  </Layout>
)
