import Link from 'next/link';

import { buttonVariants } from '@/ui/button';

import { SignUpForm } from './_components/SignUpForm';

const SignUp = () => {
  return (
    <main className='flex h-svh items-center justify-center font-kharkiv'>
      <div className='flex w-[550px] flex-col items-center justify-center gap-12 rounded-ui border border-white bg-[#3E3A3A] p-10'>
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
