'use server';
import prisma from '@/lib/prisma';
import { SignInDto, SignUpDto } from '@/zod/authSchema';

export const getUser = async (credentials: SignInDto) => {
  const user = await prisma.user.findUnique({ where: { email: credentials.email } });

  if (credentials.password === user?.password) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    };
  }

  return null;
};

export const createUser = async (data: SignUpDto) => {
  const user = await prisma.user.findUnique({ where: { email: data.email } });

  if (user) {
    return {
      ok: false,
      error: 'User already exists'
    };
  } else {
    await prisma.user.create({ data });
    return {
      ok: true
    };
  }
};
