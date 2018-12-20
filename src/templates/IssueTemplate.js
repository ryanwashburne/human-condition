import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import StoreLayoutContentful from '../components/StoreLayoutContentful'

class IssueTemplate extends React.Component {
  render() {
    const { data } = this.props
    const issue = data.contentfulIssue
    return (
      <StoreLayoutContentful
        {...issue}
        sku={process.env.NODE_ENV === 'development' ? issue.skuTest : issue.sku}
      >
        <Helmet title={`Issue #${issue.number} / HUMAN CONDITION`} />
      </StoreLayoutContentful>
    )
  }
}

export default IssueTemplate

export const pageQuery = graphql`
  query IssueByNumber($number: Int!) {
    contentfulIssue(number: { eq: $number }) {
      number
      date(formatString: "MMMM Do, YYYY")
      cover {
        fluid(maxHeight: 800) {
          ...GatsbyContentfulFluid
        }
      }
      description {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      sku
      skuTest
      price
    }
  }
`
