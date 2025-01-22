import { css } from '@emotion/react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import Container from '../components/Container'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import i18n from '../i18n'

const About = ({ data }) => {
  const {
    mdx: { fields, body },
    site: { siteMetadata },
  } = data

  return (
    <Layout pageTitle={i18n.about} pageName="about">
      <Seo
        meta={{
          title: fields.title,
          description: siteMetadata.aboutDescription,
          slug: 'about',
        }}
      />
      <Container
        css={css`
          p:last-of-type {
            margin-bottom: 0;
          }
        `}
      >
        <article>
          <h1
            css={css`
              margin-bottom: 2.7rem;
            `}
          >
            {fields.title}
          </h1>
          <MDXRenderer>{body}</MDXRenderer>
        </article>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        aboutDescription
      }
    }
    mdx(fields: { type: { eq: "page" }, slug: { eq: "about" } }) {
      fields {
        title
        pagePath
      }
      body
    }
  }
`

export default About
