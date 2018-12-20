import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import ArticleLayoutContentful from '../components/ArticleLayoutContentful'

import rehypeReact from 'rehype-react'
import { TextBlob, Question, IFrame, Quote } from '../components'

import './article.css'

const Frame = ({ children }) => {
  if (!children || children.length === 0 || children[0].props === undefined) {
    return null
  }
  return (
    <IFrame src={children[0].props.href} />
  )
}

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: TextBlob, 
    strong: Question,
    blockquote: Quote,
    'embedded': Frame
  }
}).Compiler

class ArticleTemplate extends React.Component {
  render() {
    const { data } = this.props
    const article = data.contentfulArticle
    return (
      <ArticleLayoutContentful {...article}>
        <Helmet title={`${article.title.toUpperCase()} / HUMAN CONDITION`} />
        {renderAst(article.content.childMarkdownRemark.htmlAst)}
      </ArticleLayoutContentful>
    )
  }
}

export default ArticleTemplate

export const pageQuery = graphql`
  query InterviewBySlug($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      title
      date(formatString: "MMMM Do, YYYY")
      cover {
        fluid(maxHeight: 800) {
          ...GatsbyContentfulFluid
        }
      }
      description {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      content {
        childMarkdownRemark {
          htmlAst
        }
      }
      caption
      interviewer
      writer
      photographer
      videographer
    }
  }
`
