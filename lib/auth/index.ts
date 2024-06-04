import NextAuth from 'next-auth';
import { ZodError } from 'zod';
import Credentials from 'next-auth/providers/credentials';
import { signInSchema } from '@/zod/signInSchema';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {
        try {
          let user = null;

          const { email, password } = await signInSchema.parseAsync(credentials);

          user = await getUser(email);

          if (!user) {
            throw new Error('User not found.');
          }

          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            return null;
          }
        }
      }
    })
  ],
  pages: {
    signIn: '/signin'
  }
});
