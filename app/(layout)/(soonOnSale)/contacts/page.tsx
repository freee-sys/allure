import { YandexMap } from './_components/YandexMap';

const Contacts = () => (
  <main className='flex flex-col gap-10 font-kharkiv'>
    <h2 className='text-xl sm:text-5xl'>КОНТАКТЫ</h2>

    <div className='flex gap-10'>
      <div className='map-container'>
        <YandexMap />
      </div>
      <div className='flex flex-col'>
        <p>
          Если у вас есть вопросы или вы хотите узнать больше о нашем магазине и коллекциях, вы
          можете связаться с нами:
        </p>
        <div>
          <span>Телефон: +7 (800) 123-45-67</span>
          <span>Email: info@allure-jewelry.com</span>
          <span>Адрес: Москва, ул. Тверская, д. 12</span>
        </div>
      </div>
    </div>
  </main>
);

export default Contacts;
