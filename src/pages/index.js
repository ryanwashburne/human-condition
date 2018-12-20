import React from 'react'
import { graphql } from 'gatsby'

import { Layout, Section, Text, Img, Link, Bar, Item } from '../components'

class Slider extends React.Component {
  state = {
    count: 0
  }
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ count: this.state.count + 1 }), 2000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const { data } = this.props
    return (
      <div>
        {data.images.edges.map((img, i) => (
          <Img key={i} fluid={img.node.childImageSharp.fluid} className={`w-100 ${this.state.count % 5 === i ? 'd-block' : 'd-none'}`} style={{ height: 'calc(20vw + 100px)' }} />
        ))}
      </div>
    )
  }
}

const IndexPage = ({ data }) => {
  const articles = data.articles.edges

  // Most recent article
  const recent = articles[0].node

  // Most recent magazine issue
  const issue = data.issue.edges[0].node

  return (
    <Layout>

      <Slider data={data} />

      <Section yGutter>
        <div className="row">
          <div className="col-12 col-lg-7">
            <div className="d-none d-lg-block sticky-top">
              <Link to={`/${recent.type.toLowerCase()}/${recent.slug}`}>
                <Img fluid={recent.cover.fluid} style={{ height: 400 }} />
              </Link>
              <Text className="font-italic mt-2">{recent.type}</Text>
              <Text variant="h2" className="text-uppercase font-weight-bold" color="textPrimary" style={{ fontFamily: 'Times New Roman' }}>
                <Link to={`/${recent.type.toLowerCase()}/${recent.slug}`}>
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
            {articles.map((interview, i) => {
              if (i > 0) {
                return (
                  <Item key={i} article={interview.node} gutterBottom={i < articles.length - 1} />
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
              <Link to={`/issues/${issue.number}`}>Issue #{issue.number}</Link>
            </Text>
            <Text color="textSecondary" paragraph>
              {issue.description.childMarkdownRemark.rawMarkdownBody}
            </Text>
          </div>
          <div className="col-12 col-lg-6">
            <Img fluid={issue.cover.fluid} className="w-100" style={{ height: 400 }} to={`/issue/${issue.number}`} />
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    articles: allContentfulArticle(sort: { fields: [date], order: DESC }, limit: 5) {
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

    issue: allContentfulIssue(sort: { fields: [date], order: DESC }, limit: 1) {
      edges {
        node {
          number
          description {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
          cover {
            fluid(maxHeight: 800) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    
    images: allFile(
      filter: {relativePath: { regex: "/home/" }},
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxHeight: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
