import { CustomButton, CustomInput } from '@/components';
import React from 'react';

const Contact = () => {
  const handleSubmit = () => {
    console.log('Dados do Categoria:');
    console.log('Categoria cadastrado com sucesso!');
  };

  return (
    <div className='bg-gradient-to-br from-primary-anjo to-purple-500'>
      <div className='h-screen flex flex-col items-start justify-center z-10 gap-4 md:w-1/2 rounded-tr-3xl bg-white px-12'>
        <div className='flex flex-col w-full gap-6'>
          <div className='flex flex-col gap-2'>
            <h1 className='title1 font-bold text-primary-anjo'>Fale conosco</h1>
            <p className='font-semibold'>
              Preencha o formulário abaixo e entraremos em contato com você.
            </p>
          </div>
          <form action=''>
            <div className='flex flex-col gap-6'>
              <div>
                <CustomInput label='Nome Completo' value='' />
              </div>
              <div>
                <CustomInput label='Celular(Whatsapp)' value='' />
              </div>
              <div>
                <CustomInput label='Email' value='' />
              </div>
              <div>
                <CustomInput label='CNPJ' value='' />
              </div>
              <CustomButton
                title='Entrar em contato'
                containerStyles='bg-primary-anjo hover:bg-primary-anjo/90 text-white rounded-xl  font-semibold p-4'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
