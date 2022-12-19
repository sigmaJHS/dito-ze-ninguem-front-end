import { useRef } from 'react';

import style from './ContactForm.module.scss';

function ContactForm (props) {
  const nameRef = useRef();
  const emailRef = useRef();
  const textRef = useRef();

  function submitHandler (event) {
    event.preventDefault();

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      text: textRef.current.value
    }

    props.onFormSubmited(formData);
  }

  return (
    <form className={style['form']} onSubmit={submitHandler}>
      <div className={style['control']}>
        <label htmlFor='name'>Seu Nome:</label>
        <input className={style['input']} type='text' name='name' ref={nameRef} />
      </div>
      <div className={style['control']}>
        <label htmlFor='email'>Seu Email:</label>
        <input className={style['input']} name='email' ref={emailRef} />
      </div>
      <div className={style['control']}>
        <label htmlFor='text'>Sua Mensagem:</label>
        <textarea className={style['input']} name='text' ref={textRef}></textarea>
      </div>
      <div className={style['actions']}>
        <button className={style['send']}>Enviar</button>
      </div>
    </form>
  )
}

export default ContactForm;