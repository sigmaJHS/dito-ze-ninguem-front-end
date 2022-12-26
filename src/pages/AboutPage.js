import { Container, Row, Col } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import style from './AboutPage.module.scss';

import dito from './../assets/dito-ze-ninguem.jpg';
import david from './../assets/david_dzn.jpg';
import wyl from './../assets/wyl_dzn.jpg';
import paul from './../assets/paul_dzn.jpg';
import gabriel from './../assets/gabriel_dzn.jpg';
import joao from './../assets/joao_dzn.jpg';

const members = [
  {
    name: "David Gonzaga",
    role: "Vocal Principal",
    img: david,
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    name: "Wylbert Paul",
    role: "Guitarra Base, Segundo Vocal",
    img: wyl,
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    name: "Paul Willian",
    role: "Guitarra Solo",
    img: paul,
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    name: "Gabriel Costa",
    role: "Contrabaixo",
    img: gabriel,
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    name: "João Singer",
    role: "Bateria",
    img: joao,
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
];

function AboutPage(){
  return(
    <div>
      <h1 className='page-title'>A Banda</h1>
      <div className='wrapper-container'>
        <div className={style['section']} id={style['band-section']}>
          <Container fluid>
            <Row>
              <Col xs="6" lg="4" className={style['image-placeholder']}>
                <LazyLoadImage className={style['img']} src={dito} alt='Dito Zé Ninguém' />
              </Col>
              <Col xs="6" lg="8" className={style['info']}>
                <h5 className={style['title']}>Dito Zé Ninguém</h5>
                <p className={style['text']}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <h1 className='page-title'>Os Membros</h1>
      <div className='wrapper-container'>
      {
        members.map(
          function (member)
          {
            return (
              <div className={style['section']}>
                <Container fluid>
                  <Row>
                    <Col xs="6" lg="4" className={style['image-placeholder']}>
                      <LazyLoadImage className={style['img']} src={member.img} alt={member.name} />
                    </Col>
                    <Col xs="6" lg="8" className={style['info']}>
                      <h5 className={style['title']}>{member.name}</h5>
                      <h6 className={style['subtitle']}>{member.role}</h6>
                      <p className={style['text']}>{member.bio}</p>
                    </Col>
                  </Row>
                </Container>
              </div>
            )
          }
        )
      }
      </div>
    </div>
  )
}

export default AboutPage;