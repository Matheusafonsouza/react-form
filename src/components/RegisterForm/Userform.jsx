import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const UserForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: { valid: true, text: '' },
    password: { valid: true, text: '' }
  });

  return (
    <form onSubmit={e => {
      e.preventDefault();
      onSubmit({
        email,
        password
      });
    }}>
      <TextField
        id='outlined-basic'
        label='Email'
        variant='outlined'
        type='email'
        margin='normal'
        fullWidth
        required
        error={!errors.email.valid}
        helperText={errors.email.text}
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        id='outlined-basic'
        label='Senha'
        variant='outlined'
        type='text'
        margin='normal'
        fullWidth
        required
        error={!errors.password.valid}
        helperText={errors.password.text}
        value={password}
        onChange={e => setPassword(e.target.value)}
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

export default UserForm;
