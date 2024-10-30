import React, { useRef, useState } from 'react';
import speakersData from '../../speakers-data.json';
import "./SpeakersSlider.scss"
import person_image from '../../speakers_logos/suhak.webp';

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
      {speakersData.speakers.map((speaker, index) => (
        <div
          key={`${speaker.id}-${index}`}
          className="speakers-scrollbar__card speakers-card"
        >
          <img className="speakers-card__image" alt='speaker' src={person_image} />
          <div className="speakers-card__info">
            <div className="speakers-card__info--text">
              <p className="speakers-card__info--left">{speaker.title}</p>
              <p className="speakers-card__info--right">{speaker.position}</p>
            </div>
            <img src={speaker.image} alt={speaker.title} className="speakers-card__info--logo" />
          </div>
          <p className="speakers-card__description">
            {speaker.description}
          </p>
        </div>
      ))}
    </div>
  );
};
