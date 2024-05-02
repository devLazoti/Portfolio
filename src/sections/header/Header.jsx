import React from 'react'
import './header.css'
import { Button } from '../../components/button/Button'

export const Header = () => {
  return (
    <header>
        <nav>
            <ul className='header__menu'>
                <a href="#main" className='header__menu-item'><li>Home</li></a>
                <a href="/" className='header__menu-item'><li>About</li></a>
                <a href="/" className='header__menu-item'><li>Skills</li></a>
            </ul>
        </nav>
        <div className='header__logo'>&lt;rl&gt;</div>
        <Button href='/'>Contact-me</Button>
    </header>
  )
}
