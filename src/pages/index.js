import React from 'react'
import { graphql } from 'gatsby'

import Fade from 'react-reveal/Fade'
import { Section, Text, Img, Link, Item, Button } from '../components'

const IndexPage = ({ data }) => {
  const articles = data.articles.edges

  // Most recent article
  const recent = articles[0].node

  // Most recent magazine issue
  const issue = data.issue.edges[0].node

  return (
    <>
      {/* <Section yGutter className="text-center">
        <Text variant="h1" gutterBottom className="d-none d-md-block">Human Condition Magazine</Text>
        <Text variant="h2" gutterBottom className="d-block d-md-none">Human Condition Magazine</Text>
        <Link to={`/issue/${issue.number}/`}>
          <Button variant="outlined">View Latest Issue</Button>
        </Link>
      </Section>
      
      <hr className="mx-auto" style={{ width: '50%', borderColor: '#1d191b' }}/> */}

      <Section yGutter>
        <Text variant="subtitle1" gutterBottom align="left">Recent Articles</Text>
        <div className="row">
          <div className="col-12 col-lg-7">
            <Fade>
              <div className="d-none d-lg-block sticky-top">
                <Link to={`/${recent.type.toLowerCase()}/${recent.slug}/`}>
                  <Img hover fluid={recent.cover.fluid} style={{ height: 400, border: '1px solid #1d191b' }} />
                </Link>
                <Text className="font-italic mt-2">{recent.type}</Text>
                <Text variant="h2" className="text-uppercase font-weight-bold" color="textPrimary" style={{ fontFamily: 'Times New Roman' }}>
                  <Link to={`/${recent.type.toLowerCase()}/${recent.slug}/`}>
                    {recent.title}
                  </Link>
                </Text>
                <Text variant="subtitle1" style={{ fontFamily: 'Times New Roman' }}>
                  {recent.caption}
                </Text>
              </div>
            </Fade>
          </div>
          <div className="col-12 col-lg-5">
            <Fade right cascade distance="100px">
              <div>
                <div className="d-block d-lg-none">
                  <Item article={recent} gutterBottom />
                </div>
                {articles.map((interview, i) => {
                  if (i > 0) {
                    return (
                      <div>
                        <Item key={i} article={interview.node} gutterBottom={i < articles.length - 1} />
                      </div>
                    )
                  }
                  return null
                })}
              </div>
            </Fade>
            <Link to="/articles/">
              <Button variant="outlined" fullWidth className="mt-4">View all articles</Button>
            </Link>
          </div>
        </div>
      </Section>

      <hr className="mx-auto" style={{ width: '50%', borderColor: '#1d191b' }}/>

      <Section yGutter>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5 mx-auto">
            <Text variant="h6" gutterBottom>
              <Link to={`/issue/${issue.number}/`}>Issue #{issue.number}</Link>
            </Text>
            <Fade bottom distance="30px" delay={100}>
              <Img fluid={issue.cover.fluid} className="w-100 mb-4" style={{ border: '1px solid #1d191b' }} to={`/issue/${issue.number}`} />
            </Fade>
            <Text>
              {issue.description.childMarkdownRemark.rawMarkdownBody}
            </Text>
          </div>
        </div>
      </Section>
    </>
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
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
