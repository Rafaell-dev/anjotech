import React from 'react';
import { Check, HelpCircle, X } from 'lucide-react';
import { CustomButton } from '@/components';
import { Tooltip } from '@mui/joy';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DetailsBasic: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className='position-modal'>
          <div className='overlay-modal'></div>
          <div className='bg-modal overflow-auto max-h-screen '>
            <div className='flex justify-between'>
              <h2 className='text-2xl font-bold'>Plano Básico</h2>
              <X className='cursor-pointer' color='black' onClick={onClose} />
            </div>
            <div className='flex flex-col gap-8 '>
              <div className='flex max-md:flex-col gap-8'>
                <div className='flex flex-col justify-between md:w-1/2'>
                  <div className=''>
                    <p className='py-2 text-primary-anjo font-bold text-base'>
                      Recomendado para
                    </p>
                    <div className='flex border p-2 rounded-lg'>
                      <p className='text-sm'>
                        Quem está há procura de um site simples, mas que já tem
                        hospedagem e dominio próprio.
                      </p>
                    </div>
                  </div>
                  <div className=''>
                    <p className='py-2 text-primary-anjo font-bold text-base'>
                      De quem é o site
                    </p>
                    <div className='flex border p-2 rounded-lg'>
                      <p className='text-sm'>
                        O site é seu! Entregamos instruções para gerenciar e
                        personalizar o seu site pelo painel. Vamos cuidar da
                        renovação do domínio (quando necessário) e da hospedagem
                        para manter o seu site online.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='md:w-1/2'>
                  <p className='py-2 text-primary-anjo font-bold text-base'>
                    O que está incluso
                  </p>
                  <div className='flex flex-col justify-center border p-2 rounded-lg'>
                    <div className='flex items-center border-b'>
                      <Check className='cursor-pointer' color='black' />
                      <p className='text-sm p-2 '>Site Padrão Basic</p>
                      <div className=''>
                        <Tooltip
                          title='Páginas Ilimitadas, acesso a recursos avançados, e 
                        formulários personalizados.'
                          arrow
                          size='sm'
                          placement='right'
                        >
                          <div className='cursor-pointer'>
                            <HelpCircle size={18} />
                          </div>
                        </Tooltip>
                      </div>
                    </div>
                    <div className='flex items-center border-b'>
                      <Check className='cursor-pointer' color='black' />
                      <p className='text-sm p-2 '>Suporte Humanizado</p>
                      <Tooltip
                        title='Suporte via WhatsApp, Chat, E-mail e Telefone.'
                        arrow
                        size='sm'
                        placement='right'
                      >
                        <div className='cursor-pointer'>
                          <HelpCircle size={18} />
                        </div>
                      </Tooltip>
                    </div>
                    <div className='flex items-center border-b'>
                      <Check className='cursor-pointer' color='black' />
                      <p className='text-sm p-2'>Painel Administrativo</p>
                      <Tooltip
                        title='Gerencie novas postagens e atualizações do seu site.'
                        arrow
                        size='sm'
                        placement='right'
                      >
                        <div className='cursor-pointer'>
                          <HelpCircle size={18} />
                        </div>
                      </Tooltip>
                    </div>
                    <div className='flex items-center border-b'>
                      <X
                        className='cursor-pointer'
                        color='black'
                        onClick={onClose}
                      />
                      <p className='text-sm p-2 line-through'>Hospedagem</p>
                      <Tooltip
                        title='Disponível apenas no Plano Completo.'
                        arrow
                        size='sm'
                        placement='right'
                      >
                        <div className='cursor-pointer'>
                          <HelpCircle size={18} />
                        </div>
                      </Tooltip>
                    </div>
                    <div className='flex items-center'>
                      <X
                        className='cursor-pointer'
                        color='black'
                        onClick={onClose}
                      />
                      <p className='text-sm p-2 line-through'>Domínio .br</p>
                      <Tooltip
                        title='Disponível apenas no Plano Completo.'
                        arrow
                        size='sm'
                        placement='right'
                      >
                        <div className='cursor-pointer'>
                          <HelpCircle size={18} />
                        </div>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex max-md:flex-col gap-8'>
                <div className='w-1/2 max-md:w-full flex flex-col'>
                  <p className='py-2 text-primary-anjo font-bold text-base'>
                    Implantação e Desenvolvimento
                  </p>
                  <div className='flex flex-col gap-1 border rounded-lg p-2 h-full'>
                    <p className='text-sm font-bold'>
                      <span className='text-2xl'>R$ 249,90</span> à vista
                    </p>
                    <p className='text-sm font-bold'>
                      ou R$ 299,88 em 12x de R$24,99 sem juros
                    </p>
                  </div>
                </div>
                <div className='w-1/2 max-md:w-full flex flex-col'>
                  <p className='py-2 text-primary-anjo font-bold text-base'>
                    Mensalidade
                  </p>
                  <div className='flex flex-col gap-1 border rounded-lg p-2 h-full'>
                    <p className='text-sm font-bold'>
                      <span className='text-2xl'>R$ 69,90</span>/mês
                    </p>
                    <p className='text-sm font-bold'>
                      *2 Primeiros meses grátis
                    </p>
                  </div>
                </div>
              </div>
              <CustomButton
                title='Contrate Agora'
                containerStyles='p-4 rounded-lg flex items-center gap-2 bg-primary-anjo w-full'
                textStyles='font-bold text-white'
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsBasic;
