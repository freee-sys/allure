import { Suspense } from 'react';

import { ProductsProvider } from '@/lib/contexts/products/ProductsProvider';

import { Footer } from './_components/Footer';
import { Header } from './_components/Header';

const Layout = async ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <Suspense>
        <ProductsProvider>{children}</ProductsProvider>
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
