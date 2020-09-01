import React from 'react';
import s from './Sidebar.module.css'
import { NavLink } from 'react-router-dom';
import Friend from './Friends/Friend';

const Sidebar = () => {
    return (
        <div>
            <div className={s.nameFriends}>
                <h3>Friends</h3>
            </div>
            <div className={s.friends}>
                <Friend image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLbp5Q2dmBJ_tp7Ic0p5blvYoJTxLhhpgbHg&usqp=CAU" name="NIcki" />
                <Friend image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLbp5Q2dmBJ_tp7Ic0p5blvYoJTxLhhpgbHg&usqp=CAU" name="Sonya" />
            </div>
        </div>
    );
}

export default Sidebar;