import Image from 'next/image';

const NotYet = () => {
  return (
    <div className='flex flex-col justify-center items-center py-36 padding-x gap-8'>
      <h2 className='hero__title'>OOPS!</h2>
      <div className='w-1/2 max-md:w-full lg:w-3/6 xl:w-3/6 3xl:w-2/6'>
        <Image src='/building.svg' alt='digging' width='2000' height='200' />
      </div>
      <div className=''>
        <h2 className='hero__title2 text-center'>
          Ainda estamos mexendo os pauzinhos por aqui!
        </h2>
        <p className='title_subitle text-center font-bold'>
          Aguenta aí, estamos criando algo incrível para você! 🎉
        </p>
      </div>
    </div>
  );
};

export default NotYet;
