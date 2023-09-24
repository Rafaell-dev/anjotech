'use client';
import Link from 'next/link';
import Image from 'next/image';


const SimpleNavbar = () => {
  return (
    <header className='block z-50 bg-white'>
      <nav className=' z-50 max-w-[1440px] mx-auto md:flex-row md:px-16 px-6 py-4 '>
        <div className='flex justify-center items-center h-12'>
          <Link href='/' className='flex justify-center items-center'>
            <Image
              src='/logo_default.svg'
              alt='logo'
              width={146}
              height={24}
              className='object-contain'

            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default SimpleNavbar;
