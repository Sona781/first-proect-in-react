import React from 'react';
import s from './Post.module.css';
import MyPost from '../MyPost/MyPost';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';

const maxLength10 = maxLengthCreator(10);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={s.textarea} component={"textarea"}
                name={"post"} validate={[required, maxLength10]}></Field>
            <button>Add Post</button>
            <button>Remove</button>
        </form>
    )
}

const Post = (props) => {
    let onButtonHandler = (values) => {
        props.addPost(values.newPostText);
    }

    let postElement = props.posts.map((p) => <MyPost message={p.message} likecounter={p.likesCount} post={props.posts} />)

    return (
        <div>
            <div className={s.my_posts}>
                My posts
            </div>
            <PostReduxForm onSubmit={onButtonHandler} />
            <div className={s.new_post}>
                New post
            </div>
            {postElement}
        </div>
    )
}

const PostReduxForm = reduxForm({
    form: "addPost"
})(PostForm)

export default Post;