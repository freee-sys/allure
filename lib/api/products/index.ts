'use server';
import prisma from '@/lib/prisma';

export const getNecklaces = async () => {
  const products = await prisma.product.findMany({ where: { type: 'necklace' } });

  return products;
};

export const getBracelets = async () => {
  const products = await prisma.product.findMany({ where: { type: 'bracelet' } });

  return products;
};

export const getRings = async () => {
  const products = await prisma.product.findMany({ where: { type: 'ring' } });

  return products;
};

export const getProducts = async () => {
  const rings = await getRings();
  const bracelets = await getBracelets();
  const necklaces = await getNecklaces();
  return { rings, bracelets, necklaces };
};

export type GetProductsResponse = Awaited<ReturnType<typeof getProducts>>;
