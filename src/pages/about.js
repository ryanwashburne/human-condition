import React from 'react'
import { graphql } from 'gatsby'

import { Link, Section, Img, Text, Bar } from '../components'

const About = ({ data }) => (
  <>
    <Section yGutter>
      <div className="row">
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          <Img fluid={data.file.childImageSharp.fluid} style={{ height: 400 }}/>
        </div>
        <div className="col-12 col-lg-6">
          <Text variant="subtitle1" className="font-italic" paragraph>Who are we?</Text>
          <Text paragraph>Human Condition is an independent magazine dedicated to providing a platform for emerging artists in Seattle and beyond. Human Condition was founded in 2017 centered around the principals of community empowerment, sharing underrepresented voices, and fortifying the arts in Seattle. </Text>
          <Text paragraph>Through publishing a biannual magazine, curating events, and developing a web/mobile platform for artists, Human Condition continues to bring people together, and share the thoughts and work of talented local artists. </Text>
          <Text className="font-weight-bold">Contact // <Link href="mailto:humanconditionmag@gmail.com">humanconditionmag@gmail.com</Link></Text>
        </div>
      </div>
    </Section>

    <Bar />

    <Section yGutter>
      <div className="row text-center text-lg-left">
        <div className="col-12 mb-4">
          <Text variant="subtitle1" className="font-italic" color="textSecondary">Team</Text>
        </div>
        <div className="col-12 col-lg-6 mb-5">
          <Text variant="h6" style={{ fontFamily: 'Times New Roman' }}>Raphaël Gaultier</Text>
          <Text>Founder</Text>
        </div>
        <div className="col-12 col-lg-6 mb-5">
          <Text variant="h6" style={{ fontFamily: 'Times New Roman' }}>Jen Louie</Text>
          <Text>Editor in Chief</Text>
        </div>
        <div className="col-12 col-lg-6 mb-5">
          <Text variant="h6" style={{ fontFamily: 'Times New Roman' }}>Pari Gabriel</Text>
          <Text>Lead Designer</Text>
        </div>
        <div className="col-12 col-lg-6 mb-5">
          <Text variant="h6" style={{ fontFamily: 'Times New Roman' }}>Grace Novacek</Text>
          <Text>Writer</Text>
        </div>
        <div className="col-12 col-lg-6 mb-5">
          <Text variant="h6" style={{ fontFamily: 'Times New Roman' }}>Dylan Harris</Text>
          <Text>Content Developer</Text>
        </div>
        <div className="col-12 col-lg-6 mb-5">
          <Text variant="h6" style={{ fontFamily: 'Times New Roman' }}>Negin Shahbazi</Text>
          <Text>Videographer</Text>
        </div>
        <div className="col-12 col-lg-6 mb-5">
          <Text variant="h6" style={{ fontFamily: 'Times New Roman' }}>Aidan Galassetti</Text>
          <Text>Photographer/videographer</Text>
        </div>
        <div className="col-12 col-lg-6 mb-5">
          <Text variant="h6" style={{ fontFamily: 'Times New Roman' }}>Liam Brozik</Text>
          <Text>Videographer</Text>
        </div>
        <div className="col-12 col-lg-6 mb-5">
          <Text variant="h6" style={{ fontFamily: 'Times New Roman' }}>Ryan Washburne</Text>
          <Text>Web Developer</Text>
        </div>
      </div>
    </Section>

    <Bar />

    <Section yGutter>
      <div className="row text-center text-lg-left">
        <div className="col-12 mb-4">
          <Text variant="subtitle1" className="font-italic" color="textSecondary">Stockists</Text>
        </div>
        <div className="col-12 col-lg-6 mb-5">
          <Text variant="h6" style={{ fontFamily: 'Times New Roman' }}>Likelihood</Text>
          <Text>1101 E Union St, Seattle, WA 98122</Text>
        </div>
        <div className="col-12 col-lg-6 mb-5">
          <Text variant="h6" style={{ fontFamily: 'Times New Roman' }}>Can’t Blame the Youth</Text>
          <Text>674 S King St, Seattle, WA 98104</Text>
        </div>
        <div className="col-12 col-lg-6 mb-5">
          <Text variant="h6" style={{ fontFamily: 'Times New Roman' }}>The Elliott Bay Book Company</Text>
          <Text>1521 10th Ave, Seattle, WA 98122</Text>
        </div>
        <div className="col-12 col-lg-6 mb-5">
          <Text variant="h6" style={{ fontFamily: 'Times New Roman' }}>Hood Famous Bakeshop</Text>
          <Text>2325½ NW Market St, Seattle, WA 98107</Text>
        </div>
      </div>
    </Section>
  </>
)

export default About

export const query = graphql`
  query {
    file(relativePath: { eq: "about/about.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }  
`
