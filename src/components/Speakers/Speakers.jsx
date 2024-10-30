import { SpeakersSlider } from "../SpeakersSlider/SpeakersSlider";
import "./Speakers.scss"

export const Speakers = () => {
  return (
    <section id="speakers" className="speakers">
      <div className="speakers__content container">
        <h1 className="speakers__title">любі спікери</h1>
        <div className="speakers__slider">
          <SpeakersSlider />
        </div>
      </div>
    </section >
  );
};
