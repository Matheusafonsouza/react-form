import React, { useState, useCallback, useContext } from 'react';
import { TextField, Button } from '@material-ui/core';
import useErrors from '../../hooks/useErrors';
import SignInValidations from '../../context/validations';

const DeliveryForm = ({ onSubmit }) => {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');

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
          cep,
          address,
          number,
          state,
          city
        });
      }
    }}>
      <TextField
        id='outlined-basic'
        label='Endereço'
        variant='outlined'
        name='address'
        type='text'
        margin='normal'
        fullWidth
        required
        value={address}
        onChange={e => setAddress(e.target.value)}
      />
      <TextField
        id='outlined-basic'
        label='CEP'
        variant='outlined'
        name='cep'
        type='text'
        margin='normal'
        required
        error={!errors.cep.valid}
        onBlur={validateErrors}
        helperText={errors.cep.text}
        value={cep}
        onChange={e => setCep(e.target.value)}
      />
      <TextField
        id='outlined-basic'
        label='Número'
        name='number'
        variant='outlined'
        type='text'
        margin='normal'
        required
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <TextField
        id='outlined-basic'
        label='Estado'
        name='state'
        variant='outlined'
        type='text'
        margin='normal'
        required
        value={state}
        onChange={e => setState(e.target.value)}
      />
      <TextField
        id='outlined-basic'
        label='Cidade'
        name='city'
        variant='outlined'
        type='text'
        margin='normal'
        required
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <Button
        type='submit'
        variant='contained'
        color='primary'
        fullWidth
      >
        Finalizar cadastro
      </Button>
    </form>
  );
};

export default DeliveryForm;
