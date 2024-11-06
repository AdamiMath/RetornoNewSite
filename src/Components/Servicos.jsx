import React from 'react'
import SlideServicos from './SlideServicos'

const Servicos = () => {
  return (
    <div className='containerServicos'>
        <h3 className='h3'>Serviços</h3>
        <p className='p-padrao'>Na Retorno Marketing Digital, nossos serviços são projetados para levar seu negócio além!
             Gerenciamos redes sociais com conteúdo estratégico que atrai e envolve; 
             criamos sites e lojas virtuais impactantes para converter visitantes em clientes; 
             e impulsionamos seu alcance com campanhas de tráfego pago precisas. Produzimos vídeos 
             envolventes que capturam a atenção e monitoramos todas as ações para ajustes constantes. 
            Juntos, exploramos o universo digital em direção ao crescimento da sua marca!
        </p>
        <SlideServicos />
    </div>
  )
}

export default Servicos