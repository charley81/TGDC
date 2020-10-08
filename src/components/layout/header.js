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
        }

        h1 a {
          color: #fff;
          transition: all 0.3s ease;
          &:hover {
            color: red;
          }
        }
      `}
    >
      <h1>
        <Link to='/'>TGDC</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
