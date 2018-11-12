import React from 'react'
import { graphql } from 'gatsby'

import { ArticleLayout, Section, IFrame, Img } from '../../components'

export default ({ data }) => (
  <ArticleLayout
    {...data.md.frontmatter}
  >
    <Section>
      <IFrame src="https://www.youtube.com/embed/lm49nYARnao" />
    </Section>

    <Section fluid yGutter>
      <div className="row">
        {data.images.edges.map((node, i) => {
          if (i > 0) {
            return (
              <div key={i} className="col-12 col-sm-6 col-lg-4">
                <Img fluid={node.node.childImageSharp.fluid} style={{ height: 400 }} />
              </div>
            )
          }
          return null
        })}
      </div>
    </Section>

    <Section>
      <IFrame src="https://open.spotify.com/embed/track/5DCjd4G5JeaAwkbqiGvgI5" />
    </Section>
  </ArticleLayout>
)

export const query = graphql`
  query {
    md: markdownRemark(frontmatter: { path: { eq: "/interviews/mista-dc" }}) {
      frontmatter {
        title
        path
        date(formatString: "MMMM Do, YYYY")
        caption
        type
        description
        videography
        photography
        cover {
          childImageSharp {
            fluid(maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    images: allFile(
      filter: {relativePath: { regex: "/interviews/mista-dc/" }},
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
