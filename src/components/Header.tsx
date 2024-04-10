import React from 'react';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Header = () => {
  const headers = [
    {
      text: 'Overview',
    },
    {
      text: 'Customers',
    },
    {
      text: 'Products',
    },
    {
      text: 'Settings',
    },
  ];
  return (
    <div className="border flex items-center px-5 py-3 justify-between">
      <nav className={cn('flex items-center space-x-4 lg:space-x-6 mx-6')}>
        {headers.map((header) => (
          <Link
            to={'/'}
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              header.text !== 'Overview' && 'text-muted-foreground'
            )}
            key={header.text}
          >
            {header.text}
          </Link>
        ))}
      </nav>
      <div className="flex gap-4 items-center">
        <div>
          <Input
            type="search"
            placeholder="Search..."
            className="md:w-[100px] lg:w-[300px]"
            disabled
          />
        </div>
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
