'use client';
import { CustomButton } from '@/components';
import { Check, Cloud, Lock } from 'lucide-react';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import DetailsBasic from './modal/DetailsBasic';
import DetailsComplete from './modal/DetailsComplete';
import Link from 'next/link';

const Planos = () => {
  const [modalsOpen, setModalsOpen] = useState({
    detailsBasic: false,
    detailsComplete: false,
  });

  const openModal = (modalName: string) => {
    setModalsOpen(prevState => ({
      ...prevState,
      [modalName]: true,
    }));
  };

  const closeModal = (modalName: string) => {
    setModalsOpen(prevState => ({
      ...prevState,
      [modalName]: false,
    }));
  };
  return (
    <div className='flex flex-col padding-x '>
      <DetailsBasic
        isOpen={modalsOpen.detailsBasic}
        onClose={() => closeModal('detailsBasic')}
      />
      <DetailsComplete
        isOpen={modalsOpen.detailsComplete}
        onClose={() => closeModal('detailsComplete')}
      />
      <div className='flex flex-col items-start gap-24 md:py-32 p-6'>
        <div className='flex flex-col gap-24'>
          <h2 className='title2 text-center text-wrap' id='howMuch'>
            Qual é o valor para manter meu site no ar
          </h2>
          <div className='flex max-md:flex-col gap-8'>
            <div className='flex flex-col items-start z-10 gap-4 md:w-1/2 border  bg-white rounded-2xl p-6 max-md:bg-slate-50'>
              <div className='p-4 bg-primary-anjo-100 rounded-2xl'>
                <Image
                  alt='support_icon'
                  src='/support_icon.svg'
                  width='32'
                  height='32'
                />
              </div>
              <h2 className='card__title'>Plano Básico</h2>
              <div className='card__text'>
                <p className='text-start'>
                  Plano básico para quem está começando e precisa de um site e
                  já tem um domínio e hospedagem.
                </p>
              </div>
              <p className='card__subtitle'>Benefícios</p>
              <div className='flex flex-col gap-6 mb-4 '>
                <div className='card__text flex gap-3 items-center'>
                  <div className='p-1 bg-primary-anjo-100 rounded-2xl'>
                    <Check size={18} color='white' />
                  </div>
                  <p className='text-start text-base font-bold'>
                    Site Personalizado Basic
                  </p>
                </div>
                <div className='card__text flex gap-3 items-center'>
                  <div className='p-1 bg-primary-anjo-100 rounded-2xl'>
                    <Check size={18} color='white' />
                  </div>
                  <p className='text-start text-base font-bold'>
                    Suporte Humano
                  </p>
                </div>
                <div className='card__text flex gap-3 items-center'>
                  <div className='p-1 bg-primary-anjo-100 rounded-2xl'>
                    <Check size={18} color='white' />
                  </div>
                  <p className='text-start text-base font-bold'>
                    Painel Administrativo
                  </p>
                </div>
              </div>
              <div className='flex flex-col gap-6 mt-auto w-full justify-end'>
                <Link href='/buyme'>
                  <CustomButton
                    title='Contrate Agora'
                    containerStyles='p-4 rounded-lg flex items-center gap-2 bg-primary-anjo w-full'
                    textStyles='font-bold text-white'
                  />
                </Link>
                <CustomButton
                  title='Mais Detalhes'
                  containerStyles='p-4 rounded-lg flex items-center gap-2 bg-primary-anjo-100 w-full'
                  textStyles='font-bold text-primary-anjo'
                  handleClick={() => openModal('detailsBasic')}
                />
              </div>
            </div>
            <div className='flex flex-col items-start z-10 gap-4 md:w-1/2 border  bg-white rounded-2xl p-6 max-md:bg-slate-50'>
              <div className='p-4 bg-primary-anjo-100 rounded-2xl'>
                <Image
                  alt='support_icon'
                  src='/support_icon.svg'
                  width='32'
                  height='32'
                />
              </div>
              <h2 className='card__title'>Plano Completo</h2>
              <div className='card__text'>
                <p className='text-start'>
                  Plano completo para quem está começando e precisa de um site e
                  não tem um domínio e hospedagem.
                </p>
              </div>
              <p className='card__subtitle'>Benefícios</p>
              <div className='flex flex-col gap-6 mb-4 '>
                <div className='card__text flex gap-3 items-center'>
                  <div className='p-1 bg-primary-anjo-100 rounded-2xl'>
                    <Check size={18} color='white' />
                  </div>
                  <p className='text-start text-base font-bold'>
                    Site Personalizado Advanced
                  </p>
                </div>
                <div className='card__text flex gap-3 items-center'>
                  <div className='p-1 bg-primary-anjo-100 rounded-2xl'>
                    <Check size={18} color='white' />
                  </div>
                  <p className='text-start text-base font-bold'>
                    Suporte Humano
                  </p>
                </div>
                <div className='card__text flex gap-3 items-center'>
                  <div className='p-1 bg-primary-anjo-100 rounded-2xl'>
                    <Check size={18} color='white' />
                  </div>
                  <p className='text-start text-base font-bold'>
                    Painel Administrativo
                  </p>
                </div>
                <div className='card__text flex gap-3 items-center'>
                  <div className='p-1 bg-primary-anjo-100 rounded-2xl'>
                    <Check size={18} color='white' />
                  </div>
                  <p className='text-start text-base font-bold'>Hospedagem</p>
                </div>
                <div className='card__text flex gap-3 items-center'>
                  <div className='p-1 bg-primary-anjo-100 rounded-2xl'>
                    <Check size={18} color='white' />
                  </div>
                  <p className='text-start text-base font-bold'>Domínio</p>
                </div>
              </div>
              <div className='flex flex-col gap-6 mt-auto w-full justify-end'>
                <Link href='/buyme'>
                  <CustomButton
                    title='Contrate Agora'
                    containerStyles='p-4 rounded-lg flex items-center gap-2 bg-primary-anjo w-full'
                    textStyles='font-bold text-white'
                  />
                </Link>
                <CustomButton
                  title='Mais Detalhes'
                  containerStyles='p-4 rounded-lg flex items-center gap-2 bg-primary-anjo-100 w-full'
                  textStyles='font-bold text-primary-anjo'
                  handleClick={() => openModal('detailsComplete')}
                />
              </div>
            </div>
          </div>
          <div className='flex max-md:flex-col gap-8'>
            <div className='flex flex-col items-start z-10 gap-4 md:w-1/2 border  bg-white rounded-2xl p-6 max-md:bg-slate-50'>
              <div className='p-4 bg-primary-anjo-100 rounded-2xl'>
                <Cloud size={32} color='#213DB0' strokeWidth='1' />
              </div>
              <h2 className='card__title'>Hospedagem</h2>
              <div className='card__text'>
                <p className='text-start'>
                  Para que seu site sempre esteja disponível ele depende de sua
                  hospedagem em um servidor confiável.
                </p>
              </div>
            </div>
            <div className='flex flex-col items-start z-10 gap-4 md:w-1/2 border  bg-white rounded-2xl p-6 max-md:bg-slate-50'>
              <div className='p-4 bg-primary-anjo-100 rounded-2xl'>
                <Lock size={32} color='#213DB0' strokeWidth='1' />
              </div>
              <h2 className='card__title'>Domínio</h2>
              <div className='card__text'>
                <p className='text-start'>
                  A cada ano é necessário a renovação do seu domínio, para
                  garantir a continuidade do seu endereço na web.
                </p>
              </div>
            </div>
            <div className='flex flex-col items-start z-10 gap-4 md:w-1/2 border  bg-white rounded-2xl p-6 max-md:bg-slate-50'>
              <div className='p-4 bg-primary-anjo-100 rounded-2xl'>
                <Image
                  alt='support_icon'
                  src='/support_icon.svg'
                  width='32'
                  height='32'
                />
              </div>
              <h2 className='card__title'>Suporte</h2>
              <div className='card__text'>
                <p className='text-start '>
                  Conte com um atendimento humano para esclarecer todas as suas
                  dúvidas e superar qualquer obstáculo.
                </p>
              </div>
            </div>
          </div>
          <div className='flex max-md:flex-col relative border rounded-2xl items-center'>
            <Image
              src='/banner_hostinger.svg'
              alt='banner_hostinger'
              width='500'
              height='200'
              className='md:object-cover rounded-2xl'
              objectPosition='right center'
            />
            <div className='flex flex-col items-start z-10 gap-4 md:w-1/2 bg-white rounded-2xl p-6 max-md:bg-slate-50'>
              <p className='card__subtitle'>Hospedagem 5 Estrelas</p>
              <h2 className='card__title'>Trabalhamos com os melhores</h2>
              <div className='card__text'>
                <p className='text-start'>
                  Trabalhamos com a Hostinger, líder de mercado, para assegurar
                  que sua presença online esteja protegida e disponível 24/7.
                </p>
              </div>
              <Link href='/buyme'>
                <CustomButton
                  title='Contratar Agora'
                  textStyles='bg-primary-anjo rounded-2xl p-4 text-white font-bold'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Planos;
