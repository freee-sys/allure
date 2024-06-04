'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs';
import { useSearchParams } from 'next/navigation';
import { NewCollection } from './_components/NewCollection';
import { Rings } from './_components/Rings';
import { Bracelets } from './_components/Bracelets';
import { Necklaces } from './_components/Necklaces';
import Link from 'next/link';

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

const Catalog = () => {
  const searchParams = useSearchParams();
  const defaultTab = searchParams.get('tab') || 'new-collection';
  return (
    <main>
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
          <Rings />
        </TabsContent>
        <TabsContent value='bracelets'>
          <Bracelets />
        </TabsContent>
        <TabsContent value='necklaces'>
          <Necklaces />
        </TabsContent>
      </Tabs>

      {/* <section className='catalog'>
        <Container />
      </section> */}
    </main>
  );
};

export default Catalog;
