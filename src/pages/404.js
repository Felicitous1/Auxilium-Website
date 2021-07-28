import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
const NotFoundPage = () => (
  <Layout>
        <section className="section">
      <div className="container">
        <div className="content">
          <h1>404!</h1>
          <p>This page does not exist</p>
           <Link className="navbar-item" to="/">Come back home</Link>
        </div>
      </div>
      
    </section>
  </Layout>
)

export default NotFoundPage
