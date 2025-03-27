'use client';
import { Box } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { Button, Input } from '../../common';
import OAuthButtons from '@/components/auth/oauth-buttons';

type FormValues = {
  email: string;
  password: string;
};

export default function Login() {
  const methods = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        width: '35%',
        margin: '0 auto',
      }}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Input name="email" placeholder="Email" />
            <Input name="password" placeholder="Password" type="password" />
            <Button type="submit">Submit</Button>
            <OAuthButtons />
          </Box>
        </form>
      </FormProvider>
    </Box>
  );
}
