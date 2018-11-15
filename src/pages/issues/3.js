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
    md: markdownRemark(fileAbsolutePath: { regex: "/issues\\/issue3.md/" }) {
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
    images: allFile(
      filter: {relativePath: { regex: "/store/issue3/" }},
      sort: { fields: name }
    ) {
      edges {
        node {
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
