import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends React.PureComponent {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper container">
            <Link to="/" className="brand-logo">
              Todo
            </Link>
            {!localStorage.getItem('user') ? (
              <ul className="right">
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            ) : (
              <ul className="right">
                <li>
                  <Link to="/lists">My lists</Link>
                </li>
                <li>
                  <Link to="/login">Logout</Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state;

  return {
    user
  };
};

const connectedNavbar = connect(mapStateToProps)(Navbar);
export { connectedNavbar as Navbar };
