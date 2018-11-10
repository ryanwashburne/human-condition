import React from 'react'
import { graphql } from 'gatsby'

import Carousel from 'nuka-carousel'
import { ArticleLayout, Section, IFrame, Img } from '../../components'

export default ({ data }) => (
  <ArticleLayout
    {...data.md.frontmatter}
  >
    <Section>
      <IFrame src="https://www.youtube.com/embed/lm49nYARnao" />
    </Section>

    <Section fluid yGutter>
      <div className="px-4 w-100">
        {/*<Slider {...settings}>*/}
          {/*<SliderImg src="81590019.jpg" />*/}
          {/*<SliderImg src="81590021.jpg" />*/}
          {/*<SliderImg src="81590037.jpg" />*/}
          {/*<SliderImg src="82660004.jpg" />*/}
          {/*<SliderImg src="82660008.jpg" />*/}
          {/*<SliderImg src="DSC_6796.jpg" />*/}
          {/*<SliderImg src="DSC_6800.jpg" />*/}
          {/*<SliderImg src="DSC_6807.jpg" />*/}
          {/*<SliderImg src="DSC_6817.jpg" />*/}
        {/*</Slider>*/}

        {/*<Carousel autoplay slidesToShow={2} wrapAround>*/}
          {/*<Img fluid={data.images.edges[3].node.childImageSharp.fluid} />*/}
          {/*<Img fluid={data.images.edges[2].node.childImageSharp.fluid} />*/}
          {/*<Img fluid={data.images.edges[1].node.childImageSharp.fluid} />*/}
        {/*</Carousel>*/}
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
