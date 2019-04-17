import React from 'react'
import { graphql } from 'gatsby'

import { Section, HoverImg, Text, Bar } from '../components'


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
              <HoverImg fluid={recent.cover.fluid} to={`/issue/${recent.number}`} style={{ height: '100%', border: '1px solid #1d191b' }} />
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
                    <HoverImg fluid={issue.node.cover.fluid} to={`/issue/${issue.node.number}`} style={{ height: 400 }} />
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
