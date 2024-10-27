import './Program.scss';

export const Program = () => {
  return (
    <section id="program" className="program">
      <main className='program-main'>
        <div className='program-main-about'>
          <span>[ярмарок карʼєри]</span>
          <span>ярмарок карʼєри / 20 локацій</span>
          <span>10 спікерів</span>
          <span className='program-main-title'>програма подолу</span>
        </div>

        <div className='program-main-bottom-txt'>
          <p>Time felt suspended, as if the world itself held its breath, waiting for something to </p>
          <span>©2024-2025</span>
        </div>
      </main>
      <div className='program__container'>
        <table>
          <tr>
            <td>[9.00-10.00]</td>
            <td>як відмовляти людям</td>
            <td>Михайло Ганчук</td>
          </tr>
          <tr>
            <td>[9.00-10.00]</td>
            <td>чи може Росія розпочати війну проти України</td>
            <td>Володимир Зеленський, Гройсан, Стів Джобс, Святослав Вакарчук</td>
          </tr>
          <tr>
            <td>[all day]</td>
            <td>консультативний HR центр</td>
            <td>Володимир Зеленський, Гройсан, Стів Джобс, Святослав Вакарчук</td>
          </tr>
          <tr>
            <td>[9.00-10.00]</td>
            <td>як відмовляти людям</td>
            <td>Михайло Ганчук</td>
          </tr>
        </table>

      </div>

    </section>
  );
};