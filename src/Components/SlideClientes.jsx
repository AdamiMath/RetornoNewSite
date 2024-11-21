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
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}


const SlideClientes = () => {
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
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
     
    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div>
             <div className='bgBox'>
              <img className='logoCustomers' src="/assets/1.png" alt="" />
             </div>
          </div>
          <div>
             <div className='bgBox'><img className='logoCustomers' src="/assets/2.png" alt="" /></div>
          </div>
          <div>
             <div className='bgBox'><img className='logoCustomers' src="/assets/3.png" alt="" /></div>
          </div>
          <div>
             <div className='bgBox'><img className='logoCustomers' src="/assets/4.png" alt="" /></div>
          </div>
          <div>
             <div className='bgBox'><img className='logoCustomers' src="/assets/5.png" alt="" /></div>
          </div>
          <div>
             <div className='bgBox'><img className='logoCustomers' src="/assets/6.png" alt="" /></div>
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