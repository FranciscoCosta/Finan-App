"use client";
import React, { useState } from 'react';
import './Navbar.scss';
import Image from 'next/image';
import { logo, profile } from '@/assets';

const Navbar = () => {

    const [user, setUser] = useState({});
    return (
        <div className='Navbar'>
            <div className='Navbar__container'>
                <div className='Navbar__logo'>
                    <div className='Navbar__image-container'>
                        <Image src={logo} alt='logo' fill className='Navbar__image' />
                    </div>
                    <div className='Navbar__title'>
                        <h1>Finanç<span>App</span></h1>
                    </div>

                </div>
                <div className='Navbar__user'>
                    <div className='Navbar__user-image'>
                        <Image src={profile} alt='profile' fill className='Navbar__user' />
                    </div>
                    <div className='Navbar__button'>

                    {
                        user ? <button>Sair</button> : <button>Entrar</button>
                    }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar;