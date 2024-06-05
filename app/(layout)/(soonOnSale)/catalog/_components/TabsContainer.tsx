'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { GetProductsResponse } from '@/api/products';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs';

import { NewCollection } from './NewCollection';
import { Products } from './Products';

const tabs = [
  {
    name: 'НОВАЯ КОЛЛЕКЦИЯ',
    value: 'new-collection'
  },
  {
    name: 'КОЛЬЦА',
    value: 'rings'
  },
  {
    name: 'БРАСЛЕТЫ',
    value: 'bracelets'
  },
  {
    name: 'ОЖЕРЕЛЬЯ',
    value: 'necklaces'
  }
];

interface TabsContainerProps {
  products: GetProductsResponse;
}

export const TabsContainer = ({ products }: TabsContainerProps) => {
  const searchParams = useSearchParams();
  const defaultTab = searchParams.get('tab') || 'new-collection';

  return (
    <Tabs defaultValue={defaultTab} className='flex flex-col items-center'>
      <TabsList className='mb-10 flex-col lg:flex-row'>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className='w-full lg:w-fit'>
            <Link
              href={{
                query: { tab: tab.value }
              }}
            >
              {tab.name}
            </Link>
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent
        value='new-collection'
        className='flex w-full flex-wrap justify-center gap-[80px] font-kharkiv text-lg'
      >
        <NewCollection />
      </TabsContent>
      <TabsContent
        value='rings'
        className='flex w-full flex-wrap justify-center gap-[80px] font-kharkiv text-lg'
      >
        <Products products={products.rings} />
      </TabsContent>
      <TabsContent
        value='bracelets'
        className='flex w-full flex-wrap justify-center gap-[80px] font-kharkiv text-lg'
      >
        <Products products={products.bracelets} />
      </TabsContent>
      <TabsContent
        value='necklaces'
        className='flex w-full flex-wrap justify-center gap-[80px] font-kharkiv text-lg'
      >
        <Products products={products.necklaces} />
      </TabsContent>
    </Tabs>
  );
};
