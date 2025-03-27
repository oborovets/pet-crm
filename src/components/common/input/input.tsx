'use client';
import { TextField } from '@mui/material';
import { useController, useFormContext } from 'react-hook-form';

type Props = {
  name: string;
  placeholder?: string;
  type?: 'input' | 'password';
  required?: boolean;
};

export default function Input({
  name,
  placeholder,
  required = true,
  type = 'input',
}: Props) {
  const { control } = useFormContext();

  const { field } = useController({ control, name });

  return (
    <TextField
      type={type}
      required={required}
      variant="outlined"
      {...field}
      placeholder={placeholder}
    />
  );
}
