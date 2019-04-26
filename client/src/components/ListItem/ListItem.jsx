import React from 'react';
import { connect } from 'react-redux';

export class ListItem extends React.Component {
  handleRemove = (id) => {
    const { dispatch } = this.props;
    dispatch(listItemActions.remove(id));
  };

  render() {
    const { listItem } = this.props;
    return (
      <div>
        <input type="checkbox" />
        <span>{listItem.label}</span>
        <button type="button">cog</button>
        <button type="button" onClick={() => this.handleRemove(listItem.id)}>
          del
        </button>
      </div>
    );
  }
}
