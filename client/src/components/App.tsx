import * as React from 'react';
import { Route, Router } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../helpers';
import { alertActions } from '../actions';
import { PrivateRoute } from './_shared/PrivateRoute';
import { LoginPage } from './LoginPage/LoginPage';
import { RegisterPage } from './RegisterPage/RegisterPage';
import { Navbar } from './Navbar/Navbar';
import { UserListsPage } from './UserListsPage/UserListsPage';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location: any, action: string) => {
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
            {alert.message && (
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            )}
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <PrivateRoute exact path="/lists" component={UserListsPage} />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state: any) => {
  const { alert } = state;
  return {
    alert
  };
};

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
