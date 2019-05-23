import * as React from 'react';
import { ListCreator } from '../ListCreator/ListCreator';
import { DisplayLists } from '../DisplayLists/DisplayLists';

export class UserListsPage extends React.Component {
  render() {
    return (
      <div>
        <h3>My lists</h3>
        <ListCreator />
        <DisplayLists />
      </div>
    );
  }
}
