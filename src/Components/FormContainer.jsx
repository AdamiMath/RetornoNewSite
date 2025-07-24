import React from 'react'

const FormContainer = () => {
  return (
    <div className='ContainerForm'>
        <div className='imageForm'>
            <img className='formimage' src="/assets/formimage.png" alt="Imagem de pessoas trabalhando em um cartoon" />
        </div>
        <div className='Form'>
            <h3 className='h3-contato'>Entre em Contato</h3>
            <form action="">
                <input type="text" placeholder='Primeiro Nome'/>
                <input type="text" placeholder='Último Nome'/><br />
                <input type="email" placeholder='Endereço de E-mail'/>
                <input type="text" placeholder='Número de Certo'/><br />
                <input className='inputText' type="textarea" placeholder='Mensagem'/>
                
            </form>
            <button className='buttonEnviar'>Enviar</button>
        </div>
    </div>
  )
}

export default FormContainer