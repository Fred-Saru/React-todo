import React from 'react';
import { connect } from 'react-redux';
import { ListItem } from '../ListItem/ListItem';

class List extends React.Component {
    render() {
        const { list } = this.props;
        return (
            <div>
                <h3>{list.name}</h3>
                <div>
                    {list.listItems.map(item => {
                        <ListItem listItem={item}></ListItem>
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { list } = state;
    return {
        list
    };
};

const connectedList = connect(mapStateToProps)(List);
export { connectedList as List };