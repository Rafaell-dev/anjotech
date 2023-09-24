'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import CustomButton from './CustomButton';

import { X, Menu } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='block z-50 bg-white'>
      <nav className=' z-50 max-w-[1440px] mx-auto md:flex-row md:px-16 px-6 py-4 '>
        <div className='flex justify-between items-center h-12'>
          <Link href='/' className='flex justify-center items-center'>
            <Image
              src='/logo_default.svg'
              alt='logo'
              width={146}
              height={18}
              className='object-contain'
            />
          </Link>

          <div
            className={`mt-4 sm:mt-0 sm:flex sm:justify-evenly  ${
              isMenuOpen
                ? 'fixed z-30 inset-0 flex flex-col items-center justify-center gap-12 bg-white '
                : 'hidden'
            }`}
          >
            <Link href='/sobre' onClick={closeMenu}>
              <CustomButton
                title='Sobre'
                btnType='button'
                containerStyles='font-semibold min-w-[130px] text-black hover:text-primary-anjo sm:mr-4'
              />
            </Link>
            <Link href='/planos' onClick={closeMenu}>
              <CustomButton
                title='Planos'
                btnType='button'
                containerStyles='font-semibold min-w-[130px] text-black hover:text-primary-anjo sm:mr-4'
              />
            </Link>
            <Link href='/cases' onClick={closeMenu}>
              <CustomButton
                title='Cases'
                btnType='button'
                containerStyles='font-semibold min-w-[130px] text-black hover:text-primary-anjo sm:mr-4'
              />
            </Link>
            <Link href='/contato' onClick={closeMenu}>
              <CustomButton
                title='Contato'
                btnType='button'
                containerStyles='font-semibold min-w-[130px] text-black hover:text-primary-anjo sm:mr-4'
              />
            </Link>
            <Link href='/portal' onClick={closeMenu}>
              <CustomButton
                title='Portal'
                btnType='button'
                containerStyles='font-semibold min-w-[130px] text-black hover:text-primary-anjo'
              />
            </Link>
          </div>

          {isMenuOpen ? (
            <button
              onClick={toggleMenu}
              className='md:hidden block z-50 focus:outline-none'
            >
              <X size={24} />
            </button>
          ) : (
            <button
              onClick={toggleMenu}
              className='md:hidden block focus:outline-none'
            >
              <Menu size={24} />
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
