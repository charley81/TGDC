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
