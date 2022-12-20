import { useState } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import FsLightbox from "fslightbox-react";

import style from './GalleryPage.module.scss';

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

  const images = [];
  for(let i=1; i<=16; i++) {
    images.push(
      {
        id: i,
        src: process.env.REACT_APP_FILE_STORAGE + '/?filename=' + i + '.jpg'
      }
    );
  }
  
  return (
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
                    <img src={image.src} alt={image.src} />
                  </div>
                </Col>
              );
            }
          )
        }
        </Row>
      </Container>
    </div>
  )
}

export default GalleryPage;