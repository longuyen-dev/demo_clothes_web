/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useDispatch } from 'react-redux';
import { validate_token } from "../redux/actions/auth"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    dispatch(validate_token())
  }, [dispatch]);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          padding: `0`,
          background: `#f3efeb`,
        }}
      >
        <main
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `62.25px 1.0875rem 1.45rem`,
          }}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
