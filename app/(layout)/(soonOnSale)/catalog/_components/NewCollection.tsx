import new_col1 from '@/public/new_col1.png';
import new_col2 from '@/public/new_col2.png';
import new_col3 from '@/public/new_col3.png';

import Image from 'next/image';

export const NewCollection = () => {
  return (
    <div className='flex gap-8 rounded-ui bg-[#161414] px-7 py-8'>
      <div className='flex flex-none flex-col gap-8'>
        <Image src={new_col2} alt='New collection 2' />
        <Image src={new_col3} alt='New collection 3' />
      </div>
      <div className='flex w-fit flex-col justify-between gap-8'>
        <Image src={new_col1} alt='New collection 1' />
        <p className='font-kharkiv text-base'>
          Коллекция &quot;Вечная Гармония&quot; была создана с идеей объединения прекрасного и
          гармоничного. Вдохновленная красотой природы и величием космоса, она призвана напомнить
          нам о вечной гармонии, существующей во вселенной. Каждое украшение в этой коллекции - это
          маленькое произведение искусства, которое призвано внести в нашу жизнь каплю красоты и
          гармонии. &quot;Вечная Гармония&quot; - это поиски равновесия и спокойствия, которые мы
          так часто ищем в мире вокруг нас.
        </p>
      </div>
    </div>
  );
};
