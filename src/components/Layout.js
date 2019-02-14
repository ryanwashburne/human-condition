import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './layout.css'

import Header from './Header'
import Footer from './Footer'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
const theme = createMuiTheme({
  palette: {
    text: {
      primary: '#1d191b'
    }
  },
  typography: {
    useNextVariants: true, // disable later
    fontSize: 15,
    fontFamily: 'Times New Roman',
    subtitle1: {
      fontFamily: 'Superclarendon'
    },
    h1: {
      fontFamily: 'Superclarendon'
    },
    h2: {
      fontFamily: 'Superclarendon'
    },
    h3: {
      fontFamily: 'Superclarendon'
    },
    h4: {
      fontFamily: 'Superclarendon'
    },
    h5: {
      fontFamily: 'Superclarendon'
    },
    h6: {
      fontFamily: 'Superclarendon'
    }
  }
})

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div style={{ backgroundColor: '#f8f6ed' }}>
        <MuiThemeProvider theme={theme}>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Human Condition is an independent magazine dedicated to providing a platform for emerging artists in Seattle and beyond.' },
              { name: 'keywords', content: 'Human, Condition, Magazine, Seattle, Art, Culture' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </MuiThemeProvider>
      </div>
    )}
  />
)

export default Layout
