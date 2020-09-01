import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, unfollow, setCurrentPage, toggleIsFetching, getUsers, followThunk } from '../../redux/usersReducer';
import Preloader from '../common/preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageClick = (p) => {
        this.props.getUsers(p, this.props.pageSize);
    }

    render() {
        return (
            <>

                {this.props.isFetching ?
                    <Preloader />
                    : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageClick={this.onPageClick}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followThunk={this.props.followThunk}
                />
            </>
        )
    }

}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow, unfollow,
        setCurrentPage,
        toggleIsFetching, getUsers, followThunk
    })
) (UsersContainer);
