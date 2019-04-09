import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import {
  NewWave,
  NewWave2,
} from '../custom'

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

const FullPhoto = ({ children }) => {
  return <img src={children[0]} className="w-100 mb-5" style={{ height: '80vh', objectFit: 'cover' }} alt="" />
}

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: TextBlob, 
    strong: Question,
    blockquote: Quote,
    'embedded': Frame,
    'full-photo': FullPhoto,
  }
}).Compiler

class ArticleTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const article = data.contentfulArticle

    let content
    switch (pageContext.slug) {
      case 'new-wave':
        content = <NewWave />
        break
      
      case 'new-wave-2':
        content = <NewWave2 />
        break

      default:
        content = renderAst(article.content.childMarkdownRemark.htmlAst)
        break
    }

    return (
      <ArticleLayoutContentful {...article}>
        <Helmet title={`${article.title.toUpperCase()} / HUMAN CONDITION`} />
        {content}
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
          html
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
