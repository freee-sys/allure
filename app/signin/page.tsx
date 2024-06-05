import Link from 'next/link';

import { buttonVariants } from '@/ui/button';

import { ActionSignInForm } from './_components/ActionSignInForm';

const SignInPage = () => (
  <main className='flex h-svh items-center justify-center font-kharkiv'>
    <div className='flex w-[550px] flex-col items-center justify-center gap-12 rounded-ui border border-white bg-[#3E3A3A] p-10'>
      <Link className='text-3xl' href='/'>
        ALLURE
      </Link>
      <ActionSignInForm />
      <div className='text-center'>
        Впервые на нашем сайте?
        <br />
        <Link href='/signup' className={buttonVariants({ variant: 'link' })}>
          Зарегестрироваться
        </Link>
      </div>
    </div>
  </main>
);
export default SignInPage;
