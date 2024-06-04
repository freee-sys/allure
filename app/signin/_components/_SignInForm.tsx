'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { signInSchema } from '@/lib/zod/authSchema';
import { Button } from '@/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/ui/form';
import { Input } from '@/ui/input';
import { PasswordInput } from '@/ui/password-input';

export const SignInForm = () => {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onBlur'
  });

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    const res = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col items-center gap-10 font-inter'
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='example@example.com' {...field} className='w-[320px]' />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder='***' {...field} className='w-[320px]' />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Войти</Button>
      </form>
    </Form>
  );
};
