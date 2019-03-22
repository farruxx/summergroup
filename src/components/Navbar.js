import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand" style={{display:'flex', flex: 1, justifyContent:'space-between'}}>
            <Link to="/" className="navbar-item" title="Summergroup">
              <img src={logo} alt="Summergroup" style={{ width: "188px" }} />
            </Link>
            <div style={{margin: 20}}>
              <p>Мурожаат учун:</p>
              <p>+99899 8865646</p>
              <p>@summergroup</p>
            </div>
            </div>
            </div>

         
      </nav>
    );
  }
};

export default Navbar;
