import React, { useRef, useState } from 'react';
import speakersData from '../../speakers-data.json';
import "./SpeakersSlider.scss"

import misha from '../../images/hanchuk.webp';
import pa from '../../images/prom.webp';

const CARD_WIDTH = 380;
const CARD_GAP = 160;
const SLIDE_CARDS = 2;


export const SpeakersSlider = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);

    // Apply active dragging effect
    scrollContainerRef.current.classList.add("scrolling-active");
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walkX = (x - startX) * 1.5; // Adjust multiplier for smoothness
    scrollContainerRef.current.scrollLeft = scrollLeft - walkX;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const container = scrollContainerRef.current;
    if (!container) return;

    container.classList.remove("scrolling-active");

    // Calculate snapping point
    const cardFullWidth = CARD_WIDTH + CARD_GAP;
    const draggedDistance = container.scrollLeft - scrollLeft;
    const direction = draggedDistance > 0 ? 1 : -1; // Determine the slide direction

    // Calculate number of cards to snap based on SLIDE_CARDS and direction
    const snapPosition = scrollLeft + direction * SLIDE_CARDS * cardFullWidth;

    container.scrollTo({
      left: snapPosition,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className="speakers-scrollbar"
      ref={scrollContainerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        key={0}
        className="speakers-scrollbar__card speakers-card"
      >
        <img className="speakers-card__image" alt='speaker' src={misha} />
        <div className="speakers-card__info" id='misha'>
          <div className="speakers-card__info--text">
            <p className="speakers-card__info--left">Михайло Ганчук</p>
            <p className="speakers-card__info--right">CЕО Промавтоматика</p>
          </div>
          <img src={pa} alt="Михайло Ганчук" className="speakers-card__info--logo" />
        </div>
        <p className="speakers-card__description">
        Промавтоматика – компанія спеціалізується на розробках та подальшому виробництві електрообладнання, реалізовуємо продукцію власного виробництва.
        </p>
      </div>
      {speakersData.speakers.map((speaker, index) => (
        <div
          key={`${speaker.id}-${index}`}
          className="speakers-scrollbar__card speakers-card"
          id={`speakers-card--${speaker.id}`}
        >
          <img className="speakers-card__image" alt='speaker' src={speaker.person_image} />
          <div className="speakers-card__info">
            <div className="speakers-card__info--text">
              <p className="speakers-card__info--left">{speaker.title}</p>
              <p className="speakers-card__info--right">{speaker.position}</p>
            </div>
            {speaker.image ? (
              <img src={speaker.image} alt={speaker.title} className="speakers-card__info--logo" />
            ) : ''}
          </div>
          <p className="speakers-card__description">
            {speaker.description}
          </p>
        </div>
      ))}
      <div className="speakers-scrollbar__card speakers-card others">та інші...</div>
    </div>
  );
};
