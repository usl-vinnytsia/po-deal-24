import './Program.scss';
import program from '../../program-data.json';
import React, { useState } from 'react';

export const Program = () => {
  const [activeTab, setActiveTab] = useState('allday');
  const handleTabClick = (filter) => {
    setActiveTab(filter);    
  };
  const filteredEvents = program.program.filter(
    (event) => event.filter === activeTab
  );

  return (
    <section id="program" className="program container">
      <main className='program-main'>
        <div className='program-main-about'>
          <div className='program-main-about-info'>
            <span>[ярмарок карʼєри]</span>
            <span>алея бізнесів / 14 локацій</span>
            <span>20 спікерів</span>
          </div>
          <span className='program-main-title'>програма подолу</span>
        </div>

        <div className='program-main-bottom-txt'>
          <p className='program-main-bottom-txt-none-mob'>
            Програма обіцяє бути цікавою
            Приходь на ПоDeal '24 - переймай досвід та надихайся!
          </p>
          <span className='program-main-bottom-txt-year'>©2024-2025</span>
        </div>
      </main>
      <div className='program__container'>
        <table>
          <tr>
            <th
              role='button'
              onClick={() => handleTabClick('allday')}
              className={`tab ${activeTab === 'allday' ? 'active' : ''}`}
            >
              All Day
            </th>
            <th
              role='button'
              onClick={() => handleTabClick('main')}
              className={`tab ${activeTab === 'main' ? 'active' : ''}`}
            >
              Main Stage
            </th>
            <th
              role='button'
              onClick={() => handleTabClick('second')}
              className={`tab ${activeTab === 'second' ? 'active' : ''}`}
            >
              Local
            </th>
          </tr>
          {filteredEvents.map((event, index) => (
            <tr key={index}>
              <td>{event.time}</td>
              <td className="program__info">
                <p className="program__info--type">
                  {event.format} / {event.type}
                </p>
                <p>{event.title}</p>
              </td>
              <td>{event.person}</td>
            </tr>
          ))}
        </table>
      </div>
      {/* mobile version */}
      <div className="program__container_mobile">
        <div className="tabs">
          <button
            onClick={() => handleTabClick('allday')}
            className={`tab ${activeTab === 'allday' ? 'active' : ''}`}
          >
            All Day
          </button>
          <button
            onClick={() => handleTabClick('main')}
            className={`tab ${activeTab === 'main' ? 'active' : ''}`}
          >
            Main Stage
          </button>
          <button
            onClick={() => handleTabClick('second')}
            className={`tab ${activeTab === 'second' ? 'active' : ''}`}
          >
            Local
          </button>
        </div>

        <div className="events">
          {filteredEvents.map((event, index) => (
            <div key={index} className="event">
              <p className="event-time">{event.time}</p>
              <div className="event-info">
                <p className="event-type">
                  {event.format} / {event.type}
                </p>
                <p className="event-title">{event.title}</p>
              </div>
              <p className="event-person">{event.person}</p>
              <hr className='events-divider' />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};