import style from './SchedulePage.module.scss';

import schedule from './../events.json';

function SchedulePage () {

  const monthNames = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro"
  ]

  return (
    <div>
      <h1 className='page-title'>Agenda de Eventos</h1>
      <div className='wrapper-container'>
        <table className={style['table']}>
          <tbody>
          {
            schedule.map(
              function (event) {
                event.begin = new Date(event.begin);
                console.log(event);

                let instagramButton =
                  (event.instagram_link != null)
                  ? (<a className={style['button']} target="blank" href={event.instagram_link}>Engaje!</a>)
                  : '';

                let ticketsButton =
                  (event.tickets_link != null)
                  ? (<a className={style['button']} target="blank" href={event.tickets_link}>Ingressos</a>)
                  : '';

                return (
                  <tr key={event.id}>
                    <td className={style['date-column']}>
                      <div className={style['day']}>
                        {event.begin.getDate()}
                      </div>
                      <div className={style['month']}>
                        {monthNames[event.begin.getMonth()]}
                      </div>
                    </td>
                    <td className={style['info-column']}>
                      <h4 className={style['title']}>{event.title}</h4>
                      <p className={style['place']}>{event.place}<br />{event.address}</p>
                      { instagramButton }
                      { ticketsButton }
                    </td>
                    <td className={style['button-column']}>
                      { instagramButton }
                      { ticketsButton }
                    </td>
                  </tr>
                )
              }
            )
          }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SchedulePage;