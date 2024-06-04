import Link from 'next/link';

import { auth, signOut } from '@/auth';
import { Button, buttonVariants } from '@/ui/button';

import { NavLinks } from './NavLinks';

export const Header = async () => {
  const session = await auth();

  return (
    <header className='mb-2.5 mt-10 flex items-center justify-between rounded-[30px] border border-white bg-[#161414] px-4 py-2.5'>
      {session?.user.role === 'admin' && (
        <Link href='/admin' className={buttonVariants()}>
          ADMIN
        </Link>
      )}

      <div className='font-kharkiv text-2xl'>ALLURE</div>
      <nav>
        <NavLinks />
      </nav>
      {!session?.user && (
        <Link href='/signin' className={buttonVariants()}>
          Войти
        </Link>
      )}

      {session?.user && (
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <Button type='submit' variant='ghost'>
            Выйти
          </Button>
        </form>
      )}
    </header>
  );
};
