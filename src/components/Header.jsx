import React from "react";
import "../assets/styles/components/Header.scss";

const Header = () => (
    <header className='header'>
        <img
            className='header__img'
            src='../index/assets/logo-platzi-video-BW2.png'
            alt='platzi-logo'
        />
        <div className='header__menu'>
            <div className='header__menu--profile'>
                <img
                    src='https://lh3.googleusercontent.com/ogw/ADGmqu8lh4shNXu8l63s9a4T_5A-pqcVKavh57GWFTKQRg=s64-c-mo'
                    alt='User'
                />
                <p>Perfil</p>
            </div>
            <ul>
                <li>
                    <a href='/'>Cuenta</a>
                </li>
                <li>
                    <a href='/'>Cerrar Sesión</a>
                </li>
            </ul>
        </div>
    </header>
);

export default Header;
