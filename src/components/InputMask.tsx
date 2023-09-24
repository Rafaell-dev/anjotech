'use client';

import { InputProps } from '@/interfaces';
import React, { useState } from 'react';

const MaskedInput: React.FC<InputProps> = ({
  value,
  size = 'w-full',
  type = 'text',
  placeholder = '',
  label = '',
  isOptional = false,
  isRequired = false,
  name = '',
  onErrorMessage = '',
  onChange,
}) => {
  let inputClassName = `${size} ${onErrorMessage && 'border-red-500'}`;
  let labelEspecial = 'text-xs font-bold text-gray-400 ml-2';

  const [inputValue, setInputValue] = useState('');

  const applyMask = (value: string) => {
    // Remove todos os caracteres não numéricos e conta os números
    const numericChars = value.replace(/\D/g, '');
    const numericLength = numericChars.length;

    if (numericLength >= 12) {
      // Se tiver 12 dígitos ou mais, aplica a máscara de CNPJ
      return numericChars.replace(
        /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/,
        '$1.$2.$3/$4-$5'
      );
    } else {
      // Caso contrário, aplica a máscara de CPF
      return numericChars.replace(
        /^(\d{3})(\d{3})(\d{3})(\d{2}).*/,
        '$1.$2.$3-$4'
      );
    }
  };

  return (
    <div className='relative flex items-center'>
      <input
        type={type}
        className={`border-b focus:outline-none rounded-xl focus:border-primary-anjo focus:border-b-2 transition-colors peer p-6 pb-2 px-3 ${inputClassName}`}
        value={applyMask(value)}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        id={name}
      />
      {label && (
        <label
          htmlFor={name}
          className={`
            absolute px-3 text-gray-600 cursor-text 
            peer-focus:text-xs peer-focus:top-1 peer-focus:text-primary-anjo peer-focus:font-bold
            transition-all ${
              value.length > 0
                ? 'text-primary-anjo font-bold top-1 text-xs'
                : ''
            }`}
        >
          {label}
          {isOptional && <span className={labelEspecial}>*Opcional</span>}
          {isRequired && <span className={labelEspecial}>*Obrigatório</span>}
        </label>
      )}
      {onErrorMessage && (
        <span className='text-xs font-bold text-red-500 ml-2 '>
          * {onErrorMessage}
        </span>
      )}
    </div>
  );
};

export default MaskedInput;
