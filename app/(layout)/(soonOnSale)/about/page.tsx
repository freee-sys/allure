import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const team1 = ['member1.png', 'member2.png', 'member3.png'];

const team2 = ['member4.png', 'member5.png', 'member6.png'];

const About = () => {
  return (
    <main className='flex flex-col gap-40'>
      <section className='select-none overflow-hidden font-kharkiv text-3xl md:text-8xl'>
        <hr className='my-3.5 bg-white' />
        <Marquee autoFill className='overflow-hidden'>
          ALLURE&nbsp;
        </Marquee>

        <hr className='my-3.5 bg-white' />
        <Marquee autoFill speed={30} className='overflow-hidden'>
          О БРЕНДЕ&nbsp;
        </Marquee>

        <hr className='my-3.5 bg-white' />
        <Marquee autoFill speed={50} className='overflow-hidden'>
          ALLURE&nbsp;
        </Marquee>
        <hr className='my-3.5 bg-white' />
      </section>

      <section className='flex max-w-[630px] flex-col gap-14 self-center font-kharkiv text-2xl'>
        <h4>
          Allure был основан в 2012 году с одной целью: объединить любовь к драгоценным камням и
          ювелирному искусству.
        </h4>
        <h4>
          С первых дней существования мы стремились создать коллекции, которые бы сочетали в себе
          вечную классику и современные тенденции.
        </h4>
      </section>

      <section className='flex flex-col gap-14 overflow-hidden'>
        <h1 className='text-center font-kharkiv text-3xl md:text-8xl'>НАША КОМАНДА</h1>
        <div className='flex flex-col gap-4 font-inter text-lg'>
          <Marquee speed={50} className='overflow-hidden'>
            {team1.map((member) => (
              <div
                key={member}
                className='mr-4 flex w-[560px] items-center rounded-ui border border-white px-5 py-4'
              >
                <Image width={211} height={216} src={`/${member}`} alt='member' className='mr-24' />
                <div className='flex flex-col gap-11 text-center'>
                  <span>Имя Фамилия</span>
                  <span>Должность</span>
                </div>
              </div>
            ))}
          </Marquee>
          <Marquee speed={50} direction='right' className='overflow-hidden'>
            {team2.map((member) => (
              <div
                key={member}
                className='mr-4 flex w-[560px] items-center rounded-ui border border-white px-5 py-4'
              >
                <Image width={211} height={216} src={`/${member}`} alt='member' className='mr-24' />
                <div className='flex flex-col gap-11 text-center'>
                  <span>Имя Фамилия</span>
                  <span>Должность</span>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      <section className='flex flex-col gap-14 font-kharkiv'>
        <h1 className='text-3xl md:text-8xl'>
          НАШИ
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ЦЕННОСТИ
        </h1>
        <div className='relative space-y-4 md:h-[460px] md:space-y-0'>
          <div className='flex max-w-[500px] flex-col gap-12 rounded-ui border border-white bg-transparent px-4 py-8 md:absolute md:left-0 md:top-0'>
            <h4 className='text-right text-2xl'>КАЧЕСТВО</h4>
            <p className='text-lg'>
              Мы выбираем только лучшие материалы и следим за каждым этапом производства, чтобы
              предложить вам изделия высочайшего качества.
            </p>
          </div>
          <div className='flex max-w-[500px] flex-col gap-12 rounded-ui border border-white bg-transparent px-4 py-8 md:absolute md:right-0 md:top-0'>
            <h4 className='text-left text-2xl'>ДОВЕРИЕ</h4>
            <p className='text-lg'>
              Мы ценим доверие наших клиентов и гарантируем прозрачность и честность во всем, что мы
              делаем.
            </p>
          </div>
          <div className='flex max-w-[500px] flex-col gap-12 rounded-ui border border-white bg-transparent px-4 py-8 md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2'>
            <h4 className='text-center text-2xl'>УНИКАЛЬНОСТЬ</h4>
            <p className='text-lg'>
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
