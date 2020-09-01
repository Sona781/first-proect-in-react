import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from '../Profile.module.css';
import ProfileStatus from './ProfileStatus';

let ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            </div>
            <ProfileStatus status={"Hey bitch its me"} info={"Its me again"}/>
            <div className={s.avatar}>
                <img src={props.profile.photos.small} alt="Avatar" />
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>Looking for a job?</div>
                <span>{props.profile.lookingForAJob ? "Yesss i do" : "NO NO NOOOO"}</span>
            </div>
        </div>
    )  
}

export default ProfileInfo;