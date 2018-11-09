import React from 'react'
import { graphql } from 'gatsby'

import { Layout, Section, Text, Img, Link, Bar, Item } from '../components'

class Slider extends React.Component {
  state = {
    count: 0
  }
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ count: this.state.count + 1 }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const { data } = this.props
    return (
      <div>
        <Img fluid={data[`Slider${(this.state.count % 5) + 1}`].childImageSharp.fluid} className="w-100" style={{ height: 'calc(20vw + 100px)' }} />
      </div>
    )
  }
}

const IndexPage = ({ data }) => {
  const interviews = data.interviews.edges
  const recent = data.recent.edges[0].node.frontmatter
  const recentIssue = data.recentIssue.edges[0].node.frontmatter
  return (
  <Layout>
    <Slider data={data} />

    <Section yGutter>
      <div className="row">
        <div className="col-12 col-lg-7">
          <div className="d-none d-lg-block sticky-top">
            <Link to={recent.path}>
              <Img fluid={recent.cover.childImageSharp.fluid} />
            </Link>
            <Text className="font-italic mt-2">{recent.type}</Text>
            <Text variant="h2" className="text-uppercase font-weight-bold" color="textPrimary" style={{ fontFamily: 'Times New Roman' }}>
              <Link to={recent.path}>
                {recent.title}
              </Link>
            </Text>
            <Text variant="subtitle1" style={{ fontFamily: 'Times New Roman' }}>
              {recent.caption}
            </Text>
          </div>
        </div>
        <div className="col-12 col-lg-5">
          <div className="d-block d-lg-none">
            <Item article={recent} gutterBottom />
          </div>
          {interviews.map((interview, i) => {
            console.log(interview)
            if (i > 0) {
              return (
                <Item key={i} article={interview.node.frontmatter} gutterBottom={i < interviews.length - 1} />
              )
            }
            return null
          })}
        </div>
      </div>
    </Section>

    <Bar />

    <Section yGutter>
      <div className="row">
        <div className="col-12 col-lg-6">
          <Text variant="h6" gutterBottom>
            <Link to={`/store/${recentIssue.id}`}>{recentIssue.title}</Link>
          </Text>
          <Text color="textSecondary" paragraph>
            {recentIssue.description}
          </Text>
        </div>
        <div className="col-12 col-lg-6">
          <Img fluid={recentIssue.cover.childImageSharp.fluid} className="w-100" style={{ height: 400 }} to={`/store/${recentIssue.id}`} />
        </div>
      </div>
    </Section>
  </Layout>
)}

export default IndexPage

export const query = graphql`
  query {
    recent: allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/interviews/"}}},
      limit: 1,
      sort: { fields: [frontmatter___date], order: DESC }
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
                fluid(maxHeight: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    interviews: allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/interviews/"}}},
      limit: 5,
      sort: { fields: [frontmatter___date], order: DESC }
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
    recentIssue: allMarkdownRemark(
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
    Slider1: file(relativePath: { eq: "home/1.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Slider2: file(relativePath: { eq: "home/2.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Slider3: file(relativePath: { eq: "home/3.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Slider4: file(relativePath: { eq: "home/4.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Slider5: file(relativePath: { eq: "home/5.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  } 
`
