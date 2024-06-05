'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/utils/cn';

const links = [
  { href: '/', label: 'Главная' },
  { href: '/catalog', label: 'Каталог' },
  { href: '/about', label: 'О нас' },
  { href: '/contacts', label: 'Контакты' },
  { href: '/cart', label: 'Корзина' }
];

export const NavLinks = ({ className, children, ...props }: React.ComponentProps<'ul'>) => {
  const pathname = usePathname();

  return (
    <ul className={cn('flex gap-[70px] text-[#827F7F]', className)} {...props}>
      {links.map(({ href, label }) => (
        <li key={href}>
          <Link href={href} className={cn(pathname === href && 'text-white')}>
            {label}
          </Link>
        </li>
      ))}
      {children}
    </ul>
  );
};
