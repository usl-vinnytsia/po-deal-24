import './Program.scss';
import program from '../../program-data.json';

export const Program = () => {
  return (
    <section id="program" className="program">
      <main className='program-main'>
        <div className='program-main-about'>
          <span>[ярмарок карʼєри]</span>
          <span>ярмарок карʼєри / 20 локацій</span>
          <span>10 спікерів</span>
          <span className='program-main-title'>програма подолу</span>
        </div>

        <div className='program-main-bottom-txt'>
          <p>Time felt suspended, as if the world itself held its breath, waiting for something to </p>
          <span>©2024-2025</span>
        </div>
      </main>
      <div className='program__container'>
        <table>
          {program.program.map((event, index) => (
          <tr key={index}>
            <td>{event.time}</td>
            <td className='program__info'>
              <p className='program__info--type'>{event.format} {event.type}</p>
              <p>{event.title}</p>
            </td>
            <td>{event.person}</td>
          </tr>
          ))}
        </table>
      </div>

    </section>
  );
};