import React from 'react';
import './styles.css';

export default ({black})=>{
    return(
        <header className={black ?"black" : ''}>
            <div className="header--logo">
                <img src="https://github.com/kardrean/clone_NETFLIX_React/blob/main/src/components/Header/logo.png?raw=true"/>
            </div>
            <div className="header--user">
                <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"/>
            </div>
        </header>
    )
}