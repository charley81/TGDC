import React from 'react'
import Layout from '../components/layout/layout'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

export default function Home() {
  return (
    <Layout>
      <div
        css={css`
          text-align: center;
          margin-top: 3rem;

          .contact {
            margin-top: 2rem;
          }

          a {
            color: red;
            border: 2px solid transparent;
            border-radius: 10px;
            &:hover {
              border: 2px solid red;
            }
          }
        `}
      >
        <h1>The Great Dev Co.</h1>
        <p>A Jamstack Digital Agency</p>
        <p className="contact">
          <Link to="/contact">Contact </Link>
          for early bird consultation
        </p>
      </div>
    </Layout>
  )
}
