import React from 'react';
import s from './Friend.module.css'
import { NavLink } from 'react-router-dom';

const Friend = (props) => {
    return (
            <div className={s.friend}>
                <img src={props.image}/>
                <p className={s.name}>{props.name}</p>
            </div>
    );
}

export default Friend;