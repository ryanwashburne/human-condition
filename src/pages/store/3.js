import React from 'react'
import { graphql } from 'gatsby'

import { StoreLayout, Img } from '../../components'

export default ({ data }) => (
  <StoreLayout
    {...data.md.frontmatter}
  >
    <Img fluid={data.issueThreeSlideOne.childImageSharp.fluid} />
    <Img fluid={data.issueThreeSlideTwo.childImageSharp.fluid} />
    <Img fluid={data.issueThreeSlideThree.childImageSharp.fluid} />
  </StoreLayout>
)

export const query = graphql`
  query {
    md: markdownRemark(fileAbsolutePath: { regex: "/issues\\/issue3.md/" }) {
      frontmatter {
        title
        price
        cover {
          childImageSharp {
            fluid(maxHeight: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    issueThreeSlideOne: file(relativePath: { eq: "store/issue3-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    issueThreeSlideTwo: file(relativePath: { eq: "store/issue3-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    issueThreeSlideThree: file(relativePath: { eq: "store/issue3-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }  
`
