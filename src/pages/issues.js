import React from 'react'
import { graphql } from 'gatsby'

import { Section, Img, Text, Bar } from '../components'


class StorePage extends React.Component {
  render() {
    const { data } = this.props
    const issues = data.issues.edges
    const recent = issues[0].node
    return (
      <>
        <Section yGutter>
          <div className="row">
            <div className="col-12 col-lg-6 mx-auto">
              <Text align="center" variant="h6" paragraph>Current Issue</Text>
              <Img fluid={recent.cover.fluid} to={`/issue/${recent.number}`} style={{ height: 500 }} />
            </div>
          </div>
        </Section>

        <Bar />

        <Section yGutter className="text-center text-lg-left">
          <Text variant="subtitle1" paragraph>Previous Issues</Text>
          <div className="row">
            {issues.map((issue, i) => {
              if (i > 0) {
                return (
                  <div key={i} className="col-12 col-lg-4">
                    <Img fluid={issue.node.cover.fluid} to={`/issue/${issue.node.number}`} style={{ height: 400 }} />
                  </div>
                )
              }
              return null
            })}
          </div>
        </Section>
      </>
    )
  }
}

export default StorePage

export const query = graphql`
  query {
    issues: allContentfulIssue(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          number
          cover {
            fluid(maxHeight: 800) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  } 
`
