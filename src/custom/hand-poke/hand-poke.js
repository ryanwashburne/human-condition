import React from 'react'

import { StaticQuery, graphql } from 'gatsby'

import { Section, TextBlob, ArticleImg, ArticleImgs, Modal, Button, Img } from '../../components'

const people = [
  {
    name: 'AIYANA INATSU',
    src: 'aiyana-group',
    id: 'aiyana',
    get content() {
      return (
        <Section>
          <TextBlob>
            Her favorite thing about tattoos: “it’s the one thing you can choose to change about your appearance. Autonomy is such a huge thing right now, especially as a femme person. It feels powerful to go against my upbringing and choose what I want to display on myself.”
          </TextBlob>
          <TextBlob>
            “America is kinda fucked. I don’t think there’s anywhere else in the States I would wanna live,” Aiyana tells me about living in Seattle. Aiyana grew up in Vancouver, British Columbia, and moved to the Pacific Northwest about ten years ago. She says she sort of stumbled into hand poking, but once she did, she went all in. Aiyana ordered everything - from real tattoo needles & ink to proper sanitation tools - almost immediately. And she was pretty good at it, too.
          </TextBlob>
          <TextBlob>
            Since then, she’s moved into a shared art studio near Neumos in Capitol Hill. Despite her proclivity to working alone, she loves sharing a space with other artists, and notes the value in sharing publicity. Being in Seattle, tattoos are relatively widespread, but people still attach some illegitimacy to hand poke tattoos as opposed to machine tattoos. And with this comes an expectation of a lower price. The price of a hand poke tattoo is not only for the prolonged, detailed process, but the hours spent drawing and tweaking the design, the materials, the labor. “For too long, I’ve been like, ‘sure, I’ll take that bottle of wine as payment.’ But actually, I need to pay rent...” Aiyana tells me with a laugh. “Nah, I usually feel bad charging people. I’m like, this was fun! Thanks for the conversation.”
          </TextBlob>
          <TextBlob>
            Misconceptions about legitimacy have fostered an inaccurate understanding of hand poke tattoos themselves, as well. “People use the phrase ‘real tattoo’ when referring to machine tattoos.” But hand poke tattoos are just as real. If it’s done right, a hand poke will last just as long as a machine tattoo. Aiyana gives me some parting advice: “It’s ink in your skin, don’t get one hoping it’ll go away.”
          </TextBlob>
        </Section>
      )
    }
  },
  {
    name: 'AVERY OSAJIMA',
    src: 'avery-group',
    id: 'avery',
    get content() {
      return (
        <Section>
          <TextBlob>
            On how she defines tattoos: “An exchange of offerings, a kind of ritual, conversation, collaboration, storytelling, lots of things. People bring me their stories, offer skin, trust, money; sometimes they give me plants or art or stones or food or medicine. And I hold space for them, offer protection, translations of their stories through my hands, listen to them, hear about what their lives have been like, giggle with them, share silence.”
          </TextBlob>
          <TextBlob>
            Avery hails from Southern California, but has lived in Seattle for about 5 years. “I think being in Seattle has allowed me to grow this practice in a way that I'm not sure would be possible in other places, both because of its size and the community that I've found here.” Her first hand poke tattoos were done on her two best friends and her partner at the time, and from there, she describes her practice as something that then rippled outward organically. “I tattooed friends, co-workers, acquaintances, people I had lost touch with, friends of friends, my middle school boyfriend. Now, I tattoo people I’ve never met before.” Avery’s practice was built on, and continues to thrive through, the trust of her community. For that reason, she is “absolutely soaked through with gratitude” for the people who sustain her practice.
          </TextBlob>
          <TextBlob>
            Avery is reflective on her own position in the hand poke community, both in Seattle and in the media. “Hand poke tends to be more accessible for people to learn, so that certainly shapes the landscape of hand poke versus machine tattooing. You see a lot of women who are visible and successful as hand poke artists, for example, but they're still mostly white. I have love for women taking space in the tattooing world here because it tends to be so male dominated, but it can be hard to witness the ways that the predominance of white hand poke artists and the painting of hand poke as a progressive "trend" erases the fact that machine-free tattooing traditions have been practiced for hundreds, even thousands of years in non-European nations all over the world - especially when a lot of these traditions were demonized and targeted through colonization and imperialism.”
          </TextBlob>
          <TextBlob>
            “It feels complicated - on the one hand, it's such a beautiful thing that practicing this form of tattooing makes me feel more connected to my people, but there's also a lot of heartbreak, anger, and muck for me to wade through and grapple with about assimilation, diaspora, and my relationship to this practice, myself, and my people that comes with this work for me that doesn't necessarily seem to be present for white tattooers. It's just straight up more difficult to gain recognition in the tattoo world as a queer femme of color.”
          </TextBlob>
        </Section>
      )
    }
  },
  {
    name: 'REN NGUYEN',
    src: 'ren-group',
    id: 'ren',
    get content() {
      return (
        <Section>
          <TextBlob>
            On tattoos as art: “All of contemporary art has been bending what art is and what it can be. Tattooing as an art form is so different from what is commonly regarded as fine arts. It’s not an artifact, it can’t be put in a museum or in a gallery. In a museum, works tend to get memorialized in terms of specific social and historical contexts & audiences tend to project significance and meanings based on those factors. With tattoos, it’s a very personal kind of ‘exhibition’ that doesn’t have all that cultural baggage, though it may have some of its own, like societal perceptions of body art. But it’s not in an environment of intellectual critique, so there’s a certain intimacy there. And there’s fluidity to a tattoo as a work of art. It moves through the world and on a body, so its context is always changing.”
          </TextBlob>
          <TextBlob>
            ”I felt drawn to somewhere that was unfamiliar, somewhere that would hold me and create space for me to be creative.” Ren spends most of her time bouncing between the Orange County, California and Seattle. Her hand poke practice has flourished in both locations: “I think that the two places I tattoo in have made my decision to pursue it a lot more feasible because tattoos are relatively normalized both in Southern California and Seattle.” The unique cultural landscapes across cities undoubtedly affect hand poke artists and their practice. As a historically progressive city, Seattle has incubated creativity in this way.
          </TextBlob>
          <TextBlob>
            “Tattoos have allowed me to work with something I’m familiar with, drawing, but also stretch my creativity and work with other people conceptually. I’m usually a little hesitant to collaborate with other people because I can be self-conscious about my artistmanship.” But hand poking being collaborative in nature forces people to work together creatively. “In this sense, hand poking has allowed me to expand my artistic practices in a way that my other media hasn’t. I've always been hesitant see art and creative expression as a lucrative site out of fear that the emotional integrity would be compromised due to pressures to commercialize my work, or that I'd begin to attach financial stress onto something I'm so utterly passionate about. But tattooing seems to be more flexible in this arena. It offers a setting where a monetary trade seems appropriate, which is new to me.”
          </TextBlob>
          <TextBlob>
            Ren’s hand poke practice is nonetheless still in the ‘exploratory’ phase. “I don’t have a niche yet, which is really fun. I get to be open to what other people want and put my own spin on it. I really want to remain in this weird, liminal space as much as possible,” she muses. “I don’t yet have a burning desire to follow a specific path.” Fielding comments about the illegitimacy of hand poking is an element of Ren’s practice, too. “It’s part of the experience to hear those kinds of comments and ascend that expectation. I hear, ‘Oh my god, your stuff looks like real tattoos!’ – well, it is a real tattoo,” she laughs. “It’ll stay forever.” I ask if she has made that mistake before. “I actually don’t have any tattoos,” she tells me with a smile.
          </TextBlob>
        </Section>
      )
    }
  }
]

class HandPoke extends React.Component {
  state = {
    person: null
  }
  handleOpen = (person) => {
    this.setState({ person: person })
  }
  handleClose = () => {
    this.setState({ person: null })
  }
  render() {
    const { person } = this.state
    return (
      <StaticQuery
        query={graphql`
          query {
            profiles: allFile(filter: {
              relativePath: { regex: "/^interviews\/hand-poke\/.+(.jpg|.png)$/" },
              name: { regex: "/^((?!group).)*$/" }
            }) {
              edges {
                node {
                  name
                  childImageSharp {
                    fixed(height: 500) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
            groups: allFile(filter: {
              relativePath: { regex: "/^interviews\/hand-poke\/.+(.jpg|.png)$/" },
              name: { regex: "/group/" }
            }) {
              edges {
                node {
                  name
                  childImageSharp {
                    fluid(maxHeight: 1200) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        `}
        render={(data) => {
          const profiles = {}
          data.profiles.edges.forEach((node) => {
            profiles[node.node.name.toLowerCase()] = node.node.childImageSharp
          })
          const groups = {}
          data.groups.edges.forEach((node) => {
            groups[node.node.name.toLowerCase()] = node.node.childImageSharp
          })
          return (
            <>
              <Section>
                <TextBlob>
                  These three hand poke artists -- Aiyana, Ren, and Avery -- embody such thoughtfulness and vivid individualism; their practice is humble and honest, yet completely remarkable. This is a testament to the nature of hand poke tattoos, and how this form of art operates in a city like Seattle. From giving small tattoos to excited party-goers at Toe Jam to poking a personal piece for more than three hours in the company of friends, these artists are redefining the art, and experience, of tattoos.
                </TextBlob>
              </Section>

              <ArticleImgs>
                <ArticleImg
                  fixed={profiles.aiyana.fixed}
                  description="Aiyana"
                  onClick={() => this.handleOpen(people[0])}
                  hover
                />
                <ArticleImg
                  fixed={profiles.avery.fixed}
                  description="Avery"
                  onClick={() => this.handleOpen(people[1])}
                  hover
                />
                <ArticleImg
                  fixed={profiles.ren.fixed}
                  description="Ren"
                  onClick={() => this.handleOpen(people[2])}
                  hover
                />
              </ArticleImgs>
              {person &&
                <Modal
                  open={!!person}
                  title={person.name}
                  handleClose={this.handleClose}
                  actions={[
                    <Button onClick={this.handleClose} className="san-serif" key={0}>Close</Button>
                  ]}
                >
                  <Img fluid={groups[person.src].fluid} fadeIn={false} />
                  {person.content}
                </Modal>
              }
            </>
          )}}
        />
    )
  }
}

export default HandPoke