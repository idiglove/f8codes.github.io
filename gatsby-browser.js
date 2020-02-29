import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }
`

export const wrapRootElement = ({ element }) => {
    return (
        <>
            <GlobalStyle />
            {element}
        </>
    )
  }