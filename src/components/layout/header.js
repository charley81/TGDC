import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

export default function Header() {
  return (
    <nav
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;

        a {
          color: red;
          padding-left: 1rem;
          font-size: 1.3rem;

          @media (min-width: 500px) {
            font-size: 1.4rem;
          }
          @media (min-width: 768px) {
            font-size: 1.5rem;
          }
          @media (min-width: 1000px) {
            font-size: 1.7rem;
          }
        }
      `}
    >
      <h1>TGDC</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
