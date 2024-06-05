import { Button } from '@/ui/button';
import { Input } from '@/ui/input';
import { Label } from '@/ui/label';
import { PasswordInput } from '@/ui/password-input';

import { signInAction } from './signInAction';

export const ActionSignInForm = () => {
  let error: unknown;

  return (
    <form
      action={async (formData) => {
        'use server';
        const res = await signInAction(formData);
      }}
      className='flex flex-col items-center gap-10 font-inter'
    >
      <div className=''>
        <Label htmlFor='email'>Email</Label>
        <Input
          autoComplete='email'
          name='email'
          type='email'
          id='email'
          placeholder='example@example.com'
          className='w-[300px]'
        />
      </div>

      <div className=''>
        <Label htmlFor='password'>Password</Label>
        <PasswordInput
          name='password'
          type='password'
          id='password'
          placeholder='password'
          className='w-[300px]'
        />
      </div>

      <Button type='submit'>Войти</Button>
    </form>
  );
};
