import { css } from '@emotion/react'
import React from 'react'
import { bpMobile } from '../lib/breakpoints'

const Container = (props) => {
  const { noVerticalPadding = false, ...restProps } = props

  const maxContentWidthMobile = 460
  const maxContentWidth = 620

  return (
    <div
      css={css`
        width: 100%;
        margin: 0 auto;
        max-width: ${maxContentWidth + 80}px;
        padding: ${noVerticalPadding ? 0 : '40px'} 40px;
        ${bpMobile} {
          max-width: ${maxContentWidthMobile + 40}px;
          padding: ${noVerticalPadding ? 0 : '20px'} 20px;
        }
      `}
      {...restProps}
    >
      {props.children}
    </div>
  )
}

export default Container
