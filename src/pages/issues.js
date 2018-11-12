import React from 'react'
import { graphql } from 'gatsby'

import { Layout, Section, Img, Text, Bar } from '../components'


class StorePage extends React.Component {
  render() {
    const { data } = this.props
    const recent = data.issues.edges[0].node.frontmatter
    const issues = data.issues.edges
    return (
      <Layout>
        <Section yGutter>
          <div className="row">
            <div className="col-12 col-lg-6 mx-auto">
              <Text align="center" variant="h6" paragraph>Current Issue</Text>
              <Img fluid={recent.cover.childImageSharp.fluid} to={`/issues/${recent.id}`} style={{ height: 500 }} />
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
                    <Img fluid={issue.node.frontmatter.cover.childImageSharp.fluid} to={`/issues/${issue.node.frontmatter.id}`} style={{ height: 400 }} />
                  </div>
                )
              }
              return null
            })}
          </div>
        </Section>
      </Layout>
    )
  }
}

export default StorePage

export const query = graphql`
  query {
    issues: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/issues/"}},
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            id
            cover {
              childImageSharp {
                fluid(maxHeight: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  } 
`
