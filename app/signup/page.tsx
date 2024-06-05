import Link from 'next/link';

import { buttonVariants } from '@/ui/button';

import { SignUpForm } from './_components/SignUpForm';

const SignUp = () => {
  return (
    <main className='flex h-svh items-center justify-center font-kharkiv'>
      <div className='flex h-full w-full max-w-[550px] flex-col items-center justify-center gap-12 bg-[#3E3A3A] p-10 sm:h-fit sm:rounded-ui sm:border sm:border-white'>
        <Link className='text-3xl' href='/'>
          ALLURE
        </Link>
        <SignUpForm />
        <div className='text-center'>
          Уже есть аккаунт?
          <br />
          <Link href='/signin' className={buttonVariants({ variant: 'link' })}>
            Войти
          </Link>
        </div>
      </div>
    </main>
  );
};
export default SignUp;
