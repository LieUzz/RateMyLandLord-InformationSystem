import React from 'react';

import './navbar.css'


export const Navigation = () => { 

    return(
        <div className='header'>
            <img alt='' className='header-log' src={require("../../assets/image/home.png")}></img>
            <div className='logo-title'>
                <span>Rate My</span>
                <span>Landlord</span>
            </div>
            <div style={{ flex: 1 }}></div>
            <div className='signup-button'>
            sign up
            </div>
            <div className='login-button'>
            login
            </div>
            <img alt='' className='user-log' src={require("../../assets/image/user.png")}></img>
        </div>
    )
}