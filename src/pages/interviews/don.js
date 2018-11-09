import React from 'react'
import { graphql } from 'gatsby'

import { ArticleLayout, Section, Question, Answer, ArticleImgs, ArticleImg, IFrame } from '../../components'

export default ({ data }) => (
  <ArticleLayout
    {...data.md.frontmatter}
  >
    <Section>
      <Question>
        How did you all meet?
      </Question>
      <Answer>
        This is a saga (laughing), you have to understand that. So DON as a band has been around for quite a while. I think we started like 3 years ago, out of a class called CHID 250 at UW, where we made a hip-hop album. One of the guys in the class was a jazz major so I asked if he wanted to form a band. From there, the band just went through so many lineups because I guess we’re dealing with jazz musicians, and jazz groups are a lot more fluid. And so the lineup switched around a lot until we settled on who we have now. Honestly we have the jazz scene of Seattle to thank basically for DON’s existence.
      </Answer>

      <Question>
        Why did you choose to make jazz music?
      </Question>
      <Answer>
        Honestly, I really think that it was just happen-stance. I wasn’t super into jazz or anything at the time, it was just that the guy that I knew that had musical connections was a jazz guy. So I ended up being around all these jazz musicians. For these guys (pointing at Ori and Daniel), they’ve been into jazz for a very long time. Jazz musicians are the most dedicated to musicianship of anyone I’ve met. Like it’s not uncommon for Daniel here to have 5 gigs in a week. Jazz musicians are always down to play the most and so as a result they have the most experience being in bands.
      </Answer>

      <Question>
        So what’s the meaning behind DON?
      </Question>
      <Answer>
        So back with the original lineup of the band we used to rehearse at David Salonen’s house and he has this little rehearsal space in the basement, and it was probably pretty loud outside, but they had this neighbor named Don who was kinda crazy and old - he was senile. He didn’t really know where the boundaries were. He would always come in during our rehearsals and start talking about various things.
        And he was also really fond of messing with the buttons on my keyboard so sometimes I’d go to play the next song and it would just be on a completely different setting. But I remember he was just a character. And so we ended up naming the band after him because he felt like another member in a sense because we could always expect him to show up. We love that guy. Otherwise though, obviously that was a long time ago and we’ve kept the name, because I feel like the project of DON is kind of about loving yourself as a musician, and be willing to say that the work that you make is valuable: be willing to put yourself out there. And so DON is like an honorific title. In Spanish, DON is the equivalent of Lord. And so the name kind of coincides with that theme as well, which is one of the reasons why we’ve kept it for so long.
      </Answer>
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
      <Question>
        So jumping into your EP a bit, what influenced the sound that you guys created?
      </Question>
      <Answer>
        Oh man. There’s a lot. It ended up being the songs that we chose were the ones we liked playing the most. In terms of the sound, I would say, at least from my point of view, our biggest influences are: #1 the Seattle hip-hop soul scene. Artists like Kyo-Ken, who actually used to be in DON, Mista DC, Paris Alexa, Sol. Folks like that that we’re super big fans of. There’s definitely a sound that’s coming out of Seattle right now. I think it’s like a pop-ier side of hip-hop but also mixed with future beats, like what’s coming out of the Soulection Scene. So that’s definitely a huge influence on our sound. Additionally, we obviously have an unquestionable jazz influence just because we are mostly comprised of jazz musicians.
      </Answer>

      <Question>
        How would you classify the status of the jazz scene in Seattle today?
      </Question>
      <Answer>
        I don’t think I’ve been playing jazz in Seattle long enough to speak to that historically but it’s definitely progressive. There’s a lot of people here who are trying to push boundaries and make music that is avant-garde, largely due to the influence of the director of the jazz program at UW, Cuong Vu, and his work. From my perspective it seems like it’s thriving. I live in a house of 8 jazz musicians so I might be a little bit biased. And also I don’t know how it is in other cities but there are a lot of local jams (jazz jams specifically) that happen in the area. And if you look at Seattle’s history of DIY music, we’ve always had a really big house show scene, we’ve always had a really big local music scene that was mostly put on by the musicians themselves. You can kind of see that be carried over into the Seattle jazz scene. There’s all these local jazz jams that are happening everywhere – EuroPub, LoveCityLove, etc. And so I don’t know if that makes Seattle’s jazz scene unique but I think that it does tie into Seattle’s DIY music history nicely and neatly.
      </Answer>
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
      <Question>
        Hearing the stories behind the city, as well as the art scene, and then hearing your music as a result of what’s currently happening, makes a lot of sense, and it gets me very excited because while you can argue that the city is changing because of incoming tech giants, at the same time there’s something happening here in the art scene, and it’s very exciting to see that.
      </Question>
      <Answer>
        I think that there’s also something to be said about having that feeling of getting pushed out as inspiring art itself because no one in New York City can afford rent either, and that’s where a lot of great shit is happening. So I mean I think that’s one thing that I see Seattle lacking, is enough competition in a lot of music. Like there’s a lot of artists that would not even be able to get a gig in a lot of cities that are bigger and doing well here. And I think that’s a great thing in another way because it gives the artists here an opportunity to develop without getting pushed out too quickly. It’s definitely a unique environment. People are more inclined to support and re-post their friends and love their friends’ music. All of our friends, I really just truly love their music. Like I listen to it every day. It really inspires me. And I’m not afraid to say that. I think that is something that is more or less unique to Seattle.
      </Answer>

      <Question>
        So that being said, what do you guys want to see out of the Seattle art scene?
      </Question>
      <Answer>
        Personally, I want to see the Seattle art scene be recognized. I think that there’s been just a few times in history when the national spotlight has been switched to the Seattle art scene. Like people always cite grunge as being a time when national attention went to this local art scene which was completely thriving years before it ever received attention. And I think that that’s kind of analogous to what’s happening in Seattle right now. I think that there’s a lot of artists that are doing a lot of great things. But I think that people in LA or in NYC will hear of an artist from Seattle and be like “eh I don’t know.” You know what I mean? I’d like to see us receive more of the spotlight and more respect in people’s minds. In general, I just appreciate honest music and I think that there’s something unique about the city and the experience of living here, and people should just try to be honest about that and reflect that in their music because there’s something that Seattle’s producing that is unique. I think that the Seattle art scene is really known for its honesty. I feel like you can go to a lot of local house shows and DIY shows and you can see a lot of people who are radically accepting themselves.
      </Answer>

      <Question>
        I think so too. And that applies to the whole art scene in general in my opinion. The whole gallery scene and what we’re seeing out of all expressions of art is very much like what you said – they’re focused on their own identity. And I think that’s a huge makeup of Seattle as opposed to in other places that are super competitive because everyone is pushing others down to get to the top. I’m interested to see where that’s going to go in the next couple years.
      </Question>

      <IFrame src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/327416820&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true" />
    </Section>
  </ArticleLayout>
)

export const query = graphql`
  query {
    md: markdownRemark(frontmatter: { path: { eq: "/interviews/don" }}) {
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
      filter: {relativePath: { regex: "/interviews/don/" }},
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
