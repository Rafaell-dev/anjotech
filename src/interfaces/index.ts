import { MouseEventHandler, ChangeEvent } from 'react';

export interface CustomButtonProps {
  onSubmit?: () => void;
  isDisabled?: boolean;
  btnType?: 'button' | 'submit';
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: () => void;
  isActive?: boolean;
  isTab?: boolean;
  icon?: JSX.Element;
  openModal?: () => void;
  onClick?: () => void;
  isSecondary?: boolean;
  isPrimary?: boolean;
}

export interface InputProps {
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  size?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  isOptional?: boolean;
  isRequired?: boolean;
  name?: string;
  id?: string;
  onErrorMessage?: string;
  mask?: string;
  onSubmit?: () => void;
  formik?: any;
}

export interface IClient {
  cli_id: number;
  cli_cpf: string;
  cli_cnpj: string;
  cli_name: string;
  cli_email: string;
  cli_password: string;
  cli_phone: string;
  cli_address: string;
  cli_city: string;
  cli_state: string;
  cli_zipcode: string;
  cli_country: string;
  cli_number: string;
  cli_createdAt: Date;
  cli_updatedAt: Date;
}
