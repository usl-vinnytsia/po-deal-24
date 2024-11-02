import './About.scss';
import CountUp from 'react-countup';
import { useState, useEffect, useRef } from 'react';

const About = () => {
  const [startCount, setStartCount] = useState(false);
  const [hoursLeft, setHoursLeft] = useState(0);
  const sectionRef = useRef(null);
  const [totalUsers, setTotalUsers] = useState(356);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://ec2-34-239-125-198.compute-1.amazonaws.com:8000/api/v1/users-stats/');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setTotalUsers(data.all);
      } catch (err) {
        console.log(err);
      }
    }

      fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const targetDate = new Date('2024-11-02T10:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;
      const hours = Math.max(0, Math.floor(difference / (1000 * 60 * 60))); 
      setHoursLeft(hours);
    };

    calculateTimeLeft(); 
    const interval = setInterval(calculateTimeLeft, 1000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <section id="about" className="about container" ref={sectionRef}>
      <div className="about-content-left">
        <hr className='about-row-divider' />
        <div className="about-content-left-details">
          {startCount && (
            <CountUp
              className='about-content-left-details-num'
              start={0}
              end={totalUsers}
              duration={4}
            />
          )}
          <span className='about-content-left-details-txt'>учасників</span>
        </div>
        <hr  className='about-row-divider' />
        <div className="about-content-left-details">
          <span className='about-content-left-details-num'>
            {startCount && (
              <CountUp
                className='about-content-left-details-num'
                start={0}
                end={hoursLeft}
                duration={3}
              />
            )}
          </span>
          <span className='about-content-left-details-txt'>годин до заходу</span>
        </div>
        <hr  className='about-row-divider'/>
        <div className="about-content-left-details">
          {startCount && (
            <CountUp
              className='about-content-left-details-num'
              start={0}
              end={14}
              duration={2}
            />
          )}
          <span className='about-content-left-details-txt'>залучених компаній</span>
        </div>
        <hr className='about-row-divider' />
      </div>
      <div className="about-content-right">
        <span className='about-content-right-title'>що таке ПоDeal</span>
        <p>
          багатоформатний ярмарок кар’єрних можливостей у вінниці 
        </p>
        <p className='about-content-right-p'>
          ідея в тому, щоб створити платформу для взаємодії між студентами та роботодавцями, розвинути локальний ринок праці та підтримати кар’єрне зростання молоді у вінниці
        </p>
      </div>
    </section>
  );
};

export default About;
