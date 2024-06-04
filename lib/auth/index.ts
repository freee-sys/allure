import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { ZodError } from 'zod';

import { getUser } from '@/api/users';
import { signInSchema } from '@/zod/authSchema';

declare module 'next-auth' {
  interface User {
    id?: string;
    role?: string;
    name?: string | null;
    email?: string | null;
  }

  interface Session {
    user: {
      id: string;
      role?: string;
      name?: string | null;
      email?: string | null;
    };
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {
        try {
          const cred = await signInSchema.parseAsync(credentials);

          const user = await getUser(cred);

          if (!user) {
            throw new Error('Invalid credentials');
          }

          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            return null;
          }

          throw error;
        }
      }
    })
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id as string;
      session.user.role = token.role as string;
      return session;
    }
  },
  pages: {
    signIn: '/signin'
  }
});
