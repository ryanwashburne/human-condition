import React from 'react'
import { graphql } from 'gatsby'

import { ArticleLayout, Section, ArticleImg, ArticleImgs, TextBlob, IFrame } from '../../components'

export default ({ data }) => (
  <ArticleLayout
    {...data.md.frontmatter}
  >
    <Section>
      <IFrame src="https://www.youtube.com/embed/h_pqtF2zidE" />
    </Section>

    <Section>
      <TextBlob>
        Amongst dimly lit candles, fresh homemade pizza, and a variety of succulents, musicians readied themselves for an intimate performance as conversations amidst music lovers lulled to soft silence. On Saturday, December 9th, Human Condition Magazine collaborated with singer-songwriter Demetruest for a celebration of his Redirected EP release. The venue, a cozy Fremont living room, was filled with people ready for an evening of music. Schuyler Asplin and Mike Gebhart opened up the evening with an experiential, instrumental performance; the pair produced a wide range of sounds using multiple handheld instruments, hand drums, a saxophone, and a trumpet. Up next, listeners heard a beautiful, melodic set from AnserEl Smith, a local Seattle singer-songwriter whose incredibly sincere lyricism and raw vocals filled the room with authenticity.
      </TextBlob>
    </Section>

    <ArticleImgs>
      <ArticleImg
        fluid={data.images.edges[1].node.childImageSharp.fluid}
      />
      <ArticleImg
        fluid={data.images.edges[2].node.childImageSharp.fluid}
      />
    </ArticleImgs>

    <Section>
      <TextBlob>
        The two incredible openers set the stage for the headliner, Demetruest, who delivered a rich and powerful performance. His sound is soulful, sweet, and enthralling - painting personal stories with a unique range of perspective and feeling. One song feels like a soft awakening on Sunday morning, while another is the perfect company for a night drive. While the songs varied from melodic to rhythmic, his innate love and passion for singing, anywhere and anytime, came through in every note. His personal mantra to ‘own who you are and walk in your truth’ came across earnestly in his music. Everyone in the audience was fully engaged with the honest lyrics about love, life, sexuality, and individuality. After the show, Demetruest shared that the evening had exceeded his expectations -- “There was so much energy and love in one room. Everyone was very receptive and there for [the] music, which made it so easy to perform.” He hopes to continue to create an environment similar to what he felt that night - something intimate and personable. “I lean more towards intimate shows, I can do bigger venues and my music can translate to that but I feel that it’s also important to do what you really love. Within my soul music, I’m really partial to acoustic sounds that fill me up as a person.” After performing an acoustic set and playing guitar in front of a crowd for the first time, he felt as though people were extremely supportive and receptive to this type of show. He hinted that this style of performance is something he wishes to continue in Seattle.
      </TextBlob>
    </Section>

    <ArticleImgs>
      <ArticleImg
        fluid={data.images.edges[3].node.childImageSharp.fluid}
      />
      <ArticleImg
        fluid={data.images.edges[4].node.childImageSharp.fluid}
      />
    </ArticleImgs>

    <Section>
      <TextBlob>
        Having moved from Chicago, Illinois to Seattle only five months ago, Demetruest says that Seattle has been a very accepting city. Upon settling in, he has picked up an instrument and molded his sound into something different than what he usually does. “I owe that to the free and open culture that’s here. Collaborating, going to see and support other musicians, that’s what I’m looking forward to most about being here in Seattle.” With strong relationships with musicians like Noname, Demetruest stressed his belief in the importance of collaboration. “I grew up in choir where it was important to collaborate. It’s important to see things through for yourself, but to have four or five other ideas to make a beautiful thing is incredible.” He expressed the beauty and bits of sadness associated with collaborating on music. Experiencing a beautiful collaboration while accepting that it is short lived, is well worth the moment of togetherness. This sentiment echoed in the cozy living room post-performance, late at night on a Saturday in the middle of December: a group of performers and music lovers, new and old to the city of Seattle, came together to create a beautiful albeit fleeting cohesiveness, but a lasting impression.
      </TextBlob>
    </Section>

    <ArticleImgs>
      <ArticleImg
        fluid={data.images.edges[5].node.childImageSharp.fluid}
      />
      <ArticleImg
        fluid={data.images.edges[6].node.childImageSharp.fluid}
      />
    </ArticleImgs>

    <ArticleImgs>
      <ArticleImg
        fluid={data.images.edges[7].node.childImageSharp.fluid}
        horizontal
      />
    </ArticleImgs>
  </ArticleLayout>
)

export const query = graphql`
  query {
    md: markdownRemark(frontmatter: { path: { eq: "/interviews/deme" }}) {
      frontmatter {
        title
        path
        date(formatString: "MMMM Do, YYYY")
        caption
        type
        description
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
      filter: {relativePath: { regex: "/interviews/deme/" }},
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
