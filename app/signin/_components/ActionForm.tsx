import { signIn } from '@/auth';

const SignIn = () => {
  return (
    <form
      action={async (formData) => {
        'use server';
        await signIn('credentials', formData);
      }}
    >
      <label>
        Email
        <input name='email' />
      </label>
      <button>Войти</button>
    </form>
  );
};

export default SignIn;
