import {useRef, React } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CustomArrows({ onPrev, onNext }) {
  return (
    <div className="custom-arrows-wrapper">
      <button className="arrow-button prev" onClick={onPrev}>
        Anterior
      </button>

      <div className="arrow-icon">
        {/* Aqui você pode usar um ícone SVG ou imagem */}
        <img className="icone-centro" src="/assets/logo-redondo-retorno.png" alt="Ícone centro" />
      </div>

      <button className="arrow-button next" onClick={onNext}>
        Próximo
      </button>
    </div>
  );
}



const SlideClientes = () => {

  const slideRef = useRef(null);

  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 3,
    dots: true,
    rows: 2,
    slidesPerRow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false, // Desativa as setas padrão
  };

    return (
      <div className="slider-container slideboxclientes">
        <CustomArrows
        onPrev={() => slideRef.current.slickPrev()}
        onNext={() => slideRef.current.slickNext()}
        />
        <Slider  ref={slideRef} {...settings}>
          <div>
             <div className='bgBox'>
              <img className='logoCustomers' src="/assets/1.png" alt="" />
              <a>Veja o Site</a>
             </div>
          </div>
          <div>
             <div className='bgBox'>
               <img className='logoCustomers' src="/assets/2.png" alt="" />
               <a>Veja o Instagram</a>
               </div>
          </div>
          <div>
             <div className='bgBox'><img className='logoCustomers' src="/assets/3.png" alt="" />
             <a>Veja o Instagram</a>
             </div>
          </div>
          <div>
             <div className='bgBox'><img className='logoCustomers' src="/assets/4.png" alt="" />
             <a>Veja o Instagram</a>
             </div>
          </div>
             <div className='bgBox'><img className='logoCustomers' src="/assets/5.png" alt="" />
             <div>
               <a>Veja o site</a>
               <a>Veja o Instagram</a>
            <div></div>
             </div>
          </div>
          <div>
             <div className='bgBox'><img className='logoCustomers' src="/assets/6.png" alt="" />
             <a>Veja o site</a>
             <a>Veja o Instagram</a>
             </div>
          </div>
          <div>
             <div className='bgBox'><img className='logoCustomers' src="/assets/7.png" alt="" /></div>
          </div>
          <div>
             <div className='bgBox'><img className='logoCustomers' src="/assets/8.png" alt="" /></div>
          </div>
          <div>
             <div className='bgBox'><img className='logoCustomers' src="/assets/9.png" alt="" /></div>
          </div>
          <div>
             <div className='bgBox'><img className='logoCustomers' src="/assets/10.png" alt="" /></div>
          </div>
          <div>
             <div className='bgBox'><img className='logoCustomers' src="/assets/11.png" alt="" /></div>
          </div>
          <div>
             <div className='bgBox'><img className='logoCustomers' src="/assets/12.png" alt="" /></div>
          </div>
        </Slider>


      </div>
    );
  }
  

export default SlideClientes;