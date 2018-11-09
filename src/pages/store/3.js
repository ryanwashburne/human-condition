import React from 'react'
import { graphql } from 'gatsby'

import { StoreLayout, Img } from '../../components'

export default ({ data }) => (
  <StoreLayout
    {...data.md.frontmatter}
  >
    <Img fluid={data.images.edges[1].node.childImageSharp.fluid} />
    <Img fluid={data.images.edges[2].node.childImageSharp.fluid} />
    <Img fluid={data.images.edges[3].node.childImageSharp.fluid} />
  </StoreLayout>
)

export const query = graphql`
  query {
    md: markdownRemark(fileAbsolutePath: { regex: "/issues\\/issue3.md/" }) {
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
