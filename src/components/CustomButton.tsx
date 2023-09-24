'use client';

import Image from 'next/image';
import { CustomButtonProps } from '@/interfaces';

const CustomButton = ({
  onSubmit,
  isDisabled,
  btnType,
  containerStyles,
  textStyles,
  title,
  rightIcon,
  handleClick,
  isActive,
  isTab,
  icon,
  isSecondary,
  isPrimary,
}: CustomButtonProps) => {
  // Função para determinar as classes de estilo com base nas condições
  const getButtonClasses = () => {
    let classes = [
      'custom-btn',
      'hover:bg-primary-movi/90',
      'p-4',
      'rounded-2xl',
    ];

    if (isActive && isTab) {
      classes.push('bg-primary-anjo', 'text-white');
    } else if (!isActive && isTab) {
      classes.push('bg-primary-anjo-100', 'text-primary-movi');
    }

    if (isDisabled && isPrimary) {
      classes.push('bg-gray-300', 'text-gray-500');
    }

    if (isPrimary && !isDisabled) {
      classes.push('bg-primary-anjo', 'rounded-2xl', 'p-4');
    }

    if (isSecondary && isDisabled) {
      classes.push('border', 'border-gray-300');
    }

    if (isSecondary && !isDisabled) {
      classes.push('border', 'border-primary-anjo', 'text-primary-anjo');
    }

    return classes.join(' ');
  };

  return (
    <button
      disabled={isDisabled}
      type={btnType || 'button'}
      className={`${getButtonClasses()} ${containerStyles}`}
      onClick={handleClick}
      onSubmit={onSubmit}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image
            src={rightIcon}
            alt='arrow_left'
            fill
            className='object-contain'
          />
          {icon}
        </div>
      )}
    </button>
  );
};

export default CustomButton;
