import React from 'react'

import { Layout, Section, Text, Img, Checkout } from './'

export default ({ title, price, description, cover, sku, children }) => (
  <Layout>
    <Section>
      <div className="row">
        <div className="col-12 col-lg-6 h-100">
          <Section yGutter fluid>
            <Text variant="h4">{title}</Text>
            {parseInt(price) > 0 &&
              <div className="d-flex">
                <Text variant="h6" gutterBottom>${parseInt(price)}</Text>
                <Text style={{ paddingTop: 4, fontSize: 14 }} className="flex-grow-1">*</Text>
              </div>
            }
            <Text>{description}</Text>
            {parseInt(price) > 0 &&
              <div className="mt-5">
                <Checkout
                  amount={parseInt(price) * 100 + 600} // $6.00 shipping
                  name={title}
                  sku={sku}
                />
                <Text color="textSecondary" className="font-italic pt-1">* $6.00 shipping</Text>
              </div>
            }
            {parseInt(price) === 0 &&
              <Text variant="h1" className="mt-5">Sold out</Text>
            }
          </Section>
        </div>
        <div className="col-12 col-lg-6">
          <Img fluid={cover.childImageSharp.fluid} />
        </div>
      </div>
      {/*{children}*/}
    </Section>
  </Layout>
)
