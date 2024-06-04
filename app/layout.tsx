import type { Metadata } from 'next';

import { ProductsProvider } from '@/lib/contexts/products/ProductsProvider';

import '@/assets/globals.css';
import { inter, kharkiv } from '@/fonts/index';
import { cn } from '@/utils/cn';

export const metadata: Metadata = {
  title: 'Allure'
};

const RootLayout = async ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='ru' className={cn(`${inter.variable} ${kharkiv.variable}`, 'container')}>
      <body>
        <ProductsProvider>{children}</ProductsProvider>
      </body>
    </html>
  );
};

export default RootLayout;
