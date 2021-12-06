import React from 'react';
import { TextField, Button } from '@material-ui/core';

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

      <label>Promoções</label>
      <input type='checkbox' />

      <label>Novidades</label>
      <input type='checkbox' />

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
