import { css } from '@emotion/react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import i18n from '../i18n'
import Container from './Container'

const Header = ({ pageName }) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header>
      <Container
        noVerticalPadding
        css={css`
          margin-bottom: 16px;
        `}
      >
        <h1>
          <Link
            to="/"
            aria-label={i18n.homeAria}
            css={css`
              text-decoration: none;
              font-size: 2.3rem;
              font-weight: 600;
              line-height: 1.55;
            `}
          >
            {title}
          </Link>
        </h1>
        <nav
          className="header-navigation dark-link"
          css={css`
            display: flex;
            justify-content: space-between;
            margin-top: 1rem;
            width: 7.5rem;
          `}
        >
          <Link
            to="/archive"
            aria-label={i18n.archiveAria}
            css={css`
              ${pageName === 'archive' ? 'font-weight: 600' : ''};
            `}
          >
            {i18n.archive}
          </Link>
          <Link
            to="/about"
            aria-label={i18n.aboutAria}
            css={css`
              ${pageName === 'about' ? 'font-weight: 600' : ''};
            `}
          >
            {i18n.about}
          </Link>
        </nav>
      </Container>
    </header>
  )
}

export default Header
