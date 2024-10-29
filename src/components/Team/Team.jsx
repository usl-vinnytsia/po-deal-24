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
          гарні слова, чи справжні імена?
          Обираємо друге:
          Аліна Вовковинська,
          Ілля Несен,
          Анатолій Хрустовський, 
          Марія Маєвська,
          Павло Костишин,
          Ангеліна Масалаб,
          Іван Сотник,
          Влад Копиченський,
          Вікторія Кравець, Дар'я Дусанюк, Назарій Ковтун та інші
            <br></br>
            <br></br>
            творимо кращий час разом!
          </p>
        </aside>
        <aside className='team-right'>
          <img src={teamRight} alt="" className='team-right-img' />
          <span className='team-right-title'>знайомимось з командою</span>

          <p className='team-right-descr'>студентські самоврядування ВНТУ, ВНМУ, ДонНУ та ВДПУ обʼєднанні спільною ідеєю та Українською Студентською Лігою</p>
        </aside>
      </div>

    </section>
  );
};

export default Team;
