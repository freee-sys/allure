import { z } from 'zod';

export const signInSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .email('Email is invalid'),
  password: z.string({ required_error: 'Password is required' }).min(1, 'Password is required')
});

export type SignInDto = z.infer<typeof signInSchema>;

export const signUpSchema = signInSchema.extend({
  name: z.string({ required_error: 'Name is required' }).min(1, 'Name is required')
});

export type SignUpDto = z.infer<typeof signUpSchema>;
