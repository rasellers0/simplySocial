import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';

function Header () {

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" href="/main">simplySocial</a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active"><Link className="nav-link" to="/Friends">Friends</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/Search">User Search</Link></li>
          {/* <li className="nav-item"><Link className="nav-link" to="/Search">My Profile</Link></li> */}
          <li className="nav-item"><Link className="nav-link" to="/Profile/3">My Profile</Link></li>
        </ul>
    </nav>
  );
}

export default Header;
