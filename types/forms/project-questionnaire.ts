import { ReactNode } from 'react';

export type WebsiteType =
  | 'template'
  | 'custom'
  | 'cms'
  | 'ecommerce'
  | 'unsure'
  | '';

export interface SectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export interface InputFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel';
  required?: boolean;
}

export interface TextareaFieldProps {
  label: string;
  name: string;
  rows?: number;
}

export interface SelectFieldProps {
  label: string;
  name: string;
  options: string[];
}

export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioGroupProps {
  label: string;
  name: string;
  options: string[] | RadioOption[];
  onChange?: (value: string) => void;
}

export interface CheckboxGroupProps {
  label: string;
  name: string;
  options: string[];
}
