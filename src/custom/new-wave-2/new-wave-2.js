import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import { Section, IFrame, Text, Img, Modal, Button } from '../../components'
import People from './People'

class NewWave2 extends React.Component {
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
            allFile(filter: { relativePath: { regex: "/^interviews\/new-wave-2\/.+(.jpg|.png)$/" }}) {
              edges {
                node {
                  name
                  childImageSharp {
                    fluid(maxHeight: 800) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        `}
        render={(data) => {
          const photos = {}
          data.allFile.edges.forEach((node) => {
            photos[node.node.name.toLowerCase()] = node.node.childImageSharp
          })
          return (
            <div>
              <Section>
                <IFrame src={'https://www.youtube.com/embed/2HZNn21Zvko'} />
              </Section>

              <Section yGutter>
                <div className="row">
                  {People.map((person, i) => (
                    <div key={i} className="col-12 col-sm-6 col-lg-4 mb-5 text-center">
                      <div onClick={() => this.handleOpen(person)}>
                        <Img fluid={photos[`${person.id.toLowerCase()}-profile`].fluid} style={{ height: 400 }} />
                      </div>
                      <Text align="center" variant="subtitle1" className="mt-2">{person.name}</Text>
                    </div>
                  ))}
                </div>
              </Section>

              {person &&
                <Modal
                  open={!!person}
                  handleClose={this.handleClose}
                  actions={[
                    <Button onClick={this.handleClose} className="san-serif">Close</Button>
                  ]}
                >
                  <div className="row no-gutters">
                    <div className="col-12 col-lg-6 text-center text-lg-right px-0">
                      <Img fluid={photos[`${person.id.toLowerCase()}-left`].fluid} style={{ height: 400 }} />
                    </div>
                    <div className="col-12 col-lg-6 text-center text-lg-left px-0">
                      <Img fluid={photos[`${person.id.toLowerCase()}-right`].fluid} style={{ height: 400 }} />
                    </div>
                  </div>
                  {person.content}
                </Modal>
              }
            </div>
          )
        }}
      />
    )
  }
}

export default NewWave2