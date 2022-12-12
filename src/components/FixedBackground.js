import bg from './../assets/bg.jpg';

import style from './FixedBackground.module.css';

function FixedBackground()
{
  return (
    <div
      id={style['bg']}
      style={{ backgroundImage: 'url(' + bg + ')' }}
    ></div>
  );
}

export default FixedBackground;