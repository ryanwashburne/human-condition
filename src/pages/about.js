import React from 'react'
import { graphql } from 'gatsby'

import { Layout, Section, Img, Text, Bar } from '../components'

const About = ({ data }) => (
  <Layout>
    <Section yGutter>
      <div className="row">
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          <Img fluid={data.file.childImageSharp.fluid} style={{ height: 400 }}/>
        </div>
        <div className="col-12 col-lg-6">
          <Text variant="subtitle1" className="font-italic" paragraph>Who are we?</Text>
          <Text paragraph>Human Condition is an independent magazine dedicated to providing a platform for emerging artists in Seattle and beyond. Human Condition was founded in 2017 centered around the principals of community empowerment, sharing underrepresented voices, and fortifying the arts in Seattle. </Text>
          <Text>Through publishing a biannual magazine, curating events, and developing a web/mobile platform for artists, Human Condition continues to bring people together, and share the thoughts and work of talented local artists. </Text>
        </div>
      </div>
    </Section>

    <Bar />

    <Section yGutter>
      <div className="row text-center text-lg-left">
        <div className="col-12 mb-4">
          <Text variant="subheading" className="font-italic" color="textSecondary">Team</Text>
        </div>
        <div className="col-12 col-lg-6 mb-4">
          <Text variant="title">Raphaël Gaultier</Text>
          <Text>Founder</Text>
        </div>
        <div className="col-12 col-lg-6 mb-4">
          <Text variant="title">Jen Louie</Text>
          <Text>Editor in Chief</Text>
        </div>
        <div className="col-12 col-lg-6 mb-4">
          <Text variant="title">Pari Gabriel</Text>
          <Text>Lead Designer</Text>
        </div>
        <div className="col-12 col-lg-6 mb-4">
          <Text variant="title">Grace Novacek</Text>
          <Text>Writer</Text>
        </div>
      </div>
    </Section>

    <Bar />

    <Section yGutter>
      <div className="row text-center text-lg-left">
        <div className="col-12 mb-4">
          <Text variant="subheading" className="font-italic" color="textSecondary">Stockists</Text>
        </div>
        <div className="col-12 col-lg-6 mb-4">
          <Text variant="title">Likelihood</Text>
          <Text>1101 E Union St, Seattle, WA 98122</Text>
        </div>
        <div className="col-12 col-lg-6 mb-4">
          <Text variant="title">Can’t Blame the Youth</Text>
          <Text>674 S King St, Seattle, WA 98104</Text>
        </div>
      </div>
    </Section>
  </Layout>
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
