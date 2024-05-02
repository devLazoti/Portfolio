import React from 'react'
import { Button } from '../../components/button/Button'
import Vetor from '../../assets/vetor.svg'
import CV from '../../assets/CV - Renan Lazoti.pdf'

import './main.css'

export const Main = () => {
  return (
    <section id='main'>
        <img src={Vetor} alt="personal vetor" className='main__vetor' />
        <div className='main__text'>
            <p className='text-presentation'>Olá, meu nome é</p>
            <p className='text-name'>Renan Lazoti</p>
            <p className='text-function'>Desenvolvedor Full Stack</p>
        </div>
        <Button href={CV} download>Download CV</Button>
    </section>
  )
}
