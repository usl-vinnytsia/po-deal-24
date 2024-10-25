import './About.scss';
import CountUp from 'react-countup';
import { useState, useEffect } from 'react';

const About = () => {
  const [startCount, setStartCount] = useState(false);
  useEffect(() => {
    setStartCount(true);
  }, []);
  const [hoursLeft, setHoursLeft] = useState(0);
  useEffect(() => {
    const targetDate = new Date('2024-11-02T10:00:00');
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;
      const hours = Math.floor(difference / (1000 * 60 * 60));
      setHoursLeft(hours);
      if (difference < 0) {
        setHoursLeft(0);
      }
    };
    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-content-left">
        <hr />
        <div className="about-content-left-details">
          {startCount && (
            <CountUp
              className='about-content-left-details-num'
              start={0}
              end={688}
              duration={2}
            />
          )}
          <span className='about-content-left-details-txt'>учасників</span>
        </div>
        <hr />
        <div className="about-content-left-details">
          <span className='about-content-left-details-num'>
            {startCount && (
              <CountUp
                className='about-content-left-details-num'
                start={0}
                end={hoursLeft}
                duration={2}
              />
            )}
          </span>
          <span className='about-content-left-details-txt'>годин до заходу</span>
        </div>
        <hr />
        <div className="about-content-left-details">
          {startCount && (
            <CountUp
              className='about-content-left-details-num'
              start={0}
              end={187}
              duration={2}
            />
          )}
          <span className='about-content-left-details-txt'>годин підготовки</span>
        </div>
        <hr />
      </div>
      <div className="about-content-right">
        <span className='about-content-right-title'>що таке поділ</span>
        <p>
          Time felt suspended, as if the world itself held its breath, waiting for something to
        </p>
        <p className='about-content-right-p'>
          The ship's wooden creaks were the only sound breaking the silence, as if the very sea had fallen asleep beneath the heavy weight
        </p>
      </div>
    </section>
  );
};

export default About;
