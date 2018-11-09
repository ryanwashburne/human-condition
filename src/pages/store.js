import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Carousel } from 'react-responsive-carousel'
import { Layout, Section, Img, Modal, Button, Text, Bar } from '../components'

const issues = [
  {
    issue: 3,
    desc: 'Lorem Ipsum.',
    id: 'issueThree',
    carousel: [
      'SlideOne',
      'SlideTwo',
      'SlideThree'
    ]
  },
  {
    issue: 2,
    desc: 'Lorem Ipsum.',
    id: 'issueTwo',
    carousel: []
  },
  {
    issue: 1,
    desc: 'Lorem Ipsum.',
    id: 'issueOne',
    carousel: []
  }
]
const currentIssue = issues[0]

const Content = ({ data, issue }) => (
  <div className="row">
    <div className="col-12 col-lg-6">
      {/*<Carousel>*/}
        {/*<div style={{ height: 350 }}>*/}
          {/*<Img fluid={data[`${issue.id}Cover`].childImageSharp.fluid} />*/}
        {/*</div>*/}
        {/*{issue.carousel.map((slide, j) => (*/}
          {/*<div key={j}>*/}
            {/*<Img fluid={data[`${issue.id}${slide}`].childImageSharp.fluid} />*/}
          {/*</div>*/}
        {/*))}*/}
      {/*</Carousel>*/}
    </div>
    <div className="col-12 col-lg-6">
      <Text variant="h6" gutterBottom>Issue #{issue.issue}</Text>
      <Text variant="subtitle1" gutterBottom>$17.50</Text>
      <Bar className="mb-2" />
      <Text gutterBottom>{issue.desc}</Text>
      <Button size="large" fullWidth variant="outlined" className="mt-4 san-serif">Buy Now</Button>
      <div style={{ backgroundColor: '#eee', borderRadius: 10 }} className="mt-2 p-2">
        <Text color="textSecondary">Shipping: $6.00 flat-rate per order. Ships within 7 days to United States addresses only.</Text>
      </div>
    </div>
  </div>
)

class StorePage extends React.Component {
  state = {
    issue: null
  }
  handleOpen = (issue) => {
    this.setState({ issue: issue })
  }
  handleClose = () => {
    this.setState({ issue: null })
  }
  render() {
    const { data } = this.props
    const recent = data.recent.edges[0].node.frontmatter
    const issues = data.issues.edges
    return (
      <Layout>
        <Section yGutter>
          <div className="row">
            <div className="col-12 col-lg-6 mx-auto">
              <Text align="center" variant="h6" paragraph>Current Issue</Text>
              <Img fluid={recent.cover.childImageSharp.fluid} to={`/store/${recent.id}`} style={{ height: 500 }} />
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
                    <Img fluid={issue.node.frontmatter.cover.childImageSharp.fluid} to={`/store/${issue.node.frontmatter.id}`} style={{ height: 400 }} />
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
    recent: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/issues/"}},
      limit: 1,
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
