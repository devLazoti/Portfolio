import React from 'react'
import './button.css'

export const Button = ({ href, children}) => {
  return (
    <a href={href} className='button'>{children}</a>
  )
}
