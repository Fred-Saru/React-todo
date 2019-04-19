import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">Todo</Link>
                    </div>
                    { !localStorage.getItem('user') ? (
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                    ) : (
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/lists">My lists</Link>
                            </li>
                            <li>
                                <Link to="/lists/create">New list</Link>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    const { authentication } = state;
    const { user } = authentication;

    return {
        user
    };
};

const connectedNavbar = connect(mapStateToProps)(Navbar);
export { connectedNavbar as Navbar};
