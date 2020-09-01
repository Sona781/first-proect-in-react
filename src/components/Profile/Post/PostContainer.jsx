import { onButtonHandlerActionCreator } from '../../../redux/profileReducer'
import Post from './Post';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(onButtonHandlerActionCreator(newPostText));
        }
    }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);

export default PostContainer;