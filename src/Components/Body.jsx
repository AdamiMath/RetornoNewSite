import React from 'react'

import FormContainer from './FormContainer'
import Subido from './Subido'
import Footer from './Footer'
import ContainerClientes from './ConteinarClientes'

const Body = () => {
  return (
    <div className='containerBody'>

        <div className='ContainerClientes'>
          <ContainerClientes />
        </div> 
     
        <div className='containerForm'>
            <FormContainer />
            <Subido />
            <Footer />
        </div>
    </div>
  )
}

export default Body