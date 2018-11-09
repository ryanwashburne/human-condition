import React from 'react'

import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaSoundcloud } from 'react-icons/fa'
import { Section, Link, Text } from './index'

class Footer extends React.Component {
  render() {
    return (
      <div className="pt-5">
        <hr style={{ width: '40%', borderColor: '#1d191b' }} />
        <Section fluid className="pb-5">
          <div className="row">
            <div className="col-6 col-lg-4 text-center text-lg-left pl-auto pl-lg-5">
              <Text style={{ fontFamily: 'Human' }} variant="h6"><Link to="/">HUMAN CONDITION</Link></Text>
            </div>
            <div className="d-none d-lg-block col-lg-4 text-center">
              <Text className="font-italic">Human Condition &copy;{new Date().getFullYear()}</Text>
            </div>
            <div className="col-6 col-lg-4 pr-auto pr-lg-5 d-block d-lg-flex justify-content-end">
              <Text variant="subtitle1" style={{ minWidth: 150 }} className="d-flex justify-content-between">
                <Link href="https://facebook.com/humanconditionmag">
                  <FaFacebook />
                </Link>
                <Link href="https://twitter.com/h_mancondition">
                  <FaTwitter />
                </Link>
                <Link href="https://www.instagram.com/h_mancondition">
                  <FaInstagram />
                </Link>
                <Link href="https://www.youtube.com/channel/UCRc6KQ9uCxQEmGeHx2as0GA">
                  <FaYoutube />
                </Link>
                <Link href="https://soundcloud.com/user-491231359">
                  <FaSoundcloud />
                </Link>
              </Text>
            </div>
          </div>
        </Section>
      </div>
    )
  }
}

export default Footer
