'use client';
import Link from 'next/link';
import CustomButton from './CustomButton';
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('discover');

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200);
  const [index, setIndex] = useState(1);
  const toRotate = ['inovação', 'design'];
  const period = 3000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? text.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <div>
          <p className='hero__title'>
            {`Somos especialistas em`}{' '}
            <span className='txt-rotate'>
              <span className='wrap'>{text}</span>
            </span>
          </p>
        </div>
        <div className='flex flex-col gap-8'>
          <p className='hero__subtitle'>Transforme seu negócio conosco.</p>

          <Link href='/planos'>
            <CustomButton
              title='Escolher um Plano'
              containerStyles='p-4 border-2 border-primary-anjo rounded-lg flex items-center gap-2 '
              textStyles='font-bold text-primary-anjo'
              handleClick={handleScroll}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
