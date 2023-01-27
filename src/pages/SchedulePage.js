import EventTable from './../components/EventTable';

function SchedulePage () {
  return (
    <div>
      <h1 className='page-title'>Agenda de Eventos</h1>
      <div className='wrapper-container'>
        <EventTable />
      </div>
    </div>
  );
}

export default SchedulePage;