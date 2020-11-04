import React from "react"
import PropTypes from "prop-types"
import Header from "./header/header"

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <div>
        <div>{children}</div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
