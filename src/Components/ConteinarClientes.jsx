import React from 'react';
import SlideClientes from './SlideClientes'

const ContainerClientes = () => {

    return (
    <>
      <h3 className='h3Cliente'>Clientes</h3>
         <p className='p-clientes'>Na Retorno Marketing Digital, nossa missão é impulsionar negócios para que alcancem novas órbitas
             no universo digital. Acreditamos que cada cliente tem um potencial único e, com estratégias 
             personalizadas, criamos conexões autênticas e resultados concretos. Mais do que serviços, 
             oferecemos uma jornada completa, orientada por inovação e insights precisos. 
             Nosso compromisso é ser o parceiro de confiança que transforma desafios em oportunidades,
             conectando sua marca ao público certo e ampliando seu impacto digital
        </p>
        <div className='containerSlideClientes'>
            <SlideClientes />
        </div>
    </>
    )
}

export default  ContainerClientes;