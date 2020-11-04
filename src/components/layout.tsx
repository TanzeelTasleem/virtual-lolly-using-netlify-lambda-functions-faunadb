import React from "react"
import PropTypes from "prop-types"
import Header from "./header/header"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={`Title`} />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
