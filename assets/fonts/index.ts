import { Inter } from 'next/font/google';

import localFont from 'next/font/local';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const kharkiv = localFont({
  src: './KharkivTone.ttf',
  display: 'swap',
  variable: '--font-kharkiv'
});
