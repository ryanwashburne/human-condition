import React from 'react'

import { Section, Text, Img, Checkout } from './'

export default ({ number, price, description, cover, sku, children }) => (
  <>
    <Section yGutter>
      <div className="row">
        <div className="col-12 col-lg-6 h-100">
          <Section yGutter fluid>
            <Text variant="h4">Issue #{number}</Text>
            {parseInt(price) > 0 &&
              <div className="d-flex">
                <Text variant="h6" gutterBottom>${parseInt(price)}</Text>
                <Text style={{ paddingTop: 4, fontSize: 14 }} className="flex-grow-1">*</Text>
              </div>
            }
            <Text>{description.childMarkdownRemark.rawMarkdownBody}</Text>
            {parseInt(price) > 0 &&
              <div className="mt-5">
                <Checkout
                  amount={parseInt(price) * 100 + 600} // $6.00 shipping
                  name={`Issue #${number}`}
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
          <Img fluid={cover.fluid} style={{ border: '1px solid #1d191b' }} />
        </div>
      </div>
    </Section>
    {children}
  </>
)
