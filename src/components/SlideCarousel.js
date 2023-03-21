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
                <Carousel.Item className={style['slide']} key={current.id}>
                  <a href={ current.link } target="blank">
                    <div className={style['carousel-img']} style={ {backgroundImage: `url(${current.img})`} }></div>
                    <Carousel.Caption className={style['carousel-caption']}>
                      <h4>{current.caption}</h4>
                      <p>{current.description}</p>
                    </Carousel.Caption>
                  </a>
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