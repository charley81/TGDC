import React from 'react'
import Layout from '../components/layout/layout'
import { css } from '@emotion/core'

export default function ContactPage() {
  return (
    <Layout>
      <div
        css={css`
          max-width: 700px;
          margin: auto;
          padding: 1rem;

          h3 {
            text-align: center;
          }

          label {
            display: block;
            width: 100%;
            margin: 1rem 0;
          }

          input,
          textarea {
            display: block;
            width: 100%;
            border-radius: 3px;
            padding: 1rem;
          }

          button {
            width: 100%;
            padding: 1rem;
            border-radius: 3px;
            color: #fff;
            background: red;
            border: transparent;
            cursor: pointer;
            font-family: 'Montserrat', sans-serif;
            transition: all 0.3s ease;
            &:hover {
              background: #fff;
              color: red;
            }
          }
        `}
      >
        <h3>Leave us a message</h3>
        <form name="contact" method="POST" data-netlify="true">
          <label>
            Name:
            <input type="text" />
          </label>
          <label>
            Email:
            <input type="email" />
          </label>
          <label>
            Message:
            <textarea cols="30" rows="10"></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  )
}
