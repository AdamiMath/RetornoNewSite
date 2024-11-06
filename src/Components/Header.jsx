import React from 'react'
import Nav from './Nav'
import Servicos from './Servicos'

const Header = () => {
  return (
    <div className='header'>
        <Nav />
        <div className='HeaderContainer'>
            <div className="text-header">
                <h1 className='h1-header'>Decole com a Retorno!</h1>
                <p className='p-padrao'>Embarque na missão que vai levar sua marca para outra galáxia!
                    Na Retorno Marketing Digital, combinamos estratégia e criatividade para impulsionar
                    negócios como o seu rumo ao sucesso estelar. 
                    Com nossa tripulação especializada, desde redes sociais até tráfego pago e
                    criação de sites, vamos além do ordinário para transformar cada campanha em uma
                    jornada intergaláctica de resultados.
                </p>
                <a href=""><span className='span'>Entre em Contato</span></a>
                
            </div>
            <div className='imgs-header'>
                <img className='img-avatar' src="/assets/avatar.png" alt="avatar do logo" />
            </div>
        </div>
        <Servicos />
        

    </div>
  )
}

export default Header