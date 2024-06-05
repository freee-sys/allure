import { MenuIcon } from 'lucide-react';
import Link from 'next/link';

import { auth, signOut } from '@/auth';
import { Button, buttonVariants } from '@/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/ui/sheet';
import { cn } from '@/utils/cn';

import { NavLinks } from './NavLinks';

export const Header = async () => {
  const session = await auth();

  return (
    <>
      <header className='mb-2.5 mt-10 hidden h-[70px] items-center justify-between rounded-ui border border-white bg-[#161414] px-4 py-2.5 lg:flex'>
        {session?.user.role === 'admin' && (
          <Link href='/admin' className={buttonVariants()}>
            ADMIN
          </Link>
        )}
        <div className='font-kharkiv text-2xl'>ALLURE</div>

        <nav className='flex items-center justify-around'>
          <NavLinks />
        </nav>
        {!session?.user && (
          <Link href='/signin' className={cn(buttonVariants(), 'self-right')}>
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

      <header className='mb-2.5 mt-4 flex h-9 items-center justify-between rounded-ui border border-white bg-[#161414] px-4 py-2.5 lg:hidden'>
        <div className='font-kharkiv text-lg'>ALLURE</div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='link' size='icon'>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>МЕНЮ</SheetTitle>
            </SheetHeader>
            <NavLinks className='mt-10 flex flex-col gap-4'>
              {!session?.user && (
                <Link href='/signin' className={cn(buttonVariants({ size: 'sm' }), 'self-right')}>
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
                  <Button type='submit' variant='ghost' size='sm'>
                    Выйти
                  </Button>
                </form>
              )}
            </NavLinks>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
};
