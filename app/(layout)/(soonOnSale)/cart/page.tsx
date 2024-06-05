'use client';

import { useAtom, useAtomValue } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';

import { cartAtom, totalPriceAtom } from '@/store';
import { buttonVariants } from '@/ui/button';
import { Label } from '@/ui/label';
import { RadioGroup, RadioGroupItem } from '@/ui/radio-group';
import { cn } from '@/utils/cn';

const Korzina = () => {
  const [cart, setCart] = useAtom(cartAtom);

  const totalPrice = useAtomValue(totalPriceAtom);
  return (
    <main className='flex flex-col gap-10 font-kharkiv'>
      <h2 className='text-xl sm:text-5xl'>КОРЗИНА</h2>

      <div className='grid grid-cols-4 gap-10'>
        <RadioGroup className='col-span-4 h-fit divide-y-2 divide-[#8E8585] rounded-ui border border-white bg-[#161414] md:col-span-3'>
          <div className='flex justify-between px-5 py-10 text-lg'>
            <div className='flex items-center justify-center gap-5'>
              <RadioGroupItem value='all' id='all' />
              <Label htmlFor='all'>Выбрать все</Label>
            </div>
            <span className='text-[#635858]'>Удалить выбранное</span>
          </div>

          {cart.map((product) => (
            <div key={product.id} className='flex justify-between px-5 py-10'>
              <div className='flex items-center justify-center gap-5'>
                <RadioGroupItem value={product.id} />
                <Image
                  width={179}
                  height={207}
                  src={`/${product.image}`}
                  alt='Product'
                  className='rounded-[10px] bg-center'
                />
              </div>
              <div className='flex flex-col'>
                {product.name}

                <span className='text-[#635858]'>300 г</span>
              </div>
              <span className=''>{product.price} ₽</span>
            </div>
          ))}
        </RadioGroup>

        <div className='relative hidden h-[300px] flex-col gap-12 rounded-ui border border-white bg-[#161414] px-5 py-10 md:flex'>
          <span>Сумма заказа</span>
          <span className='self-center text-4xl'>{totalPrice} ₽</span>
          <Link
            href='payment'
            className={cn(buttonVariants({ size: 'lg' }), 'absolute bottom-0 left-0 right-0')}
          >
            ПРОДОЛЖИТЬ
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Korzina;
