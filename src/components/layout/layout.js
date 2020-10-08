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
            font-size: 1.1rem;
            @media (min-width: 500px) {
              font-size: 1.5rem;
            }

            @media (min-width: 768px) {
              font-size: 2rem;
            }

            @media (min-width: 1000px) {
              font-size: 3rem;
            }
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
