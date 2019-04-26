import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { listActions } from '../../actions'

class CreateListPage extends React.Component {

    constructor(props) {
        super(props);

        const { user } = this.props;

        this.state = {
            list: {
                title: '',
                userId: user._id,
                rank: 0
            },
            submitted: false
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        const { list } = this.state;

        this.setState({
            list: {
                ...list,
                [name]: value
            }
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ submitted: true });
        const { list } = this.state;
        const { dispatch, user } = this.props;
        
        if(list.title) {
            dispatch(listActions.create(list));
            dispatch(listActions.getByUserId(user._id));
        }
    };

    render() {
        const { list, submitted } = this.state;

        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Create new list</h2>
                <form name="listCreation" onSubmit={this.handleSubmit}>
                    <div className={`form-group ${submitted && !list.title ? 'has-error' : ''}`}>
                        <label htmlFor="title">List title</label>
                        <input type="text" className="form-control" name="title" value={list.title} onChange={this.handleChange} />
                        {submitted && !list.title && (<div className="help-block">Title is required</div>)}
                    </div>
                    <div className="form-group">
                        <button className="btn">Create</button>
                        {submitted && (
                        <img
                            alt=""
                            src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                        />
                        )}
                        <Link to="/lists" className="btn-flat">
                        Cancel
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { user } = state;

    return {
        user
    };
}

const connectedPage = connect(mapStateToProps)(CreateListPage);
export { connectedPage as CreateListPage };