import { getProducts } from '@/api/products';

import { TabsContainer } from './_components/TabsContainer';

const Catalog = async () => {
  const products = await getProducts();

  return (
    <main>
      <TabsContainer products={products} />
    </main>
  );
};

export default Catalog;
