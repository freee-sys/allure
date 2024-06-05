import Link from 'next/link';

import { buttonVariants } from '@/ui/button';

const Home = () => {
  return (
    <main className='grid grid-cols-7 gap-[30px]'>
      <section
        className='relative col-span-7 h-[640px] w-full rounded-ui bg-center'
        style={{
          backgroundImage: 'url(main1.png)'
        }}
      >
        <div className='absolute bottom-[60px] left-[60px]'>
          <p className='mb-[30px] hidden text-base sm:block'>
            Каждое ювелирное изделие – это не просто украшение, а произведение искусства, отражающее
            ваши
            <br />
            индивидуальность и стиль.
          </p>
          <h1 className='mb-[60px] font-kharkiv text-4xl sm:text-6xl'>
            ИСКУССТВО В КАЖДОЙ
            <br />
            ГРАНИ
          </h1>
          <Link className={buttonVariants()} href='/catalog'>
            Перейти в каталог
          </Link>
        </div>
      </section>

      <section
        className='relative col-span-7 h-[630px] w-full rounded-ui bg-center md:col-span-4'
        style={{
          backgroundImage: 'url(main_new.png)'
        }}
      >
        <div className='absolute bottom-[60px] left-[60px] flex flex-col items-start gap-[30px]'>
          <h2 className='font-kharkiv text-xl sm:text-5xl'>НОВАЯ КОЛЛЕКЦИЯ</h2>
          <Link
            className={buttonVariants({ variant: 'outline' })}
            href={{
              pathname: '/catalog',
              query: {
                tab: 'new-collection'
              }
            }}
          >
            Смотреть
          </Link>
        </div>
      </section>

      <section
        className='relative col-span-7 h-[630px] w-full rounded-ui bg-center md:col-span-3'
        style={{
          backgroundImage: 'url(main_rings.png)'
        }}
      >
        <div className='absolute right-[60px] top-[60px] flex flex-col items-end gap-[30px]'>
          <h2 className='font-kharkiv text-xl sm:text-5xl'>КОЛЬЦА</h2>
          <Link
            className={buttonVariants({ variant: 'outline' })}
            href={{
              pathname: '/catalog',
              query: {
                tab: 'rings'
              }
            }}
          >
            Смотреть
          </Link>
        </div>
      </section>

      <section
        className='relative col-span-7 h-[456px] w-full rounded-ui bg-center md:col-span-5 md:col-start-3'
        style={{
          backgroundImage: 'url(main_bracletes.png)'
        }}
      >
        <div className='absolute bottom-[60px] right-[60px] flex flex-col items-end gap-[30px]'>
          <h2 className='font-kharkiv text-xl sm:text-5xl'>БРАСЛЕТЫ</h2>
          <Link
            className={buttonVariants({ variant: 'outline' })}
            href={{
              pathname: '/catalog',
              query: {
                tab: 'bracelets'
              }
            }}
          >
            Смотреть
          </Link>
        </div>
      </section>

      <section
        className='relative col-span-7 h-[456px] w-full rounded-ui bg-center md:col-span-5'
        style={{
          backgroundImage: 'url(main_necklaces.png)'
        }}
      >
        <div className='absolute bottom-[60px] left-[60px] flex flex-col items-end gap-[30px]'>
          <h2 className='font-kharkiv text-xl sm:text-5xl'>ОЖЕРЕЛЬЯ</h2>
          <Link
            className={buttonVariants({ variant: 'outline' })}
            href={{
              pathname: '/catalog',
              query: {
                tab: 'necklaces'
              }
            }}
          >
            Смотреть
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
