'use client';

import React, { useState, useEffect } from 'react';
import MaskedInput from '@/components/InputMask';
import { CustomButton } from '@/components';
import { IClient } from '@/interfaces';

import { Formik, FormikHelpers, FormikProps } from 'formik';

import * as Yup from 'yup';
import { fetchAllClients } from '@/services';

const Page = () => {
  const [isSecondTabActive, setSecondTabActive] = useState(false);
  const [clientData, setClientData] = useState<IClient[]>([]);

  const handleTabClick = () => {
    setSecondTabActive(!isSecondTabActive);
  };

  interface FormValues {
    cli_cpfcnpj: string;
  }

  const handleSearchClient = async (values: FormValues) => {
    try {
      const requestData = values.cli_cpfcnpj.replace(/[^\d]+/g, '');
      const response = await fetchAllClients(requestData, '');
      if (response) {
        setClientData(response);
        console.log(requestData);
      } else {
        console.log('Cliente não encontrado', response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearClientData = () => {
    setClientData([]);
  };

  const initialValues: FormValues = {
    cli_cpfcnpj: '',
  };

  const validationSchema = Yup.object().shape({
    cli_cpfcnpj: Yup.string().required('Campo obrigatório').min(11),
  });

  return (
    <div className='flex flex-col h-screen items-center px-4'>
      <div className='flex flex-col mx-auto justify-center md:w-1/2 w-full gap-24 md:py-32 p-6'>
        <div
          className={`flex flex-col gap-6 ${isSecondTabActive ? 'hidden' : ''}`}
        >
          {/* Conteúdo da primeira aba aqui */}
          <div className='flex flex-col gap-2'>
            <h2 className='text-3xl text-primary-anjo font-bold'>
              Vamos começar!
            </h2>
            <p>Por favor, digite seu CPF ou CNPJ para continuarmos</p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema} // Adicione o esquema de validação aqui
            onSubmit={(
              values: FormValues,
              formikHelpers: FormikHelpers<FormValues>
            ) => {
              handleSearchClient(values);
              handleTabClick();
              formikHelpers.setSubmitting(false);
            }}
          >
            {({
              values,
              handleChange,
              handleSubmit,
              errors,
              touched,
            }: FormikProps<FormValues>) => (
              <form className='flex flex-col gap-6'>
                {/* Atualiza o estado inputValue com o valor do input */}
                <MaskedInput
                  label='CPF/CNPJ'
                  value={values.cli_cpfcnpj}
                  name='cli_cpfcnpj'
                  onErrorMessage={errors.cli_cpfcnpj}
                  onChange={handleChange}
                />

                <p className='text-xs'>Por que pedimos isso?</p>
                <div className='flex justify-evenly'>
                  <CustomButton
                    title='Voltar'
                    textStyles='text-primary-anjo'
                    isDisabled={!isSecondTabActive}
                    isSecondary
                    handleClick={handleTabClick || clearClientData}
                  />

                  <CustomButton
                    btnType='submit'
                    title='Continuar'
                    textStyles='text-white'
                    isPrimary
                    handleClick={handleSubmit}
                  />
                </div>
              </form>
            )}
          </Formik>
        </div>
        <div
          className={`flex flex-col gap-6 ${isSecondTabActive ? '' : 'hidden'}`}
        >
          {/* Conteúdo da segunda aba aqui */}
          {clientData && clientData.length > 0 ? (
            <div>
              <p>Nome do Cliente: {clientData[0].cli_name}</p>
              <p>Email do Cliente: </p>
              {/* Adicione mais campos de dados do cliente conforme necessário */}
            </div>
          ) : (
            <p>Nenhum cliente encontrado</p>
          )}
          <p>Este é o conteúdo da segunda aba.</p>
          <form action=''>
            <MaskedInput label='CPF/CNPJ' value='' />
          </form>
          <div className='flex justify-evenly'>
            <CustomButton
              title='Voltar'
              textStyles='text-primary-anjo'
              isDisabled={!isSecondTabActive}
              isSecondary
              handleClick={handleTabClick}
            />
            <CustomButton
              title='Continuar'
              isDisabled={isSecondTabActive}
              isPrimary
              handleClick={handleTabClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
