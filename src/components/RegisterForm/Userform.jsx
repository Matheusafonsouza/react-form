import React, { useState, useCallback, useContext } from 'react';
import { TextField, Button } from '@material-ui/core';
import SignInValidations from '../../context/validations';
import useErrors from '../../hooks/useErrors';

const UserForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validations = useContext(SignInValidations);
  const [errors, validateErrors] = useErrors(validations);

  const canSubmit = useCallback(() => {
    for (let field in errors) {
      if (!errors[field].valid) {
        return false;
      }
      return true;
    }
  }, [errors]);

  return (
    <form onSubmit={e => {
      e.preventDefault();
      if (canSubmit()) {
        onSubmit({
          email,
          password
        });
      }
    }}>
      <TextField
        id='outlined-basic'
        label='Email'
        variant='outlined'
        type='email'
        margin='normal'
        fullWidth
        required
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
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button
        type='submit'
        variant='contained'
        color='primary'
      >
        Próximo
      </Button>
    </form>
  );
};

export default UserForm;
