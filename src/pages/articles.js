import React from 'react'
import { graphql } from 'gatsby'

import { Section, Text, Bar, Item } from '../components'

const Articles = ({ data }) => (
  <>
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
        {data.articles.edges.map((article, i) => (
          <div key={i} className="col-12 col-md-6 col-lg-4">
            <Item article={article.node} gutterBottom />
          </div>
        ))}
      </div>
    </Section>
  </>
)

export default Articles

export const query = graphql`
  query {
    articles: allContentfulArticle(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          type
          slug
          cover {
            fluid(maxHeight: 800) {
              ...GatsbyContentfulFluid
            }
          }
          caption
          date
        }
      }
    }
  }
`
