import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { Carousel } from 'react-responsive-carousel'

import {
  NewWave,
  NewWave2,
  HandPoke,
} from '../custom'

import ArticleLayoutContentful from '../components/ArticleLayoutContentful'

import rehypeReact from 'rehype-react'
import { TextBlob, Question, IFrame, Quote, Text } from '../components'
import styled from 'styled-components'

import './article.css'

const Frame = ({ children }) => {
  if (!children || children.length === 0 || children[0].props === undefined) {
    return null
  }
  return (
    <IFrame src={children[0].props.href} />
  )
}

const FixedWrapper = styled.div`
  height: 200vh;
  background: rgba(0, 0, 0, 0.5);
`
const FixedImg = styled.div`
  background: linear-gradient(rgba(0,0,0, 0.4),rgba(0,0,0, 0.4)), url('${props => props.url}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: sticky;
  top: 0px;
  width: 100%;
  height: 100vh;
`

const FixedPhoto = ({ children }) => (
  <FixedWrapper className="mb-5">
    <FixedImg url={children[0].split('\n')[1]} />
    <div className="position-absolute font-italic container-fluid">
      <div className="row">
        <Text style={{ fontSize: 'calc(2vw + 12px)' }} className="col-12 col-md-6 mt-5 font-weight-bold text-white">
          {children[0].split('\n')[2]}
        </Text>
      </div>
    </div>
  </FixedWrapper>
)

const Column = ({ children }) => {
  console.log(children)
  return (
    <div className="col-12 col-md-6">
      {children}
    </div>
  )
}

const Row = ({ children }) => (
  <div className="container">
    <div className="row">
      {children}
    </div>
  </div>
)

const FullPhoto = ({ children }) => {
  return <img src={children[0]} className="w-100 mb-5" style={{ height: '80vh', objectFit: 'cover' }} alt="" />
}

const ImgCarousel = ({ children }) => {
  const imgs = children[0].split('\n')
  imgs.shift()
  imgs.pop()
  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      infiniteLoop
      className="mb-5"
    >
      {imgs.map((img, i) => (
        <div key={i}>
          <img src={img} alt="" className="w-100" style={{ height: '85vh', objectFit: 'cover' }} />
        </div>
      ))}
    </Carousel>
  )
}

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: TextBlob,
    strong: Question,
    blockquote: Quote,
    'content-col': Column,
    'content-row': Row,
    'embedded': Frame,
    'full-photo': FullPhoto,
    'fixed-photo': FixedPhoto,
    'carousel': ImgCarousel,
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

      case 'hand-poke':
        content = <HandPoke />
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
      slug
      type
    }
  }
`
