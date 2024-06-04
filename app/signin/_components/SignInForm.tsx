'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { z } from 'zod';

import { signInSchema } from '@/lib/zod/signInSchema';

export const SignInForm = () => {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: ''
    }
  });

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    await signIn('credentials', values);
  }
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className='bg-[#3E3A3A]'>
      <label>
        Email
        <input placeholder='Email' {...form.register('email', { required: true })} />
      </label>
      <button type='submit'>Войти</button>
    </form>
  );
};
