import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Container from './Container'
import { Email, Feed } from './Social'

const Footer = () => {
  const {
    site: {
      siteMetadata: { author, footer },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author {
            name
          }
          footer {
            copyRightYears
            email
            feedPath
          }
        }
      }
    }
  `)

  return (
    <footer>
      <Container noVerticalPadding>
        <div className="footer-container">
          <div
            className="dark-link"
            css={css`
              opacity: 0.7;
              a {
                display: inline-block;
                :not(:first-of-type) {
                  margin-left: 10px;
                }
              }
            `}
          >
            <Email target={footer.email} />
            <Feed target={footer.feedPath} />
          </div>
          <div
            css={css`
              margin-top: 1rem;
              opacity: 0.7;
            `}
          >
            {`\u00A9 ${footer.copyRightYears} ${author.name}`}
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
