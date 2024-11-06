import React, { useEffect, useState } from 'react';

const SlideServicos = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const slideInterval = 3000;

    const images = [
        { src: '/assets/gestao.png', name: 'Gestão de Redes Sociais' },
        { src: '/assets/trafego.png', name: 'Tráfego Pago' },
        { src: '/assets/lojavirtual.png', name: 'Loja Virtual'},
        { src: '/assets/branding.png', name: 'Branding' },
        { src: '/assets/landing.png', name: 'Landing Page' },
        { src: '/assets/intitucionais.png', name: 'Sites Institucionais'},
        { src: '/assets/filmagens.png', name: 'Filmagens Locais' },
        { src: '/assets/consultoria.png', name: 'Consultorias' },
    ];

    // Obter as três imagens visíveis
    const visibleImages = [
        images[startIndex],
        images[(startIndex + 1) % images.length],
        images[(startIndex + 2) % images.length],
    ];

    const nextItem = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
        setProgress(0);
    };

    const prevItem = () => {
        setStartIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : (prevIndex - 1) % images.length));
        setProgress(0);
    };

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress >= 100) {
                    nextItem();
                    return 0;
                }
                return oldProgress + (100 / (slideInterval / 100));
            });
        }, 100);

        return () => clearInterval(progressInterval);
    }, [startIndex]);

    return (
        <>
            <div className='slide'>
                <img className='setaesquerda' onClick={prevItem} src="/assets/flechaesquerda.png" alt="Flecha para a esquerda" />
                <div className='containerImgSlide'>
                    <ul className='slideUl'>
                        {visibleImages.map((img, index) => (
                            <li className='imageUl' key={index}>
                                <img
                                    src={img.src}
                                    alt={`Slide ${index}`}
                                    className={index === 0 ? 'first' : ''}
                                />
                                <p className='labelImage'>{img.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <img className='setadireita' onClick={nextItem} src="/assets/flechadireita.png" alt="Flecha para a Direita" />
            </div>
            <div className="indicatorContainer">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`indicatorDot ${index === startIndex ? 'active' : ''}`}
                    />
                ))}
            </div>
        </>
    );
};

export default SlideServicos;
