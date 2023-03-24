import { useState } from 'react';
import spin from './../assets/90-ring.svg'

import style from './ContactForm.module.scss';

import emailjs from '@emailjs/browser';

function ContactForm () {

  const [isSending, setIsSending] = useState(false);
  const [response, setResponse] = useState('');

  function submitHandler (event) {
    event.preventDefault();
    
    setIsSending(true);
    setResponse('');

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      event.target,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(
      function (result) {
        setResponse(
          (result.status == '200')
          ? 'success'
          : 'error'
        );
      },
      function () {
        setResponse('error');
      }
    ).finally(
      function () {
        setIsSending(false);
      }
    );
  }

  return (
    <form className={style['form']} onSubmit={submitHandler}>
      <div className={style['control']}>
        <label htmlFor='name'>Seu Nome:</label>
        <input className={style['input']} type='text' name='name' />
      </div>
      <div className={style['control']}>
        <label htmlFor='email'>Seu Email:</label>
        <input className={style['input']} name='email' />
      </div>
      <div className={style['control']}>
        <label htmlFor='text'>Sua Mensagem:</label>
        <textarea className={style['input']} name='text'></textarea>
      </div>
      <div className={style['actions']}>
        <button className={style['send']}>Enviar</button>
        {
          (isSending && response == '')
          ? (<img className={style['spin']} src={ spin } alt="enviando..." />)
          : ''
        }
      </div>
      <div className={style['response']}>
        {
          (response == 'success')
          ? (<p className={style['success']}>Sua mensagem foi enviada com sucesso, buscaremos responder o quanto antes!</p>)
          : (
            (response == 'error')
            ? (<p className={style['error']}>Houve um problema ao enviar sua mensagem, se o erro persistir, por favor nos avise através de outro canal de comunicação!</p>)
            : ''
          )
        }
      </div>
    </form>
  )
}

export default ContactForm;