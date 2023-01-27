import { useEffect, useState } from 'react'
import axios from "axios";

import style from './EventTable.module.scss';

function EventTable () {

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

  const [schedule, setSchedule] = useState(
    []
  );

  const [tableVisibility, setTableVisibility] = useState(
    true
  );

  useEffect(fetchEvents, []);
  // const schedule = [
  //   {
  //     id: 1,
  //     title: "Dito no Toca Bar!",
  //     date: new Date("2023-12-03 19:00"),
  //     place: "Toca Bar",
  //     address: "Av. Independência 127, Centro, Itatiba/SP",
  //     link: "https://www.instagram.com/p/ClO_fWlp72U/",
  //   },
  //   {
  //     id: 2,
  //     title: "Dito no Rock Wheels!",
  //     date: new Date("2023-12-11 15:00"),
  //     place: "Rock Wheels",
  //     address: "R. Rui Barbosa 168, Bela Vista, São Paulo/SP",
  //     link: "https://www.instagram.com/p/Cl_3TtbJvyJ/",
  //   },
  //   {
  //     id: 3,
  //     title: "Dito de volta ao Only Rock Bar!",
  //     date: new Date("2023-01-28 19:00"),
  //     place: "Only Rock Bar",
  //     address: "Rua Wisard, 149, Vila Madalena, São Paulo/SP",
  //     link: "https://www.instagram.com/onlyrockbar/",
  //   },
  // ];

  function fetchEvents () {
    axios.get(
      process.env.REACT_APP_BACKEND_SERVER + '/events'
    ).then(
      function (response) {
        setSchedule(
          response.data.map(
            function (event) {
              event.begin = new Date(event.begin)
              return event;
            }
          )
        )
      }
    )
    .catch(
      function () {
        setTableVisibility(false);
      }
    )
  }

  return (!tableVisibility)
    ? (<p>Não deu pra carregar a agenda, tente recarregar a página por favor.</p>)
    : (
      <table className={style['table']}>
        <tbody>
        {
          schedule.map(
            function (event) {
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
    );
}

export default EventTable;