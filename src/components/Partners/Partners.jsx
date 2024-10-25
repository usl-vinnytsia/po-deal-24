import { PartnersSlider } from '../PatrnersSlider/PartnersSlider';
import './Partners.scss';

export const Partners = () => {
  return (
    <section id="partners" className="partners">
      <div className="partners__content container">
        <h1 className="partners__title">наші партнери</h1>
        <div className="partners__slider">
          <PartnersSlider />
        </div>
      </div>
    </section >
  );
};