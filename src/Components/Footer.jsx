import React from 'react'

const Footer = () => {
  return (
    <div className='containerFooter'>
        <div className='endereco'>
            <p>Rua Doutor Dirceu Moraes 316, Planalto</p>
            <p>16072350 - Araçatuba,Sp</p>
            <p>CNPJ - 52.255.192/0001-80</p>
        </div>
        <div className="logo-footer">
            <img className='logoRetorno' src="/assets/logo.png" alt="logo retorno" />
        </div>
        <div className="sociais-footer">
              <a href="https://wa.me/5518996751373?text=olá%2C%20entrei%20no%20seu%20site%20e%20gostaria%20de%20conversar%20mais%20sobre%20seus%20planos%21"
                target="_blank"
                rel="noopener noreferrer"><img className='SocialLogo' src="/assets/wp.png" alt="whatsApp Logo" /></a>
                <a href="https://www.instagram.com/retornomarketingdigital/"><img className='SocialLogo'  src="/assets/insta.png" alt="Instagram Logo" /></a>
                <a href="https://www.facebook.com/retornomarketingdigital/"><img className='SocialLogo'  src="/assets/face.png" alt="Facebook Logo" /></a>
        </div>
    </div>
  )
}

export default Footer