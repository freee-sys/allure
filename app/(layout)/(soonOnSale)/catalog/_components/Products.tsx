import { Product } from '@prisma/client';
import { useSetAtom } from 'jotai';
import Image from 'next/image';

import { cartAtom } from '@/store';
import { Button } from '@/ui/button';
import { numberWithSpaces } from '@/utils/numberWithSpaces';

interface TabProps {
  products: Product[];
}

export const Products = ({ products }: TabProps) => {
  const setCart = useSetAtom(cartAtom);

  const onClick = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <>
      {products?.map((product) => (
        <div key={product.id} className='relative h-[450px] w-[290px] rounded-ui bg-white'>
          <Image
            width={290}
            height={450}
            src={`/${product.image}`}
            alt='Product'
            className='rounded-ui bg-center'
          />
          <div className='absolute bottom-[1px] left-[1px] right-[1px] flex flex-col gap-2.5 rounded-ui bg-black pb-2.5 pl-5 pr-2.5 pt-5'>
            <span>{product.name}</span>
            <div className='flex justify-between'>
              <span>{numberWithSpaces(product.price)} ₽</span>
              <Button onClick={() => onClick(product)}>В корзину</Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
