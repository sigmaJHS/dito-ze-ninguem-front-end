import style from './EventSchedule.module.scss';

function EventSchedule () {

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

  const schedule = [
    {
      "id": 1,
      "title": "Dito no Toca Bar!",
      "date": new Date("2023-12-03 19:00"),
      "place": "Toca Bar",
      "address": "Av. Independência 127, Centro, Itatiba/SP",
      "link": "https://www.instagram.com/p/ClO_fWlp72U/"
    },
    {
      "id": 2,
      "title": "Dito no Rock Wheels!",
      "date": new Date("2023-12-11 15:00"),
      "place": "Rock Wheels",
      "address": "R. Rui Barbosa 168, Bela Vista, São Paulo/SP",
      "link": "https://www.instagram.com/p/Cl_3TtbJvyJ/"
    },
    {
      "id": 3,
      "title": "Dito de volta ao Only Rock Bar!",
      "date": new Date("2023-01-28 19:00"),
      "place": "Only Rock Bar",
      "address": "Rua Wisard, 149, Vila Madalena, São Paulo/SP",
      "link": "https://www.instagram.com/onlyrockbar/"
    }
  ];

  return (
    <div>
      <h1 className='page-title'>Agenda de Eventos</h1>
      <div className='wrapper-container'>
        <table className={style['table']}>
          <tbody>
          {
            schedule.map(
              function (event) {
                return (
                  <tr>
                    <td className={style['date-column']}>
                      <div className={style['day']}>
                        {event.date.getDate()}
                      </div>
                      <div className={style['month']}>
                        {monthNames[event.date.getMonth()]}
                      </div>
                    </td>
                    <td className={style['info-column']}>
                      <h4 className={style['title']}>{event.title}</h4>
                      <p className={style['place']}>{event.place}<br />{event.address}</p>
                      <a className={style['button']} target="blank" href={event.link}>Engaje!</a>
                    </td>
                    <td className={style['button-column']}>
                      <a className={style['button']} target="blank" href={event.link}>Engaje!</a>
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

export default EventSchedule;