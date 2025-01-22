import { css } from '@emotion/react'
import { graphql, Link } from 'gatsby'
import React from 'react'
import Container from '../components/Container'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import i18n from '../i18n'

const Archive = ({ data }) => {
  const {
    allMdx,
    site: { siteMetadata },
  } = data

  return (
    <Layout pageTitle={i18n.archive} pageName="archive">
      <Seo
        meta={{
          title: i18n.archive,
          description: siteMetadata.archiveDescription,
          slug: 'archive',
        }}
      />
      <Container>
        <h1
          css={css`
            margin-bottom: 2.7rem;
          `}
        >
          {i18n.archive}
        </h1>
        {allMdx.edges.map(({ node }) => {
          const { fields, id } = node

          return (
            <div
              key={id}
              css={css`
                :not(:first-of-type) {
                  margin-top: 20px;
                }
                display: flex;
                flex-direction: column;
              `}
            >
              <small>{fields.date}</small>
              <h2
                css={css`
                  font-size: 1.125rem;
                  margin-top: 8px;
                  margin-bottom: 10px;
                `}
              >
                <Link aria-label={`${i18n.view} ${fields.title}`} to={fields.pagePath}>
                  {fields.title}
                </Link>
              </h2>
            </div>
          )
        })}
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        archiveDescription
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { type: { eq: "blog" } } }
    ) {
      edges {
        node {
          id
          fields {
            pagePath
            title
            date(formatString: "MMMM DD, YYYY")
          }
          frontmatter {
            date
          }
        }
      }
    }
  }
`

export default Archive
