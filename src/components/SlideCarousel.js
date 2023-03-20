import Carousel from "react-bootstrap/Carousel";

import style from './SlideCarousel.module.scss';

import slides from './../slides.json';

function SlideCarousel () {
  return (
    <div className={style['slide-holder']}>
      <Carousel id={style['slide-carousel']}>
        {
          slides.map(
            function (current) {
              return (
                <Carousel.Item key={current.id}>
                  <img className={style['carousel-img']} src={ current.img } alt={current.caption} />
                  <Carousel.Caption>
                    <h4>{current.caption}</h4>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            }
          )
        }
      </Carousel>
    </div>
    
  )
}

export default SlideCarousel;