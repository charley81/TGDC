import React from 'react'
import Layout from '../components/layout/layout'
import { css } from '@emotion/core'

export default function ContactPage() {
  return (
    <Layout>
      <div
        css={css`
          max-width: 700px;
          margin: 5rem auto 0;
          padding: 1rem;
          border-radius: 3px;

          p {
            text-align: center;
          }

          label {
            display: block;
            width: 100%;
            margin: 1rem 0;
            font-size: 1rem;
          }

          input,
          textarea {
            display: block;
            width: 100%;
            border-radius: 5px;
            padding: 1rem;
            border: transparent;
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
        <p>Leave us a message</p>
        <form name="contact" method="POST" data-netlify="true">
          <label>
            Name:
            <input type="text" placeholder="Enter Name" />
          </label>
          <label>
            Email:
            <input type="email" placeholder="Enter Email" />
          </label>
          <label>
            Message:
            <textarea
              cols="30"
              rows="10"
              placeholder="Enter Message"
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  )
}
