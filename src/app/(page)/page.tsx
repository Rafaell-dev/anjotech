import Image from 'next/image';
import React from 'react';
import { CustomButton } from '@/components';
import Link from 'next/link';
import Hero from '@/components/hero';

function Home() {
  return (
    <div className='overflow-hidden'>
      <Hero />

      <div className='padding-x flex flex-col mt-56 justify-center items-center'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='title2'>Seja o pioneiro com a Anjotech ao seu lado</h2>

          <div className='flex relative p-8 mt-12'>
            <Image
              src='/banner_01.svg'
              alt='banner_01'
              fill
              className='object-cover rounded-2xl  max-md:hidden'
              objectPosition='right center'
            />
            <div className='flex flex-col items-start z-10 gap-4 md:w-1/2 bg-white rounded-2xl p-6 max-md:bg-slate-50'>
              <p className='card__subtitle'>Website Próprio</p>
              <h2 className='card__title'>Criamos seu website</h2>
              <div className='card__text'>
                <p className='text-start'>
                  Tenha um site ágil, protegido, atraente e que vai impressionar
                  seus clientes e o melhor de tudo, totalmente personalizado!
                </p>
              </div>
              
            </div>
          </div>

          <div className='flex relative p-8 mt-12 justify-between'>
            <Image
              src='/banner_02.svg'
              alt='banner_02'
              width='500'
              height='200'
              className='object-fill rounded-2xl max-md:hidden'
            />
            <div className='flex flex-col items-start z-10 gap-4 md:w-1/2 bg-white rounded-2xl p-6 max-md:bg-slate-50'>
              <p className='card__subtitle'>Hospedagem</p>
              <h2 className='card__title'>Hospedamos seu site</h2>
              <div className='card__text'>
                <p className='text-start'>
                  Obtenha um domínio personalizado que reflita a sua marca, um
                  email profissional que gere confiança e um site de alta
                  performance que trabalha incansavelmente para você, 24 horas
                  por dia, 7 dias por semana
                </p>
              </div>
            </div>
          </div>

          <div className='flex relative p-8 mt-12 justify-between'>
            <div className='flex flex-col items-start z-10 gap-4 md:w-1/2 bg-white rounded-2xl p-6 max-md:bg-slate-50'>
              <p className='card__subtitle'>Presença Digital</p>
              <h2 className='card__title'>Suporte Completo</h2>
              <div className='card__text'>
                <p className='text-start'>
                  Liberte sua criatividade e concentre-se no que realmente
                  importa para o seu negócio! Nós garantimos o registro do seu
                  domínio e lidamos com toda parte técnica, para que você possa
                  brilhar onde é especialista
                </p>
              </div>
            </div>
            <Image
              src='/banner_03.svg'
              alt='banner_03'
              width='500'
              height='200'
              className='object-fill rounded-2xl max-md:hidden'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
