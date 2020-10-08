import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout/layout'
import {css} from '@emotion/core'

export default function page404() {
  return (
    <Layout>
      <div css={css`
        text-align: center;
        margin-top: 5rem;

        a {
          color: red;
          transition: all 0.3s ease;
          &:hover {
            color: #fff;
          }
        }
      `}>
        <h1>This page doesn't exist</h1>
        <Link to='/'>Go Home</Link>
      </div>
    </Layout>
  )
}
