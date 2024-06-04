import React from 'react';

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

export interface ProductsContextProps {
  products: Product[] | [];
  deleteProducts: (products: Product[]) => void;
  addProduct: (products: Product) => void;
}

export const ProductsContext = React.createContext<ProductsContextProps>({
  products: [],
  deleteProducts: () => {},
  addProduct: () => {}
});
