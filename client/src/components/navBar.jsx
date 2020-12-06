import React from 'react';

import { s3BucketName } from './../config.json'

const NavBar = () => {
    return (
        <nav>
            <img src={s3BucketName + 'logo-white.png'} alt="Pola's logo" className="logo" />
            <img src={s3BucketName + 'logo.png'} alt="Pola's logo" className="logo-black" />
            <ul className="main-nav js--main-nav">
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#location">Location</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#developers">Creators</a></li>
            </ul>
            <button className="mobile-nav-icon js--nav-icon">
                <i className="fas fa-bars"></i>
            </button>
        </nav>
    );
}

export default NavBar;