import './About.scss';
import CountUp from 'react-countup';
import { useState, useEffect, useRef } from 'react';

const About = () => {
  const [startCount, setStartCount] = useState(false);
  const [hoursLeft, setHoursLeft] = useState(0);
  const sectionRef = useRef(null);

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
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-content-left">
        <hr />
        <div className="about-content-left-details">
          {startCount && (
            <CountUp
              className='about-content-left-details-num'
              start={0}
              end={688}
              duration={4}
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
                duration={3}
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
              end={16}
              duration={2}
            />
          )}
          <span className='about-content-left-details-txt'>залучених компаній</span>
        </div>
        <hr />
      </div>
      <div className="about-content-right">
        <span className='about-content-right-title'>що таке поділ</span>
        <p>
          наймасштабніший ярмарок кар’єрних можливостей у вінниці 
        </p>
        <p className='about-content-right-p'>
          ідея в тому, щоб створити платформу для взаємодії між студентами та роботодавцями, розвинути локальний ринок праці та підтримати кар’єрне зростання молоді у вінниці
        </p>
      </div>
    </section>
  );
};

export default About;
