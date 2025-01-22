import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/oceanicNext'
import React from 'react'

const Code = ({ children, className = 'language-js' }) => {
  const language = className.replace(/language-/, '')

  return (
    <Highlight {...defaultProps} code={children.trim()} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <code className={className} style={{ ...style }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </code>
      )}
    </Highlight>
  )
}

export default Code
