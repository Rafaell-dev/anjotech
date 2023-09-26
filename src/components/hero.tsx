'use client';
import Link from 'next/link';
import CustomButton from './CustomButton';
import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

const Hero = () => {

  return (
    <div className='hero'>
      <div className='flex-1 pt-12 padding-x'>
        <div>
          <p className='hero__title '>
            Somos especialistas em criação de{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-anjo to-purple-500'>
              websites
            </span>
          </p>
        </div>
        <div className='flex flex-col gap-8'>
          <p className='hero__subtitle'>Transforme seu negócio conosco.</p>
          <div className='flex flex-col gap-4'>
            <p className='flex gap-2'>
              <Check />
              Hospedagem e Domínio incluído
            </p>
            <p className='flex gap-2'>
              <Check />
              Suporte especializado
            </p>
            <p className='flex gap-2'>
              <Check /> Painel de postagens
            </p>
          </div>
          <div className=''>
            <button
              type='button'
              className='relative inline-flex items-center justify-center p-4 px-10 py-5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group'
            >
              <span className='absolute inset-0 w-full h-full bg-gradient-to-br from-primary-anjo to-purple-500'></span>
              <span className='absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-50 translate-x-10 bg-primary-anjo rounded-full opacity-60 group-hover:rotate-90 ease'></span>
              <span className='relative text-white font-bold'>
                Contrate Agora
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
