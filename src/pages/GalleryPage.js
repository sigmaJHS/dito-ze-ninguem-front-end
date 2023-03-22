import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import FsLightbox from "fslightbox-react";

import style from './GalleryPage.module.scss';

import images from './../gallery.json';

function GalleryPage () {

  const [lightboxController, setLightboxController] = useState(
    {
      toggler: false,
      slide: 1
    }
  );

	function openLightboxOnSlide(number) {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number
		});
	}
  
  return (
    <div>
      <h1 className='page-title'>Galeria de Fotos</h1>
      <div className='wrapper-container'>
        <FsLightbox
          sources={Array.from(images.entries(), (value) => value[1].src)}
          toggler={lightboxController.toggler}
          slide={lightboxController.slide}
        />
        <Container>
          <Row>
          {
            images.map(
              function (image) {
                return (
                  <Col key={image.id} sm="6" lg="4" xl="3">
                    <div
                      className={style['image-placeholder']}
                      onClick={() => openLightboxOnSlide(image.id)}
                    >
                      <LazyLoadImage src={image.src} alt={image.src} />
                    </div>
                  </Col>
                );
              }
            )
          }
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default GalleryPage;