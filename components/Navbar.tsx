import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import logoImg from '../public/logo.png';
import Pic from '../public/pp.jpg';

export const Navbar = () => {
  return (
    <nav className="bg-white p-4 border-b flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Image 
          src={logoImg} 
          alt="Logo" 
          width={40} 
          height={40} 
          className="rounded-md" 
          priority 
        />
        <h1 className="text-3xl text-black font-bold">WhatBytes</h1>
      </div>
      <div className="flex items-center space-x-2 border-2 border-gray-100 rounded-lg p-2">
        <Avatar className="w-10 h-10">
          <AvatarImage 
            src={Pic.src}
            alt="User Avatar" 
            className="rounded-full object-cover" 
          />
          <AvatarFallback delayMs={600}>KT</AvatarFallback>
        </Avatar>
        <h1 className='font-bold'>Sankalp Pawar</h1>
      </div>
    </nav>
  );
};