import {Container, Row, Col} from 'react-bootstrap';
import ContactForm from './../components/ContactForm';

import style from './ContactPage.module.scss';

function ContactPage(){
  function sendHTTPRequest(formData) {
    console.log(formData);
  }

  return(
    <div>
      <h1 className='page-title'>Contato para Shows</h1>
      <div className='wrapper-container'>
        <Container>
          <Row>
            <Col md="12" lg="6">
              <Container>
                <h4 className={style['contact-title']}>Nos encontre pela internet afora</h4>
                <p className={style['contact-description']}>Você pode nos encontrar nas mídias sociais, enviar um email ou conversar diretamente com um representante pelo whatsapp!</p>
                <div className={style['contact-row']}>
                  <div className={style['contact-label']}>Whatsapp (Juliana):</div>
                  <a target="blank" href="https://api.whatsapp.com/send?phone=5521997091345" className={style['contact-info']}>+55 21 99709-1345</a>
                </div>
                <div className={style['contact-row']}>
                  <div className={style['contact-label']}>Email:</div>
                  <a target="blank" href="mailto:contato@ditozeninguem.com.br" className={style['contact-info']}>contato@ditozeninguem.com.br</a>
                </div>
                <div className={style['contact-row']}>
                  <div className={style['contact-label']}>Instagram:</div>
                  <a target="blank" href="https://www.instagram.com/ditozeninguem/" className={style['contact-info']}>@ditozeninguem</a>
                </div>
              </Container>
            </Col>
            <Col md="12" lg="6">
              <Container>
                <h4 className={style['contact-title']}>Ou envie uma mensagem agora mesmo!</h4>
                <p className={style['contact-description']}>Mande suas dúvidas, sugestões, desabafos, devaneios, epifanias. Buscamos responder dentro de 24 horas</p>
                <ContactForm onFormSubmited={sendHTTPRequest} />
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default ContactPage;