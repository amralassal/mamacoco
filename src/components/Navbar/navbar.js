import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Navbar extends Component {

  render() {
    return (

      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column mb-2">
            <li className="nav-item">
              <Link to="/tables" className="nav-link">
                <span data-feather="file-text"></span>
                Tables
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/settings" className="nav-link">
                <span data-feather="file-text"></span>
                Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/main" className="nav-link">
                <span data-feather="file-text"></span>
                Main
              </Link>
            </li>
            {/*<li className="nav-item">*/}
            {/*  <Link to="/menus" className="nav-link">*/}
            {/*    <span data-feather="file-text"></span>*/}
            {/*    Menus*/}
            {/*  </Link>*/}
            {/*</li>*/}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
