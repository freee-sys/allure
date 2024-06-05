import { Product } from '@prisma/client';
import { atom } from 'jotai';

export const cartAtom = atom<Product[]>([]);

export const totalPriceAtom = atom((get) => get(cartAtom).reduce((a, b) => a + b.price, 0));
