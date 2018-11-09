import React from 'react'
import { graphql } from 'gatsby'

import { ArticleLayout, Section, Question, Answer, ArticleImg, ArticleImgs, Quote } from '../../components'

export default ({ data }) => (
  <ArticleLayout
    {...data.md.frontmatter}
  >
    <Section>
      <Question>
        I wanted to start with how you got into rap. When did you get into rapping and producing, and how did that all begin?
      </Question>
      <Answer>
        I’ve been producing since I was about 8 years old. I would go down to my dad’s office down in the basement of my house and use a program called the Magix Music Maker and it was old as hell. I would take the loops that were already made on the program and put them together. I basically DJ Khaled-ed the whole thing and called it a beat. Then I would perform them in talent shows in like fourth grade, rapping over the beats I put together.
      </Answer>

      <Question>
        So you’ve been at it for years now. Were you always known as “Space Dolphin”? Growing up and rapping so early in your life, how has the progression of your stage names changed over time?
      </Question>
      <Answer>
        I went through a series of horrible names in my youth. When I started rapping around 10 years old, I called myself “10-Cent” which wasn’t long lived. My initials are D.J., so I went with D-Jizzy or D-Jizzle, something like that back then too. But I had no idea what the word “Jizz” was until that Lonely Island, “Jizz In My Pants” shit came out and I literally heard that and immediately knew my name had to be changed. So I switched it up and became Daze and thought that was cool and then decided to add my name- Damon Daze, because it rolls off the tongue better. So I became Damon Daze and then after that I started smoking weed heavily and went in a whole different direction with my music.
      </Answer>
    </Section>

    {/*<ArticleImgs>*/}
      {/*<ArticleImg*/}
        {/*src={getSrc(key, '2.png')}*/}
      {/*/>*/}
    {/*</ArticleImgs>*/}

    <Section>
      <Question>
        How would you describe the influence of weed on your music?
      </Question>
      <Answer>
        I would say it influenced my music in that I wanted to make songs that were more relaxing, chill and clear-minded. I want people to listen to my music and smoke weed while listening to it. I had a tape I never released called “Ocarina of Kush” so it was in between that and when I dropped “Splash Pt.1” when I would go in on slowed down samples from Zelda and other sounds like that, that had that fun and slow rhythm to it. During that time, I rapped a bar back when I was Damon Daze, where I used “Space polo dolphin” and my homie was like, that’s it.
      </Answer>

      <Question>
        And the rest is history.
      </Question>
      <Answer>
        Yup, I literally took it from a bar I had written. Space Dolphin was that direction I was trying to go into.
      </Answer>

      <Question>
        From what I gather the brand and style of Space Dolphin is very colorful and vibrant. Why did you want develop yourself in that way?
      </Question>
      <Answer>
        I love the colorful pink in general; I don’t know what it is about it. I wanted to go for something that was playful and not too serious. Whenever I’m in a room, I want to make people laugh and have a good time. To me, pink is that.
      </Answer>
    </Section>

    {/*<ArticleImgs>*/}
      {/*<ArticleImg*/}
        {/*src={getSrc(key, '3.png')}*/}
        {/*photographer="Ryan Washburne"*/}
      {/*/>*/}
    {/*</ArticleImgs>*/}

    <Section>
      <Question>When’s the tape dropping?</Question>
      <Answer>
        It’s looking like a summer drop. I was trying to have it drop April 1st but we didn't do that.
      </Answer>
      <Question>Just take your time with it because if you don't you might regret it. I also feel like momentum is key, you want to be timely but you don’t want to take too long of a time.</Question>
      <Answer>
        Timing is literally everything. People that think timing isn’t a thing are only elite artists. They don’t have to worry about that. To drop stuff randomly you have to be a Drake or a Beyoncé. It clearly shows when they drop commercial albums randomly; they still get millions of streams… That's how it goes, but you can’t do that when you’re up and coming or on soundcloud. You have to be calculated.
      </Answer>
      <Question>For people with similar buzz to you, how big of a role do you think marketing and self-promotion plays?</Question>
      <Answer>
        An extremely huge role because it really is the only way to expand your brand...
      </Answer>
      <Quote>
        "...getting your name out there by word of mouth or having local buzz is cool but marketability or your ability to be marketed is the main factor you have to get down if you’re serious about the industry."
      </Quote>
      <Answer>
        If you want to stay underground or local you don't necessarily need any of that, you know how to market your own shit and you have your own crowd. Now having more knowledge about this industry from my manager and working with people from it… I know it’s a definitely process. You have to get people to want to hear your shit and you have to promote at the right time. You can’t be dropping shit when SXSW is going on. You can’t be dropping shit during Christmas. It really is about timing, because once you see other artists actually plan shit out, and it’s executed perfectly, and it turns out that the timing was right, you have to take that route.
      </Answer>
      <Question>I totally agree with that. It really is important because you want whatever you’re sharing to be as successful as it can be without any external factors getting in the way. To shift the conversation a bit, do you have any thoughts on the newer generation of rappers coming out of here?</Question>
      <Answer>
        The new generation and the new rap that’s coming out of here is changing. Because of the Internet, you have people here sounding like they’re from Texas, New York, Atlanta. They’re mixing it all up. As far as how the scene is here like when you go to the shows, there’s no support! I think that the problem with the whole Seattle rap scene is that it never took off here like grunge once did. We’re just not a rap hub. We’re not known for that. It’s different in cities that have been about rap music. People represent their local music… like in the Bay Area you have Mistah F.A.B. and E40. All of them were outside slanging CD’s, hustling for years. It’s been the deal there but over here, rap was never it like that. Especially when it comes to these rap shows, people out here just don't show as much love. I think we’ll mold a nice hip-hop crowd soon but right now it’s still in the process.
      </Answer>
    </Section>

    {/*<ArticleImgs>*/}
      {/*<ArticleImg*/}
        {/*src={getSrc(key, '4.png')}*/}
        {/*photographer="Ryan Washburne"*/}
      {/*/>*/}
    {/*</ArticleImgs>*/}

    <Section>
      <Question>Who would you say are your biggest musical influences?</Question>
      <Answer>
        From Day 1, 50 Cent after “Get Rich or Die Trying”. I love the production, the style of the beats, it was all very cool to me and when Master came out with Candy Shop, I thought 50 Cent was definitely running shit. And Timbaland is a huge influence on my production. When I hear Timbaland’s shit in general, I freak out because he really is a mastermind at placing instruments in places that no other producers do. And then Lil Wayne and Drake. From 6th grade up, I was listening to Lil Wayne all the time because the bars were pure fire.  And then Drake came out with songs that were more melodic and also had bars. I couldn't stop listening to it. Those are my influences, when I listen to the music they make, watch the videos they make and see the moves they’re making, it’s inspirational.
      </Answer>
      <Question>I know you just talked about your influences but as an artist do you also find yourself trying to minimize the amount of rap you hear to stay away from replicating or sounding too similar to someone else?</Question>
      <Answer>
        Yeah, that's the problem with a market that's so saturated with sounds and styles that are influenced by each other. You got a lot of people these days that sound like someone else with their own twist on it. People excuse it to an extent but for me when you hear my songs I get hints of some of my influences for sure. However, people do tell me my shit sounds different. I think the way I rap, use ad-libs and approach beats in general, is different from a lot people.
      </Answer>
      <Question>What can we look forward to from Space Dolphin in the near future?</Question>
      <Answer>
        Yoshi’s Island, the mixtape. More hits. I aspire to make music and melodies that stay in people’s heads. I want people to want more from me. I want to provide visuals that have people going back saying, “Did you see the music video though?” But I got a long road ahead.
      </Answer>
      <Question>You’re getting there man. Thanks for talking to us.</Question>
    </Section>
  </ArticleLayout>
)

export const query = graphql`
  query {
    md: markdownRemark(frontmatter: { path: { eq: "/interviews/space-dolphin" }}) {
      frontmatter {
        title
        path
        date
        caption
        type
        cover {
          childImageSharp {
            fluid(maxHeight: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }  
`
