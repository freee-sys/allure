import { redirect } from 'next/navigation';

import { signIn } from '@/auth';

type FormState = {
  error: string;
};

export const signInAction = async (formData: FormData) => {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    await signIn('credentials', {
      email,
      password,
      redirect: false
    });
  } catch (err) {
    return { error: err };
  }
  redirect('/');
};
