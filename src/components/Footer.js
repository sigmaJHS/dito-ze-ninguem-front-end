import { LazyLoadImage } from 'react-lazy-load-image-component';
import logo from './../assets/logo.png'

import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai'
import style from './Footer.module.scss';

function Footer () {
  return (
    <footer id={style['footer']}>
      <div className={style['logo-row']}>
        <LazyLoadImage src={logo} alt="Dito Zé Ninguém" />
      </div>
      <div className={style['social-row']}>
        <a className={style['social-link']} target="blank" href="https://www.instagram.com/ditozeninguem/">
          <AiOutlineInstagram className={style['icon']} />
        </a>
        <a className={style['social-link']} target="blank" href="https://api.whatsapp.com/send?phone=5521997091345">
          <AiOutlineWhatsApp className={style['icon']} />
        </a>
        <a className={style['social-link']} target="blank" href="mailto:contato@ditozeninguem.com.br">
          <AiOutlineMail className={style['icon']} />
        </a>
      </div>
    </footer>
  )
}

export default Footer;