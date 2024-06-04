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
      {children}
      <Footer />
    </>
  );
};

export default Layout;
