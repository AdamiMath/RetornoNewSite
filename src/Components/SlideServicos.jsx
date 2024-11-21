import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const SlideServicos = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const images = [
    { src: '/assets/gestao.png', name: 'Gestão de Redes Sociais' },
    { src: '/assets/trafego.png', name: 'Tráfego Pago' },
    { src: '/assets/lojavirtual.png', name: 'Loja Virtual' },
    { src: '/assets/branding.png', name: 'Branding' },
    { src: '/assets/landing.png', name: 'Landing Page' },
    { src: '/assets/intitucionais.png', name: 'Sites Institucionais' },
    { src: '/assets/filmagens.png', name: 'Filmagens Locais' },
    { src: '/assets/consultoria.png', name: 'Consultorias' },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <div className='containerServicoItem'>
              <img src={img.src} alt={img.name} className="logoSlide" />
              <p className="labelImage">{img.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlideServicos;
