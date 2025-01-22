import { css } from '@emotion/react'
import React from 'react'
import Container from '../components/Container'
import Layout from '../components/Layout'
import i18n from '../i18n'

const NotFound = () => (
  <Layout pageTitle="404">
    <Container>
      <span
        css={css`
          margin-bottom: 2.6rem;
        `}
      >
        {i18n.notFound}
      </span>
    </Container>
  </Layout>
)

export default NotFound
