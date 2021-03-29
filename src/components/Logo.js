import React from 'react'
import {Link} from "react-router-dom";
export default function Logo() {
    return (
        <div className="header-brand">
            <Link to='/'>
                <img className="custom-logo" src="https://htmldemo.hasthemes.com/corify-preview/corify/assets/images/logo-2.png" alt="logo" />
            </Link>
            
        </div>
    )
}
