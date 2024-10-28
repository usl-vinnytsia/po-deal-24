import './Program.scss';
import program from '../../program-data.json';
import React, { useState } from 'react';

export const Program = () => {
  const [activeTab, setActiveTab] = useState('allday'); // Default filter

  // Define the handleTabClick function inside the component
  const handleTabClick = (filter) => {
    // event.preventDefault(); // Prevent default anchor behavior
    setActiveTab(filter);    // Update the active tab
  };

  // Filter events based on the active tab
  const filteredEvents = program.program.filter(
    (event) => event.filter === activeTab
  );

  return (
    <section id="program" className="program container">
      <main className='program-main'>
        <div className='program-main-about'>
          <span>[ярмарок карʼєри]</span>
          <span>алея бізнесів / 16 локацій</span>
          <span>16 спікерів</span>
          <span className='program-main-title'>програма подолу</span>
        </div>

        <div className='program-main-bottom-txt'>
          <p>
          Приходь на ПоDeal '24 та переймай досвід та отримуй знання!          
          </p>
          <span>©2024-2025</span>
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

    </section>
  );
};