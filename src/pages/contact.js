import React from 'react'
import Layout from '../components/layout/layout'
import { css } from '@emotion/core'

export default function ContactPage() {
  return (
    <Layout>
      <div
        css={css`
          max-width: 700px;
          margin: 1rem auto 0;
          padding: 1rem;
          border-radius: 3px;
      
          @media (min-width: 768px) {
            font-size: 1.5rem;
          }

          @media (min-width: 1000px) {
            font-size: 2rem;
          }

          form {
            height: 100vh;
          }

          p {
            text-align: center;
            font-size: 1.3rem;
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
            padding: 0.5rem;
          }

          button {
            width: 100%;
            padding: 1rem;
            border-radius: 3px;
            color: #fff;
            border: transparent;
            background: red;
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
        <input type="hidden" name='form-name' value='contact'/>
          <label>
            Name:
            <input type="text" placeholder="Enter Name" name='name'/>
          </label>
          <label>
            Email:
            <input type="email" placeholder="Enter Email" name='email'/>
          </label>
          <label>
            Message:
            <textarea
              cols="30"
              rows="10"
              placeholder="Enter Message"
              name='message'
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  )
}
