import React from 'react';
import s from './Preloader.module.css'

let Preloader = (props) => {
    return (
        <div className={s['lds-default']}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}

export default Preloader;