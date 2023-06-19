import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div className="navigation">
        <div className="left">
          <h1 className="logo">{props.title}</h1>
        </div>
        <div className="right">
          <ul className="navList">
            <li className="navItems">
              <a href="/">Home</a>
            </li>
            <li className="navItems"><a href="/">About</a></li>
            <li className="navItems">
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
  )
}


Navbar.propTypes = {
    title: PropTypes.string,
    titleText: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Amazon',
    titleText: 'this is to be filled'
}