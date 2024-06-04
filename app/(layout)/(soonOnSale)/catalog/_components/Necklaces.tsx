import { Product } from '@/lib/contexts/products/ProductsContext';
import { useProducts } from '@/lib/contexts/products/useProducts';
import { Button } from '@/ui/button';
import Image from 'next/image';

const products = [
  {
    id: '12312423fgdfgfdg',
    name: 'Ожерелье "Золотая кость"',
    price: '49 000',
    image: 'product1.png'
  },
  {
    id: '1231gghfghgdfgfdg',
    name: 'Ожерелье "Золотая кость"',
    price: '49 000',
    image: 'product1.png'
  },
  {
    id: '167876812423fgdfpog',
    name: 'Ожерелье "Золотая кость"',
    price: '49 000',
    image: 'product1.png'
  }
];

export const Necklaces = () => {
  const cart = useProducts();

  const onClick = (product: Product) => {
    cart.addProduct(product);
  };

  return (
    <div className='flex w-full flex-wrap gap-[80px] font-kharkiv text-lg'>
      {products.map((product) => (
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
              <span>{product.price} ₽</span>
              <Button onClick={() => onClick(product)}>В корзину</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
