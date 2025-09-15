import React from 'react'
import {Button} from '@mui/material'

const Nav = () => {
  return (
    <nav className='nav'>
        <a className='divLogo'><img className='logoRetorno' src="/assets/logo.png" alt="logo da retorno" /></a>
        <div className='ContainerMenuSocial'>
            <div className='divMenu'>
                <ul className='ulMenu'>
                    <a href='#servicos'><li>Serviços</li></a>
                    <a href='#clientes'><li>Clientes</li></a>
                    <a href='#certificacao'><li>Certificação</li></a>
                </ul>
            </div>
            <div className='socialMediaDiv'>
                <a href="https://wa.me/5518996751373?text=olá%2C%20entrei%20no%20seu%20site%20e%20gostaria%20de%20conversar%20mais%20sobre%20seus%20planos%21"
                target="_blank"
                rel="noopener noreferrer"><img className='SocialLogo' src="/assets/wp.png" alt="whatsApp Logo" /></a>
                <a href="https://www.instagram.com/retornomarketingdigital/"><img className='SocialLogo'  src="/assets/insta.png" alt="Instagram Logo" /></a>
                <a href="https://www.facebook.com/retornomarketingdigital/"><img className='SocialLogo'  src="/assets/face.png" alt="Facebook Logo" /></a>
                <Button 
  variant="outlined" 
  style={{ color: '#fff', borderColor: '#fff', whiteSpace: 'nowrap' }}
  component="a"
  href="https://wa.me/5518996751373?text=olá%2C%20entrei%20no%20seu%20site%20e%20gostaria%20de%20conversar%20mais%20sobre%20seus%20planos%21"
  target="_blank"
  rel="noopener noreferrer"
>
  Entre em Contato
</Button>
            </div>
        </div>
    </nav>
  )
}

export default Nav