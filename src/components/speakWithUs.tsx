'use client';
import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

const SpeakWithUs = () => {
  const [showText, setShowText] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);
  const handleLinkClick = () => {
    window.open('https://wa.me/5587981346936', '_blank');
  };

  const handleMouseEnter = () => {
    setShowText(true);
    setIsPulsing(false);
  };

  const handleMouseLeave = () => {
    setShowText(false);
    setIsPulsing(true);
  };

  return (
    <button
      className={`
      fixed z-20 right-6 bottom-6
      flex items-center gap-2 bg-primary-anjo 
      text-white rounded-full p-4 shadow-lg 
      hover:bg-primaryDelivery hover:text-secondaryDelivery transition duration-500 ${
        isPulsing ? 'pulse-animation' : ''
      }`}
      onClick={handleLinkClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <MessageSquare size={24} />
      {showText && <p className='text-sm'>Falar Conosco</p>}
    </button>
  );
};

export default SpeakWithUs;
