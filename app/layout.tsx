import type { Metadata } from 'next';

import { inter, kharkiv } from '@/fonts/index';
import { ProductsProvider } from '@/lib/contexts/products/ProductsProvider';
import { cn } from '@/utils/cn';

import '@/assets/globals.css';

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
