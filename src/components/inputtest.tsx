import React, { ChangeEvent } from 'react';

interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  size?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  isOptional?: boolean;
  isRequired?: boolean;
  name?: string;
  id?: string;
  onErrorMessage?: string;
}

const InputTeste: React.FC<InputProps> = ({
  value,
  onChange,
  size = 'w-full',
  type = 'text',
  placeholder = '',
  label = '',
  isOptional = false,
  isRequired = false,
  name = '',
  onErrorMessage = '',
}) => {
  let inputClassName = `border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primaryDelivery ${size} ${
    onErrorMessage && 'border-red-500'
  }`;

  let labelEspecial = 'text-xs font-bold text-gray-400 ml-2';

  return (
    <div className='flex flex-col flex-1'>
      <div className='flex'>
        {label && (
          <label>
            {label}
            {isOptional && <span className={labelEspecial}>*Opcional</span>}
            {isRequired && <span className={labelEspecial}>*Obrigatório</span>}
          </label>
        )}
      </div>
      <input
        type={type}
        className={inputClassName}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        id={name}
      />
      {onErrorMessage && (
        <span className='text-xs font-bold text-red-500 ml-2 '>
          * {onErrorMessage}
        </span>
      )}
    </div>
  );
};

export default InputTeste;
