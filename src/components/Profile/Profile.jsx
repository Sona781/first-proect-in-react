import React, { useState } from 'react';
import s from './Profile.module.css';
import PostContainer from './Post/PostContainer';
import './header.jpg'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile} />
            <PostContainer />
        </div>
    );
}

export default Profile;