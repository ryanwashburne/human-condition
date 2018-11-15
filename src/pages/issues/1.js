import React from 'react'
import { graphql } from 'gatsby'

import { StoreLayout } from '../../components'

export default ({ data }) => (
  <StoreLayout
    {...data.md.frontmatter}
    sku={process.env.NODE_ENV === 'development' ? data.md.frontmatter.sku_test : data.md.frontmatter.sku}
  />
)

export const query = graphql`
  query {
    md: markdownRemark(fileAbsolutePath: { regex: "/issues\\/issue1.md/" }) {
      frontmatter {
        title
        price
        description
        sku
        sku_test
        cover {
          childImageSharp {
            fluid(maxHeight: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }  
`
