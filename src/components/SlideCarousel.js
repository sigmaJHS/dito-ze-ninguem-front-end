import Carousel from "react-bootstrap/Carousel";

import style from './SlideCarousel.module.scss';

function SlideCarousel () {
  const slides = [
    {
      id: '1',
      img: process.env.REACT_APP_FILE_STORAGE + '/3.jpg',
      caption: 'Slide 1',
      link: '/sobre'
    },
    {
      id: '2',
      img: process.env.REACT_APP_FILE_STORAGE + '/4.jpg',
      caption: 'Slide 2',
      link: '/contato'
    },
    {
      id: '3',
      img: process.env.REACT_APP_FILE_STORAGE + '/6.jpg',
      caption: 'Slide 3',
      link: '/sobre'
    },
    {
      id: '4',
      img: process.env.REACT_APP_FILE_STORAGE + '/8.jpg',
      caption: 'Slide 4',
      link: '/contato'
    }
  ];
  return (
    <Carousel>
      {
        slides.map(
          function (current) {
            return (
              <Carousel.Item key={current.id}>
                <div
                  className={style['carousel-img']}
                  style={{backgroundImage: 'url(' + current.img + ')'}}
                ></div>
                <Carousel.Caption>
                  <h4>{current.caption}</h4>
                </Carousel.Caption>
              </Carousel.Item>
            )
          }
        )
      }
    </Carousel>
  )
}

export default SlideCarousel;