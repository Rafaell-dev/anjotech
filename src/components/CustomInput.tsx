import { InputProps } from '@/interfaces';

const CustomInput: React.FC<InputProps> = ({
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
  let inputClassName = `${size} ${onErrorMessage && 'border-red-500'}`;

  let labelEspecial = 'text-xs font-bold text-gray-400 ml-2';

  return (
    <div className='relative flex items-center'>
      <input
        type={type}
        className={`border-b focus:outline-none rounded-xl focus:border-primary-anjo focus:border-b-2 transition-colors peer p-6 pb-2 px-3 ${inputClassName}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        id={name}
      />
      {label && (
        <label className='absolute px-3 text-gray-600 cursor-text peer-focus:text-xs peer-focus:top-1 peer-focus:text-primary-anjo peer-focus:font-bold transition-all'>
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

export default CustomInput;
