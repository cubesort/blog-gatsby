import { css } from '@emotion/react'
import React from 'react'
import i18n from '../i18n'

export const Email = ({ target }) => {
  return (
    <a
      href={target}
      aria-label={i18n.emailAria}
      css={css`
        display: inline-block;
        transform: translateY(2px);
      `}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 23 23">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"
        />
      </svg>
    </a>
  )
}

export const Feed = ({ target }) => {
  return (
    <a
      href={target}
      aria-label={i18n.feedAria}
      css={css`
        display: inline-block;
        transform: translateY(-3px);
      `}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 23 23">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12.8 16C12.8 8.978 7.022 3.2 0 3.2V0c8.777 0 16 7.223 16 16h-3.2zM2.194 11.61c1.21 0 2.195.985 2.195 2.196 0 1.21-.99 2.194-2.2 2.194C.98 16 0 15.017 0 13.806c0-1.21.983-2.195 2.194-2.195zM10.606 16h-3.11c0-4.113-3.383-7.497-7.496-7.497v-3.11c5.818 0 10.606 4.79 10.606 10.607z"
        />
      </svg>
    </a>
  )
}
