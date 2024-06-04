import Link from 'next/link';

import { NavLinks } from './NavLinks';
import { Button } from '@/ui/button';

export const Header = async () => {
  const session = true;

  return (
    <header className='mb-2.5 mt-10 flex items-center justify-between rounded-[30px] border border-white bg-[#161414] px-4 py-2.5'>
      <div className='font-kharkiv text-2xl'>ALLURE</div>
      <nav>
        <NavLinks />
      </nav>
      {!session && (
        <Link href='/signin' className='button-main-one'>
          Войти
        </Link>
      )}

      {session && <Button>Выйти</Button>}
    </header>
  );
};
