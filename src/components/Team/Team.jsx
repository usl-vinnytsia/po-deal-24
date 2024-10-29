import './Team.scss';
import teamLeft from '../../images/teamLeft.png';
import teamRight from '../../images/teamRight.png';


const Team = () => {
  return (
    <section id="team" className="team">
      <div className=' team__container'>
        <aside className='team-left'>
          <img src={teamLeft} alt="" srcset="" className='team-left-img' />
          <div className='team-left-photo-descr'>
            <span>УСЛ ВП</span>
            <span>Вінниця</span>
          </div>
          <p className='team-left-descr'>
            Beneath the silver-hued sky, the crimson sea stretched endlessly, reflecting the gentle glow of distant stars. 
            A lone ship drifted quietly, its sails catching whispers of wind that carried secrets from forgotten lands.
            <br></br>
            <br></br>
            творимо кращий час разом!
          </p>
        </aside>
        <aside className='team-right'>
          <img src={teamRight} alt="" className='team-right-img' />
          <span className='team-right-title'>знайомимось з командою</span>

          <p className='team-right-descr'>omewhere below, in the heart of the ship, an ancient compass began to spin wildly, as if drawn</p>
        </aside>
      </div>

    </section>
  );
};

export default Team;
