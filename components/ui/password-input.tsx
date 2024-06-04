'use client';

import { forwardRef, useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

import { cn } from '@/utils/cn';

import { Button } from './button';
import type { InputProps } from './input';
import { Input } from './input';

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='relative'>
      <Input
        autoComplete='current-password'
        type={showPassword ? 'text' : 'password'}
        className={cn('pr-10', className)}
        ref={ref}
        {...props}
      />
      <Button
        type='button'
        variant='ghost'
        size='icon'
        className='absolute right-0 top-0 h-full hover:bg-transparent'
        onClick={() => setShowPassword(!showPassword)}
        disabled={!props.value || props.disabled}
      >
        {showPassword ? (
          <EyeOffIcon className='size-6' aria-hidden='true' />
        ) : (
          <EyeIcon className='size-6' aria-hidden='true' />
        )}
      </Button>
    </div>
  );
});

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
