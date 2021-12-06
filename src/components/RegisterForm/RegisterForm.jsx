import React from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

const RegisterForm = () => {
  return (
    <form>
      <TextField
        id='outlined-basic'
        label='Nome'
        variant='outlined'
        type='text'
        margin='normal'
        fullWidth
      />
      <TextField
        id='outlined-basic'
        label='Sobrenome'
        variant='outlined'
        type='text'
        margin='normal'
        fullWidth
      />
      <TextField
        id='outlined-basic'
        label='CPF'
        variant='outlined'
        type='text'
        margin='normal'
        fullWidth
      />

      <FormControlLabel
        label='Promoções'
        control={<Switch name='Promoções' defaultChecked color='primary' />}
      />
      <FormControlLabel
        label='Promoções'
        control={<Switch name='Novidades' color='primary' />}
      />

      <Button
        type='submit'
        variant='contained'
        color='primary'
      >
        Cadastrar
      </Button>
    </form>
  );
};

export default RegisterForm;
