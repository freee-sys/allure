'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { GetProductsResponse } from '@/api/products';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs';

import { Bracelets } from './Bracelets';
import { Necklaces } from './Necklaces';
import { NewCollection } from './NewCollection';
import { Rings } from './Rings';

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
      <TabsList className='mb-7'>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
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
      <TabsContent value='new-collection'>
        <NewCollection />
      </TabsContent>
      <TabsContent value='rings'>
        <Rings products={products.rings} />
      </TabsContent>
      <TabsContent value='bracelets'>
        <Bracelets products={products.bracelets} />
      </TabsContent>
      <TabsContent value='necklaces'>
        <Necklaces products={products.necklaces} />
      </TabsContent>
    </Tabs>
  );
};
