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
                <a href=""><img className='SocialLogo' src="/assets/wp.png" alt="whatsApp Logo" /></a>
                <a href=""><img className='SocialLogo'  src="/assets/insta.png" alt="Instagram Logo" /></a>
                <a href=""><img className='SocialLogo'  src="/assets/face.png" alt="Facebook Logo" /></a>
        </div>
    </div>
  )
}

export default Footer