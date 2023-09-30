import { CustomButton } from '@/components';
import GradientButton from '@/components/GradientButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const about = () => {
  return (
    <div className='flex flex-col padding-x'>
      <div className='flex flex-col items-start gap-24 md:py-32 p-6'>
        <div className='flex max-md:flex-col'>
          <div className='w-1/2 max-md:w-full lg:w-3/6 xl:w-3/6 3xl:w-2/6'>
            <Image
              src='/tecnology_banner.svg'
              alt='banner'
              width={2000}
              height={200}
            />
          </div>
          <div className='flex flex-col gap-6 md:w-1/2'>
            <h2 className='title1'>
              Somos uma <br />{' '}
              <span className='font-bold text-primary-anjo'>
                Software House
              </span>
            </h2>
            <p>
              Criamos e desenvolvemos soluções digitais para empresas que buscam
              se destacar no mercado.
            </p>
            
            <div className=''>
              <GradientButton />
            </div>
          </div>
        </div>

        <div className='border-y py-16'>
          <div className='flex flex-col gap-4 subtitle md:w-3/4 m-auto'>
            <p className='text-center max-md:text-start'>
              <span className='font-bold'>
                Entregamos soluções sob medida que não apenas cativam os olhos,
                mas também geram resultados.
              </span>{' '}
              Seja para startups em busca de sua primeira presença online ou
              empresas estabelecidas em busca de renovação, a AnjoTech está
              pronta para ser o guia em sua jornada digital.
            </p>
          </div>
        </div>

        <div className='flex flex-col justify-center gap-24 text-wrap'>
          <div className='flex flex-col gap-24'>
            <h2 className='title2 text-center' id='howWorks'>
              Como funciona o processo de desenvolvimento
            </h2>

            <div className='flex'>
              <div className='flex flex-col items-start z-10 gap-4 md:w-1/2 bg-white rounded-2xl p-6 max-md:bg-slate-50'>
                <div className='p-4 bg-primary-anjo-100 rounded-2xl'>
                  <Image
                    alt='idea_icon'
                    src='/idea_icon.svg'
                    width='32'
                    height='32'
                  />
                </div>
                <p className='card__subtitle'>Etapa 01</p>
                <h2 className='card__title'>Reunião de ideias</h2>

                <div className='card__text'>
                  <p className='text-start '>
                    Imagine que estamos criando uma nova receita de bolo. Aqui,
                    pensamos nos ingredientes que serão necessários, o tamanho
                    do bolo e como queremos que ele fique no final.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex justify-end'>
              <div className='flex flex-col items-start z-10 gap-4 md:w-1/2 bg-white rounded-2xl p-6 max-md:bg-slate-50 '>
                <div className='p-4 bg-primary-anjo-100 rounded-2xl'>
                  <Image
                    alt='design_icon'
                    src='/design_icon.svg'
                    width='32'
                    height='32'
                  />
                </div>
                <p className='card__subtitle'>Etapa 02</p>
                <h2 className='card__title'>Design</h2>
                <div className='card__text'>
                  <p className='text-start'>
                    É como desenhar o bolo antes de começar a cozinhá-lo.
                    Definimos como será a aparência do bolo, onde cada camada
                    estará e como os ingredientes se encaixarão.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex '>
              <div className='flex flex-col items-start z-10 gap-4 md:w-1/2 bg-white rounded-2xl p-6 max-md:bg-slate-50'>
                <div className='p-4 bg-primary-anjo-100 rounded-2xl'>
                  <Image
                    alt='devloper_icon'
                    src='/devloper_icon.svg'
                    width='32'
                    height='32'
                  />
                </div>
                <p className='card__subtitle'>Etapa 03</p>
                <h2 className='card__title'>Desenvolvimento</h2>
                <div className='card__text'>
                  <p className='text-start'>
                    Agora é a hora de realmente fazer o bolo. Pegamos os
                    ingredientes (código de programação) e seguimos o plano e o
                    design para construir o software camada por camada, como
                    empilhar os ingredientes de bolo um sobre o outro.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex justify-end'>
              <div className='flex flex-col items-start z-10 gap-4 md:w-1/2 bg-white rounded-2xl p-6 max-md:bg-slate-50'>
                <div className='p-4 bg-primary-anjo-100 rounded-2xl'>
                  <Image
                    alt='test_icon'
                    src='/test_icon.svg'
                    width='32'
                    height='32'
                  />
                </div>
                <p className='card__subtitle'>Etapa 04</p>
                <h2 className='card__title'>Testes</h2>
                <div className='card__text'>
                  <p className='text-start'>
                    Antes de servir o bolo, é importante dar uma provinha para
                    ter certeza de que está gostoso e bem feito. No
                    desenvolvimento de software, fazemos testes para verificar
                    se tudo funciona corretamente e não tem nenhum erro.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex'>
              <div className='flex flex-col items-start z-10 gap-4 md:w-1/2 bg-white rounded-2xl p-6 max-md:bg-slate-50'>
                <div className='p-4 bg-primary-anjo-100 rounded-2xl'>
                  <Image
                    alt='config_icon'
                    src='/config_icon.svg'
                    width='32'
                    height='32'
                  />
                </div>
                <p className='card__subtitle'>Etapa 05</p>
                <h2 className='card__title'>Ajustes</h2>
                <div className='card__text'>
                  <p className='text-start'>
                    Se o gosto do bolo não estiver perfeito, você pode adicionar
                    um pouco mais de açúcar ou ajustar o tempo de cozimento. Da
                    mesma forma, se encontramos algum problema durante os
                    testes, voltamos para o desenvolvimento para corrigir esses
                    problemas.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex justify-end'>
              <div className='flex flex-col items-start z-10 gap-4 md:w-1/2 bg-white rounded-2xl p-6 max-md:bg-slate-50'>
                <div className='p-4 bg-primary-anjo-100 rounded-2xl'>
                  <Image
                    alt='launch_icon'
                    src='/launch_icon.svg'
                    width='32'
                    height='32'
                  />
                </div>
                <p className='card__subtitle'>Etapa 06</p>
                <h2 className='card__title'>Lançamento</h2>
                <div className='card__text'>
                  <p className='text-start'>
                    Agora que o bolo está pronto e saboroso, podemos servi-lo!
                    No desenvolvimento de software, lançamos o software para que
                    as pessoas possam começar a usá-lo.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-start z-10 gap-4 md:w-1/2 bg-white rounded-2xl p-6 max-md:bg-slate-50'>
              <div className='p-4 bg-primary-anjo-100 rounded-2xl'>
                <Image
                  alt='support_icon'
                  src='/support_icon.svg'
                  width='32'
                  height='32'
                />
              </div>
              <p className='card__subtitle'>Etapa 07</p>
              <h2 className='card__title'>Manutenção e Suporte</h2>
              <div className='card__text'>
                <p className='text-start'>
                  Às vezes, precisamos fazer pequenos ajustes mesmo depois de
                  servir o bolo. Da mesma forma, mesmo depois de lançar o
                  software, continuamos fazendo pequenas melhorias e consertos
                  para garantir que ele funcione bem ao longo do tempo.
                </p>
              </div>
            </div>
            <div className='border-y py-16'>
              <div className='flex flex-col gap-4 subtitle md:w-3/4 m-auto'>
                <p className='text-center max-md:text-start'>
                  Lembre-se, assim como um bolo delicioso precisa de tempo e
                  atenção para ser feito corretamente,
                  <br />
                  <span className='font-bold'>
                    o desenvolvimento de software também exige planejamento,
                    cuidado e dedicação para criar algo útil e funcional!
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-1/2 m-auto justify-end items-center'>
            <Link href='/planos' className='w-full'>
              <GradientButton />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
