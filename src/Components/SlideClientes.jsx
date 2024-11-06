import React from 'react'
import SlideCustomerContent from './SlideCustomerContent'

const SlideClientes = () => {
  return (
    <div>
        <div className='Controllers'>
            <button className='prev'>Anterior</button>
            <button disabled className='controllerlogo'><img src="" alt="logo Retorno" />Logo Retorno</button>
            <button className='next'>Próximo</button>
        </div>
        <SlideCustomerContent />
    </div>
  )
}

export default SlideClientes