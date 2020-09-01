import React from 'react';
import s from './MyPost.module.css';

const MyPost = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://filmdaily.co/wp-content/uploads/2020/05/coughing-cat-meme-lede.jpg"/>
                { props.message }
                <div>
                    like { props.likecounter }
                </div>
            </div>
        </div>
    )
}

export default MyPost;