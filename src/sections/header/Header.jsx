import React from 'react'
import './header.css'

export const Header = () => {
  return (
    <header>
        <nav>
            <ul className='header__menu'>
                <li className='header__menu-item'>Home</li>
                <li className='header__menu-item'>About</li>
                <li className='header__menu-item'>Skills</li>
            </ul>
        </nav>
        <div className='header__logo'>&lt;rl&gt;</div>
        <a href="/" className='header__button'>Contact-me</a>
    </header>
  )
}
