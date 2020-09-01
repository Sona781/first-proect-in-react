import React from 'react';
import Header from './Header';
import Axios from 'axios';
import { connect } from 'react-redux';
import setAuthUserData, { loginAuth, logout } from '../../redux/authReducer'

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.loginAuth();
    }

    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {setAuthUserData, loginAuth, logout})(HeaderContainer);