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
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container" >
          <div className="navbar-brand" style={{display:'flex', backgroundColor: 'black', flex: 1, justifyContent:'space-between'}}>
            <Link to="/" className="navbar-item" title="Summergroup">
              <img src={logo} alt="Summergroup" style={{ width: "1 08px" }} />
            </Link>
            <div style={{margin: 20, display:'flex', alignItems:'flex-end', flexDirection:'column'}}>
              <p style={{color: 'white'}}>Мурожаат учун:</p>
              <a  style={{color: 'white'}} href="tel:+998998865646">+99899 8865646</a>
              <a  style={{color: 'white'}} href="https://t.me/summergroup">@summergroup</a>
            </div>
            </div>
            </div>

         
      </nav>
    );
  }
};

export default Navbar;
