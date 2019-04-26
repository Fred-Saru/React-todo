import React from 'react';
import { Route, Router } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../helpers';
import { alertActions } from '../actions';
import { PrivateRoute } from './_shared/PrivateRoute';
import { HomePage } from './HomePage/HomePage';
import { LoginPage } from './LoginPage/LoginPage';
import { RegisterPage } from './RegisterPage/RegisterPage';
import { Navbar } from './Navbar/Navbar';
import { UserListsPage } from './UserListsPage/UserListsPage';
import { CreateListPage } from './CreateListPage/CreateListPage';
import { EditListPage } from './EditListPage/EditListPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;

    return (
      <Router history={history}>
        <div>
          <Route path="/" component={Navbar} />
          <div className="container">
            <div className="col-sm-8 col-sm-offset-2">
              {alert.message && (
                <div className={`alert ${alert.type}`}>{alert.message}</div>
              )}
              <PrivateRoute exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <PrivateRoute exact path="/lists" component={UserListsPage} />
              <PrivateRoute path="/lists/create" component={CreateListPage} />
              <PrivateRoute path="/lists/edit/:id" component={EditListPage} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  const { alert } = state;
  return {
    alert
  };
};

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
