'use client';

import React from 'react';

import { Product, ProductsContext } from './ProductsContext';

export interface StageProviderProps {
  children: React.ReactNode;
}

export const ProductsProvider = ({ children }: StageProviderProps) => {
  const [products, setProducts] = React.useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const deleteProducts = (items: Product[]) => {
    setProducts(products.filter((item) => !products.includes(item)));
  };

  const value = React.useMemo(() => ({ products, addProduct, deleteProducts }), [products]);

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
