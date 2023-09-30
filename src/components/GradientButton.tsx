import React from 'react';

const GradientButton = () => {
  return (
    <button
      type='button'
      
      className='w-full relative inline-flex items-center justify-center p-4 px-10 py-5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group'
    >
      <span className='absolute inset-0 w-full h-full bg-gradient-to-br from-primary-anjo to-purple-500'></span>
      <span className='absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-50 translate-x-10 bg-primary-anjo rounded-full opacity-60 group-hover:rotate-90 ease'></span>
      <span className='relative text-white font-bold'>Contrate Agora</span>
    </button>
  );
};

export default GradientButton;
