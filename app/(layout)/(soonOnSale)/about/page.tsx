import './about.css';

const About = () => {
  return (
    <main>
      <section className='moving-stripes'>
        <div className='stripe'>
          <div className='stripe-text'>
            ALLURE ALLURE ALLURE ALLURE ALLURE ALLURE ALLURE ALLURE ALLURE ALLURE ALLURE ALLURE
            ALLURE ALLURE ALLURE ALLURE
          </div>
        </div>
        <div className='stripe'>
          <div className='stripe-text'>
            О БРЕНДЕ О БРЕНДЕ О БРЕНДЕ О БРЕНДЕ О БРЕНДЕ О БРЕНДЕ О БРЕНДЕ О БРЕНДЕ О БРЕНДЕ О
            БРЕНДЕ О БРЕНДЕ О БРЕНДЕ
          </div>
        </div>
        <div className='stripe'>
          <div className='stripe-text'>
            ALLURE ALLURE ALLURE ALLURE ALLURE ALLURE ALLURE ALLURE ALLURE ALLURE ALLURE ALLURE
            ALLURE ALLURE ALLURE ALLURE
          </div>
        </div>
      </section>

      <section className='about'>
        <div className='left'>
          <h4>
            Allure был основан в 2012 году с одной целью: объединить любовь к драгоценным камням и
            ювелирному искусству.
          </h4>
          <h4>
            С первых дней существования мы стремились создать коллекции, которые бы сочетали в себе
            вечную классику и современные тенденции.
          </h4>
        </div>
      </section>

      <section className='out-team'>
        <h1>НАША КОМАНДА</h1>
        <div className='scroll'>
          <div className='row first-row'>
            <div className='rectangle'>
              <div className='photo'>
                <img src='member1.png' alt='Foto' />
              </div>
              <div className='info'>
                <h4>Имя Фамилия</h4>
                <p>Креативный директор</p>
              </div>
            </div>
            <div className='rectangle'>
              <div className='photo'>
                <img src='member2.png' alt='Foto' />
              </div>
              <div className='info'>
                <h4>Имя Фамилия</h4>
                <p>Дизайнер</p>
              </div>
            </div>
            <div className='rectangle'>
              <div className='photo'>
                <img src='member3.png' alt='Foto' />
              </div>
              <div className='info'>
                <h4>Имя Фамилия</h4>
                <p>Должность</p>
              </div>
            </div>
          </div>

          <div className='row second-row'>
            <div className='rectangle'>
              <div className='photo'>
                <img src='member4.png' alt='Foto' />
              </div>
              <div className='info'>
                <h4>Имя Фамилия</h4>
                <p>Должность</p>
              </div>
            </div>
            <div className='rectangle'>
              <div className='photo'>
                <img src='member5.png' alt='Foto' />
              </div>
              <div className='info'>
                <h4>Имя Фамилия</h4>
                <p>Должность</p>
              </div>
            </div>
            <div className='rectangle'>
              <div className='photo'>
                <img src='member6.png' alt='Foto' />
              </div>
              <div className='info'>
                <h4>Имя Фамилия</h4>
                <p>Должность</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='values'>
        <h1>НАШИ ЦЕННОСТИ</h1>
        <div className='values-container'>
          <div className='value-card'>
            <h4>КАЧЕСТВО</h4>
            <p>
              Мы выбираем только лучшие материалы и следим за каждым этапом производства, чтобы
              предложить вам изделия высочайшего качества.
            </p>
          </div>
          <div className='value-card'>
            <h4>ДОВЕРИЕ</h4>
            <p>
              Мы ценим доверие наших клиентов и гарантируем прозрачность и честность во всем, что мы
              делаем.
            </p>
          </div>
          <div className='value-card'>
            <h4>УНИКАЛЬНОСТЬ</h4>
            <p>
              Каждое украшение в нашем ассортименте – это уникальное произведение, созданное с
              вниманием к деталям.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
