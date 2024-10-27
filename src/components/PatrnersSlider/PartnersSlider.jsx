import React, { useRef, useState } from 'react';
import partnersData from '../../partners-data.json';
import arrow from '../../images/link-arrow.svg';
import './PartnersSlider.scss';

const CARD_WIDTH = 380;
const CARD_GAP = 160;
const SLIDE_CARDS = 2; // Number of cards to slide in each "snap"

export const PartnersSlider = () => {
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
      className="scrollbar"
      ref={scrollContainerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {partnersData.partners.map((partner, index) => (
        <div 
          key={`${partner.id}-${index}`} 
          className="scrollbar__card card"
        >
          {partner.type ? (
            <div className="card__flag">General</div>
          ) : ''}
          <div className="card__title">{partner.title}</div>
          <p className="card__description">
            {partner.description}
          </p>
          <div className="card__bottom">
            <a href="/" className="card__link">
              <img src={arrow} alt='link arrow'/>
            </a>
            <img src={partner.image} alt="partner logo" className="card__logo" />
          </div>
        </div>
      ))}
    </div>
  );
};
