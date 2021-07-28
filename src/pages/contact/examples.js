import React from 'react'
import Link from 'gatsby-link'
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Hello!</h1>
              <p>
                Have any messages or images to share with Auxilium?
              </p>
              <p>Below are links to the pages for exactly that!</p>
              <ul>
              <Link className="navbar-item" to="/contact/">Basic Contact Form</Link>
              <Link className="navbar-item" to="/contact/file-upload">Forn With File Upload </Link>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
