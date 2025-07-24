import React from 'react'
import {Button} from '@mui/material'

const Nav = () => {
  return (
    <nav className='nav'>
        <a className='divLogo'><img className='logoRetorno' src="/assets/logo.png" alt="logo da retorno" /></a>
        <div className='ContainerMenuSocial'>
            <div className='divMenu'>
                <ul className='ulMenu'>
                    <li>Serviços</li>
                    <li>Clientes</li>
                    <li>Sobre Nós</li>
                </ul>
            </div>
            <div className='socialMediaDiv'>
                <a href=""><img className='SocialLogo' src="/assets/wp.png" alt="whatsApp Logo" /></a>
                <a href=""><img className='SocialLogo'  src="/assets/insta.png" alt="Instagram Logo" /></a>
                <a href=""><img className='SocialLogo'  src="/assets/face.png" alt="Facebook Logo" /></a>
                <Button variant='outlined' style={{color: '#fff', borderColor: '#fff'}}>Entre em Contato</Button>
            </div>
        </div>
    </nav>
  )
}

export default Nav