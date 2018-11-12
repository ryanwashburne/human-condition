import React from 'react'
import { graphql } from 'gatsby'

import { StoreLayout } from '../../components'

export default ({ data }) => (
  <StoreLayout
    {...data.md.frontmatter}
  />
)

export const query = graphql`
  query {
    md: markdownRemark(fileAbsolutePath: { regex: "/issues\\/issue2.md/" }) {
      frontmatter {
        title
        price
        description
        sku
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
