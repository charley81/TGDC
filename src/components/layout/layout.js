import React from 'react'
import { Global, css } from '@emotion/core'
import Header from './header'

export default function Layout({ children }) {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            line-height: 1.5;
            background: #333;
            color: #fff;
            font-family: 'Montserrat', sans-serif;
          }

          img {
            width: 100%;
          }

          a {
            text-decoration: none;
          }

          li {
            list-style: none;
          }
        `}
      />
      <Header />
      <main>{children}</main>
      <footer></footer>
    </>
  )
}
