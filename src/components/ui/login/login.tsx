'use client';
import { Box } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { Button, Input } from '../../common';
import GoogleOAuth from '@/components/oauth-buttons/google-oauth';

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
            <div style={{ cursor: 'wait' }}>
              <Button disabled sx={{ width: '100%' }}>
                Sign Up with an Email
                <span
                  style={{
                    paddingLeft: '16px',
                    fontSize: '.65rem',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  in progress. please login with G
                </span>
              </Button>
            </div>
            <GoogleOAuth />
          </Box>
        </form>
      </FormProvider>
    </Box>
  );
}
