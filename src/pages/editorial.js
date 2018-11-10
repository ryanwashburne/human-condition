import React from 'react'
import { graphql } from 'gatsby'

import { Layout, Section, Text, Bar, Item } from '../components'

const Editorial = ({ data }) => (
  <Layout>
    <Section yGutter>
      <div className="row">
        <div className="col-12 col-lg-5 mx-auto">
          <Text variant="h5" align="center" gutterBottom className="font-weight-bold" color="textPrimary" style={{ fontFamily: 'Times New Roman' }}>Editorial Picks</Text>
          <Text align="justify" color="textSecondary">A collection of articles, interviews, photos, and more brought to you by the Human Condition community.</Text>
        </div>
      </div>
    </Section>

    <Bar />

    <Section yGutter>
      <div className="row">
        {data.interviews.edges.map((interview, i) => (
          <div key={i} className="col-12 col-md-6 col-lg-4">
            <Item article={interview.node.frontmatter} gutterBottom />
          </div>
        ))}
      </div>
    </Section>
  </Layout>
)

export default Editorial

export const query = graphql`
  query {
    interviews: allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/interviews/"}}},
      sort: { fields: [frontmatter___date], order: DESC },
     ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            caption
            type
            cover {
              childImageSharp {
                fluid(maxHeight: 400) {
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
