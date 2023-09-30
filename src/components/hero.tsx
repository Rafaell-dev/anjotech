'use client';
import React from 'react';
import { Check } from 'lucide-react';
import GradientButton from './GradientButton';

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
          <div className='w-1/3'>
            <GradientButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
