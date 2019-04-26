import React from 'react';
import { connect } from 'react-redux';
import { ListItem } from '../ListItem/ListItem';

class EditListPage extends React.Component {
    render() {
        // const { list } = this.props;
        // return (
        //     <div>
        //         <h3>{list.name}</h3>
        //         <div>
        //             {list.listItems.map(item => {
        //                 <ListItem listItem={item}></ListItem>
        //             })}
        //         </div>
        //     </div>
        // );
        return <p>Nothing here.</p>
    }
}

const mapStateToProps = (state) => {
    return {};
};

const connectedPage = connect(mapStateToProps)(EditListPage);
export { connectedPage as EditListPage };