import React, { Component } from "react";

// Stateless Compound
const NavBar =(props)=>{
    return (
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Navbar
          <span className="badge badge-pill badge-secondary">{props.totalCounter}</span>
          </span>
        </nav>
      );
}
/* class NavBar extends Component {
  render() {
    return (
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Navbar
          <span className="badge badge-pill badge-secondary">{this.props.totalCounter}</span>
          </span>
        </nav>
      );
  }
} */

export default NavBar;
