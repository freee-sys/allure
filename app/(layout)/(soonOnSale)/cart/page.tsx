'use client';

import { useAtom, useAtomValue } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';

import { cartAtom, totalPriceAtom } from '@/store';
import { buttonVariants } from '@/ui/button';
import { Label } from '@/ui/label';
import { RadioGroup, RadioGroupItem } from '@/ui/radio-group';
import { cn } from '@/utils/cn';
import { numberWithSpaces } from '@/utils/numberWithSpaces';

const Korzina = () => {
  const [cart, setCart] = useAtom(cartAtom);

  const totalPrice = useAtomValue(totalPriceAtom);
  return (
    <>
      <main className='mb-[200px] flex flex-col gap-10 font-kharkiv lg:mb-0'>
        <h2 className='text-xl sm:text-5xl'>КОРЗИНА</h2>

        <div className='grid grid-cols-4 gap-10'>
          <RadioGroup className='col-span-4 h-fit divide-y-2 divide-[#8E8585] rounded-ui border border-white bg-[#161414] text-sm sm:text-base md:text-lg lg:col-span-3'>
            <div className='flex justify-between px-5 py-10'>
              <div className='flex items-center justify-center gap-5'>
                <RadioGroupItem value='all' id='all' />
                <Label htmlFor='all'>Выбрать все</Label>
              </div>
              <span className='text-[#635858]'>Удалить выбранное</span>
            </div>

            {cart.map((product) => (
              <div
                key={product.id}
                className='flex flex-col justify-between gap-8 px-5 py-10 text-center sm:flex-row sm:text-left'
              >
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
                <span className=''>{numberWithSpaces(product.price)} ₽</span>
              </div>
            ))}
          </RadioGroup>

          <div className='relative hidden h-[300px] flex-col gap-12 rounded-ui border border-white bg-[#161414] px-5 py-10 lg:flex'>
            <span>Сумма заказа</span>
            <span className='self-center text-4xl'>{numberWithSpaces(totalPrice)} ₽</span>
            <Link
              href='payment'
              className={cn(buttonVariants({ size: 'lg' }), 'absolute bottom-0 left-0 right-0')}
            >
              ПРОДОЛЖИТЬ
            </Link>
          </div>
        </div>
      </main>
      <div className='fixed bottom-0 left-0 right-0 flex flex-col justify-end gap-5 bg-[#161414] pt-7 lg:hidden'>
        <span className='px-5'>Сумма заказа</span>
        <span className='self-center px-5 text-4xl'>{numberWithSpaces(totalPrice)} ₽</span>
        <Link
          href='payment'
          className={cn(buttonVariants({ size: 'lg' }), 'rounded-none hover:bg-white/80')}
        >
          ПРОДОЛЖИТЬ
        </Link>
      </div>
    </>
  );
};

export default Korzina;
