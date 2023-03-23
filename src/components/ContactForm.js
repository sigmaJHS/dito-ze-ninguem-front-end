import style from './ContactForm.module.scss';

import emailjs from '@emailjs/browser';

function ContactForm () {

  function submitHandler (event) {
    event.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      event.target,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(
      function (result) {
        console.log('success',result);
      },
      function (error) {
        console.log('error',error.text);
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
      </div>
    </form>
  )
}

export default ContactForm;