import React from 'react'
import { createGlobalStyle } from 'styled-components'
require("./src/styles/prism-material-dark.css")

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;

    #___gatsby, #gatsby-focus-wrapper {
      height: 100%;
    }
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