import React from 'react'

import { Layout, Text, Img, Section, TextBlob } from './'

export default ({ title, caption, src, interview, date, photography, videography, description, children, cover }) => {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">

          <div className="d-none d-lg-flex col-12 col-lg-5 flex-column py-4 px-lg-4">
            <div style={{ marginTop: '5vw' }} className="flex-grow-1">
              <Text variant="h2" color="textPrimary" className="text-uppercase mt-2 mt-lg-4" gutterBottom>{title}</Text>
              <Text variant="subtitle1" color="textPrimary" paragraph>{caption}</Text>
              <Text gutterBottom className="font-italic">{date}</Text>
            </div>
            <div>
              {interview && <Text className="font-italic" gutterBottom>Interview: {interview}</Text>}
              {photography && <Text className="font-italic" gutterBottom>Photography: {photography}</Text>}
              {videography && <Text className="font-italic" gutterBottom>Videography: {videography}</Text>}
            </div>
          </div>

          <div className="d-block d-lg-none col-12">
            <Section yGutter>
              <Text variant="h4" className="text-uppercase">{title}</Text>
              <Text variant="subtitle1" gutterBottom>{caption}</Text>
              <Text className="font-italic">{date}</Text>
              <div className="mt-4">
                {interview && <Text className="font-italic" gutterBottom>Interview: {interview}</Text>}
                {photography && <Text className="font-italic" gutterBottom>Photography: {photography}</Text>}
                {videography && <Text className="font-italic" gutterBottom>Videography: {videography}</Text>}
              </div>
            </Section>
          </div>

          <div className="col-12 col-lg-7 p-0">
            <div className="d-none d-lg-block">
              <Img fluid={cover.childImageSharp.fluid} style={{ height: 'calc(100vh - 50px)' }} className="w-100" />
            </div>
            <div className="d-block d-lg-none">
              <Img fluid={cover.childImageSharp.fluid} />
          </div>
          </div>
        </div>
      </div>
      <Section>
        <div className="mt-4 mt-lg-5 font-italic">
          <TextBlob>{description}</TextBlob>
        </div>
      </Section>
      {children}
    </Layout>
  )
}
